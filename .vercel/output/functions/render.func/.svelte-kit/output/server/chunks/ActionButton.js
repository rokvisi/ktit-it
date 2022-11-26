import { c as create_ssr_component, e as escape } from "./index.js";
const ActionButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let btnDisabled;
  let { onClick } = $$props;
  let { disabled = false } = $$props;
  if ($$props.onClick === void 0 && $$bindings.onClick && onClick !== void 0)
    $$bindings.onClick(onClick);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  btnDisabled = disabled;
  return `<button class="${[
    escape("inline-block bg-[#FF3E00] px-4 py-1.5 rounded text-white uppercase font-medium " + $$props.class, true),
    (btnDisabled ? "disabled:bg-[#E0E0E0]" : "") + " disabled:text-[#929292]   "
  ].join(" ").trim()}" ${btnDisabled ? "disabled" : ""}><div class="${"flex items-center justify-center gap-2"}">${`${slots.default ? slots.default({}) : ``}`}</div></button>`;
});
export {
  ActionButton as A
};
