import { c as createComponent } from './astro-component_Cw92UQC9.mjs';
import 'piccolore';
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead } from './entrypoint_yiMmYQNI.mjs';
import { $ as $$Layout, r as renderScript } from './Layout_BEWJVp3A.mjs';

const $$Maintenance = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Sedang Perbaikan - yukNgaji" }, { "default": async ($$result2) => renderTemplate`  ${maybeRenderHead()}<audio id="bgmAudio" src="/bgm.mp3" loop preload="auto"></audio> <div class="fixed inset-0 z-[100] bg-slate-50 font-sans text-slate-800 pattern-grid flex flex-col items-center justify-center p-6 overflow-hidden select-none" id="mainContainer"> <!-- Ornamen Geometris Statis (Z-index 10) --> <div class="absolute inset-0 pointer-events-none overflow-hidden z-10"> <div class="absolute top-10 left-10 w-32 h-32 bg-amber-300 rounded-full mix-blend-multiply filter blur-2xl opacity-60 animate-float" style="animation-duration: 4s;"></div> <div class="absolute bottom-10 right-10 w-40 h-40 bg-indigo-300 rounded-full mix-blend-multiply filter blur-2xl opacity-60 animate-float" style="animation-duration: 5s; animation-delay: 1s;"></div> </div> <!-- Card Utama (Z-index 20) --> <div class="bg-white/90 backdrop-blur-md border border-gray-100 p-8 rounded-[2.5rem] w-full max-w-sm shadow-2xl text-center relative z-20 animate-slide-up border-b-4 border-b-amber-400"> <!-- Ikon Tengah --> <div class="w-28 h-28 bg-amber-50 text-amber-500 rounded-full flex items-center justify-center text-5xl mx-auto mb-6 shadow-inner border border-amber-100 relative"> <i class="fa-solid fa-person-digging animate-bounce"></i> <div class="absolute -bottom-2 -right-2 bg-white w-10 h-10 rounded-full flex items-center justify-center text-xl text-indigo-500 shadow-md"> <i class="fa-solid fa-gear fa-spin"></i> </div> </div> <!-- Teks --> <h1 class="text-2xl font-black text-gray-800 mb-2">Tunggu Sebentar Ya!</h1> <p class="text-[10px] font-bold text-amber-600 mb-6 uppercase tracking-widest bg-amber-50 inline-block px-4 py-1.5 rounded-full border border-amber-200 shadow-sm">Sistem Sedang Diperbarui</p> <!-- Pesan --> <div class="bg-gray-50 border border-gray-200 p-5 rounded-2xl text-xs font-medium text-gray-500 leading-relaxed shadow-inner">
Kak Aziz lagi nyapu-nyapu dan ngeberesin sistem biar makin ngebut! <br><br> <span class="font-bold text-indigo-500 block mt-2 p-2 bg-indigo-50 rounded-xl border border-indigo-100"> <i class="fa-solid fa-bell mr-1"></i> Silakan tunggu kabar selanjutnya dari Kak Aziz ya!
</span> </div> </div> <!-- Wadah Bubble Paling Atas (Z-index 200) --> <div id="floatingContainer" class="absolute inset-0 pointer-events-none overflow-hidden z-[200]"> <!-- Javascript akan inject elemen bubble di sini --> </div> </div>  ${renderScript($$result2, "D:/APK PENGAJIAN/APK PEMBELAJARAN/FRONTEND/src/pages/maintenance.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "D:/APK PENGAJIAN/APK PEMBELAJARAN/FRONTEND/src/pages/maintenance.astro", void 0);

const $$file = "D:/APK PENGAJIAN/APK PEMBELAJARAN/FRONTEND/src/pages/maintenance.astro";
const $$url = "/maintenance";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
        __proto__: null,
        default: $$Maintenance,
        file: $$file,
        url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
