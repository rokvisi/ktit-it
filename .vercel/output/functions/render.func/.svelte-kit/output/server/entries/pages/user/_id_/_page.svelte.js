import { c as create_ssr_component, k as add_attribute, d as compute_rest_props, g as get_current_component, f as getContext, s as setContext, o as onDestroy, v as validate_component, m as missing_component, h as globals, b as subscribe, y as each, e as escape } from "../../../../chunks/index.js";
import { U as UserIcon } from "../../../../chunks/UserIcon.js";
import { A as Accordion, P as Panel, H as Header, C as Content } from "../../../../chunks/Header.js";
import { MDCIconButtonToggleFoundation } from "@material/icon-button";
import { f as forwardEventsBuilder, c as classMap, B as Button, A } from "../../../../chunks/index5.js";
import { R as Ripple, I as Icon } from "../../../../chunks/index4.js";
import { p as page } from "../../../../chunks/stores.js";
import "../../../../chunks/logger.js";
import { u as useQuery } from "../../../../chunks/useQuery.js";
import { q as queryClient } from "../../../../chunks/query.js";
import { A as ActionButton } from "../../../../chunks/ActionButton.js";
import qs from "qs";
function dispatch(element, eventType, detail, eventInit = { bubbles: true }, duplicateEventForMDC = false) {
  if (typeof Event !== "undefined" && element) {
    const event = new CustomEvent(eventType, Object.assign(Object.assign({}, eventInit), { detail }));
    element === null || element === void 0 ? void 0 : element.dispatchEvent(event);
    if (duplicateEventForMDC && eventType.startsWith("SMUI")) {
      const duplicateEvent = new CustomEvent(eventType.replace(/^SMUI/g, () => "MDC"), Object.assign(Object.assign({}, eventInit), { detail }));
      element === null || element === void 0 ? void 0 : element.dispatchEvent(duplicateEvent);
      if (duplicateEvent.defaultPrevented) {
        event.preventDefault();
      }
    }
    return event;
  }
}
const MoneyIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { className = "w-6 h-6" } = $$props;
  if ($$props.className === void 0 && $$bindings.className && className !== void 0)
    $$bindings.className(className);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}"${add_attribute("class", className, 0)}><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"}"></path></svg>`;
});
const PencilSquareIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { className = "w-6 h-6" } = $$props;
  if ($$props.className === void 0 && $$bindings.className && className !== void 0)
    $$bindings.className(className);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}"${add_attribute("class", className, 0)}><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"}"></path></svg>`;
});
const { Object: Object_1 } = globals;
const IconButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let actionProp;
  let $$restProps = compute_rest_props($$props, [
    "use",
    "class",
    "style",
    "ripple",
    "color",
    "toggle",
    "pressed",
    "ariaLabelOn",
    "ariaLabelOff",
    "touch",
    "displayFlex",
    "size",
    "href",
    "action",
    "component",
    "getElement"
  ]);
  const forwardEvents = forwardEventsBuilder(get_current_component());
  let uninitializedValue = () => {
  };
  function isUninitializedValue(value) {
    return value === uninitializedValue;
  }
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let { style = "" } = $$props;
  let { ripple = true } = $$props;
  let { color = void 0 } = $$props;
  let { toggle = false } = $$props;
  let { pressed = uninitializedValue } = $$props;
  let { ariaLabelOn = void 0 } = $$props;
  let { ariaLabelOff = void 0 } = $$props;
  let { touch = false } = $$props;
  let { displayFlex = true } = $$props;
  let { size = "normal" } = $$props;
  let { href = void 0 } = $$props;
  let { action = void 0 } = $$props;
  let element;
  let instance;
  let internalClasses = {};
  let internalStyles = {};
  let internalAttrs = {};
  let context = getContext("SMUI:icon-button:context");
  let ariaDescribedby = getContext("SMUI:icon-button:aria-describedby");
  let { component = href == null ? Button : A } = $$props;
  let previousDisabled = $$restProps.disabled;
  setContext("SMUI:icon:context", "icon-button");
  let oldToggle = null;
  onDestroy(() => {
    instance && instance.destroy();
  });
  function hasClass(className2) {
    return className2 in internalClasses ? internalClasses[className2] : getElement().classList.contains(className2);
  }
  function addClass(className2) {
    if (!internalClasses[className2]) {
      internalClasses[className2] = true;
    }
  }
  function removeClass(className2) {
    if (!(className2 in internalClasses) || internalClasses[className2]) {
      internalClasses[className2] = false;
    }
  }
  function addStyle(name, value) {
    if (internalStyles[name] != value) {
      if (value === "" || value == null) {
        delete internalStyles[name];
        internalStyles = internalStyles;
      } else {
        internalStyles[name] = value;
      }
    }
  }
  function getAttr(name) {
    var _a;
    return name in internalAttrs ? (_a = internalAttrs[name]) !== null && _a !== void 0 ? _a : null : getElement().getAttribute(name);
  }
  function addAttr(name, value) {
    if (internalAttrs[name] !== value) {
      internalAttrs[name] = value;
    }
  }
  function handleChange(evtData) {
    pressed = evtData.isOn;
  }
  function getElement() {
    return element.getElement();
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  if ($$props.ripple === void 0 && $$bindings.ripple && ripple !== void 0)
    $$bindings.ripple(ripple);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.toggle === void 0 && $$bindings.toggle && toggle !== void 0)
    $$bindings.toggle(toggle);
  if ($$props.pressed === void 0 && $$bindings.pressed && pressed !== void 0)
    $$bindings.pressed(pressed);
  if ($$props.ariaLabelOn === void 0 && $$bindings.ariaLabelOn && ariaLabelOn !== void 0)
    $$bindings.ariaLabelOn(ariaLabelOn);
  if ($$props.ariaLabelOff === void 0 && $$bindings.ariaLabelOff && ariaLabelOff !== void 0)
    $$bindings.ariaLabelOff(ariaLabelOff);
  if ($$props.touch === void 0 && $$bindings.touch && touch !== void 0)
    $$bindings.touch(touch);
  if ($$props.displayFlex === void 0 && $$bindings.displayFlex && displayFlex !== void 0)
    $$bindings.displayFlex(displayFlex);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.action === void 0 && $$bindings.action && action !== void 0)
    $$bindings.action(action);
  if ($$props.component === void 0 && $$bindings.component && component !== void 0)
    $$bindings.component(component);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    actionProp = (() => {
      if (context === "data-table:pagination") {
        switch (action) {
          case "first-page":
            return { "data-first-page": "true" };
          case "prev-page":
            return { "data-prev-page": "true" };
          case "next-page":
            return { "data-next-page": "true" };
          case "last-page":
            return { "data-last-page": "true" };
          default:
            return { "data-action": "true" };
        }
      } else if (context === "dialog:header") {
        return { "data-mdc-dialog-action": action };
      } else {
        return { action };
      }
    })();
    {
      if (previousDisabled !== $$restProps.disabled) {
        const elem = getElement();
        if ("blur" in elem) {
          elem.blur();
        }
        previousDisabled = $$restProps.disabled;
      }
    }
    {
      if (element && getElement() && toggle !== oldToggle) {
        if (toggle && !instance) {
          instance = new MDCIconButtonToggleFoundation({
            addClass,
            hasClass,
            notifyChange: (evtData) => {
              handleChange(evtData);
              dispatch(getElement(), "SMUIIconButtonToggle:change", evtData, void 0, true);
            },
            removeClass,
            getAttr,
            setAttr: addAttr
          });
          instance.init();
        } else if (!toggle && instance) {
          instance.destroy();
          instance = void 0;
          internalClasses = {};
          internalAttrs = {};
        }
        oldToggle = toggle;
      }
    }
    {
      if (instance && !isUninitializedValue(pressed) && instance.isOn() !== pressed) {
        instance.toggle(pressed);
      }
    }
    $$rendered = `${validate_component(component || missing_component, "svelte:component").$$render(
      $$result,
      Object_1.assign(
        {
          use: [
            [
              Ripple,
              {
                ripple,
                unbounded: true,
                color,
                disabled: !!$$restProps.disabled,
                addClass,
                removeClass,
                addStyle
              }
            ],
            forwardEvents,
            ...use
          ]
        },
        {
          class: classMap({
            [className]: true,
            "mdc-icon-button": true,
            "mdc-icon-button--on": !isUninitializedValue(pressed) && pressed,
            "mdc-icon-button--touch": touch,
            "mdc-icon-button--display-flex": displayFlex,
            "smui-icon-button--size-button": size === "button",
            "mdc-icon-button--reduced-size": size === "mini" || size === "button",
            "mdc-card__action": context === "card:action",
            "mdc-card__action--icon": context === "card:action",
            "mdc-top-app-bar__navigation-icon": context === "top-app-bar:navigation",
            "mdc-top-app-bar__action-item": context === "top-app-bar:action",
            "mdc-snackbar__dismiss": context === "snackbar:actions",
            "mdc-data-table__pagination-button": context === "data-table:pagination",
            "mdc-data-table__sort-icon-button": context === "data-table:sortable-header-cell",
            "mdc-dialog__close": context === "dialog:header" && action === "close",
            ...internalClasses
          })
        },
        {
          style: Object.entries(internalStyles).map(([name, value]) => `${name}: ${value};`).concat([style]).join(" ")
        },
        {
          "aria-pressed": !isUninitializedValue(pressed) ? pressed ? "true" : "false" : null
        },
        {
          "aria-label": pressed ? ariaLabelOn : ariaLabelOff
        },
        { "data-aria-label-on": ariaLabelOn },
        { "data-aria-label-off": ariaLabelOff },
        { "aria-describedby": ariaDescribedby },
        { href },
        actionProp,
        internalAttrs,
        $$restProps,
        { this: element }
      ),
      {
        this: ($$value) => {
          element = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `<div class="${"mdc-icon-button__ripple"}"></div>
  ${slots.default ? slots.default({}) : ``}${touch ? `<div class="${"mdc-icon-button__touch"}"></div>` : ``}`;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  let $dataStatus, $$unsubscribe_dataStatus;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { data } = $$props;
  const dataStatus = useQuery("reviewData", () => fetch(`${$page.url.origin}/api/db/reviews?${qs.stringify({ user: data.renter })}`).then((res) => res.json()));
  $$unsubscribe_dataStatus = subscribe(dataStatus, (value) => $dataStatus = value);
  const primaryImage = data.images[0];
  const extraImages = data.images.slice(1);
  let reviewPanelOpen = false;
  let review = "";
  async function submitReview() {
    const res = await fetch("/api/db/reviews", {
      method: "POST",
      body: JSON.stringify({
        user: $page.data.username,
        renter: data.renter,
        review
      })
    });
    if (!res.ok) {
      return {
        state: "error",
        text: (await res.json()).message
      };
    }
    review = "";
    queryClient.invalidateQueries("reviewData");
    return {
      state: "success",
      text: "Atsiliepimas i\u0161si\u0173stas"
    };
  }
  let rentBtnDisabled = false;
  async function send_rent_request() {
    const res = await fetch("/api/db/requests", {
      method: "POST",
      body: JSON.stringify({
        renter: data.renter,
        rentee: $page.data.username,
        itemId: data.id
      })
    });
    if (!res.ok) {
      const { message } = await res.json();
      if (message.startsWith("Daiktas") || message.startsWith("U\u017Eklausa")) {
        return { state: "warn", text: message };
      }
      rentBtnDisabled = true;
      return { state: "error", text: message };
    }
    rentBtnDisabled = true;
    return {
      state: "success",
      text: "U\u017Eklausa i\u0161si\u0173sta!"
    };
  }
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<div class="${"flex flex-col gap-8 mb-10"}"><div class="${"flex gap-8"}"><div class="${"space-y-4"}"><img${add_attribute("src", primaryImage, 0)} alt="${"primary"}" class="${"w-96 border rounded"}">

            ${each(extraImages, (image) => {
      return `<img class="${"w-96 border rounded"}"${add_attribute("src", image, 0)} alt="${"product"}">`;
    })}</div>
        <div class="${"w-full space-y-8"}"><h1 class="${"text-3xl"}">${escape(data.name)}</h1>
            <div class="${"space-y-2"}"><div class="${"flex items-center"}">${validate_component(PencilSquareIcon, "PencilSquareIcon").$$render($$result, { className: "inline-block w-6 h-6 mr-2" }, {}, {})}
                    <h2 class="${"inline-block"}">Apra\u0161ymas</h2></div>
                <hr class="${"shadow"}">
                <p>${escape(data.description)}</p></div>
            <div class="${"space-y-2"}"><div class="${"flex items-center"}">${validate_component(MoneyIcon, "MoneyIcon").$$render($$result, { className: "inline-block w-6 h-6 mr-2" }, {}, {})}
                    <h2 class="${"inline-block"}">Kaina</h2></div>
                <hr class="${"shadow"}">
                <p>${escape(data.price)} eur</p></div>
            <div class="${"space-y-2"}"><div class="${"flex items-center"}">${validate_component(UserIcon, "UserIcon").$$render($$result, { class: "inline-block w-6 h-6 mr-2" }, {}, {})}
                    <h2 class="${"inline-block"}">Nuomininkas</h2></div>

                <hr class="${"shadow"}">
                <p>${escape(data.renter)}</p></div>
            <div><h2 class="${"mb-2"}">Grup\u0117s</h2>
                <hr class="${"shadow mb-4"}">
                <div class="${"space-x-4"}">${each(data.groups, (group) => {
      return `<span class="${"rounded-full py-1 px-4 bg-blue-200"}">${escape(group)}</span>`;
    })}</div></div>
            ${validate_component(ActionButton, "ActionButton").$$render(
      $$result,
      {
        disabled: rentBtnDisabled,
        class: "w-full",
        onClick: send_rent_request
      },
      {},
      {
        default: () => {
          return `Nuomuotis!
            `;
        }
      }
    )}</div></div>
    <div class="${"flex flex-col gap-4"}"><p class="${"text-xl"}">Atsiliepimai apie ${escape(data.renter)}</p>
        ${validate_component(Accordion, "Accordion").$$render($$result, { class: "w-full" }, {}, {
      default: () => {
        return `${validate_component(Panel, "Panel").$$render(
          $$result,
          { open: reviewPanelOpen },
          {
            open: ($$value) => {
              reviewPanelOpen = $$value;
              $$settled = false;
            }
          },
          {
            default: () => {
              return `${validate_component(Header, "Header").$$render($$result, {}, {}, {
                icon: () => {
                  return `${validate_component(IconButton, "IconButton").$$render(
                    $$result,
                    {
                      slot: "icon",
                      toggle: true,
                      pressed: reviewPanelOpen
                    },
                    {},
                    {
                      default: () => {
                        return `${validate_component(Icon, "Icon").$$render($$result, { class: "material-icons", on: true }, {}, {
                          default: () => {
                            return `expand_less`;
                          }
                        })}
                        ${validate_component(Icon, "Icon").$$render($$result, { class: "material-icons" }, {}, {
                          default: () => {
                            return `expand_more`;
                          }
                        })}`;
                      }
                    }
                  )}`;
                },
                default: () => {
                  return `Palikti atsiliepim\u0105:
                    `;
                }
              })}
                ${validate_component(Content, "Content").$$render($$result, { class: "space-y-2" }, {}, {
                default: () => {
                  return `<div class="${"flex items-center"}">${validate_component(UserIcon, "UserIcon").$$render($$result, { class: "inline-block w-6 h-6 mr-2" }, {}, {})}
                        <span>${escape(data.renter)}</span></div>
                    <textarea class="${"border w-full p-4 "}" placeholder="${"Ra\u0161yti \u010Dia..."}">${review || ""}</textarea>
                    ${validate_component(ActionButton, "ActionButton").$$render(
                    $$result,
                    {
                      class: "w-full",
                      disabled: review.length < 4,
                      onClick: submitReview
                    },
                    {},
                    {
                      default: () => {
                        return `Si\u0173sti`;
                      }
                    }
                  )}`;
                }
              })}`;
            }
          }
        )}`;
      }
    })}
        ${$dataStatus.isLoading ? `<span>Kraunama...</span>` : `${$dataStatus.error ? `<span>Klaida: ${escape($dataStatus.error)}</span>` : `${each($dataStatus.data.reviews, (review2) => {
      return `<div class="${"flex items-center border rounded p-4 gap-4"}">${validate_component(UserIcon, "UserIcon").$$render($$result, { class: "w-8 h-8" }, {}, {})}
                    <div><span class="${"font-bold"}">${escape(review2.fk_reviewer)}</span>
                        <p>${escape(review2.review)}</p></div>
                </div>`;
    })}`}`}</div></div>`;
  } while (!$$settled);
  $$unsubscribe_page();
  $$unsubscribe_dataStatus();
  return $$rendered;
});
export {
  Page as default
};
