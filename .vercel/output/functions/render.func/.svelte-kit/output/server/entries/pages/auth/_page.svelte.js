import { c as create_ssr_component, v as validate_component } from "../../../chunks/index.js";
import { B as Button_1 } from "../../../chunks/Button.js";
import { L as Label } from "../../../chunks/index4.js";
import "../../../chunks/ActionIcons.js";
import { T as Textfield } from "../../../chunks/Textfield.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let buttonsDisabled;
  const userInfo = { username: "user_1", password: "pass1" };
  let loading = false;
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    buttonsDisabled = !userInfo.username || !userInfo.password || loading;
    $$rendered = `<div class="${"flex flex-col items-center justify-center gap-8"}"><div class="${"inline-flex flex-col items-center gap-4 w-72 border p-4 rounded shadow"}"><p class="${"mr-auto"}">\u012Eveskite prisijungimo duomenis</p>
        ${validate_component(Textfield, "Textfield").$$render(
      $$result,
      {
        class: "w-full",
        type: "text",
        label: "Username",
        required: true,
        value: userInfo.username
      },
      {
        value: ($$value) => {
          userInfo.username = $$value;
          $$settled = false;
        }
      },
      {}
    )}
        ${validate_component(Textfield, "Textfield").$$render(
      $$result,
      {
        class: "w-full",
        type: "password",
        label: "Password",
        required: true,
        value: userInfo.password
      },
      {
        value: ($$value) => {
          userInfo.password = $$value;
          $$settled = false;
        }
      },
      {}
    )}

        ${``}

        <div class="${"flex w-full gap-4"}">${`${validate_component(Button_1, "Button").$$render(
      $$result,
      {
        class: "w-full",
        disabled: buttonsDisabled,
        variant: "outlined"
      },
      {},
      {
        default: () => {
          return `${validate_component(Label, "Label").$$render($$result, { underline: true }, {}, {
            default: () => {
              return `Prisijungti`;
            }
          })}`;
        }
      }
    )}
                ${validate_component(Button_1, "Button").$$render(
      $$result,
      {
        class: "w-full",
        disabled: buttonsDisabled,
        variant: "outlined"
      },
      {},
      {
        default: () => {
          return `${validate_component(Label, "Label").$$render($$result, {}, {}, {
            default: () => {
              return `Registruotis`;
            }
          })}`;
        }
      }
    )}`}</div></div>

    <p>/DEBUG AUTO-LOGIN/</p>
    <div class="${"flex gap-4"}"><div class="${"flex flex-col gap-2"}">${validate_component(Button_1, "Button").$$render(
      $$result,
      {
        disabled: buttonsDisabled,
        variant: "outlined"
      },
      {},
      {
        default: () => {
          return `${validate_component(Label, "Label").$$render($$result, { underline: true }, {}, {
            default: () => {
              return `[user_1]`;
            }
          })}`;
        }
      }
    )}
            ${validate_component(Button_1, "Button").$$render(
      $$result,
      {
        disabled: buttonsDisabled,
        variant: "outlined"
      },
      {},
      {
        default: () => {
          return `${validate_component(Label, "Label").$$render($$result, { underline: true }, {}, {
            default: () => {
              return `[user_2]`;
            }
          })}`;
        }
      }
    )}</div>

        <div class="${"flex flex-col gap-2"}">${validate_component(Button_1, "Button").$$render(
      $$result,
      {
        disabled: buttonsDisabled,
        variant: "outlined"
      },
      {},
      {
        default: () => {
          return `${validate_component(Label, "Label").$$render($$result, { underline: true }, {}, {
            default: () => {
              return `[renter_1]`;
            }
          })}`;
        }
      }
    )}
            ${validate_component(Button_1, "Button").$$render(
      $$result,
      {
        disabled: buttonsDisabled,
        variant: "outlined"
      },
      {},
      {
        default: () => {
          return `${validate_component(Label, "Label").$$render($$result, { underline: true }, {}, {
            default: () => {
              return `[renter_2]`;
            }
          })}`;
        }
      }
    )}</div>

        ${validate_component(Button_1, "Button").$$render(
      $$result,
      {
        disabled: buttonsDisabled,
        variant: "outlined"
      },
      {},
      {
        default: () => {
          return `${validate_component(Label, "Label").$$render($$result, { underline: true }, {}, {
            default: () => {
              return `[mod_1]`;
            }
          })}`;
        }
      }
    )}</div></div>`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
