import { i as isValidTimeout, f as functionalUpdate, r as replaceEqualDeep, n as noop, t as timeUntilStale, e as ensureQueryKeyArray, g as getAbortController, R as Retryer, a as isCancelledError, b as getLogger, c as notifyManager, S as Subscribable, h as hashQueryKeyByOptions, p as parseFilterArgs, m as matchQuery, d as matchMutation, j as isCancelable, k as focusManager, o as onlineManager, l as parseQueryArgs, q as hashQueryKey, s as partialMatchKey } from "./logger.js";
import "./index.js";
class Query {
  constructor(config) {
    this.abortSignalConsumed = false;
    this.hadObservers = false;
    this.defaultOptions = config.defaultOptions;
    this.setOptions(config.options);
    this.observers = [];
    this.cache = config.cache;
    this.queryKey = config.queryKey;
    this.queryHash = config.queryHash;
    this.initialState = config.state || this.getDefaultState(this.options);
    this.state = this.initialState;
    this.meta = config.meta;
    this.scheduleGc();
  }
  setOptions(options) {
    var _a;
    this.options = Object.assign(Object.assign({}, this.defaultOptions), options);
    this.meta = options === null || options === void 0 ? void 0 : options.meta;
    this.cacheTime = Math.max(this.cacheTime || 0, (_a = this.options.cacheTime) !== null && _a !== void 0 ? _a : 5 * 60 * 1e3);
  }
  setDefaultOptions(options) {
    this.defaultOptions = options;
  }
  scheduleGc() {
    this.clearGcTimeout();
    if (isValidTimeout(this.cacheTime)) {
      this.gcTimeout = setTimeout(() => {
        this.optionalRemove();
      }, this.cacheTime);
    }
  }
  clearGcTimeout() {
    clearTimeout(this.gcTimeout);
    this.gcTimeout = void 0;
  }
  optionalRemove() {
    if (!this.observers.length) {
      if (this.state.isFetching) {
        if (this.hadObservers) {
          this.scheduleGc();
        }
      } else {
        this.cache.remove(this);
      }
    }
  }
  setData(updater, options) {
    var _a, _b;
    const prevData = this.state.data;
    let data = functionalUpdate(updater, prevData);
    if ((_b = (_a = this.options).isDataEqual) === null || _b === void 0 ? void 0 : _b.call(_a, prevData, data)) {
      data = prevData;
    } else if (this.options.structuralSharing !== false) {
      data = replaceEqualDeep(prevData, data);
    }
    this.dispatch({
      data,
      type: "success",
      dataUpdatedAt: options === null || options === void 0 ? void 0 : options.updatedAt
    });
    return data;
  }
  setState(state, setStateOptions) {
    this.dispatch({ type: "setState", state, setStateOptions });
  }
  cancel(options) {
    var _a;
    const promise = this.promise;
    (_a = this.retryer) === null || _a === void 0 ? void 0 : _a.cancel(options);
    return promise ? promise.then(noop).catch(noop) : Promise.resolve();
  }
  destroy() {
    this.clearGcTimeout();
    this.cancel({ silent: true });
  }
  reset() {
    this.destroy();
    this.setState(this.initialState);
  }
  isActive() {
    return this.observers.some((observer) => observer.options.enabled !== false);
  }
  isFetching() {
    return this.state.isFetching;
  }
  isStale() {
    return this.state.isInvalidated || !this.state.dataUpdatedAt || this.observers.some((observer) => observer.getCurrentResult().isStale);
  }
  isStaleByTime(staleTime = 0) {
    return this.state.isInvalidated || !this.state.dataUpdatedAt || !timeUntilStale(this.state.dataUpdatedAt, staleTime);
  }
  onFocus() {
    var _a;
    const observer = this.observers.find((x) => x.shouldFetchOnWindowFocus());
    if (observer) {
      observer.refetch();
    }
    (_a = this.retryer) === null || _a === void 0 ? void 0 : _a.continue();
  }
  onOnline() {
    var _a;
    const observer = this.observers.find((x) => x.shouldFetchOnReconnect());
    if (observer) {
      observer.refetch();
    }
    (_a = this.retryer) === null || _a === void 0 ? void 0 : _a.continue();
  }
  addObserver(observer) {
    if (this.observers.indexOf(observer) === -1) {
      this.observers.push(observer);
      this.hadObservers = true;
      this.clearGcTimeout();
      this.cache.notify({ type: "observerAdded", query: this, observer });
    }
  }
  removeObserver(observer) {
    if (this.observers.indexOf(observer) !== -1) {
      this.observers = this.observers.filter((x) => x !== observer);
      if (!this.observers.length) {
        if (this.retryer) {
          if (this.retryer.isTransportCancelable || this.abortSignalConsumed) {
            this.retryer.cancel({ revert: true });
          } else {
            this.retryer.cancelRetry();
          }
        }
        if (this.cacheTime) {
          this.scheduleGc();
        } else {
          this.cache.remove(this);
        }
      }
      this.cache.notify({ type: "observerRemoved", query: this, observer });
    }
  }
  getObserversCount() {
    return this.observers.length;
  }
  invalidate() {
    if (!this.state.isInvalidated) {
      this.dispatch({ type: "invalidate" });
    }
  }
  fetch(options, fetchOptions) {
    var _a, _b, _c, _d, _e, _f;
    if (this.state.isFetching) {
      if (this.state.dataUpdatedAt && (fetchOptions === null || fetchOptions === void 0 ? void 0 : fetchOptions.cancelRefetch)) {
        this.cancel({ silent: true });
      } else if (this.promise) {
        (_a = this.retryer) === null || _a === void 0 ? void 0 : _a.continueRetry();
        return this.promise;
      }
    }
    if (options) {
      this.setOptions(options);
    }
    if (!this.options.queryFn) {
      const observer = this.observers.find((x) => x.options.queryFn);
      if (observer) {
        this.setOptions(observer.options);
      }
    }
    const queryKey = ensureQueryKeyArray(this.queryKey);
    const abortController = getAbortController();
    const queryFnContext = {
      queryKey,
      pageParam: void 0,
      meta: this.meta
    };
    Object.defineProperty(queryFnContext, "signal", {
      enumerable: true,
      get: () => {
        if (abortController) {
          this.abortSignalConsumed = true;
          return abortController.signal;
        }
        return void 0;
      }
    });
    const fetchFn = () => {
      if (!this.options.queryFn) {
        return Promise.reject("Missing queryFn");
      }
      this.abortSignalConsumed = false;
      return this.options.queryFn(queryFnContext);
    };
    const context = {
      fetchOptions,
      options: this.options,
      queryKey,
      state: this.state,
      fetchFn,
      meta: this.meta
    };
    if ((_b = this.options.behavior) === null || _b === void 0 ? void 0 : _b.onFetch) {
      (_c = this.options.behavior) === null || _c === void 0 ? void 0 : _c.onFetch(context);
    }
    this.revertState = this.state;
    if (!this.state.isFetching || this.state.fetchMeta !== ((_d = context.fetchOptions) === null || _d === void 0 ? void 0 : _d.meta)) {
      this.dispatch({ type: "fetch", meta: (_e = context.fetchOptions) === null || _e === void 0 ? void 0 : _e.meta });
    }
    this.retryer = new Retryer({
      fn: context.fetchFn,
      abort: (_f = abortController === null || abortController === void 0 ? void 0 : abortController.abort) === null || _f === void 0 ? void 0 : _f.bind(abortController),
      onSuccess: (data) => {
        var _a2, _b2;
        this.setData(data);
        (_b2 = (_a2 = this.cache.config).onSuccess) === null || _b2 === void 0 ? void 0 : _b2.call(_a2, data, this);
        if (this.cacheTime === 0) {
          this.optionalRemove();
        }
      },
      onError: (error) => {
        var _a2, _b2;
        if (!(isCancelledError(error) && error.silent)) {
          this.dispatch({
            type: "error",
            error
          });
        }
        if (!isCancelledError(error)) {
          (_b2 = (_a2 = this.cache.config).onError) === null || _b2 === void 0 ? void 0 : _b2.call(_a2, error, this);
          getLogger().error(error);
        }
        if (this.cacheTime === 0) {
          this.optionalRemove();
        }
      },
      onFail: () => {
        this.dispatch({ type: "failed" });
      },
      onPause: () => {
        this.dispatch({ type: "pause" });
      },
      onContinue: () => {
        this.dispatch({ type: "continue" });
      },
      retry: context.options.retry,
      retryDelay: context.options.retryDelay
    });
    this.promise = this.retryer.promise;
    return this.promise;
  }
  dispatch(action) {
    this.state = this.reducer(this.state, action);
    notifyManager.batch(() => {
      this.observers.forEach((observer) => {
        observer.onQueryUpdate(action);
      });
      this.cache.notify({ query: this, type: "queryUpdated", action });
    });
  }
  getDefaultState(options) {
    const data = typeof options.initialData === "function" ? options.initialData() : options.initialData;
    const hasInitialData = typeof options.initialData !== "undefined";
    const initialDataUpdatedAt = hasInitialData ? typeof options.initialDataUpdatedAt === "function" ? options.initialDataUpdatedAt() : options.initialDataUpdatedAt : 0;
    const hasData = typeof data !== "undefined";
    return {
      data,
      dataUpdateCount: 0,
      dataUpdatedAt: hasData ? initialDataUpdatedAt !== null && initialDataUpdatedAt !== void 0 ? initialDataUpdatedAt : Date.now() : 0,
      error: null,
      errorUpdateCount: 0,
      errorUpdatedAt: 0,
      fetchFailureCount: 0,
      fetchMeta: null,
      isFetching: false,
      isInvalidated: false,
      isPaused: false,
      status: hasData ? "success" : "idle"
    };
  }
  reducer(state, action) {
    var _a, _b;
    switch (action.type) {
      case "failed":
        return Object.assign(Object.assign({}, state), { fetchFailureCount: state.fetchFailureCount + 1 });
      case "pause":
        return Object.assign(Object.assign({}, state), { isPaused: true });
      case "continue":
        return Object.assign(Object.assign({}, state), { isPaused: false });
      case "fetch":
        return Object.assign(Object.assign(Object.assign({}, state), { fetchFailureCount: 0, fetchMeta: (_a = action.meta) !== null && _a !== void 0 ? _a : null, isFetching: true, isPaused: false }), !state.dataUpdatedAt && {
          error: null,
          status: "loading"
        });
      case "success":
        return Object.assign(Object.assign({}, state), { data: action.data, dataUpdateCount: state.dataUpdateCount + 1, dataUpdatedAt: (_b = action.dataUpdatedAt) !== null && _b !== void 0 ? _b : Date.now(), error: null, fetchFailureCount: 0, isFetching: false, isInvalidated: false, isPaused: false, status: "success" });
      case "error":
        const error = action.error;
        if (isCancelledError(error) && error.revert && this.revertState) {
          return Object.assign({}, this.revertState);
        }
        return Object.assign(Object.assign({}, state), { error, errorUpdateCount: state.errorUpdateCount + 1, errorUpdatedAt: Date.now(), fetchFailureCount: state.fetchFailureCount + 1, isFetching: false, isPaused: false, status: "error" });
      case "invalidate":
        return Object.assign(Object.assign({}, state), { isInvalidated: true });
      case "setState":
        return Object.assign(Object.assign({}, state), action.state);
      default:
        return state;
    }
  }
}
class QueryCache extends Subscribable {
  constructor(config) {
    super();
    this.config = config || {};
    this.queries = [];
    this.queriesMap = {};
  }
  build(client, options, state) {
    var _a;
    const queryKey = options.queryKey;
    const queryHash = (_a = options.queryHash) !== null && _a !== void 0 ? _a : hashQueryKeyByOptions(queryKey, options);
    let query = this.get(queryHash);
    if (!query) {
      query = new Query({
        cache: this,
        queryKey,
        queryHash,
        options: client.defaultQueryOptions(options),
        state,
        defaultOptions: client.getQueryDefaults(queryKey),
        meta: options.meta
      });
      this.add(query);
    }
    return query;
  }
  add(query) {
    if (!this.queriesMap[query.queryHash]) {
      this.queriesMap[query.queryHash] = query;
      this.queries.push(query);
      this.notify({
        type: "queryAdded",
        query
      });
    }
  }
  remove(query) {
    const queryInMap = this.queriesMap[query.queryHash];
    if (queryInMap) {
      query.destroy();
      this.queries = this.queries.filter((x) => x !== query);
      if (queryInMap === query) {
        delete this.queriesMap[query.queryHash];
      }
      this.notify({ type: "queryRemoved", query });
    }
  }
  clear() {
    notifyManager.batch(() => {
      this.queries.forEach((query) => {
        this.remove(query);
      });
    });
  }
  get(queryHash) {
    return this.queriesMap[queryHash];
  }
  getAll() {
    return this.queries;
  }
  find(arg1, arg2) {
    const [filters] = parseFilterArgs(arg1, arg2);
    if (typeof filters.exact === "undefined") {
      filters.exact = true;
    }
    return this.queries.find((query) => matchQuery(filters, query));
  }
  findAll(arg1, arg2) {
    const [filters] = parseFilterArgs(arg1, arg2);
    return Object.keys(filters).length > 0 ? this.queries.filter((query) => matchQuery(filters, query)) : this.queries;
  }
  notify(event) {
    notifyManager.batch(() => {
      this.listeners.forEach((listener) => {
        listener(event);
      });
    });
  }
  onFocus() {
    notifyManager.batch(() => {
      this.queries.forEach((query) => {
        query.onFocus();
      });
    });
  }
  onOnline() {
    notifyManager.batch(() => {
      this.queries.forEach((query) => {
        query.onOnline();
      });
    });
  }
}
class Mutation {
  constructor(config) {
    this.options = Object.assign(Object.assign({}, config.defaultOptions), config.options);
    this.mutationId = config.mutationId;
    this.mutationCache = config.mutationCache;
    this.observers = [];
    this.state = config.state || getDefaultState();
    this.meta = config.meta;
  }
  setState(state) {
    this.dispatch({ type: "setState", state });
  }
  addObserver(observer) {
    if (this.observers.indexOf(observer) === -1) {
      this.observers.push(observer);
    }
  }
  removeObserver(observer) {
    this.observers = this.observers.filter((x) => x !== observer);
  }
  cancel() {
    if (this.retryer) {
      this.retryer.cancel();
      return this.retryer.promise.then(noop).catch(noop);
    }
    return Promise.resolve();
  }
  continue() {
    if (this.retryer) {
      this.retryer.continue();
      return this.retryer.promise;
    }
    return this.execute();
  }
  execute() {
    let data;
    const restored = this.state.status === "loading";
    let promise = Promise.resolve();
    if (!restored) {
      this.dispatch({ type: "loading", variables: this.options.variables });
      promise = promise.then(() => {
        var _a, _b;
        (_b = (_a = this.mutationCache.config).onMutate) === null || _b === void 0 ? void 0 : _b.call(_a, this.state.variables, this);
      }).then(() => {
        var _a, _b;
        return (_b = (_a = this.options).onMutate) === null || _b === void 0 ? void 0 : _b.call(_a, this.state.variables);
      }).then((context) => {
        if (context !== this.state.context) {
          this.dispatch({
            type: "loading",
            context,
            variables: this.state.variables
          });
        }
      });
    }
    return promise.then(() => this.executeMutation()).then((result) => {
      var _a, _b;
      data = result;
      (_b = (_a = this.mutationCache.config).onSuccess) === null || _b === void 0 ? void 0 : _b.call(_a, data, this.state.variables, this.state.context, this);
    }).then(() => {
      var _a, _b;
      return (_b = (_a = this.options).onSuccess) === null || _b === void 0 ? void 0 : _b.call(_a, data, this.state.variables, this.state.context);
    }).then(() => {
      var _a, _b;
      return (_b = (_a = this.options).onSettled) === null || _b === void 0 ? void 0 : _b.call(_a, data, null, this.state.variables, this.state.context);
    }).then(() => {
      this.dispatch({ type: "success", data });
      return data;
    }).catch((error) => {
      var _a, _b;
      (_b = (_a = this.mutationCache.config).onError) === null || _b === void 0 ? void 0 : _b.call(_a, error, this.state.variables, this.state.context, this);
      getLogger().error(error);
      return Promise.resolve().then(() => {
        var _a2, _b2;
        return (_b2 = (_a2 = this.options).onError) === null || _b2 === void 0 ? void 0 : _b2.call(_a2, error, this.state.variables, this.state.context);
      }).then(() => {
        var _a2, _b2;
        return (_b2 = (_a2 = this.options).onSettled) === null || _b2 === void 0 ? void 0 : _b2.call(_a2, void 0, error, this.state.variables, this.state.context);
      }).then(() => {
        this.dispatch({ type: "error", error });
        throw error;
      });
    });
  }
  executeMutation() {
    var _a;
    this.retryer = new Retryer({
      fn: () => {
        if (!this.options.mutationFn) {
          return Promise.reject("No mutationFn found");
        }
        return this.options.mutationFn(this.state.variables);
      },
      onFail: () => {
        this.dispatch({ type: "failed" });
      },
      onPause: () => {
        this.dispatch({ type: "pause" });
      },
      onContinue: () => {
        this.dispatch({ type: "continue" });
      },
      retry: (_a = this.options.retry) !== null && _a !== void 0 ? _a : 0,
      retryDelay: this.options.retryDelay
    });
    return this.retryer.promise;
  }
  dispatch(action) {
    this.state = reducer(this.state, action);
    notifyManager.batch(() => {
      this.observers.forEach((observer) => {
        observer.onMutationUpdate(action);
      });
      this.mutationCache.notify(this);
    });
  }
}
function getDefaultState() {
  return {
    context: void 0,
    data: void 0,
    error: null,
    failureCount: 0,
    isPaused: false,
    status: "idle",
    variables: void 0
  };
}
function reducer(state, action) {
  switch (action.type) {
    case "failed":
      return Object.assign(Object.assign({}, state), { failureCount: state.failureCount + 1 });
    case "pause":
      return Object.assign(Object.assign({}, state), { isPaused: true });
    case "continue":
      return Object.assign(Object.assign({}, state), { isPaused: false });
    case "loading":
      return Object.assign(Object.assign({}, state), { context: action.context, data: void 0, error: null, isPaused: false, status: "loading", variables: action.variables });
    case "success":
      return Object.assign(Object.assign({}, state), { data: action.data, error: null, status: "success", isPaused: false });
    case "error":
      return Object.assign(Object.assign({}, state), { data: void 0, error: action.error, failureCount: state.failureCount + 1, isPaused: false, status: "error" });
    case "setState":
      return Object.assign(Object.assign({}, state), action.state);
    default:
      return state;
  }
}
class MutationCache extends Subscribable {
  constructor(config) {
    super();
    this.config = config || {};
    this.mutations = [];
    this.mutationId = 0;
  }
  build(client, options, state) {
    const mutation = new Mutation({
      mutationCache: this,
      mutationId: ++this.mutationId,
      options: client.defaultMutationOptions(options),
      state,
      defaultOptions: options.mutationKey ? client.getMutationDefaults(options.mutationKey) : void 0,
      meta: options.meta
    });
    this.add(mutation);
    return mutation;
  }
  add(mutation) {
    this.mutations.push(mutation);
    this.notify(mutation);
  }
  remove(mutation) {
    this.mutations = this.mutations.filter((x) => x !== mutation);
    mutation.cancel();
    this.notify(mutation);
  }
  clear() {
    notifyManager.batch(() => {
      this.mutations.forEach((mutation) => {
        this.remove(mutation);
      });
    });
  }
  getAll() {
    return this.mutations;
  }
  find(filters) {
    if (typeof filters.exact === "undefined") {
      filters.exact = true;
    }
    return this.mutations.find((mutation) => matchMutation(filters, mutation));
  }
  findAll(filters) {
    return this.mutations.filter((mutation) => matchMutation(filters, mutation));
  }
  notify(mutation) {
    notifyManager.batch(() => {
      this.listeners.forEach((listener) => {
        listener(mutation);
      });
    });
  }
  onFocus() {
    this.resumePausedMutations();
  }
  onOnline() {
    this.resumePausedMutations();
  }
  resumePausedMutations() {
    const pausedMutations = this.mutations.filter((x) => x.state.isPaused);
    return notifyManager.batch(() => pausedMutations.reduce((promise, mutation) => promise.then(() => mutation.continue().catch(noop)), Promise.resolve()));
  }
}
function infiniteQueryBehavior() {
  return {
    onFetch: (context) => {
      context.fetchFn = () => {
        var _a, _b, _c, _d, _e, _f;
        const refetchPage = (_b = (_a = context.fetchOptions) === null || _a === void 0 ? void 0 : _a.meta) === null || _b === void 0 ? void 0 : _b.refetchPage;
        const fetchMore = (_d = (_c = context.fetchOptions) === null || _c === void 0 ? void 0 : _c.meta) === null || _d === void 0 ? void 0 : _d.fetchMore;
        const pageParam = fetchMore === null || fetchMore === void 0 ? void 0 : fetchMore.pageParam;
        const isFetchingNextPage = (fetchMore === null || fetchMore === void 0 ? void 0 : fetchMore.direction) === "forward";
        const isFetchingPreviousPage = (fetchMore === null || fetchMore === void 0 ? void 0 : fetchMore.direction) === "backward";
        const oldPages = ((_e = context.state.data) === null || _e === void 0 ? void 0 : _e.pages) || [];
        const oldPageParams = ((_f = context.state.data) === null || _f === void 0 ? void 0 : _f.pageParams) || [];
        const abortController = getAbortController();
        const abortSignal = abortController === null || abortController === void 0 ? void 0 : abortController.signal;
        let newPageParams = oldPageParams;
        let cancelled = false;
        const queryFn = context.options.queryFn || (() => Promise.reject("Missing queryFn"));
        const buildNewPages = (pages, param, page, previous) => {
          newPageParams = previous ? [param, ...newPageParams] : [...newPageParams, param];
          return previous ? [page, ...pages] : [...pages, page];
        };
        const fetchPage = (pages, manual, param, previous) => {
          if (cancelled) {
            return Promise.reject("Cancelled");
          }
          if (typeof param === "undefined" && !manual && pages.length) {
            return Promise.resolve(pages);
          }
          const queryFnContext = {
            queryKey: context.queryKey,
            signal: abortSignal,
            pageParam: param,
            meta: context.meta
          };
          const queryFnResult = queryFn(queryFnContext);
          const promise2 = Promise.resolve(queryFnResult).then((page) => buildNewPages(pages, param, page, previous));
          if (isCancelable(queryFnResult)) {
            const promiseAsAny = promise2;
            promiseAsAny.cancel = queryFnResult.cancel;
          }
          return promise2;
        };
        let promise;
        if (!oldPages.length) {
          promise = fetchPage([]);
        } else if (isFetchingNextPage) {
          const manual = typeof pageParam !== "undefined";
          const param = manual ? pageParam : getNextPageParam(context.options, oldPages);
          promise = fetchPage(oldPages, manual, param);
        } else if (isFetchingPreviousPage) {
          const manual = typeof pageParam !== "undefined";
          const param = manual ? pageParam : getPreviousPageParam(context.options, oldPages);
          promise = fetchPage(oldPages, manual, param, true);
        } else {
          newPageParams = [];
          const manual = typeof context.options.getNextPageParam === "undefined";
          const shouldFetchFirstPage = refetchPage && oldPages[0] ? refetchPage(oldPages[0], 0, oldPages) : true;
          promise = shouldFetchFirstPage ? fetchPage([], manual, oldPageParams[0]) : Promise.resolve(buildNewPages([], oldPageParams[0], oldPages[0]));
          for (let i = 1; i < oldPages.length; i++) {
            promise = promise.then((pages) => {
              const shouldFetchNextPage = refetchPage && oldPages[i] ? refetchPage(oldPages[i], i, oldPages) : true;
              if (shouldFetchNextPage) {
                const param = manual ? oldPageParams[i] : getNextPageParam(context.options, pages);
                return fetchPage(pages, manual, param);
              }
              return Promise.resolve(buildNewPages(pages, oldPageParams[i], oldPages[i]));
            });
          }
        }
        const finalPromise = promise.then((pages) => ({
          pages,
          pageParams: newPageParams
        }));
        const finalPromiseAsAny = finalPromise;
        finalPromiseAsAny.cancel = () => {
          cancelled = true;
          abortController === null || abortController === void 0 ? void 0 : abortController.abort();
          if (isCancelable(promise)) {
            promise.cancel();
          }
        };
        return finalPromise;
      };
    }
  };
}
function getNextPageParam(options, pages) {
  var _a;
  return (_a = options.getNextPageParam) === null || _a === void 0 ? void 0 : _a.call(options, pages[pages.length - 1], pages);
}
function getPreviousPageParam(options, pages) {
  var _a;
  return (_a = options.getPreviousPageParam) === null || _a === void 0 ? void 0 : _a.call(options, pages[0], pages);
}
class QueryClient {
  constructor(config = {}) {
    this.queryCache = config.queryCache || new QueryCache();
    this.mutationCache = config.mutationCache || new MutationCache();
    this.defaultOptions = config.defaultOptions || {};
    this.queryDefaults = [];
    this.mutationDefaults = [];
  }
  mount() {
    this.unsubscribeFocus = focusManager.subscribe(() => {
      if (focusManager.isFocused() && onlineManager.isOnline()) {
        this.mutationCache.onFocus();
        this.queryCache.onFocus();
      }
    });
    this.unsubscribeOnline = onlineManager.subscribe(() => {
      if (focusManager.isFocused() && onlineManager.isOnline()) {
        this.mutationCache.onOnline();
        this.queryCache.onOnline();
      }
    });
  }
  unmount() {
    var _a, _b;
    (_a = this.unsubscribeFocus) === null || _a === void 0 ? void 0 : _a.call(this);
    (_b = this.unsubscribeOnline) === null || _b === void 0 ? void 0 : _b.call(this);
  }
  isFetching(arg1, arg2) {
    const [filters] = parseFilterArgs(arg1, arg2);
    filters.fetching = true;
    return this.queryCache.findAll(filters).length;
  }
  isMutating(filters) {
    return this.mutationCache.findAll(Object.assign(Object.assign({}, filters), { fetching: true })).length;
  }
  getQueryData(queryKey, filters) {
    var _a;
    return (_a = this.queryCache.find(queryKey, filters)) === null || _a === void 0 ? void 0 : _a.state.data;
  }
  getQueriesData(queryKeyOrFilters) {
    return this.getQueryCache().findAll(queryKeyOrFilters).map(({ queryKey, state }) => {
      const data = state.data;
      return [queryKey, data];
    });
  }
  setQueryData(queryKey, updater, options) {
    const parsedOptions = parseQueryArgs(queryKey);
    const defaultedOptions = this.defaultQueryOptions(parsedOptions);
    return this.queryCache.build(this, defaultedOptions).setData(updater, options);
  }
  setQueriesData(queryKeyOrFilters, updater, options) {
    return notifyManager.batch(() => this.getQueryCache().findAll(queryKeyOrFilters).map(({ queryKey }) => [
      queryKey,
      this.setQueryData(queryKey, updater, options)
    ]));
  }
  getQueryState(queryKey, filters) {
    var _a;
    return (_a = this.queryCache.find(queryKey, filters)) === null || _a === void 0 ? void 0 : _a.state;
  }
  removeQueries(arg1, arg2) {
    const [filters] = parseFilterArgs(arg1, arg2);
    const queryCache = this.queryCache;
    notifyManager.batch(() => {
      queryCache.findAll(filters).forEach((query) => {
        queryCache.remove(query);
      });
    });
  }
  resetQueries(arg1, arg2, arg3) {
    const [filters, options] = parseFilterArgs(arg1, arg2, arg3);
    const queryCache = this.queryCache;
    const refetchFilters = Object.assign(Object.assign({}, filters), { active: true });
    return notifyManager.batch(() => {
      queryCache.findAll(filters).forEach((query) => {
        query.reset();
      });
      return this.refetchQueries(refetchFilters, options);
    });
  }
  cancelQueries(arg1, arg2, arg3) {
    const [filters, cancelOptions = {}] = parseFilterArgs(arg1, arg2, arg3);
    if (typeof cancelOptions.revert === "undefined") {
      cancelOptions.revert = true;
    }
    const promises = notifyManager.batch(() => this.queryCache.findAll(filters).map((query) => query.cancel(cancelOptions)));
    return Promise.all(promises).then(noop).catch(noop);
  }
  invalidateQueries(arg1, arg2, arg3) {
    var _a, _b, _c;
    const [filters, options] = parseFilterArgs(arg1, arg2, arg3);
    const refetchFilters = Object.assign(Object.assign({}, filters), {
      active: (_b = (_a = filters.refetchActive) !== null && _a !== void 0 ? _a : filters.active) !== null && _b !== void 0 ? _b : true,
      inactive: (_c = filters.refetchInactive) !== null && _c !== void 0 ? _c : false
    });
    return notifyManager.batch(() => {
      this.queryCache.findAll(filters).forEach((query) => {
        query.invalidate();
      });
      return this.refetchQueries(refetchFilters, options);
    });
  }
  refetchQueries(arg1, arg2, arg3) {
    const [filters, options] = parseFilterArgs(arg1, arg2, arg3);
    const promises = notifyManager.batch(() => this.queryCache.findAll(filters).map((query) => query.fetch(void 0, Object.assign(Object.assign({}, options), { meta: { refetchPage: filters === null || filters === void 0 ? void 0 : filters.refetchPage } }))));
    let promise = Promise.all(promises).then(noop);
    if (!(options === null || options === void 0 ? void 0 : options.throwOnError)) {
      promise = promise.catch(noop);
    }
    return promise;
  }
  fetchQuery(arg1, arg2, arg3) {
    const parsedOptions = parseQueryArgs(arg1, arg2, arg3);
    const defaultedOptions = this.defaultQueryOptions(parsedOptions);
    if (typeof defaultedOptions.retry === "undefined") {
      defaultedOptions.retry = false;
    }
    const query = this.queryCache.build(this, defaultedOptions);
    return query.isStaleByTime(defaultedOptions.staleTime) ? query.fetch(defaultedOptions) : Promise.resolve(query.state.data);
  }
  prefetchQuery(arg1, arg2, arg3) {
    return this.fetchQuery(arg1, arg2, arg3).then(noop).catch(noop);
  }
  fetchInfiniteQuery(arg1, arg2, arg3) {
    const parsedOptions = parseQueryArgs(arg1, arg2, arg3);
    parsedOptions.behavior = infiniteQueryBehavior();
    return this.fetchQuery(parsedOptions);
  }
  prefetchInfiniteQuery(arg1, arg2, arg3) {
    return this.fetchInfiniteQuery(arg1, arg2, arg3).then(noop).catch(noop);
  }
  cancelMutations() {
    const promises = notifyManager.batch(() => this.mutationCache.getAll().map((mutation) => mutation.cancel()));
    return Promise.all(promises).then(noop).catch(noop);
  }
  resumePausedMutations() {
    return this.getMutationCache().resumePausedMutations();
  }
  executeMutation(options) {
    return this.mutationCache.build(this, options).execute();
  }
  getQueryCache() {
    return this.queryCache;
  }
  getMutationCache() {
    return this.mutationCache;
  }
  getDefaultOptions() {
    return this.defaultOptions;
  }
  setDefaultOptions(options) {
    this.defaultOptions = options;
  }
  setQueryDefaults(queryKey, options) {
    const result = this.queryDefaults.find((x) => hashQueryKey(queryKey) === hashQueryKey(x.queryKey));
    if (result) {
      result.defaultOptions = options;
    } else {
      this.queryDefaults.push({ queryKey, defaultOptions: options });
    }
  }
  getQueryDefaults(queryKey) {
    var _a;
    return queryKey ? (_a = this.queryDefaults.find((x) => partialMatchKey(queryKey, x.queryKey))) === null || _a === void 0 ? void 0 : _a.defaultOptions : void 0;
  }
  setMutationDefaults(mutationKey, options) {
    const result = this.mutationDefaults.find((x) => hashQueryKey(mutationKey) === hashQueryKey(x.mutationKey));
    if (result) {
      result.defaultOptions = options;
    } else {
      this.mutationDefaults.push({ mutationKey, defaultOptions: options });
    }
  }
  getMutationDefaults(mutationKey) {
    var _a;
    return mutationKey ? (_a = this.mutationDefaults.find((x) => partialMatchKey(mutationKey, x.mutationKey))) === null || _a === void 0 ? void 0 : _a.defaultOptions : void 0;
  }
  defaultQueryOptions(options) {
    if (options === null || options === void 0 ? void 0 : options._defaulted) {
      return options;
    }
    const defaultedOptions = Object.assign(Object.assign(Object.assign(Object.assign({}, this.defaultOptions.queries), this.getQueryDefaults(options === null || options === void 0 ? void 0 : options.queryKey)), options), { _defaulted: true });
    if (!defaultedOptions.queryHash && defaultedOptions.queryKey) {
      defaultedOptions.queryHash = hashQueryKeyByOptions(defaultedOptions.queryKey, defaultedOptions);
    }
    return defaultedOptions;
  }
  defaultQueryObserverOptions(options) {
    return this.defaultQueryOptions(options);
  }
  defaultMutationOptions(options) {
    if (options === null || options === void 0 ? void 0 : options._defaulted) {
      return options;
    }
    return Object.assign(Object.assign(Object.assign(Object.assign({}, this.defaultOptions.mutations), this.getMutationDefaults(options === null || options === void 0 ? void 0 : options.mutationKey)), options), { _defaulted: true });
  }
  clear() {
    this.queryCache.clear();
    this.mutationCache.clear();
  }
}
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
});
export {
  MutationCache as M,
  QueryCache as Q,
  QueryClient as a,
  queryClient as q
};
