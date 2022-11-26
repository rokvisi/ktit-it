import { c as create_ssr_component, b as subscribe, e as escape, k as add_attribute, y as each, v as validate_component } from "../../../chunks/index.js";
import { U as UserIcon } from "../../../chunks/UserIcon.js";
import "../../../chunks/logger.js";
import { u as useQuery } from "../../../chunks/useQuery.js";
import { p as page } from "../../../chunks/stores.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let items;
  let $dataStatus, $$unsubscribe_dataStatus;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  const dataStatus = useQuery("repoData", () => fetch(`${$page.url.origin}/api/db/items`).then((res) => res.json()));
  $$unsubscribe_dataStatus = subscribe(dataStatus, (value) => $dataStatus = value);
  let textSearch = "";
  let filteredItems = [];
  items = $dataStatus.data;
  {
    {
      if (items) {
        const itemsMatchingName = items.filter((item) => item.name.toLowerCase().includes(textSearch.toLowerCase()));
        const itemsMatchingDescription = items.filter((item) => item.description.toLowerCase().includes(textSearch.toLowerCase()));
        const itemsMatchingGroup = items.filter((item) => item.groups.some((group) => group.toLowerCase().includes(textSearch.toLowerCase())));
        filteredItems = [];
        for (const item of itemsMatchingName) {
          if (filteredItems.findIndex((unique_item) => item.name === unique_item.name) === -1) {
            filteredItems.push(item);
          }
        }
        for (const item of itemsMatchingGroup) {
          if (filteredItems.findIndex((unique_item) => item.name === unique_item.name) === -1) {
            filteredItems.push(item);
          }
        }
        for (const item of itemsMatchingDescription) {
          if (filteredItems.findIndex((unique_item) => item.name === unique_item.name) === -1) {
            filteredItems.push(item);
          }
        }
      }
    }
  }
  $$unsubscribe_dataStatus();
  $$unsubscribe_page();
  return `${$dataStatus.isLoading ? `<span>Kraunama...</span>` : `${$dataStatus.error ? `<span>Klaida: ${escape($dataStatus.error)}</span>` : `<input class="${"w-full mb-4 border rounded p-4"}" type="${"text"}" placeholder="${"Ie\u0161koti..."}"${add_attribute("value", textSearch, 0)}>
    <div class="${"flex flex-col gap-4 mb-10"}">${each(filteredItems, (item) => {
    return `<div class="${"flex p-4 border rounded gap-4 hover:bg-gray-200 cursor-pointer"}"><img class="${"aspect-auto w-40"}"${add_attribute("src", item.images[0], 0)} alt="${"product"}">
                <div class="${"flex flex-col grow"}"><div class="${"mb-auto"}"><span class="${"text-lg mr-2"}">${escape(item.name)}</span>
                        <span class="${"inline-flex gap-2"}">${each(item.groups, (group) => {
      return `<span class="${"bg-blue-200 rounded-full px-2"}">${escape(group)}
                                </span>`;
    })}</span>

                        <p>${escape(item.description)}</p></div>
                    <div class="${"flex justify-between"}"><p>${escape(item.price)} eur / m\u0117n.</p>
                        <span>${validate_component(UserIcon, "UserIcon").$$render($$result, { class: "inline-block w-6 h-6" }, {}, {})}
                            <span>${escape(item.renter)}</span></span>
                    </div></div>
            </div>`;
  })}</div>`}`}`;
});
export {
  Page as default
};
