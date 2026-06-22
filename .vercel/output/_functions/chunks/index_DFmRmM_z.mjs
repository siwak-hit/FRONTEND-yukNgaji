import { c as createComponent } from './astro-component_Cw92UQC9.mjs';
import 'piccolore';
import { m as maybeRenderHead, h as addAttribute, r as renderTemplate, o as renderSlot, l as renderComponent } from './entrypoint_yiMmYQNI.mjs';
import { $ as $$Layout, r as renderScript } from './Layout_BEWJVp3A.mjs';
import { $ as $$NavbarGuru } from './NavbarGuru_DS_UoIZt.mjs';
import 'clsx';
import { $ as $$Toast } from './Toast_C6Lm4Bf7.mjs';
import { $ as $$ModalAlert } from './ModalAlert_aDg7C6yF.mjs';

const $$PageHeader = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$PageHeader;
  const { title, eyebrow = "", sticky = false } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<header${addAttribute(["flex justify-between items-start gap-4 mb-6", sticky && "sticky top-0 z-30 pt-2 pb-3 -mx-6 px-6 bg-[var(--canvas)]/85 backdrop-blur"], "class:list")}> <div class="min-w-0"> ${eyebrow && renderTemplate`<p class="eyebrow mb-1.5">${eyebrow}</p>`} <h1 class="page-title truncate">${title}</h1> </div> <div class="flex-shrink-0"> ${renderSlot($$result, $$slots["action"])} </div> </header>`;
}, "D:/APK PENGAJIAN/APK PEMBELAJARAN/FRONTEND/src/components/ui/PageHeader.astro", void 0);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Daftar Anak - yukNgaji" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="px-6 py-8 pb-32 min-h-screen flex flex-col"> ${renderComponent($$result2, "PageHeader", $$PageHeader, { "title": "Data Anak", "eyebrow": "Manajemen Kelas" }, { "action": async ($$result3) => renderTemplate`<button onclick="openAddModal()" class="fab" aria-label="Tambah anak"> <i class="fa-solid fa-plus text-lg"></i> </button>` })} <section class="space-y-4 mb-6"> <div class="relative"> <i class="fa-solid fa-magnifying-glass absolute left-4 top-1/2 -translate-y-1/2 text-tertiary text-sm pointer-events-none"></i> <input type="text" id="searchInput" class="field field-search" placeholder="Cari nama Anak..."> </div> <div class="flex gap-2 overflow-x-auto no-scrollbar pb-1"> <button class="filter-btn chip is-active" data-grade="all">Semua</button> <button class="filter-btn chip" data-grade="Iqro 1-3">Iqro 1-3</button> <button class="filter-btn chip" data-grade="Iqro 4-6">Iqro 4-6</button> <button class="filter-btn chip" data-grade="Al-Quran">Al-Quran</button> </div> </section> <section class="flex-1"> <div id="studentContainer" class="space-y-3"> <div class="skeleton card h-[4.5rem]"></div> <div class="skeleton card h-[4.5rem]"></div> <div class="skeleton card h-[4.5rem]"></div> </div> <div id="pagination" class="mt-8 flex justify-center items-center gap-4 hidden"> <button id="prevPage" class="btn-icon disabled:opacity-30" aria-label="Sebelumnya"> <i class="fa-solid fa-chevron-left text-sm"></i> </button> <span id="pageInfo" class="caption font-semibold text-secondary">Hal 1 dari 1</span> <button id="nextPage" class="btn-icon disabled:opacity-30" aria-label="Berikutnya"> <i class="fa-solid fa-chevron-right text-sm"></i> </button> </div> </section> </div> <div id="modalStudent" class="modal-overlay hidden"> <div class="modal-sheet"> <div class="sheet-grabber"></div> <div class="flex justify-between items-center mb-6"> <h3 id="modalTitle" class="section-title">Tambah Anak Baru</h3> <button onclick="closeStudentModal()" class="btn-icon !w-9 !h-9" aria-label="Tutup"><i class="fa-solid fa-xmark"></i></button> </div> <form id="formStudent" class="space-y-4"> <div> <label class="field-label">Nama Lengkap</label> <input type="text" id="inpName" required class="field field-sunken" placeholder="Misal: Budi Santoso"> </div> <div> <label class="field-label">Tingkat Kelas</label> <select id="inpGrade" class="field field-sunken"> <option value="Iqro 1-3">Iqro 1-3</option> <option value="Iqro 4-6">Iqro 4-6</option> <option value="Al-Quran">Al-Quran</option> </select> </div> <div> <label class="field-label">Umur (Opsional)</label> <input type="number" id="inpAge" min="3" max="99" class="field field-sunken" placeholder="Misal: 8"> </div> <button type="submit" id="btnSaveStudent" class="btn btn-primary w-full mt-2">
Simpan Data
</button> </form> </div> </div> ${renderComponent($$result2, "NavbarGuru", $$NavbarGuru, { "activeMenu": "students" })} ${renderComponent($$result2, "Toast", $$Toast, {})} ${renderComponent($$result2, "ModalAlert", $$ModalAlert, {})} ` })} ${renderScript($$result, "D:/APK PENGAJIAN/APK PEMBELAJARAN/FRONTEND/src/pages/students/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/APK PENGAJIAN/APK PEMBELAJARAN/FRONTEND/src/pages/students/index.astro", void 0);

const $$file = "D:/APK PENGAJIAN/APK PEMBELAJARAN/FRONTEND/src/pages/students/index.astro";
const $$url = "/students";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
