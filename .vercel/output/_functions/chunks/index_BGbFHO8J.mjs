import { c as createComponent } from './astro-component_Cw92UQC9.mjs';
import 'piccolore';
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead } from './entrypoint_yiMmYQNI.mjs';
import { $ as $$Layout, r as renderScript } from './Layout_BEWJVp3A.mjs';
import { $ as $$Toast } from './Toast_C6Lm4Bf7.mjs';
import { $ as $$ModalAlert } from './ModalAlert_aDg7C6yF.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Login - yukNgaji" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="px-8 py-12 flex flex-col min-h-screen justify-center"> <header class="mb-12 text-center"> <div class="avatar w-20 h-20 mx-auto mb-7" style="border-radius: var(--r-xl);"> <i class="fa-solid fa-book-quran text-3xl"></i> </div> <h1 class="display-title mb-2">yukNgaji</h1> <p class="body-text">Selamat datang, silakan masuk ke akun Anda.</p> </header> <form id="loginForm" class="space-y-5"> <div> <label class="field-label">Username</label> <div class="relative"> <i class="fa-regular fa-user absolute left-4 top-1/2 -translate-y-1/2 text-tertiary pointer-events-none"></i> <input type="text" id="username" required class="field" style="padding-left: 2.75rem;" placeholder="Masukkan username"> </div> </div> <div> <label class="field-label">Password</label> <div class="relative"> <i class="fa-solid fa-lock absolute left-4 top-1/2 -translate-y-1/2 text-tertiary pointer-events-none"></i> <input type="password" id="password" required class="field" style="padding-left: 2.75rem;" placeholder="Masukkan password"> </div> </div> <button type="submit" id="btnSubmit" class="btn btn-primary w-full mt-2"> <span>Masuk Sekarang</span> <i class="fa-solid fa-arrow-right text-sm"></i> </button> </form> <p class="caption text-center mt-10 text-tertiary">© yukNgaji · Belajar mengaji jadi menyenangkan</p> </div> ${renderComponent($$result2, "Toast", $$Toast, {})} ${renderComponent($$result2, "ModalAlert", $$ModalAlert, {})} ` })} ${renderScript($$result, "D:/APK PENGAJIAN/APK PEMBELAJARAN/FRONTEND/src/pages/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/APK PENGAJIAN/APK PEMBELAJARAN/FRONTEND/src/pages/index.astro", void 0);

const $$file = "D:/APK PENGAJIAN/APK PEMBELAJARAN/FRONTEND/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
