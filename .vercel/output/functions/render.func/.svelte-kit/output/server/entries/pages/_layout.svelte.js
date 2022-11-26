import { c as create_ssr_component, b as subscribe, v as validate_component, e as escape, s as setContext, o as onDestroy } from "../../chunks/index.js";
import { B as Button_1 } from "../../chunks/Button.js";
import { L as Label } from "../../chunks/index4.js";
import { A } from "../../chunks/index5.js";
import { p as page } from "../../chunks/stores.js";
import { Q as QueryCache, M as MutationCache, a as QueryClient, q as queryClient } from "../../chunks/query.js";
import "../../chunks/logger.js";
const app = "";
const HomeIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" class="${"w-6 h-6"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"}"></path></svg>`;
});
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  const userName = $page.data.username;
  const userRole = $page.data.role;
  $$unsubscribe_page();
  return `<header class="${"my-4 mx-5 text-sm md:text-base"}"><div class="${"flex items-center"}"><div class="${"grow flex gap-8 items-center"}"><a href="${"/"}" class="${""}">${validate_component(HomeIcon, "HomeIcon").$$render($$result, {}, {}, {})}</a>
            ${userRole ? `${validate_component(Button_1, "Button").$$render(
    $$result,
    {
      variant: "unelevated",
      href: `/${userRole}`
    },
    {},
    {
      default: () => {
        return `${validate_component(Label, "Label").$$render($$result, {}, {}, {
          default: () => {
            return `${userRole === "user" ? `Nuomuotis` : `${userRole === "mod" ? `Moderuoti` : `${userRole === "renter" ? `Nuomojami produktai` : ``}`}`}`;
          }
        })}`;
      }
    }
  )}

                ${userRole === "renter" ? `${validate_component(Button_1, "Button").$$render(
    $$result,
    {
      variant: "unelevated",
      href: `/renter/requests`
    },
    {},
    {
      default: () => {
        return `${validate_component(Label, "Label").$$render($$result, {}, {}, {
          default: () => {
            return `U\u017Esakymai`;
          }
        })}`;
      }
    }
  )}
                    ${validate_component(Button_1, "Button").$$render(
    $$result,
    {
      variant: "unelevated",
      href: `/renter/analytics`
    },
    {},
    {
      default: () => {
        return `${validate_component(Label, "Label").$$render($$result, {}, {}, {
          default: () => {
            return `Analitika`;
          }
        })}`;
      }
    }
  )}` : ``}

                ${userRole === "user" ? `${validate_component(Button_1, "Button").$$render(
    $$result,
    {
      variant: "unelevated",
      href: `/user/returns`
    },
    {},
    {
      default: () => {
        return `${validate_component(Label, "Label").$$render($$result, {}, {}, {
          default: () => {
            return `Gr\u0105\u017Einti`;
          }
        })}`;
      }
    }
  )}` : ``}` : ``}</div>

        <div class="${"flex items-center gap-2 md:gap-4"}">${userName === null ? `${validate_component(Button_1, "Button").$$render(
    $$result,
    {
      component: A,
      variant: "unelevated",
      href: "/auth"
    },
    {},
    {
      default: () => {
        return `Prisijungti
                `;
      }
    }
  )}` : `<div class="${"flex flex-col items-center"}"><p>${escape(userName)}
                        <span class="${"font-bold text-orange-400"}">(${escape(userRole)})</span></p>

                    ${validate_component(Button_1, "Button").$$render($$result, { color: "secondary" }, {}, {
    default: () => {
      return `Atsijungti
                    `;
    }
  })}</div>`}</div></div>

    <hr class="${"mt-4"}"></header>`;
});
const QueryClientProvider = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { queryCache = new QueryCache() } = $$props;
  let { mutationCache = new MutationCache() } = $$props;
  let { defaultOptions = {} } = $$props;
  let { client = new QueryClient({
    queryCache,
    mutationCache,
    defaultOptions
  }) } = $$props;
  setContext("queryClient", client);
  onDestroy(() => {
    client.unmount();
  });
  if ($$props.queryCache === void 0 && $$bindings.queryCache && queryCache !== void 0)
    $$bindings.queryCache(queryCache);
  if ($$props.mutationCache === void 0 && $$bindings.mutationCache && mutationCache !== void 0)
    $$bindings.mutationCache(mutationCache);
  if ($$props.defaultOptions === void 0 && $$bindings.defaultOptions && defaultOptions !== void 0)
    $$bindings.defaultOptions(defaultOptions);
  if ($$props.client === void 0 && $$bindings.client && client !== void 0)
    $$bindings.client(client);
  return `${slots.default ? slots.default({}) : ``}`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(QueryClientProvider, "QueryClientProvider").$$render($$result, { client: queryClient }, {}, {
    default: () => {
      return `${validate_component(Header, "Header").$$render($$result, {}, {}, {})}
    <main class="${"mx-5"}">${slots.default ? slots.default({}) : ``}</main>`;
    }
  })}`;
});
export {
  Layout as default
};
