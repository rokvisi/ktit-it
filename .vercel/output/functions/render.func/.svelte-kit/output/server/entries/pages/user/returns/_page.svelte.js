import { c as create_ssr_component, y as each, e as escape, k as add_attribute, v as validate_component } from "../../../../chunks/index.js";
import { A as ActionButton } from "../../../../chunks/ActionButton.js";
import { getYear, getMonth, getDate } from "date-fns";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let contracts = data.contracts;
  async function returnItem(contractId) {
    const res = await fetch("/api/db/contracts", {
      method: "PUT",
      body: JSON.stringify({ contractId })
    });
    if (!res.ok) {
      return { state: "error", text: "Klaida!" };
    }
    setTimeout(
      () => {
        contracts.find((c) => c.id === contractId).end_time = new Date();
        contracts = contracts;
      },
      3e3
    );
    return { state: "success", text: "Gr\u0105\u017Einta!" };
  }
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div class="${"flex flex-col gap-8"}">${contracts.length === 0 ? `<p>I\u0161sinuomot\u0173 daikt\u0173 n\u0117ra!</p>` : ``}

    ${each(contracts, (contract) => {
    return `<div class="${"flex gap-4 p-4 shadow border"}"><p class="${"grow text-lg"}">${escape(contract.name)}</p>
            <img${add_attribute("src", contract.url, 0)} alt="${"nuotrauka"}" class="${"w-40 aspect-square p-4 rounded border"}">
            <div class="${"flex flex-col justify-between shrink"}"><p class="${"text-center bg-blue-300 rounded shadow border py-2 px-4"}">I\u0161nuomota: ${escape(getYear(contract.start_time))}/${escape(getMonth(contract.start_time))}/${escape(getDate(contract.start_time))}</p>
                <div>${contract.end_time ? `<p class="${"text-center bg-green-300 rounded shadow border py-2 px-4"}">Gr\u0105\u017Einta: ${escape(getYear(contract.end_time))}/${escape(getMonth(contract.end_time))}/${escape(getDate(contract.end_time))}
                        </p>` : `${validate_component(ActionButton, "ActionButton").$$render(
      $$result,
      {
        class: "w-full",
        onClick: () => returnItem(contract.id)
      },
      {},
      {
        default: () => {
          return `Gr\u0105\u017Einti
                        `;
        }
      }
    )}`}
                </div></div>
        </div>`;
  })}</div>`;
});
export {
  Page as default
};
