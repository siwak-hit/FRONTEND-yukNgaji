import { c as createComponent } from './astro-component_Cw92UQC9.mjs';
import 'piccolore';
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead } from './entrypoint_yiMmYQNI.mjs';
import { $ as $$Layout, r as renderScript } from './Layout_BEWJVp3A.mjs';
import { $ as $$Toast } from './Toast_C6Lm4Bf7.mjs';

const $$id = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Detail Ujian Hafalan - yukNgaji" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="px-6 py-8 min-h-screen"> <header class="flex items-center gap-3 mb-6"> <a href="/ujian-hafalan" class="btn-icon flex-shrink-0" aria-label="Kembali"> <i class="fa-solid fa-chevron-left"></i> </a> <div class="min-w-0"> <p id="subjectBadge" class="eyebrow">MEMUAT...</p> <h1 id="pageTitle" class="page-title truncate">Ujian Hafalan</h1> </div> </header> <section id="summaryCard" class="grid grid-cols-3 gap-3 mb-6"> <div class="card p-4 text-center"> <p class="eyebrow">Total</p> <p id="sumTotal" class="text-2xl font-bold text-ink mt-1">0</p> </div> <div class="card p-4 text-center" style="background-color: var(--accent-soft); border-color: transparent;"> <p class="eyebrow" style="color: var(--accent-strong);">Selesai</p> <p id="sumDone" class="text-2xl font-bold mt-1" style="color: var(--accent-strong);">0</p> </div> <div class="card p-4 text-center" style="background-color: var(--warning-soft); border-color: transparent;"> <p class="eyebrow" style="color: var(--warning);">Sisa</p> <p id="sumLeft" class="text-2xl font-bold mt-1" style="color: var(--warning);">0</p> </div> </section> <section class="card card-pad mb-6"> <div class="flex items-center justify-between mb-5"> <h2 class="section-title">Target Hafalan</h2> <div class="icon-chip" style="background-color: var(--accent-soft); color: var(--accent-strong);"> <i class="fa-solid fa-book-open"></i> </div> </div> <div id="sectionList" class="grid grid-cols-1 gap-3"> <div class="text-center py-6"> <i class="fa-solid fa-spinner fa-spin text-accent text-2xl"></i> </div> </div> </section> <section class="card card-pad mb-8"> <div class="flex items-center justify-between mb-5 gap-3"> <h2 class="section-title">Daftar Peserta</h2> <button onclick="createSessionPreview()" id="btnCreateSession" class="btn btn-primary !py-2.5 !px-5 text-sm flex-shrink-0">
Buat Sesi
</button> </div> <div id="studentList" class="grid grid-cols-2 gap-3"> <div class="col-span-2 text-center py-6"> <i class="fa-solid fa-spinner fa-spin text-accent text-2xl"></i> </div> </div> </section> </div> ${renderComponent($$result2, "Toast", $$Toast, {})} ` })} ${renderScript($$result, "D:/APK PENGAJIAN/APK PEMBELAJARAN/FRONTEND/src/pages/ujian-hafalan/[id].astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/APK PENGAJIAN/APK PEMBELAJARAN/FRONTEND/src/pages/ujian-hafalan/[id].astro", void 0);

const $$file = "D:/APK PENGAJIAN/APK PEMBELAJARAN/FRONTEND/src/pages/ujian-hafalan/[id].astro";
const $$url = "/ujian-hafalan/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$id,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
