import { c as createComponent } from './astro-component_Cw92UQC9.mjs';
import 'piccolore';
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead } from './entrypoint_yiMmYQNI.mjs';
import { $ as $$Layout, r as renderScript } from './Layout_BEWJVp3A.mjs';
import { $ as $$PhotoBooth } from './PhotoBooth_DQs43wMj.mjs';
import { $ as $$Toast } from './Toast_C6Lm4Bf7.mjs';

const $$id = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Galeri Anak - yukNgaji" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="px-4 sm:px-6 py-8 pb-32 min-h-screen bg-gray-50 flex flex-col"> <header class="flex justify-between items-center mb-6"> <div class="flex items-center gap-3"> <a href="/galeri" class="w-10 h-10 bg-white rounded-xl flex items-center justify-center border border-gray-100 shadow-sm text-gray-600 active:scale-95 transition-all shrink-0"> <i class="fa-solid fa-chevron-left"></i> </a> <div class="min-w-0"> <h1 class="text-lg sm:text-xl font-bold text-gray-800 tracking-tight truncate capitalize" id="studentName">Memuat...</h1> <p class="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-0.5">Galeri Raport</p> </div> </div> <button onclick="openCamera()" class="w-10 h-10 bg-purple-600 text-white rounded-xl shadow-lg shadow-purple-600/30 flex items-center justify-center active:scale-95 transition-all shrink-0"> <i class="fa-solid fa-camera"></i> </button> </header> <div class="bg-purple-50 border border-purple-100 p-4 rounded-2xl mb-6 flex items-start gap-3"> <i class="fa-solid fa-circle-info text-purple-500 mt-0.5"></i> <p class="text-[10px] font-bold text-purple-800 leading-relaxed">Semua foto yang diambil saat kuesioner, ujian, dan foto bebas akan terkumpul di sini untuk dipilih saat mencetak raport.</p> </div> <div id="galleryGrid" class="grid grid-cols-2 sm:grid-cols-3 gap-3 auto-rows-max"> <div class="col-span-full text-center py-20"> <i class="fa-solid fa-spinner fa-spin text-purple-400 text-3xl"></i> <p class="text-xs font-bold text-gray-400 mt-3 uppercase tracking-widest">Memuat Foto...</p> </div> </div> </div> <div id="modalPreviewFoto" class="fixed inset-0 bg-black/90 z-[100] hidden flex-col items-center justify-center p-4 backdrop-blur-md opacity-0 transition-opacity duration-300"> <div class="absolute top-6 right-6 flex items-center gap-3"> <button onclick="openDeleteModal()" class="w-10 h-10 bg-red-500/20 text-red-500 hover:bg-red-500 hover:text-white rounded-full flex items-center justify-center backdrop-blur-sm active:scale-95 transition-colors border border-red-500/50" title="Hapus Foto"><i class="fa-solid fa-trash-can"></i></button> <button onclick="closePreviewFoto()" class="w-10 h-10 bg-white/10 text-white rounded-full flex items-center justify-center backdrop-blur-sm active:scale-95"><i class="fa-solid fa-xmark text-xl"></i></button> </div> <img id="imgPreviewFull" src="" class="max-w-full max-h-[75vh] object-contain rounded-xl shadow-2xl scale-95 transition-transform duration-300"> <p id="labelPreviewFull" class="mt-4 bg-black/50 text-white px-4 py-2 rounded-xl text-xs font-bold backdrop-blur-sm"></p> </div> <div id="modalDeleteFoto" class="fixed inset-0 bg-black/60 z-[120] hidden items-center justify-center p-4 backdrop-blur-sm"> <div class="bg-white w-full max-w-sm rounded-3xl p-6 shadow-2xl relative animate-slide-up text-center border border-red-100"> <div class="w-16 h-16 bg-red-50 text-red-500 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4 border border-red-100 shadow-inner"> <i class="fa-solid fa-triangle-exclamation"></i> </div> <h3 class="font-black text-gray-800 text-lg mb-2">Hapus Foto Permanen?</h3> <p class="text-xs font-bold text-gray-500 leading-relaxed mb-4">
Foto ini akan dimusnahkan dari Database dan Storage. Tindakan ini tidak bisa dibatalkan.
</p> <div class="mb-6 text-left"> <label class="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">Password Admin</label> <input type="password" id="deletePassword" placeholder="Masukkan password..." class="w-full mt-1 px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm font-bold text-gray-800 outline-none focus:ring-2 focus:ring-red-500 transition-all"> </div> <div class="flex gap-3"> <button onclick="closeDeleteModal()" class="flex-1 py-3 bg-gray-100 text-gray-500 font-bold rounded-xl active:scale-95 transition-all">Batal</button> <button onclick="executeDeleteFoto()" id="btnConfirmDelete" class="flex-1 py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl shadow-md shadow-red-600/20 active:scale-95 transition-all flex items-center justify-center gap-2">
Hapus
</button> </div> </div> </div> ${renderComponent($$result2, "PhotoBooth", $$PhotoBooth, {})} ${renderComponent($$result2, "Toast", $$Toast, {})} ` })} ${renderScript($$result, "D:/APK PENGAJIAN/APK PEMBELAJARAN/FRONTEND/src/pages/galeri/[id].astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/APK PENGAJIAN/APK PEMBELAJARAN/FRONTEND/src/pages/galeri/[id].astro", void 0);

const $$file = "D:/APK PENGAJIAN/APK PEMBELAJARAN/FRONTEND/src/pages/galeri/[id].astro";
const $$url = "/galeri/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$id,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
