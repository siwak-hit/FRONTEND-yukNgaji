import { c as createComponent } from './astro-component_Cw92UQC9.mjs';
import 'piccolore';
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead } from './entrypoint_yiMmYQNI.mjs';
import { $ as $$Layout, r as renderScript } from './Layout_BEWJVp3A.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Atur Timer - yukNgaji" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="px-6 py-8 pb-32 min-h-screen flex flex-col bg-gray-50"> <header class="flex items-center gap-4 mb-8"> <a href="/dashboard" class="w-10 h-10 bg-white rounded-xl flex items-center justify-center border border-gray-100 shadow-sm text-gray-600 active:scale-95 transition-all"> <i class="fa-solid fa-chevron-left"></i> </a> <div> <h1 class="text-xl font-bold text-gray-800 tracking-tight">Atur Timer</h1> <p class="text-xs text-gray-400 mt-0.5 font-medium uppercase tracking-widest">Durasi Mengajar</p> </div> </header> <section class="mb-6 bg-white p-5 sm:p-6 rounded-3xl border border-gray-100 shadow-sm"> <h2 class="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4 ml-1">1. Pilih Durasi (Menit)</h2> <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-5"> <button class="btn-quick-time py-3.5 bg-green-50 text-green-600 font-bold rounded-xl active:scale-95 border border-green-100 transition-colors hover:bg-green-100" data-min="10">10 Menit</button> <button class="btn-quick-time py-3.5 bg-green-50 text-green-600 font-bold rounded-xl active:scale-95 border border-green-100 transition-colors hover:bg-green-100" data-min="15">15 Menit</button> <button class="btn-quick-time py-3.5 bg-green-50 text-green-600 font-bold rounded-xl active:scale-95 border border-green-100 transition-colors hover:bg-green-100" data-min="20">20 Menit</button> <button class="btn-quick-time py-3.5 bg-green-50 text-green-600 font-bold rounded-xl active:scale-95 border border-green-100 transition-colors hover:bg-green-100" data-min="30">30 Menit</button> </div> <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-3"> <input type="number" id="customMin" placeholder="Atau ketik manual (cth: 25)" class="w-full sm:flex-1 px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-sm font-bold text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 shadow-inner"> <button id="btnStartManual" class="w-full sm:w-28 py-3.5 bg-green-600 text-white font-bold rounded-xl active:scale-95 shadow-lg shadow-green-600/30 text-sm transition-transform flex items-center justify-center gap-2"> <i class="fa-solid fa-play"></i> Mulai
</button> </div> </section> <div class="flex items-center gap-4 mb-6 px-2"> <div class="h-px bg-gray-200 flex-1"></div> <span class="text-[10px] font-bold text-gray-400 uppercase tracking-widest bg-gray-50 px-2 rounded-full">Atau</span> <div class="h-px bg-gray-200 flex-1"></div> </div> <section class="mb-6 bg-white p-5 sm:p-6 rounded-3xl border border-gray-100 shadow-sm"> <h2 class="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4 ml-1">2. Selesai Pada Pukul</h2> <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-3"> <div class="w-full sm:flex-1 relative"> <i class="fa-regular fa-clock absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none text-lg"></i> <input type="time" id="targetTimeInput" class="w-full pl-11 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-base font-black text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-inner"> </div> <button id="btnStartTarget" class="w-full sm:w-28 py-3.5 bg-blue-600 text-white font-bold rounded-xl active:scale-95 shadow-lg shadow-blue-600/30 text-sm transition-transform flex items-center justify-center gap-2"> <i class="fa-solid fa-check"></i> Set
</button> </div> </section> </div> ` })} ${renderScript($$result, "D:/APK PENGAJIAN/APK PEMBELAJARAN/FRONTEND/src/pages/timer/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/APK PENGAJIAN/APK PEMBELAJARAN/FRONTEND/src/pages/timer/index.astro", void 0);

const $$file = "D:/APK PENGAJIAN/APK PEMBELAJARAN/FRONTEND/src/pages/timer/index.astro";
const $$url = "/timer";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
