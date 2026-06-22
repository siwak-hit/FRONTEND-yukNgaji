import { c as createComponent } from './astro-component_Cw92UQC9.mjs';
import 'piccolore';
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead } from './entrypoint_yiMmYQNI.mjs';
import { $ as $$Layout, r as renderScript } from './Layout_BEWJVp3A.mjs';
import { $ as $$Toast } from './Toast_C6Lm4Bf7.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Ujian Hafalan - yukNgaji" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="px-6 py-8 min-h-screen"> <header class="flex items-center gap-3 mb-6"> <a href="/exams" class="btn-icon flex-shrink-0" aria-label="Kembali"> <i class="fa-solid fa-chevron-left"></i> </a> <div class="min-w-0"> <p class="eyebrow">Evaluasi Lisan</p> <h1 class="page-title">Ujian Hafalan</h1> </div> </header> <main id="oralExamList" class="space-y-4"> <div class="text-center py-10"> <i class="fa-solid fa-spinner fa-spin text-accent text-2xl"></i> </div> </main> </div> ${renderComponent($$result2, "Toast", $$Toast, {})} ` })} ${renderScript($$result, "D:/APK PENGAJIAN/APK PEMBELAJARAN/FRONTEND/src/pages/ujian-hafalan/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/APK PENGAJIAN/APK PEMBELAJARAN/FRONTEND/src/pages/ujian-hafalan/index.astro", void 0);

const $$file = "D:/APK PENGAJIAN/APK PEMBELAJARAN/FRONTEND/src/pages/ujian-hafalan/index.astro";
const $$url = "/ujian-hafalan";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
