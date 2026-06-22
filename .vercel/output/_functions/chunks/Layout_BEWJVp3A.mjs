import { c as createComponent } from './astro-component_Cw92UQC9.mjs';
import 'piccolore';
import { q as createRenderInstruction, m as maybeRenderHead, r as renderTemplate, o as renderSlot, l as renderComponent, v as renderHead } from './entrypoint_yiMmYQNI.mjs';
import 'clsx';

async function renderScript(result, id) {
  const inlined = result.inlinedScripts.get(id);
  let content = "";
  if (inlined != null) {
    if (inlined) {
      content = `<script type="module">${inlined}</script>`;
    }
  } else {
    const resolved = await result.resolve(id);
    content = `<script type="module" src="${result.userAssetsBase ? (result.base === "/" ? "" : result.base) + result.userAssetsBase : ""}${resolved}"></script>`;
  }
  return createRenderInstruction({ type: "script", id, content });
}

const $$TimerBanner = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div id="timerBackdrop" class="hidden fixed inset-0 z-[90] bg-white/40 backdrop-blur-md transition-all duration-500"></div> <div id="timerBanner" class="hidden fixed top-4 left-1/2 -translate-x-1/2 z-[100] w-[90%] max-w-[400px] bg-gray-900 text-white p-3 rounded-2xl shadow-2xl shadow-gray-900/30 flex items-center justify-between transition-all duration-300"> <div class="flex items-center gap-3"> <div id="timerIconBox" class="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center text-amber-400"> <i class="fa-solid fa-hourglass-half animate-pulse"></i> </div> <div> <p id="timerLabel" class="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-0.5">Sisa Waktu</p> <h3 id="timerDisplay" class="text-xl font-black font-mono tracking-wider leading-none">00:00</h3> </div> </div> <button id="btnStopTimer" class="w-10 h-10 bg-red-500/20 text-red-500 rounded-xl flex items-center justify-center active:scale-95 transition-all"> <i class="fa-solid fa-stop"></i> </button> </div> ${renderScript($$result, "D:/APK PENGAJIAN/APK PEMBELAJARAN/FRONTEND/src/components/TimerBanner.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/APK PENGAJIAN/APK PEMBELAJARAN/FRONTEND/src/components/TimerBanner.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Layout;
  const { title = "yukNgaji" } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="id"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>', '</title><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Inter:opsz,wght@14..32,300;14..32,400;14..32,500;14..32,600;14..32,700&family=Amiri:wght@400;700&display=swap" rel="stylesheet"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"><link rel="manifest" href="/manifest.json"><meta name="theme-color" content="#ffffff"><link rel="apple-touch-icon" href="/icon-192x192.png"><meta name="mobile-web-app-capable" content="yes"><meta name="apple-mobile-web-app-capable" content="yes"><meta name="apple-mobile-web-app-status-bar-style" content="default"><meta name="apple-mobile-web-app-title" content="yukNgaji">', '</head> <body class="flex justify-center"> <main class="app-shell no-scrollbar"> ', " ", " </main> <script>\n        if ('serviceWorker' in navigator) {\n            window.addEventListener('load', () => {\n                navigator.serviceWorker.register('/sw.js')\n                    .then((registration) => {\n                        console.log('ServiceWorker registration successful with scope: ', registration.scope);\n                    }, (err) => {\n                        console.log('ServiceWorker registration failed: ', err);\n                    });\n            });\n        }\n    <\/script> </body> </html>"])), title, renderHead(), renderComponent($$result, "TimerBanner", $$TimerBanner, {}), renderSlot($$result, $$slots["default"]));
}, "D:/APK PENGAJIAN/APK PEMBELAJARAN/FRONTEND/src/layouts/Layout.astro", void 0);

export { $$Layout as $, renderScript as r };
