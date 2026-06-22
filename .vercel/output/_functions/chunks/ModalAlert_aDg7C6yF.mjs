import { c as createComponent } from './astro-component_Cw92UQC9.mjs';
import 'piccolore';
import { r as renderTemplate, m as maybeRenderHead } from './entrypoint_yiMmYQNI.mjs';
import 'clsx';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$ModalAlert = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", `<div id="modal-overlay" class="fixed inset-0 bg-black/40 z-40 opacity-0 pointer-events-none transition-opacity duration-300"></div> <div id="modal-container" class="fixed z-50 transition-all duration-300 opacity-0 pointer-events-none
    bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md rounded-t-3xl bg-white p-6 shadow-2xl translate-y-full
    sm:top-1/2 sm:bottom-auto sm:-translate-y-1/2 sm:rounded-3xl sm:w-[90%]"> <div class="flex flex-col items-center text-center"> <div id="modal-icon-wrapper" class="w-16 h-16 rounded-full flex items-center justify-center text-3xl mb-4"> <i id="modal-icon" class="fa-solid"></i> </div> <h3 id="modal-title" class="text-xl font-bold text-gray-800 mb-2"></h3> <p id="modal-msg" class="text-sm text-gray-500 mb-6"></p> <button onclick="closeModal()" class="w-full py-3 rounded-xl font-semibold text-white transition-colors" id="modal-btn">
Tutup
</button> </div> </div> <!-- CONFIRM (2 tombol + callback) — pengganti confirm() bawaan browser --> <div id="confirm-overlay" class="modal-overlay hidden" style="z-index: 10000;"> <div class="modal-sheet text-center" style="max-width: 22rem;"> <div class="sheet-grabber"></div> <div id="confirm-icon-wrap" class="icon-chip mx-auto mb-4" style="width:3.5rem;height:3.5rem;font-size:1.5rem;"> <i id="confirm-icon" class="fa-solid"></i> </div> <h3 id="confirm-title" class="section-title mb-2"></h3> <p id="confirm-msg" class="body-text mb-6"></p> <div class="flex gap-3"> <button id="confirm-cancel" class="btn btn-soft flex-1" style="background-color: var(--surface-sunken); color: var(--ink-secondary);">Batal</button> <button id="confirm-ok" class="btn flex-1" style="border-radius: var(--r-pill);">Ya</button> </div> </div> </div> <script>
    let _confirmCb = null;
    window.showConfirm = (title, message, onConfirm, opts = {}) => {
        const { type = 'danger', confirmText = 'Hapus', cancelText = 'Batal' } = opts;
        const overlay = document.getElementById('confirm-overlay');
        const iconWrap = document.getElementById('confirm-icon-wrap');
        const icon = document.getElementById('confirm-icon');
        const okBtn = document.getElementById('confirm-ok');
        const palette = {
            danger:  { c: 'var(--danger)',  soft: 'var(--danger-soft)',  ic: 'fa-triangle-exclamation' },
            warning: { c: 'var(--warning)', soft: 'var(--warning-soft)', ic: 'fa-circle-exclamation' },
            info:    { c: 'var(--info)',    soft: 'var(--info-soft)',    ic: 'fa-circle-info' },
            primary: { c: 'var(--accent)',  soft: 'var(--accent-soft)',  ic: 'fa-circle-question' }
        }[type] || {};
        iconWrap.style.backgroundColor = palette.soft;
        iconWrap.style.color = palette.c;
        icon.className = 'fa-solid ' + palette.ic;
        okBtn.style.backgroundColor = palette.c;
        okBtn.style.color = '#fff';
        okBtn.textContent = confirmText;
        document.getElementById('confirm-cancel').textContent = cancelText;
        document.getElementById('confirm-title').innerText = title;
        document.getElementById('confirm-msg').innerText = message;
        _confirmCb = onConfirm;
        overlay.classList.remove('hidden');
    };
    window.closeConfirm = () => { document.getElementById('confirm-overlay').classList.add('hidden'); _confirmCb = null; };
    document.getElementById('confirm-cancel').onclick = () => window.closeConfirm();
    document.getElementById('confirm-ok').onclick = () => { const cb = _confirmCb; window.closeConfirm(); if (cb) cb(); };
    document.getElementById('confirm-overlay').addEventListener('click', (e) => { if (e.target.id === 'confirm-overlay') window.closeConfirm(); });

    window.showModal = (type, title, message) => {
        const overlay = document.getElementById('modal-overlay');
        const container = document.getElementById('modal-container');
        const iconWrapper = document.getElementById('modal-icon-wrapper');
        const icon = document.getElementById('modal-icon');
        const btn = document.getElementById('modal-btn');
        const titleEl = document.getElementById('modal-title');
        const msgEl = document.getElementById('modal-msg');

        // Reset Classes
        iconWrapper.className = 'w-16 h-16 rounded-full flex items-center justify-center text-3xl mb-4';
        btn.className = 'w-full py-3 rounded-xl font-semibold text-white transition-colors';

        // Set Kategori
        if(type === 'info') {
            iconWrapper.classList.add('bg-blue-100', 'text-blue-500');
            btn.classList.add('bg-blue-500', 'hover:bg-blue-600');
            icon.className = 'fa-solid fa-circle-info';
        } else if(type === 'warning') {
            iconWrapper.classList.add('bg-yellow-100', 'text-yellow-600');
            btn.classList.add('bg-yellow-500', 'hover:bg-yellow-600');
            icon.className = 'fa-solid fa-triangle-exclamation';
        } else if(type === 'danger') {
            iconWrapper.classList.add('bg-red-100', 'text-red-500');
            btn.classList.add('bg-red-500', 'hover:bg-red-600');
            icon.className = 'fa-solid fa-circle-xmark';
        }

        titleEl.innerText = title;
        msgEl.innerText = message;

        // Tampilkan
        overlay.classList.remove('opacity-0', 'pointer-events-none');
        overlay.classList.add('opacity-100');
        
        container.classList.remove('opacity-0', 'pointer-events-none');
        // Mobile Animation: geser dari bawah. Desktop Animation: geser dari tengah
        if(window.innerWidth >= 640) {
            container.classList.remove('sm:-translate-y-[60%]'); // Reset state
        } else {
            container.classList.remove('translate-y-full');
        }
    }

    window.closeModal = () => {
        const overlay = document.getElementById('modal-overlay');
        const container = document.getElementById('modal-container');
        
        overlay.classList.remove('opacity-100');
        overlay.classList.add('opacity-0', 'pointer-events-none');
        
        container.classList.add('opacity-0', 'pointer-events-none');
        if(window.innerWidth >= 640) {
            container.classList.add('sm:-translate-y-[60%]'); // Sedikit turun pas hilang
        } else {
            container.classList.add('translate-y-full'); // Turun ke bawah
        }
    }
<\/script>`])), maybeRenderHead());
}, "D:/APK PENGAJIAN/APK PEMBELAJARAN/FRONTEND/src/components/ModalAlert.astro", void 0);

export { $$ModalAlert as $ };
