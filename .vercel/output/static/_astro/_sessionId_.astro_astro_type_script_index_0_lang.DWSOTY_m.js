const L="http://localhost:3000",C=localStorage.getItem("token"),P=window.location.pathname.split("/"),$=P[2],T=P[4];let m=null,f=600,x=600,y=null,r=[],k="setup",g=!1,p={},u={},h=null,b={},v={};const N=`oral_exam_session_${T}`,w=()=>{if(!g)return;const t={remainingSeconds:f,totalSeconds:x,hasSessionStarted:g,sessionMode:k,selectedStudents:r,assessmentScores:p,understandingScores:u,testedItems:b,activeStudentPerSection:v,activeUnderstandingStudent:h};localStorage.setItem(N,JSON.stringify(t))},V=()=>{const t=localStorage.getItem(N);if(!t)return!1;try{const e=JSON.parse(t);return f=e.remainingSeconds,x=e.totalSeconds,g=e.hasSessionStarted,k=e.sessionMode,r=e.selectedStudents,p=e.assessmentScores,u=e.understandingScores,b=e.testedItems||{},v=e.activeStudentPerSection||{},h=e.activeUnderstandingStudent||null,!0}catch(e){return console.error("Gagal load session storage",e),!1}},B=()=>{localStorage.removeItem(N)};window.resetSessionWithConfirm=()=>{confirm("Apakah Anda yakin ingin mengulang sesi ini? Semua progres penilaian saat ini di local storage akan dihapus.")&&(clearInterval(y),B(),window.location.reload())};document.addEventListener("DOMContentLoaded",()=>{const t=document.getElementById("sessionDashboardCard"),e=document.getElementById("floatingTimerWrapper");t&&e&&new IntersectionObserver(s=>{s.forEach(a=>{!a.isIntersecting&&g?(e.classList.remove("-translate-y-[150%]","opacity-0"),e.classList.add("translate-y-0","opacity-100")):(e.classList.add("-translate-y-[150%]","opacity-0"),e.classList.remove("translate-y-0","opacity-100"))})},{threshold:0}).observe(t)});window.toggleSlotAccordion=()=>{if(g)return;const t=document.getElementById("slotAccordionBody"),e=document.getElementById("slotAccordionIcon");t.classList.contains("hidden")?(t.classList.replace("hidden","block"),e.style.transform="rotate(0deg)"):(t.classList.replace("block","hidden"),e.style.transform="rotate(180deg)")};const S=(t="")=>t.trim().split(/\s+/).slice(0,2).map(e=>e[0]).join("").toUpperCase()||"--",G=t=>{const e=Math.floor(t/60),n=t%60;return`${String(e).padStart(2,"0")}:${String(n).padStart(2,"0")}`},j=()=>{clearInterval(y);const t=document.getElementById("timerHeader"),e=document.getElementById("timerBox"),n=document.getElementById("timerBar"),s=document.getElementById("floatingTimerBg"),a=document.getElementById("floatingTimerText");t.className="p-5 bg-green-600 text-white flex items-center justify-between relative overflow-hidden transition-colors duration-500",s.className="bg-green-600 text-white px-5 py-2.5 rounded-full shadow-[0_12px_40px_rgba(79,70,229,0.3)] border-2 border-white/20 flex items-center gap-3 backdrop-blur-md transition-colors duration-500",y=setInterval(()=>{if(f<=0){clearInterval(y);const l="00:00";e.innerText=l,a.innerText=l,t.className="p-5 bg-red-600 text-white flex items-center justify-between relative overflow-hidden transition-colors duration-500",s.className="bg-red-600 text-white px-5 py-2.5 rounded-full shadow-[0_12px_40px_rgba(79,70,229,0.3)] border-2 border-white/20 flex items-center gap-3 backdrop-blur-md transition-colors duration-500",n.className="h-full bg-white/50 rounded-full transition-all duration-1000",n.style.width="0%",window.showToast?.("warning","Waktu Habis","Sesi sudah melewati target waktu.");return}f--,w();const i=Math.max(0,f/x*100),o=G(f);e.innerText=o,a.innerText=o,n.style.width=`${i}%`,f<=60?(t.className="p-5 bg-red-500 text-white flex items-center justify-between relative overflow-hidden transition-colors duration-500",s.className="bg-red-500 text-white px-5 py-2.5 rounded-full shadow-lg border-2 border-white/20 flex items-center gap-3 transition-colors duration-500",n.className="h-full bg-white/70 transition-all duration-1000"):f<=180&&(t.className="p-5 bg-amber-500 text-white flex items-center justify-between relative overflow-hidden transition-colors duration-500",s.className="bg-amber-500 text-white px-5 py-2.5 rounded-full shadow-lg border-2 border-white/20 flex items-center gap-3 transition-colors duration-500",n.className="h-full bg-white/70 transition-all duration-1000")},1e3)},Y=async()=>{try{const t=await fetch(`${L}/api/oral-exams/${$}/sessions/${T}`,{headers:{Authorization:`Bearer ${C}`}}),e=await t.json();if(!t.ok||e.status!=="success")throw new Error(e.message||"Gagal memuat sesi.");m=e.data;const n=V();K(),n&&g&&(R(),I(),j(),document.getElementById("mainAssessmentSection").classList.remove("hidden"),z(),M(),Object.keys(u).length>0&&(E(),H()))}catch(t){window.showToast?.("danger","Gagal",t.message)}},O=()=>{r.forEach(t=>{p[t.id]||(p[t.id]={})}),m.sections.forEach(t=>{(t.oral_exam_items||[]).forEach(e=>{b[e.id]===void 0&&(b[e.id]=!1),r.forEach(n=>{p[n.id][e.id]===void 0&&(p[n.id][e.id]=0)})})})},R=()=>{document.getElementById("sessionDesc").innerText=`${r.length} Peserta Diuji • Target ${Math.floor(x/60)} Menit`,document.getElementById("slotAccordionBody").classList.replace("block","hidden"),document.getElementById("btnToggleSlot").classList.add("hidden"),document.getElementById("activeSessionBody").classList.replace("hidden","block"),document.getElementById("sessionDashboardCard").classList.replace("border-indigo-500","border-green-500"),document.getElementById("btnResetSession")?.classList.remove("hidden")},K=()=>{const{template:t,session:e,sections:n,students:s,available_students:a}=m;document.getElementById("btnBackDetail").href=`/ujian-hafalan/${t.id}`,document.getElementById("sessionBadge").innerText=`${t.subject} • ${e.session_name||"Sesi"}`,document.getElementById("sessionTitle").innerText=t.title;const i=a?a.length:0;g||(x=e.target_duration_seconds||600,f=x),document.getElementById("sessionDesc").innerText=g?`${r.length} Peserta Diuji • Target ${Math.floor(x/60)} Menit`:`${i} Siswa Tersedia • Target ${Math.floor(x/60)} Menit`,document.getElementById("timerBox").innerText=G(f),A()},A=()=>{const t=document.getElementById("slotList"),e=document.getElementById("slotCounterTop"),n=document.getElementById("btnOpenStartModal"),s=m.available_students||[];e&&(e.innerText=`${r.length}/5`),n&&(n.disabled=r.length===0);const a=new Set(r.map(l=>String(l.id))),i=`
            <div class="grid grid-cols-5 gap-2 mb-5">
                ${Array.from({length:5}).map((l,d)=>{const c=r[d];return c?`
                        <button onclick="removeStudentFromSlot('${c.id}')" class="aspect-square rounded-2xl border-2 border-indigo-200 bg-indigo-50 hover:bg-red-50 hover:border-red-200 hover:text-red-500 group flex flex-col items-center justify-center p-2 active:scale-95 transition-all text-center">
                            <div class="w-8 h-8 rounded-full bg-white text-indigo-600 group-hover:text-red-500 flex items-center justify-center text-[10px] font-black border-2 border-indigo-100 group-hover:border-red-200 mb-1 shadow-sm">${S(c.name)}</div>
                            <p class="text-[8px] font-black text-indigo-800 group-hover:text-red-600 truncate w-full">${c.name}</p>
                        </button>
                    `:`<div class="aspect-square rounded-2xl border-2 border-dashed border-slate-200 bg-slate-50 flex items-center justify-center text-slate-300 text-[10px] font-black shadow-inner">Slot ${d+1}</div>`}).join("")}
            </div>
        `,o=`
            <div class="grid grid-cols-2 gap-2 max-h-60 overflow-y-auto pr-1">
                ${s.map(l=>{const d=a.has(String(l.id)),c=d||r.length>=5;return`
                        <button onclick="addStudentToSlot('${l.id}')"
                            class="rounded-2xl border-2 p-3 text-left transition-all ${d?"bg-indigo-50 border-indigo-200 text-indigo-700":c?"bg-slate-50 border-slate-100 text-slate-300 opacity-50":"bg-white border-slate-100 text-slate-700 hover:border-indigo-200 active:scale-95 shadow-sm"}" ${c?"disabled":""}>
                            <div class="flex items-center gap-3">
                                <div class="w-9 h-9 shrink-0 rounded-full bg-slate-50 border-2 border-slate-100 flex items-center justify-center text-[10px] font-black">${S(l.name)}</div>
                                <div class="min-w-0">
                                    <p class="text-[11px] font-black truncate">${l.name}</p>
                                    <p class="text-[9px] font-bold opacity-60 truncate">${l.grade||"-"}</p>
                                </div>
                            </div>
                        </button>
                    `}).join("")}
            </div>
        `;t.innerHTML=i+o};window.addStudentToSlot=t=>{if(g||r.length>=5)return;const e=(m.available_students||[]).find(n=>String(n.id)===String(t));!e||r.some(n=>String(n.id)===String(t))||(r.push(e),A())};window.removeStudentFromSlot=t=>{g||(r=r.filter(e=>String(e.id)!==String(t)),A())};window.openStartModeModal=()=>{if(r.length===0)return window.showToast?.("warning","Pilih Siswa","Masukkan minimal 1 siswa ke slot.");document.getElementById("modalStartMode")?.classList.replace("hidden","flex")};window.closeStartModeModal=()=>document.getElementById("modalStartMode")?.classList.replace("flex","hidden");window.startSession=async t=>{if(r.length===0)return window.showToast?.("warning","Pilih Siswa","Masukkan minimal 1 siswa ke slot.");if(x=(parseInt(document.getElementById("sessionDurationInput").value)||10)*60,f=x,k=t,g=!0,window.closeStartModeModal(),O(),w(),R(),t==="simulation"){window.showToast?.("info","Mode Simulasi","Timer berjalan, tapi data penilaian tidak dikirim ke database."),I(),j(),D();return}try{const n=await fetch(`${L}/api/oral-exams/${$}/sessions/${T}/start`,{method:"POST",headers:{Authorization:`Bearer ${C}`,"Content-Type":"application/json"},body:JSON.stringify({student_ids:r.map(a=>a.id)})}),s=await n.json();if(!n.ok||s.status!=="success")throw new Error(s.message||"Gagal memulai sesi real.");window.showToast?.("success","Sesi Real Dimulai","Silakan mulai evaluasi."),I(),j(),D()}catch(n){console.error(n),g=!1,k="setup",B(),window.location.reload()}};const I=()=>{const t=document.getElementById("sessionStudents");t&&(t.innerHTML=r.map(e=>`
            <div class="bg-white border-2 border-slate-100 rounded-2xl p-3 text-center shadow-sm min-w-[100px] snap-center shrink-0">
                <div class="w-10 h-10 bg-slate-50 border-2 border-slate-100 text-slate-700 rounded-full flex items-center justify-center font-black text-xs mx-auto mb-2">${S(e.name)}</div>
                <p class="text-[11px] font-black text-slate-800 truncate w-full">${e.name}</p>
            </div>
        `).join(""))},D=()=>{O(),document.getElementById("mainAssessmentSection").classList.remove("hidden"),z(),M()},W=t=>{const e=((t.title||"")+" "+(t.short_label||"")).toLowerCase();if(e.includes("idzhar halqi"))return"IDZ";if(e.includes("idgham bighunnah"))return"IDG BG";if(e.includes("idgham bilaghunnah"))return"IDG BLG";if(e.includes("iqlab"))return"IQ";if(e.includes("ikhfa haqiqi")||e.includes("ikhfa")&&!e.includes("syafawi"))return"IKH";if(e.includes("ikhfa syafawi"))return"IKH SYF";if(e.includes("idgham mimi")||e.includes("mutamatsilain"))return"IDG MM";if(e.includes("idzhar syafawi"))return"IDZ SYF";if(e.includes("syamsiyah"))return"SYAM";if(e.includes("qomariyah"))return"QOM";if(e.includes("thobi")||e.includes("thabi"))return"M THOB";if(e.includes("aridh"))return"M ARIDH";if(e.includes("lin")||e.includes("layyin"))return"M LIN";if(e.includes("muttashil"))return"WJB";if(e.includes("munfashil"))return"JAIZ";let n=(t.short_label||t.title||"").toUpperCase();if(n.length>15){const s=n.split(" ");if(s.length>=2)return s[0].substring(0,3)+" "+s[1].substring(0,3)}return n},U=t=>{const e=m.sections[t],n=e.oral_exam_items||[],s=e.min_required||n.length,i=n.filter(o=>b[o.id]).length>=s;return n.map(o=>{const l=b[o.id],d=!l&&i;return`
                <label class="relative inline-flex flex-none ${d?"cursor-not-allowed opacity-50":"cursor-pointer"}" title="${d?`Maksimal ${s} materi tercapai`:""}">
                    <input type="checkbox" onchange="toggleGlobalTestedItem('${o.id}', ${t})" ${l?"checked":""} ${d?"disabled":""} class="peer sr-only" />

                    <div class="px-3 py-2 rounded-xl border-2 text-[10px] font-black transition-all select-none whitespace-nowrap w-max flex items-center justify-center
                        border-slate-200 bg-white text-slate-400
                        ${d?"":"hover:border-indigo-200 hover:text-indigo-500"}
                        peer-checked:border-indigo-500 peer-checked:bg-indigo-50 peer-checked:text-indigo-700 peer-checked:shadow-sm">
                        ${W(o)}
                    </div>
                </label>
            `}).join("")},z=()=>{const t=document.getElementById("assessmentMatrixContainer");t.innerHTML=m.sections.map((e,n)=>{const s=e.oral_exam_items||[];if(s.length===0)return"";const a=n===0,i=a?"bg-indigo-50 border-indigo-500":"bg-slate-50 border-slate-100",o=a?"fa-chevron-up text-indigo-600":"fa-chevron-down text-slate-400",l=a?"block":"hidden";!v[n]&&r.length>0&&(v[n]=r[0].id);const d=e.min_required||s.length;return`
                <div class="mb-4">
                    <button onclick="toggleMatrixSection(${n})" id="header-matrix-${n}" class="matrix-header w-full flex items-center justify-between p-4 border-2 rounded-3xl transition-colors ${i}">
                        <div class="flex items-center gap-3">
                            <div class="w-10 h-10 rounded-2xl bg-white text-indigo-600 border-2 border-indigo-100 flex items-center justify-center font-black shadow-sm">${n+1}</div>
                            <div class="text-left">
                                <h3 class="text-sm font-black text-slate-800">${e.title}</h3>
                                <p class="text-[10px] font-bold text-slate-500 mt-0.5">${s.length} materi uji</p>
                            </div>
                        </div>
                        <div class="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm border border-slate-100">
                            <i id="icon-matrix-${n}" class="matrix-icon fa-solid ${o} transition-transform"></i>
                        </div>
                    </button>

                    <div id="body-matrix-${n}" class="matrix-body ${l} mt-3 animate-slide-up bg-white border-2 border-slate-100 rounded-3xl p-5 shadow-sm">

                        <div class="mb-5 pb-4 border-b-2 border-slate-50">
                            <div class="flex items-center justify-between mb-3">
                                <label class="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-1.5">
                                    <i class="fa-solid fa-list-check text-indigo-500"></i> Materi Diujikan
                                </label>
                                <span class="bg-indigo-50 text-indigo-600 font-bold border border-indigo-100 px-2 py-1 rounded-md text-[9px]">
                                    Pilih Maks: ${d}
                                </span>
                            </div>

                            <div id="global-checkboxes-container-${n}" class="flex flex-row flex-wrap items-center gap-2">
                                ${U(n)}
                            </div>
                        </div>

                        <div class="border-b-2 border-slate-50 flex flex-col gap-2">
                            <label class="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-1.5">
                                <i class="fa-solid fa-user-graduate text-indigo-500"></i> Siswa Yang Sedang Diuji
                            </label>
                            <select onchange="switchMatrixStudent(${n}, this.value)" class="w-full bg-slate-50 border-2 border-slate-200 rounded-xl px-3 py-2.5 text-xs font-black text-slate-700 outline-none focus:border-indigo-500 transition-all">
                                ${r.map(c=>`
                                    <option value="${c.id}" ${String(v[n])===String(c.id)?"selected":""}>${c.name}</option>
                                `).join("")}
                            </select>
                        </div>

                        <div id="matrix-student-card-container-${n}">
                            ${q(n,v[n],s)}
                        </div>

                        ${n<m.sections.length-1?`
                            <button onclick="nextMatrixSection(${n})" class="w-full mt-5 py-4 bg-indigo-50 hover:bg-indigo-100 border-2 border-indigo-200 text-indigo-600 rounded-2xl text-xs font-black active:scale-95 transition-all flex items-center justify-center gap-2 shadow-sm">
                                Simpan & Lanjut Materi Berikutnya <i class="fa-solid fa-arrow-down"></i>
                            </button>
                        `:`
                            <div class="mt-5 p-6 bg-green-50 border-2 border-green-200 rounded-3xl text-center shadow-sm">
                                <div class="w-16 h-16 bg-white border-2 border-green-100 rounded-full flex items-center justify-center text-green-500 text-3xl mx-auto mb-3"><i class="fa-solid fa-check"></i></div>
                                <h3 class="text-base font-black text-green-800 mb-1">Semua materi selesai dinilai!</h3>
                                <p class="text-[11px] font-bold text-green-600">Cek Preview Nilai di panel samping dan lanjut ke Tes Pemahaman.</p>
                            </div>
                        `}
                    </div>
                </div>
            `}).join("")},q=(t,e,n)=>{const s=r.find(i=>String(i.id)===String(e));if(!s)return'<p class="text-xs text-slate-400">Siswa tidak ditemukan.</p>';const a=n.filter(i=>b[i.id]);return a.length===0?`
                <div class="bg-amber-50 border-2 border-amber-100 rounded-2xl p-6 text-center shadow-sm mt-5">
                    <i class="fa-solid fa-triangle-exclamation text-amber-400 text-3xl mb-2"></i>
                    <h4 class="text-sm font-black text-amber-800">Belum ada materi dipilih</h4>
                    <p class="text-[10px] font-bold text-amber-600 mt-1">Centang materi di atas terlebih dahulu untuk memunculkan kolom penilaian.</p>
                </div>
            `:`
            <div class="bg-slate-50 border border-slate-100 rounded-2xl p-4 flex flex-col transition-all">
                <div class="space-y-2">
                    ${a.map(i=>{const o=p[s.id]?.[i.id]||0;return`
                        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white p-3 rounded-xl border border-slate-200 hover:border-indigo-200 transition-colors">
                            <div class="flex items-center gap-3 flex-1 min-w-0">
                                <span class="w-2 h-2 rounded-full bg-indigo-400 shrink-0"></span>
                                <p class="text-xs font-bold text-slate-700 truncate pr-2" title="${i.title}">
                                    ${i.short_label||i.title}
                                </p>
                            </div>
                            <div class="flex bg-slate-50 rounded-lg p-1 border border-slate-200 gap-1 shrink-0 w-full sm:w-[150px] shadow-inner">
                                <button onclick="setScore('${s.id}', '${i.id}', 0, ${t})" id="btn-0-${s.id}-${i.id}"
                                    class="flex-1 py-1.5 text-[9px] font-black rounded-md transition-all ${o===0?"bg-white shadow-sm text-slate-600 border border-slate-200":"text-slate-400 hover:text-slate-600 border border-transparent"}">Belum</button>
                                <button onclick="setScore('${s.id}', '${i.id}', 1, ${t})" id="btn-1-${s.id}-${i.id}"
                                    class="flex-1 py-1.5 text-[9px] font-black rounded-md transition-all ${o===1?"bg-amber-100 shadow-sm text-amber-600 border border-amber-200":"text-slate-400 hover:text-amber-500 border border-transparent"}">Ikut</button>
                                <button onclick="setScore('${s.id}', '${i.id}', 2, ${t})" id="btn-2-${s.id}-${i.id}"
                                    class="flex-1 py-1.5 text-[9px] font-black rounded-md transition-all ${o===2?"bg-green-100 shadow-sm text-green-600 border border-green-200":"text-slate-400 hover:text-green-500 border border-transparent"}">Hafal</button>
                            </div>
                        </div>
                        `}).join("")}
                </div>
            </div>
        `};window.switchMatrixStudent=(t,e)=>{v[t]=e,w();const n=m.sections[t],s=document.getElementById(`matrix-student-card-container-${t}`);s&&n&&(s.innerHTML=q(t,e,n.oral_exam_items||[]))};window.toggleGlobalTestedItem=(t,e)=>{const n=m.sections[e],s=n.min_required||n.oral_exam_items.length;if(!b[t]&&(n.oral_exam_items||[]).filter(d=>b[d.id]).length>=s)return;b[t]=!b[t];const a=document.getElementById(`global-checkboxes-container-${e}`);a&&(a.innerHTML=U(e));const i=v[e],o=document.getElementById(`matrix-student-card-container-${e}`);o&&n&&i&&(o.innerHTML=q(e,i,n.oral_exam_items||[])),w(),M()};window.toggleMatrixSection=t=>{const e=document.getElementById(`body-matrix-${t}`),n=document.getElementById(`icon-matrix-${t}`),s=document.getElementById(`header-matrix-${t}`);e.classList.contains("hidden")?(document.querySelectorAll(".matrix-body").forEach(a=>a.classList.replace("block","hidden")),document.querySelectorAll(".matrix-icon").forEach(a=>a.className="matrix-icon fa-solid fa-chevron-down text-slate-400 transition-transform"),document.querySelectorAll(".matrix-header").forEach(a=>a.className="matrix-header w-full flex items-center justify-between p-4 border-2 rounded-3xl transition-colors bg-slate-50 border-slate-100"),e.classList.replace("hidden","block"),n.className="matrix-icon fa-solid fa-chevron-up text-indigo-600 transition-transform",s.className="matrix-header w-full flex items-center justify-between p-4 border-2 rounded-3xl transition-colors bg-indigo-50 border-indigo-500"):(e.classList.replace("block","hidden"),n.className="matrix-icon fa-solid fa-chevron-down text-slate-400 transition-transform",s.className="matrix-header w-full flex items-center justify-between p-4 border-2 rounded-3xl transition-colors bg-slate-50 border-slate-100")};window.nextMatrixSection=t=>{const e=t+1;e<m.sections.length&&(toggleMatrixSection(e),setTimeout(()=>document.getElementById(`header-matrix-${e}`).scrollIntoView({behavior:"smooth",block:"start"}),150))};window.setScore=(t,e,n,s)=>{p[t][e]=n,w(),[0,1,2].forEach(a=>{const i=document.getElementById(`btn-${a}-${t}-${e}`);i&&(i.className="flex-1 py-1.5 text-[9px] font-black rounded-md transition-all border border-transparent text-slate-400",a===n&&(a===0&&i.classList.add("bg-white","shadow-sm","text-slate-600","border-slate-200"),a===1&&i.classList.add("bg-amber-100","shadow-sm","!text-amber-600","border-amber-200"),a===2&&i.classList.add("bg-green-100","shadow-sm","!text-green-600","border-green-200")))}),M()};const M=()=>{const t=document.getElementById("memorizationPreview");t&&(t.innerHTML=r.map(e=>{const n=J(e.id);let s=0;return m.sections.forEach(a=>{(a.oral_exam_items||[]).forEach(i=>{b[i.id]&&s++})}),`
                <div class="flex items-center justify-between bg-white p-3 rounded-2xl border-2 border-indigo-100/50 shadow-sm">
                     <div class="flex items-center gap-3">
                         <div class="w-8 h-8 shrink-0 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center text-[10px] font-black border border-indigo-100">${S(e.name)}</div>
                         <div class="min-w-0">
                            <p class="text-[11px] font-black text-indigo-900 truncate">${e.name}</p>
                            <p class="text-[9px] font-bold text-indigo-400">${s} Materi Diujikan</p>
                         </div>
                     </div>
                     <div class="text-sm font-black text-indigo-600 bg-indigo-50 px-3 py-1.5 rounded-xl border-2 border-indigo-100">${n.score}%</div>
                </div>
            `}).join(""))},F=()=>{const t=m.understanding_prompts||[];if(t.length===0)return["Jelaskan kembali intisari dari materi yang baru saja dipelajari."];const e=Math.floor(Math.random()*2)+2;return[...t].sort(()=>.5-Math.random()).slice(0,e).map(s=>s.prompt)};window.switchAssessmentMode=t=>{const e=document.getElementById("hafalanView"),n=document.getElementById("pemahamanView"),s=document.getElementById("modeSelect");s&&(s.value=t),t==="hafalan"?(e.classList.replace("hidden","block"),n.classList.replace("block","hidden")):(e.classList.replace("block","hidden"),n.classList.replace("hidden","block"),r.forEach(a=>{u[a.id]||(u[a.id]={rating:0,note:"",questions:F(),questionStates:[]})}),!h&&r.length>0&&(h=r[0].id),E(),H(),w())};window.openUnderstandingStep=()=>{if(!g)return window.showToast?.("warning","Sesi Belum Dimulai","Mulai sesi terlebih dahulu.");switchAssessmentMode("pemahaman"),setTimeout(()=>{document.getElementById("mainAssessmentSection")?.scrollIntoView({behavior:"smooth",block:"start"})},150)};const E=()=>{const t=document.getElementById("understandingCardsContainer");if(!t)return;!h&&r.length>0&&(h=r[0].id);const e=r.find(i=>String(i.id)===String(h));if(!e)return;const n=u[e.id],s=`
            <div class="mb-5 pb-4 border-b-2 border-slate-50 flex flex-col gap-2">
                <label class="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-1.5">
                    <i class="fa-solid fa-user-graduate text-purple-500"></i> Siswa Yang Sedang Diuji (Pemahaman)
                </label>
                <select onchange="switchUnderstandingStudent(this.value)" class="w-full bg-slate-50 border-2 border-slate-200 rounded-xl px-3 py-2.5 text-xs font-black text-slate-700 outline-none focus:border-purple-500 transition-all cursor-pointer">
                    ${r.map(i=>`
                        <option value="${i.id}" ${String(h)===String(i.id)?"selected":""}>${i.name}</option>
                    `).join("")}
                </select>
            </div>
        `,a=`
            <div class="bg-white border-2 border-slate-100 rounded-3xl p-5 shadow-sm">
                <div class="flex items-center justify-between mb-4 pb-4 border-b-2 border-slate-50">
                    <div class="flex items-center gap-3">
                        <div class="w-10 h-10 bg-purple-50 border-2 border-purple-100 text-purple-600 rounded-full flex items-center justify-center font-black text-xs shadow-inner">
                            ${S(e.name)}
                        </div>
                        <div>
                            <p class="text-sm font-black text-slate-800">${e.name}</p>
                            <p class="text-[10px] font-bold text-slate-400">Tes lisan individu</p>
                        </div>
                    </div>
                    <button onclick="refreshStudentQuestions('${e.id}', event)" class="w-8 h-8 flex items-center justify-center bg-purple-50 text-purple-600 rounded-xl hover:bg-purple-100 transition-all" title="Acak Soal Baru">
                        <i class="fa-solid fa-arrows-rotate"></i>
                    </button>
                </div>

                <div id="questions-container-${e.id}" class="mb-5 space-y-2.5">
                    ${n.questions.map((i,o)=>{const l=n.questionStates?.[o]||!1;return`
                            <div onclick="toggleQuestionStrikethrough('${e.id}', ${o})" class="cursor-pointer flex items-start gap-2.5 bg-purple-50/50 hover:bg-purple-50 p-3 rounded-2xl border border-purple-100/50 transition-colors group">
                                <span class="w-5 h-5 shrink-0 rounded-full bg-white text-purple-500 border border-purple-200 flex items-center justify-center text-[10px] font-black shadow-sm group-hover:bg-purple-100 transition-colors">${o+1}</span>
                                <p id="q-text-${e.id}-${o}" class="text-xs font-bold leading-relaxed mt-0.5 transition-all select-none ${l?"text-slate-400 line-through":"text-slate-700"}">${i}</p>
                            </div>
                        `}).join("")}
                    <p class="text-[9px] font-bold text-purple-400 mt-2 text-center">* Klik kotak soal jika sudah ditanyakan untuk mencoretnya</p>
                </div>

                <div class="border-t-2 border-slate-50 pt-4">
                    <label class="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 block">Rating Pemahaman (1-5)</label>
                    <div class="flex gap-2 mb-4">
                        ${[1,2,3,4,5].map(i=>`
                            <button onclick="setUnderstandingRating('${e.id}', ${i})" data-rating="${i}"
                                    class="rating-btn-${e.id} flex-1 py-2 rounded-xl border-2 flex items-center justify-center text-sm font-black transition-all ${n.rating===i?"bg-amber-100 border-amber-400 text-amber-600 shadow-sm":"bg-slate-50 border-slate-100 text-slate-400 hover:border-amber-200 hover:text-amber-500"}">
                                ${i}
                            </button>
                        `).join("")}
                    </div>

                    <label class="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 block">Catatan (Opsional)</label>
                    <textarea oninput="setUnderstandingNote('${e.id}', this.value)"
                              class="w-full bg-slate-50 border-2 border-slate-100 rounded-xl p-3 text-xs font-bold text-slate-700 focus:border-purple-500 focus:ring-0 outline-none resize-none h-16 transition-all"
                              placeholder="Tambahkan catatan evaluasi...">${n.note||""}</textarea>
                </div>
            </div>
        `;t.innerHTML=s+a};window.switchUnderstandingStudent=t=>{h=t,w(),E()};window.toggleQuestionStrikethrough=(t,e)=>{const n=u[t];n.questionStates||(n.questionStates=[]),n.questionStates[e]=!n.questionStates[e];const s=document.getElementById(`q-text-${t}-${e}`);s&&(n.questionStates[e]?(s.classList.replace("text-slate-700","text-slate-400"),s.classList.add("line-through")):(s.classList.replace("text-slate-400","text-slate-700"),s.classList.remove("line-through"))),w()};window.refreshStudentQuestions=(t,e)=>{const n=e?.currentTarget;n&&(n.querySelector("i").classList.add("fa-spin"),setTimeout(()=>n.querySelector("i").classList.remove("fa-spin"),500)),u[t].questions=F(),u[t].questionStates=[],E(),w()};window.setUnderstandingRating=(t,e)=>{u[t].rating=e,document.querySelectorAll(`.rating-btn-${t}`).forEach(n=>{parseInt(n.dataset.rating)===e?n.className=`rating-btn-${t} flex-1 py-2 rounded-xl border-2 flex items-center justify-center text-sm font-black transition-all bg-amber-100 border-amber-400 text-amber-600 shadow-sm`:n.className=`rating-btn-${t} flex-1 py-2 rounded-xl border-2 flex items-center justify-center text-sm font-black transition-all bg-slate-50 border-slate-100 text-slate-400 hover:border-amber-200 hover:text-amber-500`}),H()};window.setUnderstandingNote=(t,e)=>{u[t].note=e};const J=t=>{let e=0,n=0,s=0,a=0;return m.sections.forEach(o=>{const d=(o.oral_exam_items||[]).filter(c=>b[c.id]);d.length>0&&(a++,d.filter(_=>Number(p?.[t]?.[_.id]||0)===2).length>=Number(o.min_required||0)&&s++,d.forEach(_=>{e+=Number(p?.[t]?.[_.id]||0),n+=2}))}),{score:n>0?Math.round(e/n*100):0,passedSections:s,totalSections:a,passedMinimum:a>0?s>=a:!1}},Q=t=>{const e=J(t),s=Number(u?.[t]?.rating||0)*20,a=Math.round(e.score*.7+s*.3);let i="Kurang";return a>=90?i="Sempurna":a>=70?i="Bagus":a>=60?i="Cukup":a>=50&&(i="Belum Cukup"),{memorization_score:e.score,understanding_score:s,final_score:a,status:i,passedSections:e.passedSections,totalSections:e.totalSections}},H=()=>{const t=document.getElementById("finalScorePreview");t&&(t.innerHTML=r.map(e=>{const n=Q(e.id);let s={border:"border-red-100",bgIcon:"bg-red-50",textIcon:"text-red-600",textScore:"text-red-600",textStatus:"text-red-500"};return n.final_score>=90?s={border:"border-emerald-200",bgIcon:"bg-emerald-50",textIcon:"text-emerald-600",textScore:"text-emerald-600",textStatus:"text-emerald-500"}:n.final_score>=70?s={border:"border-green-200",bgIcon:"bg-green-50",textIcon:"text-green-600",textScore:"text-green-600",textStatus:"text-green-500"}:n.final_score>=60?s={border:"border-blue-200",bgIcon:"bg-blue-50",textIcon:"text-blue-600",textScore:"text-blue-600",textStatus:"text-blue-500"}:n.final_score>=50&&(s={border:"border-amber-200",bgIcon:"bg-amber-50",textIcon:"text-amber-600",textScore:"text-amber-500",textStatus:"text-amber-500"}),`
                <div class="bg-white border-2 ${s.border} rounded-2xl p-4 flex items-center justify-between shadow-sm transition-all">
                    <div class="flex items-center gap-3">
                        <div class="w-10 h-10 rounded-full ${s.bgIcon} ${s.textIcon} border-2 ${s.border} flex items-center justify-center font-black text-xs">
                            ${S(e.name)}
                        </div>
                        <div>
                            <p class="text-xs font-black text-slate-800">${e.name}</p>
                            <p class="text-[9px] font-bold text-slate-400">Hafalan: ${n.memorization_score} • Lisan: ${n.understanding_score}</p>
                        </div>
                    </div>
                    <div class="text-right">
                        <p class="text-2xl font-black ${s.textScore}">${n.final_score}</p>
                        <p class="text-[8px] font-black uppercase tracking-widest ${s.textStatus}">${n.status}</p>
                    </div>
                </div>
            `}).join(""))};window.submitAssessment=async()=>{const t=r.filter(a=>!Number(u?.[a.id]?.rating||0));if(t.length>0)return window.showToast?.("warning","Belum Lengkap",`Rating pemahaman ${t[0].name} belum diisi.`);const e=r.map(a=>{const i=Q(a.id),o=[];return m.sections.forEach(l=>{(l.oral_exam_items||[]).forEach(d=>{const c=b[d.id]||!1;o.push({item_id:d.id,score:c?Number(p?.[a.id]?.[d.id]||0):0})})}),{student_id:a.id,memorization_score:i.memorization_score,understanding_score:i.understanding_score,final_score:i.final_score,understanding_rating:Number(u?.[a.id]?.rating||0),notes:u?.[a.id]?.note||null,status:i.status,duration_seconds:x-f,items:o}});if(k==="simulation")return B(),window.showToast?.("success","Simulasi Selesai","Data tidak dikirim ke database karena ini mode simulasi.");const n=document.getElementById("btnSubmitFinalAssessment"),s=n?.innerHTML;n&&(n.disabled=!0,n.innerHTML='<i class="fa-solid fa-spinner fa-spin"></i> Menyimpan...',n.classList.add("opacity-70","cursor-not-allowed"));try{const a=await fetch(`${L}/api/oral-exams/${$}/sessions/${T}/results`,{method:"POST",headers:{Authorization:`Bearer ${C}`,"Content-Type":"application/json"},body:JSON.stringify({results:e})}),i=await a.json();if(!a.ok||i.status!=="success")throw new Error(i.message||"Gagal menyimpan hasil evaluasi.");clearInterval(y),B(),window.showToast?.("success","Tersimpan","Hasil evaluasi hafalan berhasil disimpan."),setTimeout(()=>{window.location.href=`/ujian-hafalan/${$}`},900)}catch(a){console.error(a),window.showToast?.("danger","Gagal",a.message),n&&(n.disabled=!1,n.innerHTML=s,n.classList.remove("opacity-70","cursor-not-allowed"))}};Y();
