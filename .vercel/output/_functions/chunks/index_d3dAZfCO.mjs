import { c as createComponent } from './astro-component_Cw92UQC9.mjs';
import 'piccolore';
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead } from './entrypoint_yiMmYQNI.mjs';
import { $ as $$Layout, r as renderScript } from './Layout_BEWJVp3A.mjs';
import { $ as $$NavbarGuru } from './NavbarGuru_DS_UoIZt.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Pilih Siswa - Galeri yukNgaji" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="px-6 py-8 pb-32 min-h-screen bg-gray-50 flex flex-col"> <header class="flex items-center gap-4 mb-8"> <a href="/dashboard" class="w-10 h-10 bg-white rounded-xl flex items-center justify-center border border-gray-100 shadow-sm text-gray-600 active:scale-95 transition-all"> <i class="fa-solid fa-chevron-left"></i> </a> <div> <h1 class="text-xl font-bold text-gray-800 tracking-tight">Galeri Foto</h1> <p class="text-xs text-gray-400 mt-0.5 font-medium uppercase tracking-widest">Pilih Siswa</p> </div> </header> <div class="relative mb-6"> <i class="fa-solid fa-magnifying-glass absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"></i> <input type="text" id="searchInput" placeholder="Cari nama siswa..." class="w-full pl-11 pr-4 py-3.5 bg-white border border-gray-200 rounded-2xl text-sm font-bold focus:ring-2 focus:ring-purple-500 outline-none shadow-sm"> </div> <div id="studentList" class="grid grid-cols-1 sm:grid-cols-2 gap-3"> <div class="col-span-full text-center py-10"><i class="fa-solid fa-spinner fa-spin text-purple-500 text-2xl"></i></div> </div> </div> ${renderComponent($$result2, "NavbarGuru", $$NavbarGuru, { "activeMenu": "dashboard" })} ` })} ${renderScript($$result, "D:/APK PENGAJIAN/APK PEMBELAJARAN/FRONTEND/src/pages/galeri/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/APK PENGAJIAN/APK PEMBELAJARAN/FRONTEND/src/pages/galeri/index.astro", void 0);

const $$file = "D:/APK PENGAJIAN/APK PEMBELAJARAN/FRONTEND/src/pages/galeri/index.astro";
const $$url = "/galeri";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
