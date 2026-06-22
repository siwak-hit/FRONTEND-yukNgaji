import { c as createComponent } from './astro-component_Cw92UQC9.mjs';
import 'piccolore';
import { m as maybeRenderHead, h as addAttribute, r as renderTemplate } from './entrypoint_yiMmYQNI.mjs';
import 'clsx';
import { r as renderScript } from './Layout_BEWJVp3A.mjs';

const $$NavbarGuru = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$NavbarGuru;
  const { activeMenu = "home" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<nav class="tabbar fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md px-4 pt-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] flex items-stretch z-40"> <a href="/dashboard"${addAttribute(`tabbar-item ${activeMenu === "home" ? "is-active" : ""}`, "class")}> <i class="fa-solid fa-house-chimney text-lg"></i> <span class="tabbar-label">Beranda</span> </a> <a href="/students"${addAttribute(`tabbar-item ${activeMenu === "students" ? "is-active" : ""}`, "class")}> <i class="fa-solid fa-user-graduate text-lg"></i> <span class="tabbar-label">Anak</span> </a> <a href="/bank-soal"${addAttribute(`tabbar-item ${activeMenu === "exam" ? "is-active" : ""}`, "class")}> <i class="fa-solid fa-book-open-reader text-lg"></i> <span class="tabbar-label">Bank Soal</span> </a> <a href="/consultations"${addAttribute(`tabbar-item ${activeMenu === "chat" ? "is-active" : ""}`, "class")}> <div class="relative"> <i class="fa-solid fa-comment-dots text-lg"></i> <span id="notifDot" class="absolute -top-1 -right-1 w-2 h-2 rounded-full hidden" style="background-color: var(--danger);"></span> </div> <span class="tabbar-label">Konsul</span> </a> </nav> ${renderScript($$result, "D:/APK PENGAJIAN/APK PEMBELAJARAN/FRONTEND/src/components/NavbarGuru.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/APK PENGAJIAN/APK PEMBELAJARAN/FRONTEND/src/components/NavbarGuru.astro", void 0);

export { $$NavbarGuru as $ };
