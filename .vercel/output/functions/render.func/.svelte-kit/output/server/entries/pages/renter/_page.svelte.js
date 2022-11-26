import { c as create_ssr_component, v as validate_component, l as listen, p as bubble, q as prevent_default, r as stop_propagation, d as compute_rest_props, g as get_current_component, f as getContext, i as spread, t as escape_attribute_value, j as escape_object, k as add_attribute, s as setContext, y as each, e as escape } from "../../../chunks/index.js";
import { A as ActionButton } from "../../../chunks/ActionButton.js";
import { T as Textfield } from "../../../chunks/Textfield.js";
import { t as trycatchasync } from "../../../chunks/trycatch.js";
import _ from "underscore";
const DataEdit = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let disabled;
  let { item } = $$props;
  const fields = {
    name: item.name,
    description: item.description,
    price: item.price
  };
  async function onSave() {
    const res = await fetch("/api/db/items", {
      method: "PUT",
      body: JSON.stringify({ item_id: item.id, ...fields })
    });
    if (!res.ok)
      return { state: "error", text: res.statusText };
    item.name = fields.name;
    item.description = fields.description;
    item.price = fields.price;
    return {
      state: "success",
      text: "I\u0161saugota s\u0117kmingai!"
    };
  }
  if ($$props.item === void 0 && $$bindings.item && item !== void 0)
    $$bindings.item(item);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    disabled = item.name === fields.name && item.price === fields.price && item.description === fields.description;
    $$rendered = `<div class="${"grid grid-cols-2 gap-8"}"><div><p>Pavadinimas:</p>
        ${validate_component(Textfield, "Textfield").$$render(
      $$result,
      {
        class: "w-full",
        variant: "outlined",
        type: "text",
        value: fields.name
      },
      {
        value: ($$value) => {
          fields.name = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div>
    <div><p>Kaina (eur / m\u0117n):</p>
        ${validate_component(Textfield, "Textfield").$$render(
      $$result,
      {
        class: "w-full",
        variant: "outlined",
        type: "number",
        value: fields.price
      },
      {
        value: ($$value) => {
          fields.price = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div>

    <div class="${"col-span-full"}"><p>Apra\u0161ymas:</p>
        ${validate_component(Textfield, "Textfield").$$render(
      $$result,
      {
        class: "w-full",
        helperLine$style: "width: 100%;",
        textarea: true,
        value: fields.description
      },
      {
        value: ($$value) => {
          fields.description = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div>
    ${validate_component(ActionButton, "ActionButton").$$render(
      $$result,
      {
        class: "col-span-full",
        disabled,
        onClick: onSave
      },
      {},
      {
        default: () => {
          return `I\u0161saugoti Pakeitimus`;
        }
      }
    )}</div>`;
  } while (!$$settled);
  return $$rendered;
});
function classMap$1(classObj) {
  return Object.entries(classObj).filter(([name, value]) => name !== "" && value).map(([name]) => name).join(" ");
}
function exclude$1(obj, keys) {
  let names = Object.getOwnPropertyNames(obj);
  const newObj = {};
  for (let i = 0; i < names.length; i++) {
    const name = names[i];
    const cashIndex = name.indexOf("$");
    if (cashIndex !== -1 && keys.indexOf(name.substring(0, cashIndex + 1)) !== -1) {
      continue;
    }
    if (keys.indexOf(name) !== -1) {
      continue;
    }
    newObj[name] = obj[name];
  }
  return newObj;
}
const oldModifierRegex$1 = /^[a-z]+(?::(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$/;
const newModifierRegex$1 = /^[^$]+(?:\$(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$/;
function forwardEventsBuilder$1(component) {
  let $on;
  let events = [];
  component.$on = (fullEventType, callback) => {
    let eventType = fullEventType;
    let destructor = () => {
    };
    if ($on) {
      destructor = $on(eventType, callback);
    } else {
      events.push([eventType, callback]);
    }
    const oldModifierMatch = eventType.match(oldModifierRegex$1);
    if (oldModifierMatch && console) {
      console.warn('Event modifiers in SMUI now use "$" instead of ":", so that all events can be bound with modifiers. Please update your event binding: ', eventType);
    }
    return () => {
      destructor();
    };
  };
  function forward(e) {
    bubble(component, e);
  }
  return (node) => {
    const destructors = [];
    const forwardDestructors = {};
    $on = (fullEventType, callback) => {
      let eventType = fullEventType;
      let handler = callback;
      let options = false;
      const oldModifierMatch = eventType.match(oldModifierRegex$1);
      const newModifierMatch = eventType.match(newModifierRegex$1);
      const modifierMatch = oldModifierMatch || newModifierMatch;
      if (eventType.match(/^SMUI:\w+:/)) {
        const newEventTypeParts = eventType.split(":");
        let newEventType = "";
        for (let i = 0; i < newEventTypeParts.length; i++) {
          newEventType += i === newEventTypeParts.length - 1 ? ":" + newEventTypeParts[i] : newEventTypeParts[i].split("-").map((value) => value.slice(0, 1).toUpperCase() + value.slice(1)).join("");
        }
        console.warn(`The event ${eventType.split("$")[0]} has been renamed to ${newEventType.split("$")[0]}.`);
        eventType = newEventType;
      }
      if (modifierMatch) {
        const parts = eventType.split(oldModifierMatch ? ":" : "$");
        eventType = parts[0];
        const eventOptions = parts.slice(1).reduce((obj, mod) => {
          obj[mod] = true;
          return obj;
        }, {});
        if (eventOptions.passive) {
          options = options || {};
          options.passive = true;
        }
        if (eventOptions.nonpassive) {
          options = options || {};
          options.passive = false;
        }
        if (eventOptions.capture) {
          options = options || {};
          options.capture = true;
        }
        if (eventOptions.once) {
          options = options || {};
          options.once = true;
        }
        if (eventOptions.preventDefault) {
          handler = prevent_default(handler);
        }
        if (eventOptions.stopPropagation) {
          handler = stop_propagation(handler);
        }
      }
      const off = listen(node, eventType, handler, options);
      const destructor = () => {
        off();
        const idx = destructors.indexOf(destructor);
        if (idx > -1) {
          destructors.splice(idx, 1);
        }
      };
      destructors.push(destructor);
      if (!(eventType in forwardDestructors)) {
        forwardDestructors[eventType] = listen(node, eventType, forward);
      }
      return destructor;
    };
    for (let i = 0; i < events.length; i++) {
      $on(events[i][0], events[i][1]);
    }
    return {
      destroy: () => {
        for (let i = 0; i < destructors.length; i++) {
          destructors[i]();
        }
        for (let entry of Object.entries(forwardDestructors)) {
          entry[1]();
        }
      }
    };
  };
}
function prefixFilter$1(obj, prefix) {
  let names = Object.getOwnPropertyNames(obj);
  const newObj = {};
  for (let i = 0; i < names.length; i++) {
    const name = names[i];
    if (name.substring(0, prefix.length) === prefix) {
      newObj[name.substring(prefix.length)] = obj[name];
    }
  }
  return newObj;
}
const Checkbox = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "use",
    "class",
    "style",
    "disabled",
    "touch",
    "indeterminate",
    "group",
    "checked",
    "value",
    "valueKey",
    "input$use",
    "input$class",
    "getId",
    "getElement"
  ]);
  var _a;
  forwardEventsBuilder$1(get_current_component());
  let uninitializedValue = () => {
  };
  function isUninitializedValue(value2) {
    return value2 === uninitializedValue;
  }
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let { style = "" } = $$props;
  let { disabled = false } = $$props;
  let { touch = false } = $$props;
  let { indeterminate = uninitializedValue } = $$props;
  let { group = uninitializedValue } = $$props;
  let { checked = uninitializedValue } = $$props;
  let { value = null } = $$props;
  let { valueKey = uninitializedValue } = $$props;
  let { input$use = [] } = $$props;
  let { input$class = "" } = $$props;
  let element;
  let instance;
  let checkbox;
  let internalClasses = {};
  let internalStyles = {};
  let nativeControlAttrs = {};
  let inputProps = (_a = getContext("SMUI:generic:input:props")) !== null && _a !== void 0 ? _a : {};
  let nativeChecked = isUninitializedValue(group) ? isUninitializedValue(checked) ? false : checked !== null && checked !== void 0 ? checked : void 0 : group.indexOf(value) !== -1;
  let context = getContext("SMUI:checkbox:context");
  let dataTableHeader = getContext("SMUI:data-table:row:header");
  let previousChecked = checked;
  let previousGroup = isUninitializedValue(group) ? [] : [...group];
  let previousNativeChecked = nativeChecked;
  function getId() {
    return inputProps && inputProps.id;
  }
  function getElement() {
    return element;
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.touch === void 0 && $$bindings.touch && touch !== void 0)
    $$bindings.touch(touch);
  if ($$props.indeterminate === void 0 && $$bindings.indeterminate && indeterminate !== void 0)
    $$bindings.indeterminate(indeterminate);
  if ($$props.group === void 0 && $$bindings.group && group !== void 0)
    $$bindings.group(group);
  if ($$props.checked === void 0 && $$bindings.checked && checked !== void 0)
    $$bindings.checked(checked);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.valueKey === void 0 && $$bindings.valueKey && valueKey !== void 0)
    $$bindings.valueKey(valueKey);
  if ($$props.input$use === void 0 && $$bindings.input$use && input$use !== void 0)
    $$bindings.input$use(input$use);
  if ($$props.input$class === void 0 && $$bindings.input$class && input$class !== void 0)
    $$bindings.input$class(input$class);
  if ($$props.getId === void 0 && $$bindings.getId && getId !== void 0)
    $$bindings.getId(getId);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  {
    {
      let callHandleChange = false;
      if (!isUninitializedValue(group)) {
        if (previousNativeChecked !== nativeChecked) {
          const idx = group.indexOf(value);
          if (nativeChecked && idx === -1) {
            group.push(value);
            group = group;
          } else if (!nativeChecked && idx !== -1) {
            group.splice(idx, 1);
            group = group;
          }
          callHandleChange = true;
        } else {
          const idxPrev = previousGroup.indexOf(value);
          const idx = group.indexOf(value);
          if (idxPrev > -1 && idx === -1) {
            nativeChecked = false;
            callHandleChange = true;
          } else if (idx > -1 && idxPrev === -1) {
            nativeChecked = true;
            callHandleChange = true;
          }
        }
      }
      if (isUninitializedValue(checked)) {
        if (!!previousNativeChecked !== !!nativeChecked) {
          callHandleChange = true;
        }
      } else if (checked !== (nativeChecked !== null && nativeChecked !== void 0 ? nativeChecked : null)) {
        if (checked === previousChecked) {
          checked = nativeChecked !== null && nativeChecked !== void 0 ? nativeChecked : null;
          if (!isUninitializedValue(indeterminate)) {
            indeterminate = false;
          }
        } else {
          nativeChecked = checked !== null && checked !== void 0 ? checked : void 0;
        }
        callHandleChange = true;
      }
      previousChecked = checked;
      previousGroup = isUninitializedValue(group) ? [] : [...group];
      previousNativeChecked = nativeChecked;
      if (callHandleChange && instance) {
        instance.handleChange();
      }
    }
  }
  return `<div${spread(
    [
      {
        class: escape_attribute_value(classMap$1({
          [className]: true,
          "mdc-checkbox": true,
          "mdc-checkbox--disabled": disabled,
          "mdc-checkbox--touch": touch,
          "mdc-data-table__header-row-checkbox": context === "data-table" && dataTableHeader,
          "mdc-data-table__row-checkbox": context === "data-table" && !dataTableHeader,
          ...internalClasses
        }))
      },
      {
        style: escape_attribute_value(Object.entries(internalStyles).map(([name, value2]) => `${name}: ${value2};`).concat([style]).join(" "))
      },
      escape_object(exclude$1($$restProps, ["input$"]))
    ],
    {}
  )}${add_attribute("this", element, 0)}><input${spread(
    [
      {
        class: escape_attribute_value(classMap$1({
          [input$class]: true,
          "mdc-checkbox__native-control": true
        }))
      },
      { type: "checkbox" },
      escape_object(inputProps),
      { disabled: disabled || null },
      {
        value: escape_attribute_value(isUninitializedValue(valueKey) ? value : valueKey)
      },
      {
        "data-indeterminate": escape_attribute_value(!isUninitializedValue(indeterminate) && indeterminate ? "true" : void 0)
      },
      escape_object(nativeControlAttrs),
      escape_object(prefixFilter$1($$restProps, "input$"))
    ],
    {}
  )}${add_attribute("this", checkbox, 0)}${add_attribute("checked", nativeChecked, 1)}>
  <div class="${"mdc-checkbox__background"}"><svg class="${"mdc-checkbox__checkmark"}" viewBox="${"0 0 24 24"}"><path class="${"mdc-checkbox__checkmark-path"}" fill="${"none"}" d="${"M1.73,12.91 8.1,19.28 22.79,4.59"}"></path></svg>
    <div class="${"mdc-checkbox__mixedmark"}"></div></div>
  <div class="${"mdc-checkbox__ripple"}"></div>
</div>`;
});
function classMap(classObj) {
  return Object.entries(classObj).filter(([name, value]) => name !== "" && value).map(([name]) => name).join(" ");
}
function exclude(obj, keys) {
  let names = Object.getOwnPropertyNames(obj);
  const newObj = {};
  for (let i = 0; i < names.length; i++) {
    const name = names[i];
    const cashIndex = name.indexOf("$");
    if (cashIndex !== -1 && keys.indexOf(name.substring(0, cashIndex + 1)) !== -1) {
      continue;
    }
    if (keys.indexOf(name) !== -1) {
      continue;
    }
    newObj[name] = obj[name];
  }
  return newObj;
}
const oldModifierRegex = /^[a-z]+(?::(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$/;
const newModifierRegex = /^[^$]+(?:\$(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$/;
function forwardEventsBuilder(component) {
  let $on;
  let events = [];
  component.$on = (fullEventType, callback) => {
    let eventType = fullEventType;
    let destructor = () => {
    };
    if ($on) {
      destructor = $on(eventType, callback);
    } else {
      events.push([eventType, callback]);
    }
    const oldModifierMatch = eventType.match(oldModifierRegex);
    if (oldModifierMatch && console) {
      console.warn('Event modifiers in SMUI now use "$" instead of ":", so that all events can be bound with modifiers. Please update your event binding: ', eventType);
    }
    return () => {
      destructor();
    };
  };
  function forward(e) {
    bubble(component, e);
  }
  return (node) => {
    const destructors = [];
    const forwardDestructors = {};
    $on = (fullEventType, callback) => {
      let eventType = fullEventType;
      let handler = callback;
      let options = false;
      const oldModifierMatch = eventType.match(oldModifierRegex);
      const newModifierMatch = eventType.match(newModifierRegex);
      const modifierMatch = oldModifierMatch || newModifierMatch;
      if (eventType.match(/^SMUI:\w+:/)) {
        const newEventTypeParts = eventType.split(":");
        let newEventType = "";
        for (let i = 0; i < newEventTypeParts.length; i++) {
          newEventType += i === newEventTypeParts.length - 1 ? ":" + newEventTypeParts[i] : newEventTypeParts[i].split("-").map((value) => value.slice(0, 1).toUpperCase() + value.slice(1)).join("");
        }
        console.warn(`The event ${eventType.split("$")[0]} has been renamed to ${newEventType.split("$")[0]}.`);
        eventType = newEventType;
      }
      if (modifierMatch) {
        const parts = eventType.split(oldModifierMatch ? ":" : "$");
        eventType = parts[0];
        const eventOptions = parts.slice(1).reduce((obj, mod) => {
          obj[mod] = true;
          return obj;
        }, {});
        if (eventOptions.passive) {
          options = options || {};
          options.passive = true;
        }
        if (eventOptions.nonpassive) {
          options = options || {};
          options.passive = false;
        }
        if (eventOptions.capture) {
          options = options || {};
          options.capture = true;
        }
        if (eventOptions.once) {
          options = options || {};
          options.once = true;
        }
        if (eventOptions.preventDefault) {
          handler = prevent_default(handler);
        }
        if (eventOptions.stopPropagation) {
          handler = stop_propagation(handler);
        }
      }
      const off = listen(node, eventType, handler, options);
      const destructor = () => {
        off();
        const idx = destructors.indexOf(destructor);
        if (idx > -1) {
          destructors.splice(idx, 1);
        }
      };
      destructors.push(destructor);
      if (!(eventType in forwardDestructors)) {
        forwardDestructors[eventType] = listen(node, eventType, forward);
      }
      return destructor;
    };
    for (let i = 0; i < events.length; i++) {
      $on(events[i][0], events[i][1]);
    }
    return {
      destroy: () => {
        for (let i = 0; i < destructors.length; i++) {
          destructors[i]();
        }
        for (let entry of Object.entries(forwardDestructors)) {
          entry[1]();
        }
      }
    };
  };
}
function prefixFilter(obj, prefix) {
  let names = Object.getOwnPropertyNames(obj);
  const newObj = {};
  for (let i = 0; i < names.length; i++) {
    const name = names[i];
    if (name.substring(0, prefix.length) === prefix) {
      newObj[name.substring(prefix.length)] = obj[name];
    }
  }
  return newObj;
}
let counter = 0;
const FormField = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["use", "class", "align", "noWrap", "inputId", "label$use", "getElement"]);
  forwardEventsBuilder(get_current_component());
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let { align = "start" } = $$props;
  let { noWrap = false } = $$props;
  let { inputId = "SMUI-form-field-" + counter++ } = $$props;
  let { label$use = [] } = $$props;
  let element;
  let label;
  setContext("SMUI:generic:input:props", { id: inputId });
  function getElement() {
    return element;
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.align === void 0 && $$bindings.align && align !== void 0)
    $$bindings.align(align);
  if ($$props.noWrap === void 0 && $$bindings.noWrap && noWrap !== void 0)
    $$bindings.noWrap(noWrap);
  if ($$props.inputId === void 0 && $$bindings.inputId && inputId !== void 0)
    $$bindings.inputId(inputId);
  if ($$props.label$use === void 0 && $$bindings.label$use && label$use !== void 0)
    $$bindings.label$use(label$use);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  return `<div${spread(
    [
      {
        class: escape_attribute_value(classMap({
          [className]: true,
          "mdc-form-field": true,
          "mdc-form-field--align-end": align === "end",
          "mdc-form-field--nowrap": noWrap
        }))
      },
      escape_object(exclude($$restProps, ["label$"]))
    ],
    {}
  )}${add_attribute("this", element, 0)}>${slots.default ? slots.default({}) : ``}
  <label${spread(
    [
      { for: escape_attribute_value(inputId) },
      escape_object(prefixFilter($$restProps, "label$"))
    ],
    {}
  )}${add_attribute("this", label, 0)}>${slots.label ? slots.label({}) : ``}</label>
</div>`;
});
const GroupEdit = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let saveDisabled;
  let { item } = $$props;
  let { groups } = $$props;
  let selectedGroups = [...item.groups];
  async function onGroupUpdate() {
    const removedGroups = _.difference(item.groups, selectedGroups);
    const addedGroups = _.difference(selectedGroups, item.groups);
    if (removedGroups.length === 0 && addedGroups.length === 0) {
      return {
        state: "warn",
        text: "Ner\u0105 joki\u0173 atlikt\u0173 pakeitim\u0173."
      };
    }
    const [res, error] = await trycatchasync(async () => await fetch("/api/db/groups", {
      method: "DELETE",
      body: JSON.stringify({
        itemId: item.id,
        addedGroups,
        removedGroups
      })
    }));
    if (error || !res.ok) {
      if (!error)
        return {
          state: "error",
          text: (await res.json()).message
        };
      return { state: "error", text: error.message };
    }
    item.groups = [...selectedGroups];
    return {
      state: "success",
      text: "S\u0117kmingai pakeistos grup\u0117s!"
    };
  }
  if ($$props.item === void 0 && $$bindings.item && item !== void 0)
    $$bindings.item(item);
  if ($$props.groups === void 0 && $$bindings.groups && groups !== void 0)
    $$bindings.groups(groups);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    saveDisabled = _.difference(item.groups, selectedGroups).length === 0 && _.difference(selectedGroups, item.groups).length === 0;
    $$rendered = `<div class="${"space-y-4"}"><p>Grup\u0117s:</p>
    <div class="${"space-x-4"}">${each(groups, (group) => {
      return `${validate_component(FormField, "FormField").$$render($$result, {}, {}, {
        label: () => {
          return `<span slot="${"label"}">${escape(group)}</span>`;
        },
        default: () => {
          return `${validate_component(Checkbox, "Checkbox").$$render(
            $$result,
            { value: group, group: selectedGroups },
            {
              group: ($$value) => {
                selectedGroups = $$value;
                $$settled = false;
              }
            },
            {}
          )}
                
            `;
        }
      })}`;
    })}</div>
    ${validate_component(ActionButton, "ActionButton").$$render(
      $$result,
      {
        class: "w-full",
        disabled: saveDisabled,
        onClick: onGroupUpdate
      },
      {},
      {
        default: () => {
          return `I\u0161saugoti Pakeitimus`;
        }
      }
    )}</div>`;
  } while (!$$settled);
  return $$rendered;
});
function isValidHttpUrl(str) {
  try {
    new URL(str);
  } catch (_2) {
    return false;
  }
  return true;
}
const ImageEdit = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { images } = $$props;
  let { itemId } = $$props;
  async function onImageDelete(url) {
    const res = await fetch("/api/db/images", {
      method: "DELETE",
      body: JSON.stringify({ url })
    });
    if (!res.ok)
      return { state: "error", text: res.statusText };
    setTimeout(() => images = images.filter((image) => image != url), 2e3);
    return {
      state: "success",
      text: "Nuotrauka s\u0117kmingai i\u0161trinta!"
    };
  }
  let newImageUrl = "";
  let urlInvalid;
  async function addNewImage() {
    if (newImageUrl.length === 0 || urlInvalid) {
      return {
        state: "warn",
        text: "\u012Evestas neteisingo formato URL!"
      };
    }
    const res = await fetch("/api/db/images", {
      method: "POST",
      body: JSON.stringify({ url: newImageUrl, itemId })
    });
    if (!res.ok)
      return {
        state: "error",
        text: (await res.json()).message
      };
    images = [...images, newImageUrl];
    newImageUrl = "";
    return {
      state: "success",
      text: "Nuotrauka s\u0117kmingai prid\u0117ta!"
    };
  }
  if ($$props.images === void 0 && $$bindings.images && images !== void 0)
    $$bindings.images(images);
  if ($$props.itemId === void 0 && $$bindings.itemId && itemId !== void 0)
    $$bindings.itemId(itemId);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<div class="${"space-y-4"}"><p>Nuotraukos:</p>
    ${each(images, (image) => {
      return `<div class="${"flex gap-8 border rounded p-4 items-center"}"><img class="${"w-40"}"${add_attribute("src", image, 0)} alt="${"product"}">
            <p class="${"grow"}">${escape(image)}</p>
            ${validate_component(ActionButton, "ActionButton").$$render($$result, { onClick: () => onImageDelete(image) }, {}, {
        default: () => {
          return `Naikinti`;
        }
      })}
        </div>`;
    })}
    <div class="${"space-y-4"}"><div class="${"w-full"}"><p>Naujos nuotraukos URL:</p>
            ${validate_component(Textfield, "Textfield").$$render(
      $$result,
      {
        type: "url",
        class: "w-full",
        helperLine$style: "width: 100%;",
        variant: "outlined",
        invalid: urlInvalid,
        value: newImageUrl
      },
      {
        invalid: ($$value) => {
          urlInvalid = $$value;
          $$settled = false;
        },
        value: ($$value) => {
          newImageUrl = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div>
        ${validate_component(ActionButton, "ActionButton").$$render(
      $$result,
      {
        class: "w-full",
        disabled: newImageUrl.length === 0 || !isValidHttpUrl(newImageUrl),
        onClick: addNewImage
      },
      {},
      {
        default: () => {
          return `Prid\u0117ti`;
        }
      }
    )}</div></div>`;
  } while (!$$settled);
  return $$rendered;
});
const ItemEdit = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { item } = $$props;
  let { groups } = $$props;
  if ($$props.item === void 0 && $$bindings.item && item !== void 0)
    $$bindings.item(item);
  if ($$props.groups === void 0 && $$bindings.groups && groups !== void 0)
    $$bindings.groups(groups);
  return `<div class="${"border rounded shadow mb-10"}"><p class="${"text-2xl p-4 bg-orange-100"}"><span class="${"italic text-gray-400"}">SKU: ${escape(item.id)}</span> | ${escape(item.name)}</p>
    <div class="${"p-8 space-y-8"}">${validate_component(DataEdit, "DataEdit").$$render($$result, { item }, {}, {})}
        ${validate_component(GroupEdit, "GroupEdit").$$render($$result, { item, groups }, {}, {})}
        ${validate_component(ImageEdit, "ImageEdit").$$render($$result, { images: item.images, itemId: item.id }, {}, {})}</div></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let items = data.items;
  let groups = data.groups;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<section class="${"flex flex-col gap-4"}">${items.length === 0 ? `<p>Neturite daikt\u0173 nuomai!</p>` : ``}
    ${each(items, (item) => {
    return `${validate_component(ItemEdit, "ItemEdit").$$render($$result, { item, groups }, {}, {})}`;
  })}</section>`;
});
export {
  Page as default
};
