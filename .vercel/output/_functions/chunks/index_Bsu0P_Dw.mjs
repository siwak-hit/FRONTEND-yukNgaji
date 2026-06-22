import { c as createComponent } from './astro-component_Cw92UQC9.mjs';
import 'piccolore';
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead } from './entrypoint_yiMmYQNI.mjs';
import { $ as $$Layout, r as renderScript } from './Layout_BEWJVp3A.mjs';
import { $ as $$Toast } from './Toast_C6Lm4Bf7.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Denah Tempat Duduk - yukNgaji" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="px-4 py-8 pb-32 min-h-screen flex flex-col bg-gray-50"> <header class="flex items-center gap-4 mb-6"> <a href="/dashboard" class="w-10 h-10 bg-white rounded-xl flex items-center justify-center border border-gray-100 shadow-sm text-gray-600 active:scale-95 transition-all"> <i class="fa-solid fa-chevron-left"></i> </a> <div> <h1 class="text-lg font-bold text-gray-800 leading-tight">Denah Duduk</h1> <p class="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Ketuk siswa, lalu ketuk kursi</p> </div> </header> <section class="mb-6"> <div class="flex items-center justify-between mb-3"> <h2 class="text-xs font-bold text-gray-500 uppercase tracking-widest">Belum Kebagian Kursi</h2> <button id="btnReset" class="text-[10px] bg-red-50 text-red-500 px-3 py-1.5 rounded-lg font-bold active:scale-95 transition-all"><i class="fa-solid fa-rotate-left mr-1"></i> Reset</button> </div> <div id="unassignedPool" class="flex gap-4 overflow-x-auto pb-4 pt-2 px-1 no-scrollbar min-h-[100px]"> <div class="flex items-center justify-center w-full text-xs text-gray-400 italic">Memuat data Siswa / Anak...</div> </div> </section> <section class="flex-1 bg-white p-6 rounded-3xl border border-gray-100 shadow-sm"> <div class="flex flex-col items-center mb-8"> <div class="bg-gray-100 p-1 rounded-xl flex gap-1 mb-6"> <button id="btnLayout2" class="px-4 py-2 text-xs font-bold rounded-lg bg-white shadow-sm text-cyan-600 transition-all">2 Kolom</button> <button id="btnLayout1" class="px-4 py-2 text-xs font-bold rounded-lg text-gray-400 hover:text-gray-600 transition-all">1 Kolom</button> </div> <div class="bg-gray-200 text-gray-400 text-[10px] font-bold uppercase tracking-widest px-8 py-2 rounded-b-xl border-t-4 border-gray-300">Papan Tulis / Ustadz</div> </div> <div id="classroomLayout" class="grid grid-cols-2 gap-x-6 gap-y-10"></div> </section> </div> ${renderComponent($$result2, "Toast", $$Toast, {})} <button id="btnRandomFixed" class="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-[60] bg-indigo-600 text-white px-6 py-3.5 rounded-full shadow-[0_10px_30px_rgba(79,70,229,0.4)] font-black text-sm flex items-center gap-2 active:scale-95 transition-all hover:bg-indigo-700 border-2 border-indigo-500"> <i class="fa-solid fa-shuffle"></i> Acak Duduk
</button> ` })} ${renderScript($$result, "D:/APK PENGAJIAN/APK PEMBELAJARAN/FRONTEND/src/pages/seats/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/APK PENGAJIAN/APK PEMBELAJARAN/FRONTEND/src/pages/seats/index.astro", void 0);

const $$file = "D:/APK PENGAJIAN/APK PEMBELAJARAN/FRONTEND/src/pages/seats/index.astro";
const $$url = "/seats";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
