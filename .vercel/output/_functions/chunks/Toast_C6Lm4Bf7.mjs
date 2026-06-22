import { c as createComponent } from './astro-component_Cw92UQC9.mjs';
import 'piccolore';
import { r as renderTemplate, m as maybeRenderHead } from './entrypoint_yiMmYQNI.mjs';
import 'clsx';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Toast = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", `<div id="toast-container" class="fixed z-[99999] transition-all duration-300 opacity-0 pointer-events-none 
    top-4 left-1/2 -translate-x-1/2 w-[90%] max-w-sm 
    sm:top-10 sm:right-10 sm:left-auto sm:translate-x-0"> <div id="toast-content" class="flex items-center p-4 rounded-xl shadow-lg text-white"> <div id="toast-icon" class="text-2xl mr-3"></div> <div> <h4 id="toast-title" class="font-bold text-sm"></h4> <p id="toast-msg" class="text-xs mt-0.5 opacity-90"></p> </div> </div> </div> <script>
    // Fungsi Global untuk memanggil Toast dari halaman mana saja
    window.showToast = (type, title, message) => {
        const container = document.getElementById('toast-container');
        const content = document.getElementById('toast-content');
        const icon = document.getElementById('toast-icon');
        const titleEl = document.getElementById('toast-title');
        const msgEl = document.getElementById('toast-msg');

        // Reset class
        content.className = 'flex items-center p-4 rounded-xl shadow-lg text-white';
        
        // Set Kategori
        if(type === 'info') {
            content.classList.add('bg-blue-500');
            icon.innerHTML = '<i class="fa-solid fa-circle-info"></i>';
        } else if(type === 'warning') {
            content.classList.add('bg-yellow-500');
            icon.innerHTML = '<i class="fa-solid fa-triangle-exclamation"></i>';
        } else if(type === 'danger') {
            content.classList.add('bg-red-500');
            icon.innerHTML = '<i class="fa-solid fa-circle-xmark"></i>';
        } else {
            content.classList.add('bg-green-500'); // Default / Success
            icon.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
        }

        titleEl.innerText = title;
        msgEl.innerText = message;

        // Tampilkan
        container.classList.remove('opacity-0', 'pointer-events-none');
        container.classList.add('opacity-100');

        // Sembunyikan setelah 3 detik
        setTimeout(() => {
            container.classList.remove('opacity-100');
            container.classList.add('opacity-0', 'pointer-events-none');
        }, 3000);
    }
<\/script>`])), maybeRenderHead());
}, "D:/APK PENGAJIAN/APK PEMBELAJARAN/FRONTEND/src/components/Toast.astro", void 0);

export { $$Toast as $ };
