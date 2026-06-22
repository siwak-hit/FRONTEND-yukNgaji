import { c as createComponent } from './astro-component_Cw92UQC9.mjs';
import 'piccolore';
import { r as renderTemplate, l as renderComponent, m as maybeRenderHead } from './entrypoint_yiMmYQNI.mjs';
import { r as renderScript, $ as $$Layout } from './Layout_BEWJVp3A.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", ' <script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.6.0/dist/confetti.browser.min.js"><\/script> ', ""])), renderComponent($$result, "Layout", $$Layout, { "title": "Leaderboard - yukNgaji" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="min-h-screen bg-gray-50 flex flex-col items-center pt-12 px-6 relative overflow-hidden font-sans pb-12"> <!-- Background Ornamen Khas yukNgaji --> <div class="absolute top-[-10%] left-[-10%] w-64 h-64 bg-green-100 rounded-full mix-blend-multiply filter blur-[80px] opacity-70"></div> <div class="absolute top-[20%] right-[-10%] w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-[80px] opacity-70"></div> <div class="z-10 text-center mb-8 w-full max-w-md animate-slide-up"> <div class="w-20 h-20 bg-white border border-gray-100 shadow-sm rounded-[2rem] flex items-center justify-center text-4xl mx-auto mb-4">
🏆
</div> <h1 class="text-3xl font-black text-gray-800 uppercase tracking-widest drop-shadow-sm mb-2">PERINGKAT</h1> <div class="inline-flex items-center gap-2 bg-indigo-50 px-4 py-1.5 rounded-full border border-indigo-100 shadow-sm"> <i class="fa-solid fa-book-open text-indigo-500 text-[10px]"></i> <p class="text-indigo-700 font-bold uppercase tracking-widest text-[10px]" id="lbSubtitle">Memuat data...</p> </div> </div> <!-- Wadah List Leaderboard --> <div id="leaderboardContainer" class="w-full max-w-md space-y-3 z-10"> <div class="text-center py-12 bg-white rounded-[2rem] border border-gray-100 shadow-sm"><i class="fa-solid fa-spinner fa-spin text-green-500 text-3xl"></i></div> </div> <!-- [BARU] Kartu Penjelasan Sistem Poin --> <div id="infoScoring" class="w-full max-w-md mt-6 bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm z-10 hidden opacity-0 transform translate-y-4 transition-all duration-700"> <h3 class="text-xs font-black text-gray-800 uppercase tracking-widest mb-4 flex items-center gap-2"> <i class="fa-solid fa-circle-info text-blue-500 text-lg"></i> Rahasia Poin Klasemen
</h3> <div class="space-y-3"> <div class="flex items-start gap-3 bg-gray-50 p-3 rounded-2xl border border-gray-100"> <div class="text-xl">🎯</div> <div> <p class="text-[10px] font-black text-gray-700 uppercase">Akurasi Jawaban (80%)</p> <p class="text-[9px] text-gray-500 font-medium leading-relaxed mt-0.5">Nilai murni dari jawaban benarmu. Bobotnya paling besar!</p> </div> </div> <div class="flex items-start gap-3 bg-gray-50 p-3 rounded-2xl border border-gray-100"> <div class="text-xl">⏱️</div> <div> <p class="text-[10px] font-black text-gray-700 uppercase">Kecepatan Waktu (10%)</p> <p class="text-[9px] text-gray-500 font-medium leading-relaxed mt-0.5">Semakin banyak sisa waktu yang kamu miliki, semakin besar bonus poinnya.</p> </div> </div> <div class="flex items-start gap-3 bg-gray-50 p-3 rounded-2xl border border-gray-100"> <div class="text-xl">🚀</div> <div> <p class="text-[10px] font-black text-gray-700 uppercase">Siapa Cepat (10%)</p> <p class="text-[9px] text-gray-500 font-medium leading-relaxed mt-0.5">Urutan pengumpulan di kelas. Yang pertama kumpul otomatis dapat poin maksimal!</p> </div> </div> </div> <div class="mt-6 pt-4 border-t border-dashed border-gray-200 text-center"> <p class="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Kamu boleh menutup browser ini.</p> </div> </div> </div> ` }), renderScript($$result, "D:/APK PENGAJIAN/APK PEMBELAJARAN/FRONTEND/src/pages/leaderboard-pr/index.astro?astro&type=script&index=0&lang.ts"));
}, "D:/APK PENGAJIAN/APK PEMBELAJARAN/FRONTEND/src/pages/leaderboard-pr/index.astro", void 0);

const $$file = "D:/APK PENGAJIAN/APK PEMBELAJARAN/FRONTEND/src/pages/leaderboard-pr/index.astro";
const $$url = "/leaderboard-pr";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
