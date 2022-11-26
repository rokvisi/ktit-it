import { c as create_ssr_component, e as escape, y as each, k as add_attribute, v as validate_component } from "../../../../chunks/index.js";
const MonthAnalytics = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let activeMonth;
  let { itemInfo } = $$props;
  const rentedPerMonth = itemInfo.rentedPerMonth.sort((lhs, rhs) => {
    if (lhs.year === rhs.year) {
      return lhs.month > rhs.month;
    }
    return lhs.year > rhs.year;
  });
  const lastIndex = rentedPerMonth.length - 1;
  let activeIndex = 0;
  const monthNameMap = {
    1: "Sausis",
    2: "Vasaris",
    3: "Kovas",
    4: "Balandis",
    5: "Gegu\u017E\u0117",
    6: "Bir\u017Eelis",
    7: "Liepa",
    8: "Rugpj\u016Btis",
    9: "Rugs\u0117jis",
    10: "Spalis",
    11: "Lapkritis",
    12: "Gruodis"
  };
  if ($$props.itemInfo === void 0 && $$bindings.itemInfo && itemInfo !== void 0)
    $$bindings.itemInfo(itemInfo);
  activeMonth = rentedPerMonth[activeIndex];
  return `<div class="${"inline-flex flex-col shadow border rounded-lg p-5 h-full"}"><div class="${"flex gap-4 items-center"}"><span class="${"text-lg"}">Pelnas per</span>
        <div class="${"flex items-center items-around gap-4"}"><button ${"disabled"} class="${"py-2 px-5 text-xl rounded-xl shadow border disabled:bg-gray-300 disabled:shadow-inner min-w-fit"}">${escape("<-")}</button>
            <span class="${"grow"}">${escape(activeMonth.year)} ${escape(monthNameMap[activeMonth.month])}</span>
            <button ${activeIndex + 1 > lastIndex ? "disabled" : ""} class="${"py-2 px-5 text-xl rounded-xl shadow border disabled:bg-gray-300 disabled:shadow-inner min-w-fit"}">${escape("->")}</button></div></div>

    <div class="${"flex items-end gap-2"}"><span class="${"text-lg text-green-500"}">\u20AC</span>
        <span class="${"text-2xl text-green-500"}">${escape(activeMonth.count * itemInfo.price)}</span></div></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const itemAnalytics = data.itemAnalytics;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div class="${"flex flex-col gap-4"}">${itemAnalytics.length === 0 ? `<p>\u0160iuo metu neturite i\u0161nuomot\u0173 daikt\u0173!</p>` : ``}

    ${each(itemAnalytics, (itemInfo) => {
    return `<div class="${"flex p-4 rounded shadow border gap-4"}"><p class="${"text-lg grow"}">${escape(itemInfo.name)}</p>

            <img class="${"w-40 aspect-square"}"${add_attribute("src", itemInfo.image, 0)} alt="${"nuotrauka"}">

            <div class="${"flex gap-4"}"><div class="${"inline-flex flex-col shadow border rounded-lg p-5 gap-4 h-full"}"><div class="${"flex flex-col"}"><span class="${"text-lg py-2"}">Visas pelnas</span>
                        <div class="${"flex items-end gap-2"}"><span class="${"text-lg text-green-500"}">\u20AC</span>
                            <span class="${"text-2xl text-green-500"}">${escape(itemInfo.totalProfit)}</span></div>
                    </div></div>

                ${validate_component(MonthAnalytics, "MonthAnalytics").$$render($$result, { itemInfo }, {}, {})}</div>
        </div>`;
  })}</div>`;
});
export {
  Page as default
};
