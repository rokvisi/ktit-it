import { r as readable } from "./index3.js";
import { c as notifyManager, l as parseQueryArgs } from "./logger.js";
import { u as useQueryClient, Q as QueryObserver } from "./useQueryClient.js";
import "./index.js";
function setBatchCalls(options) {
  options.optimisticResults = true;
  if (options.onError) {
    options.onError = notifyManager.batchCalls(options.onError);
  }
  if (options.onSuccess) {
    options.onSuccess = notifyManager.batchCalls(options.onSuccess);
  }
  if (options.onSettled) {
    options.onSettled = notifyManager.batchCalls(options.onSettled);
  }
  return options;
}
function useQuery(arg1, arg2, arg3) {
  const options = parseQueryArgs(arg1, arg2, arg3);
  const client = useQueryClient();
  let defaultedOptions = client.defaultQueryObserverOptions(options);
  defaultedOptions = setBatchCalls(defaultedOptions);
  const observer = new QueryObserver(client, defaultedOptions);
  const { subscribe } = readable(observer.getCurrentResult(), (set) => {
    return observer.subscribe(notifyManager.batchCalls(set));
  });
  observer.updateResult();
  function setOptions(arg12, arg22, arg32) {
    const options2 = parseQueryArgs(arg12, arg22, arg32);
    let defaultedOptions2 = client.defaultQueryObserverOptions(options2);
    defaultedOptions2 = setBatchCalls(defaultedOptions2);
    if (observer.hasListeners()) {
      observer.setOptions(defaultedOptions2, { listeners: false });
    }
  }
  function updateOptions(options2) {
    observer.updateOptions(options2);
  }
  function setEnabled(enabled) {
    updateOptions({ enabled });
  }
  return { subscribe, setOptions, updateOptions, setEnabled };
}
export {
  useQuery as u
};
