const I="http://localhost:3000",r=new URLSearchParams(window.location.search),j=r.get("mode")||"simple",g=r.get("exam_id"),y=r.get("subject")||"Ujian",p=r.get("student_id"),f=r.get("final")==="true",b=r.get("feedback_required")==="true",v=r.get("preview")==="true",k=r.get("teacher_preview")==="true";let n=r.get("token")||localStorage.getItem("token")||sessionStorage.getItem("temp_pr_token");const L=()=>{if(j==="exam"&&g){document.getElementById("simpleFinishCard")?.classList.add("hidden"),document.getElementById("examFinishContent")?.classList.remove("hidden"),document.getElementById("pageSubtitle").innerText=f?"Penutupan Ujian":"Ujian Selesai",document.getElementById("lbSubtitle").innerText=`${y} • Hasil Ujian`,B();return}typeof confetti=="function"&&confetti({particleCount:100,spread:70,origin:{y:.4}})},B=async()=>{const t=document.getElementById("leaderboardContainer"),a=document.getElementById("infoScoring");try{if(!n)throw new Error("Token tidak ditemukan.");const i=new URLSearchParams({mode:"exam",exam_id:g}),u=await fetch(`${I}/api/onboarding/leaderboard-pr?${i.toString()}`,{headers:{Authorization:`Bearer ${n}`}}),o=await u.json();if(!u.ok||o.status!=="success")throw new Error(o.message||"Gagal mengambil leaderboard.");if(!o.data||o.data.length===0){t.innerHTML=`
                        <div class="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm text-center">
                            <div class="text-4xl mb-3">👻</div>
                            <p class="text-xs text-gray-400 font-bold uppercase tracking-widest">
                                Belum ada data pengerjaan.
                            </p>
                        </div>
                    `,x();return}typeof confetti=="function"&&confetti({particleCount:150,spread:80,origin:{y:.3}}),t.innerHTML=o.data.map((e,w)=>{const l=w+1,_=Math.min(100,Number(e.composite_score||0)),h=String(e.student_id)===String(p);let s="bg-white border-gray-100",c="from-gray-100 to-gray-200",m=`<div class="w-8 h-8 rounded-xl bg-gray-100 border border-gray-200 text-gray-400 font-black flex items-center justify-center shrink-0 shadow-sm">${l}</div>`,d="text-gray-700";l===1?(s="bg-amber-50 border-amber-200",c="from-amber-200 to-orange-300",m='<div class="w-11 h-11 rounded-[14px] bg-gradient-to-br from-amber-300 to-orange-500 border-2 border-white text-white font-black flex items-center justify-center shrink-0 shadow-md shadow-orange-500/40"><i class="fa-solid fa-crown text-lg"></i></div>',d="text-amber-900"):l===2?(s="bg-slate-50 border-slate-200",c="from-slate-200 to-slate-300",m='<div class="w-10 h-10 rounded-[12px] bg-gradient-to-br from-slate-300 to-slate-400 border-2 border-white text-white font-black flex items-center justify-center shrink-0 shadow-sm shadow-slate-400/40">2</div>',d="text-slate-800"):l===3&&(s="bg-orange-50 border-orange-200",c="from-orange-200 to-orange-300",m='<div class="w-9 h-9 rounded-[10px] bg-gradient-to-br from-orange-300 to-orange-400 border-2 border-white text-white font-black flex items-center justify-center shrink-0 shadow-sm shadow-orange-400/40">3</div>',d="text-orange-900"),h&&(s+=" ring-2 ring-indigo-400 shadow-md transform scale-[1.02]");const S=h?'<span class="text-[8px] bg-indigo-600 text-white px-2 py-0.5 rounded-full font-black uppercase tracking-widest shadow-sm">Ini Kamu!</span>':"",T=e.time_taken&&e.time_taken!=="-"?`⏱️ ${e.time_taken}s`:"🚀 Selesai";return`
                        <div class="relative w-full rounded-[2rem] border ${s} p-4 overflow-hidden shadow-sm transition-all animate-slide-up" style="animation-delay: ${w*100}ms; opacity: 0; animation-fill-mode: forwards;">
                            <div class="absolute top-0 left-0 h-full bg-gradient-to-r ${c} opacity-40 transition-all duration-1000 ease-out" style="width: 0%;" data-width="${_}%"></div>

                            <div class="relative z-10 flex items-center justify-between">
                                <div class="flex items-center gap-3">
                                    ${m}
                                    <div>
                                        <div class="flex items-center flex-wrap gap-1.5 mb-1">
                                            <p class="font-black uppercase tracking-wider text-sm ${d}">${e.name}</p>
                                            ${S}
                                        </div>
                                        <div class="flex items-center gap-2">
                                            <span class="text-[9px] bg-white/60 px-2 py-0.5 rounded border border-white/40 text-gray-600 font-bold shadow-sm">🎯 ${e.raw_score}</span>
                                            <span class="text-[9px] bg-white/60 px-2 py-0.5 rounded border border-white/40 text-gray-600 font-bold shadow-sm">${T}</span>
                                        </div>
                                    </div>
                                </div>

                                <div class="text-right bg-white/80 px-3 py-2 rounded-2xl border border-white shadow-sm flex flex-col items-center justify-center min-w-[60px]">
                                    <p class="text-xl font-black ${d} leading-none drop-shadow-sm">${e.composite_score}</p>
                                    <p class="text-[7px] text-gray-500 font-bold uppercase tracking-widest mt-1">Poin</p>
                                </div>
                            </div>
                        </div>
                    `}).join(""),setTimeout(()=>{document.querySelectorAll("[data-width]").forEach(e=>{e.style.width=e.getAttribute("data-width")})},100),setTimeout(()=>{a.classList.remove("hidden");const e=document.getElementById("finalCloseText");e&&(e.innerText=f&&b?"Jangan tutup dulu. Tunggu misi terakhir muncul...":"Nilai sudah tersimpan. Kamu boleh menutup browser ini."),setTimeout(()=>{a.classList.replace("opacity-0","opacity-100"),a.classList.replace("translate-y-4","translate-y-0")},50),f&&b&&setTimeout(()=>{document.getElementById("modalFinalFeedback")?.classList.replace("hidden","flex")},3e3)},o.data.length*100+300)}catch(i){console.error(i),t.innerHTML=`
                    <div class="bg-white p-6 rounded-[2rem] border border-red-100 shadow-sm text-center">
                        <i class="fa-solid fa-triangle-exclamation text-red-500 text-3xl mb-3"></i>
                        <p class="text-xs text-red-600 font-bold">${i.message||"Gagal memuat klasemen."}</p>
                    </div>
                `,x()}},x=()=>{f&&b&&setTimeout(()=>{document.getElementById("modalFinalFeedback")?.classList.replace("hidden","flex")},3e3)},$=()=>{const t=new URLSearchParams;return p&&t.set("student_id",p),g&&t.set("exam_id",g),t.set("subject",y),n&&t.set("token",n),v&&t.set("preview","true"),k&&t.set("teacher_preview","true"),`/feedback?${t.toString()}`};window.goToFeedbackPage=()=>{window.location.href=$()};window.goToWrapped=()=>{const t=$(),a=new URLSearchParams;n&&a.set("token",n),v&&a.set("preview","true"),k&&a.set("teacher_preview","true"),a.set("after",t);const i=p||"preview_mode";window.location.href=`/wrapped/${encodeURIComponent(i)}?${a.toString()}`};L();
