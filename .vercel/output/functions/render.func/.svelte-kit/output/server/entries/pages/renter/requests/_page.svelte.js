import { c as create_ssr_component, d as compute_rest_props, g as get_current_component, i as spread, t as escape_attribute_value, j as escape_object, k as add_attribute, b as subscribe, y as each, v as validate_component, e as escape } from "../../../../chunks/index.js";
import { S as Subscribable, c as notifyManager, w as difference, x as replaceAt } from "../../../../chunks/logger.js";
import { r as readable } from "../../../../chunks/index3.js";
import { Q as QueryObserver, u as useQueryClient } from "../../../../chunks/useQueryClient.js";
import _ from "underscore";
import qs from "qs";
import { C as Content, A as Accordion, P as Panel, H as Header } from "../../../../chunks/Header.js";
import { U as UserIcon } from "../../../../chunks/UserIcon.js";
import { f as forwardEventsBuilder, c as classMap } from "../../../../chunks/index5.js";
import "../../../../chunks/ActionIcons.js";
import { A as ActionButton } from "../../../../chunks/ActionButton.js";
class QueriesObserver extends Subscribable {
  constructor(client, queries) {
    super();
    this.client = client;
    this.queries = [];
    this.result = [];
    this.observers = [];
    this.observersMap = {};
    if (queries) {
      this.setQueries(queries);
    }
  }
  onSubscribe() {
    if (this.listeners.length === 1) {
      this.observers.forEach((observer) => {
        observer.subscribe((result) => {
          this.onUpdate(observer, result);
        });
      });
    }
  }
  onUnsubscribe() {
    if (!this.listeners.length) {
      this.destroy();
    }
  }
  destroy() {
    this.listeners = [];
    this.observers.forEach((observer) => {
      observer.destroy();
    });
  }
  setQueries(queries, notifyOptions) {
    this.queries = queries;
    this.updateObservers(notifyOptions);
  }
  getCurrentResult() {
    return this.result;
  }
  getOptimisticResult(queries) {
    return this.findMatchingObservers(queries).map((match) => match.observer.getOptimisticResult(match.defaultedQueryOptions));
  }
  findMatchingObservers(queries) {
    const prevObservers = this.observers;
    const defaultedQueryOptions = queries.map((options) => this.client.defaultQueryObserverOptions(options));
    const matchingObservers = defaultedQueryOptions.flatMap((defaultedOptions) => {
      const match = prevObservers.find((observer) => observer.options.queryHash === defaultedOptions.queryHash);
      if (match != null) {
        return [{ defaultedQueryOptions: defaultedOptions, observer: match }];
      }
      return [];
    });
    const matchedQueryHashes = matchingObservers.map((match) => match.defaultedQueryOptions.queryHash);
    const unmatchedQueries = defaultedQueryOptions.filter((defaultedOptions) => !matchedQueryHashes.includes(defaultedOptions.queryHash));
    const unmatchedObservers = prevObservers.filter((prevObserver) => !matchingObservers.some((match) => match.observer === prevObserver));
    const newOrReusedObservers = unmatchedQueries.map((options, index) => {
      if (options.keepPreviousData) {
        const previouslyUsedObserver = unmatchedObservers[index];
        if (previouslyUsedObserver !== void 0) {
          return {
            defaultedQueryOptions: options,
            observer: previouslyUsedObserver
          };
        }
      }
      return {
        defaultedQueryOptions: options,
        observer: this.getObserver(options)
      };
    });
    const sortMatchesByOrderOfQueries = (a, b) => defaultedQueryOptions.indexOf(a.defaultedQueryOptions) - defaultedQueryOptions.indexOf(b.defaultedQueryOptions);
    return matchingObservers.concat(newOrReusedObservers).sort(sortMatchesByOrderOfQueries);
  }
  getObserver(options) {
    const defaultedOptions = this.client.defaultQueryObserverOptions(options);
    const currentObserver = this.observersMap[defaultedOptions.queryHash];
    return currentObserver !== null && currentObserver !== void 0 ? currentObserver : new QueryObserver(this.client, defaultedOptions);
  }
  updateObservers(notifyOptions) {
    notifyManager.batch(() => {
      const prevObservers = this.observers;
      const newObserverMatches = this.findMatchingObservers(this.queries);
      newObserverMatches.forEach((match) => match.observer.setOptions(match.defaultedQueryOptions, notifyOptions));
      const newObservers = newObserverMatches.map((match) => match.observer);
      const newObserversMap = Object.fromEntries(newObservers.map((observer) => [observer.options.queryHash, observer]));
      const newResult = newObservers.map((observer) => observer.getCurrentResult());
      const hasIndexChange = newObservers.some((observer, index) => observer !== prevObservers[index]);
      if (prevObservers.length === newObservers.length && !hasIndexChange) {
        return;
      }
      this.observers = newObservers;
      this.observersMap = newObserversMap;
      this.result = newResult;
      if (!this.hasListeners()) {
        return;
      }
      difference(prevObservers, newObservers).forEach((observer) => {
        observer.destroy();
      });
      difference(newObservers, prevObservers).forEach((observer) => {
        observer.subscribe((result) => {
          this.onUpdate(observer, result);
        });
      });
      this.notify();
    });
  }
  onUpdate(observer, result) {
    const index = this.observers.indexOf(observer);
    if (index !== -1) {
      this.result = replaceAt(this.result, index, result);
      this.notify();
    }
  }
  notify() {
    notifyManager.batch(() => {
      this.listeners.forEach((listener) => {
        listener(this.result);
      });
    });
  }
}
function useQueries(queries) {
  const client = useQueryClient();
  function getDefaultQuery(newQueries) {
    return newQueries.map((options) => {
      const defaultedOptions = client.defaultQueryObserverOptions(options);
      defaultedOptions.optimisticResults = true;
      return defaultedOptions;
    });
  }
  const defaultedQueries = getDefaultQuery(queries);
  const observer = new QueriesObserver(client, defaultedQueries);
  const { subscribe: subscribe2 } = readable(observer.getCurrentResult(), (set) => {
    return observer.subscribe(notifyManager.batchCalls(set));
  });
  const setQueries = (newQueries) => {
    if (observer.hasListeners()) {
      const defaultedNewQueries = getDefaultQuery(newQueries);
      observer.setQueries(defaultedNewQueries, { listeners: false });
    }
  };
  return { subscribe: subscribe2, setQueries };
}
const Card = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["use", "class", "variant", "padded", "getElement"]);
  forwardEventsBuilder(get_current_component());
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let { variant = "raised" } = $$props;
  let { padded = false } = $$props;
  let element;
  function getElement() {
    return element;
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.variant === void 0 && $$bindings.variant && variant !== void 0)
    $$bindings.variant(variant);
  if ($$props.padded === void 0 && $$bindings.padded && padded !== void 0)
    $$bindings.padded(padded);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  return `<div${spread(
    [
      {
        class: escape_attribute_value(classMap({
          [className]: true,
          "mdc-card": true,
          "mdc-card--outlined": variant === "outlined",
          "smui-card--padded": padded
        }))
      },
      escape_object($$restProps)
    ],
    {}
  )}${add_attribute("this", element, 0)}>${slots.default ? slots.default({}) : ``}
</div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $renteeReviewQueries, $$unsubscribe_renteeReviewQueries;
  let { data } = $$props;
  let requests = data.requests;
  const uniqueRentees = _.uniq(requests, false, (r) => {
    return r.rentee;
  }).map((r) => r.rentee);
  const renteeReviewQueries = useQueries(uniqueRentees.map((rentee) => {
    return {
      queryKey: [rentee, "Reviews"],
      queryFn: () => fetch(`/api/db/reviews?${qs.stringify({ user: rentee })}`).then((res) => res.json())
    };
  }));
  $$unsubscribe_renteeReviewQueries = subscribe(renteeReviewQueries, (value) => $renteeReviewQueries = value);
  const mappedReviewQueries = {};
  async function action_on_req(req_id, action, itemId, renter, rentee) {
    const res = await fetch("/api/db/requests", {
      method: "PUT",
      body: JSON.stringify({
        requestId: req_id,
        action,
        itemId,
        renter,
        rentee
      })
    });
    if (!res.ok) {
      return { state: "error", text: "Klaida!" };
    }
    setTimeout(
      () => {
        requests = requests.filter((r) => r.id != req_id);
      },
      3e3
    );
    return {
      state: "success",
      text: action === "accept" ? "Priimta!" : "Atmesta!"
    };
  }
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  {
    {
      for (let i = 0; i < uniqueRentees.length; ++i) {
        mappedReviewQueries[uniqueRentees[i]] = $renteeReviewQueries[i];
      }
    }
  }
  $$unsubscribe_renteeReviewQueries();
  return `<div>${requests.filter((r) => r.status === "pending").length === 0 ? `<p>\u0160iuo metu u\u017Esakym\u0173 n\u0117ra!</p>` : `<div class="${"flex flex-col gap-8 mb-10"}">${each(requests, (request) => {
    return `${request.status === "pending" ? `<div class="${"space-y-2"}">${validate_component(Card, "Card").$$render($$result, { variant: "outlined", padded: true }, {}, {
      default: () => {
        return `${validate_component(Content, "Content").$$render($$result, { class: "flex flex-col gap-4" }, {}, {
          default: () => {
            return `<div class="${"flex gap-2 text-xl border-b pb-4"}">${validate_component(UserIcon, "UserIcon").$$render($$result, { class: "w-6 h-6" }, {}, {})}
                                    <span>${escape(request.rentee)} nori nuomuotis:</span></div>
                                <div class="${"space-y-4"}"><p class="${"text-lg text-gray-700"}">${escape(request.itemName)}</p>
                                    <div class="${"inline-block border p-4"}"><img class="${"w-40 aspect-square rounded"}"${add_attribute("src", request.image_url, 0)} alt="${"product"}">
                                    </div></div>
                                <div class="${"flex gap-16 border-t pt-4"}">${validate_component(ActionButton, "ActionButton").$$render(
              $$result,
              {
                class: "w-full",
                onClick: () => action_on_req(request.id, "accept", request.itemId, request.renter, request.rentee)
              },
              {},
              {
                default: () => {
                  return `Priimti
                                    `;
                }
              }
            )}
                                    ${validate_component(ActionButton, "ActionButton").$$render(
              $$result,
              {
                class: "w-full",
                onClick: () => action_on_req(request.id, "refuse", request.itemId, request.renter, request.rentee)
              },
              {},
              {
                default: () => {
                  return `Atmesti
                                    `;
                }
              }
            )}</div>
                            `;
          }
        })}
                        `;
      }
    })}

                        ${validate_component(Accordion, "Accordion").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(Panel, "Panel").$$render($$result, { color: "secondary" }, {}, {
          default: () => {
            return `${validate_component(Header, "Header").$$render($$result, {}, {}, {
              default: () => {
                return `Atsiliepimai apie ${escape(request.rentee)}`;
              }
            })}
                                ${validate_component(Content, "Content").$$render($$result, {}, {}, {
              default: () => {
                return `${mappedReviewQueries[request.rentee] && mappedReviewQueries[request.rentee].status === "success" ? `${mappedReviewQueries[request.rentee].data.reviews.length === 0 ? `Atsiliepim\u0173 apie \u0161\u012F vartotoj\u0105 n\u0117ra.` : ``}

                                        ${each(mappedReviewQueries[request.rentee].data.reviews, (review) => {
                  return `<div class="${"flex items-center gap-8"}"><div class="${"flex gap-2"}">${validate_component(UserIcon, "UserIcon").$$render($$result, { class: "w-6 h-6" }, {}, {})}
                                                    ${escape(review.fk_reviewer)}:
                                                </div>
                                                ${escape(review.review)}
                                            </div>`;
                })}` : `Kraunama...`}
                                `;
              }
            })}
                            `;
          }
        })}
                        `;
      }
    })}
                    </div>` : ``}`;
  })}</div>`}</div>`;
});
export {
  Page as default
};
