const u="http://localhost:3000",m=localStorage.getItem("token"),U=JSON.parse(localStorage.getItem("user")||"{}");let g=[],M=[],S="pr",y={};m||window.location.replace("/");const T=document.getElementById("greetingName");T&&(T.innerText=`Ahlan, Ustadz ${U.username||""}!`);const $=document.getElementById("tabList"),B=document.getElementById("tabLeaderboard"),C=document.getElementById("contentList"),_=document.getElementById("contentLeaderboard"),N="seg-btn is-active",D="seg-btn";$.onclick=()=>{$.className=N,B.className=D,C.classList.replace("hidden","block"),_.classList.replace("block","hidden")};B.onclick=()=>{B.className=N,$.className=D,_.classList.replace("hidden","block"),C.classList.replace("block","hidden")};window.openQuickMenu=()=>{document.getElementById("modalQuickMenu").classList.replace("hidden","flex")};window.closeQuickMenu=()=>{document.getElementById("modalQuickMenu").classList.replace("flex","hidden")};window.openWrappedModal=()=>{document.getElementById("modalWrapped").classList.replace("hidden","flex"),renderWrappedStudentList("")};window.closeWrappedModal=()=>{document.getElementById("modalWrapped").classList.replace("flex","hidden"),document.getElementById("searchWrappedStudent").value=""};window.filterWrappedStudents=()=>{const e=document.getElementById("searchWrappedStudent").value.toLowerCase();renderWrappedStudentList(e)};window.renderWrappedStudentList=(e="")=>{const t=document.getElementById("wrappedStudentList"),n=document.getElementById("wrappedStatsContainer"),s=g.filter(i=>i.is_exam_completed===!0),o=g.length-s.length;n&&(n.className="mb-4",n.innerHTML=`
                <div class="grid grid-cols-2 gap-2">
                    <div class="bg-green-50 border border-green-100 p-3 rounded-2xl flex items-center justify-between shadow-sm transition-all hover:bg-green-100">
                        <div class="flex items-center gap-2.5">
                            <div class="w-7 h-7 bg-green-100 text-green-600 rounded-xl flex items-center justify-center text-[10px] shadow-inner">
                                <i class="fa-solid fa-check"></i>
                            </div>
                            <span class="text-[10px] font-bold text-green-700 uppercase tracking-widest">Selesai</span>
                        </div>
                        <span class="text-lg font-black text-green-700 drop-shadow-sm">${s.length}</span>
                    </div>

                    <div class="bg-red-50 border border-red-100 p-3 rounded-2xl flex items-center justify-between shadow-sm transition-all hover:bg-red-100">
                        <div class="flex items-center gap-2.5">
                            <div class="w-7 h-7 bg-red-100 text-red-500 rounded-xl flex items-center justify-center text-[10px] shadow-inner">
                                <i class="fa-solid fa-lock"></i>
                            </div>
                            <span class="text-[10px] font-bold text-red-700 uppercase tracking-widest">Belum</span>
                        </div>
                        <span class="text-lg font-black text-red-600 drop-shadow-sm">${o}</span>
                    </div>
                </div>
            `);const a=s.filter(i=>i.name.toLowerCase().includes(e));if(a.length===0){t.innerHTML='<p class="text-center text-xs text-gray-400 italic py-8 col-span-2">Belum ada siswa yang menyelesaikan ujian.</p>';return}t.innerHTML=a.map(i=>{const r=i.photo_url?`<img src="${i.photo_url}" class="w-full h-full object-cover">`:`<span class="text-[10px] font-black text-gray-400">${i.name.substring(0,2).toUpperCase()}</span>`;return`
                <div class="w-full flex items-center justify-between p-2 sm:p-2.5 rounded-xl border border-gray-200 bg-white hover:bg-pink-50 hover:border-pink-200 transition-all group overflow-hidden shadow-sm">

                    <button onclick="goToWrapped('${i.id}')" class="flex items-center gap-2.5 min-w-0 flex-1 text-left cursor-pointer active:scale-[0.98]">
                        <div class="w-8 h-8 sm:w-9 sm:h-9 bg-gray-100 rounded-full flex items-center justify-center overflow-hidden shrink-0 border border-white shadow-sm">
                            ${r}
                        </div>
                        <span class="block text-[10px] sm:text-xs font-bold text-gray-700 group-hover:text-pink-600 truncate w-full">${i.name.split(" ")[0]}</span>
                    </button>

                    <div class="shrink-0 pl-2 ml-1 border-l border-gray-100 flex items-center justify-center">
                        <button onclick="shareWrappedLink('${i.id}', '${i.name}', event)" class="w-7 h-7 flex items-center justify-center rounded-lg bg-slate-50 text-slate-400 hover:bg-green-500 hover:text-white transition-colors active:scale-90" title="Salin Link Anak">
                            <i class="fa-solid fa-link text-[10px]"></i>
                        </button>
                    </div>

                </div>
            `}).join("")};window.copyShopLink=()=>{const e=localStorage.getItem("token"),t=`${window.location.origin}/toko-kenangan?token=${e}`;navigator.clipboard.writeText(t).then(()=>{window.showToastAlert?window.showToastAlert("success","Tersalin!","Link Toko Kenangan berhasil disalin. Silakan bagikan ke murid!"):alert("Link Toko Kenangan berhasil disalin!")}).catch(()=>{window.showToastAlert?window.showToastAlert("danger","Gagal","Browser tidak mendukung copy otomatis."):alert("Gagal menyalin link.")})};window.shareWrappedLink=async(e,t,n)=>{n.stopPropagation();const o=`${window.location.origin}/wrapped/${e}?token=${m}&view_only=true`,a=`Assalamu'alaikum ${t}! 🎉

Yuk lihat kilas balik perjalanan dan rapor Ngaji kamu selama ini di *Ngaji Wrapped*!

Klik link di bawah ini ya:
${o}`;try{await navigator.clipboard.writeText(a),window.showToast?.("success","Link Tersalin!",`Link Wrapped khusus untuk ${t} siap di-paste ke WA.`)}catch{window.showToast?.("danger","Gagal","Gagal menyalin link.")}};window.goToWrapped=e=>{const t=`/wrapped/${e}?token=${m}&view_only=true`;window.open(t,"_blank")};let k=null,A=!1;window.showConfirmGlobal=(e,t,n,s=!1,o="primary")=>{document.getElementById("confirmGlobalTitle").innerText=e,document.getElementById("confirmGlobalMessage").innerHTML=t,k=n,A=s;const a=document.getElementById("modalConfirmGlobalBox"),i=document.getElementById("confirmGlobalIconBox"),r=document.getElementById("confirmGlobalIcon"),l=document.getElementById("btnConfirmGlobalYes");o==="danger"?(a.className="bg-white w-full max-w-sm rounded-[2rem] p-6 shadow-2xl text-center transform scale-100 animate-bounce-short border-4 border-red-400 transition-all duration-300",i.className="w-20 h-20 bg-red-50 text-red-500 rounded-full flex items-center justify-center text-4xl mx-auto mb-4 border border-red-100 shadow-inner transition-all duration-300",r.className="fa-solid fa-triangle-exclamation",l.className="flex-1 py-3.5 bg-red-600 hover:bg-red-700 text-white font-bold rounded-2xl shadow-lg shadow-red-600/30 active:scale-95 transition-all text-sm"):o==="warning"?(a.className="bg-white w-full max-w-sm rounded-[2rem] p-6 shadow-2xl text-center transform scale-100 animate-bounce-short border-4 border-amber-400 transition-all duration-300",i.className="w-20 h-20 bg-amber-50 text-amber-500 rounded-full flex items-center justify-center text-4xl mx-auto mb-4 border border-amber-100 shadow-inner transition-all duration-300",r.className="fa-solid fa-person-digging",l.className="flex-1 py-3.5 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-2xl shadow-lg shadow-amber-500/30 active:scale-95 transition-all text-sm"):(a.className="bg-white w-full max-w-sm rounded-[2rem] p-6 shadow-2xl text-center transform scale-100 animate-bounce-short border-4 border-indigo-400 transition-all duration-300",i.className="w-20 h-20 bg-indigo-50 text-indigo-500 rounded-full flex items-center justify-center text-4xl mx-auto mb-4 border border-indigo-100 shadow-inner transition-all duration-300",r.className="fa-solid fa-circle-question",l.className="flex-1 py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-2xl shadow-lg shadow-indigo-600/30 active:scale-95 transition-all text-sm");const c=document.getElementById("modalConfirmGlobal");c.classList.replace("hidden","flex"),setTimeout(()=>c.classList.replace("opacity-0","opacity-100"),10)};document.getElementById("btnConfirmGlobalCancel").onclick=()=>{const e=document.getElementById("modalConfirmGlobal");e.classList.replace("opacity-100","opacity-0"),setTimeout(()=>e.classList.replace("flex","hidden"),300),k=null,A&&window.showToast?.("info","Dibatalkan","Tindakan telah dibatalkan.")};document.getElementById("btnConfirmGlobalYes").onclick=()=>{const e=document.getElementById("modalConfirmGlobal");e.classList.replace("opacity-100","opacity-0"),setTimeout(()=>e.classList.replace("flex","hidden"),300),k&&k()};window.toggleHeaderMenu=()=>{const e=document.getElementById("dropdownHeaderMenu");e.classList.toggle("hidden");const t=n=>{const s=document.getElementById("btnHeaderMenu");!e.contains(n.target)&&!s.contains(n.target)&&(e.classList.add("hidden"),document.removeEventListener("click",t))};e.classList.contains("hidden")||setTimeout(()=>document.addEventListener("click",t),10)};let f=[];window.switchNotifTab=e=>{const t=document.getElementById("tabNotifListBtn"),n=document.getElementById("tabNotifLBBtn"),s=document.getElementById("contentNotifList"),o=document.getElementById("contentNotifLB"),a="flex-1 py-2.5 text-[10px] font-bold bg-white text-indigo-600 rounded-xl shadow-sm transition-all uppercase tracking-widest",i="flex-1 py-2.5 text-[10px] font-bold text-gray-400 hover:text-gray-600 transition-all uppercase tracking-widest";e==="list"?(t.className=a,n.className=i,s.classList.replace("hidden","flex"),o.classList.replace("flex","hidden")):(n.className=a,t.className=i,o.classList.replace("hidden","flex"),s.classList.replace("flex","hidden"),loadPRLeaderboard())};const W=e=>{const t=new Date(e),n=new Date,s=new Date(n.getFullYear(),n.getMonth(),n.getDate()),o=new Date(t.getFullYear(),t.getMonth(),t.getDate()),a=Math.floor((s-o)/(1e3*60*60*24));if(a===0){const i=t.getHours();return i<12?"Pagi Ini":i<15?"Siang Ini":i<18?"Sore Ini":"Malam Ini"}return a===1?"Kemarin":a>1&&a<=7?"Minggu Ini":"Beberapa Minggu Lalu"},H=async(e=!1)=>{try{if(f=(await(await fetch(`${u}/api/notifications`,{headers:{Authorization:`Bearer ${m}`}})).json()).data||[],!e){const s=f.filter(o=>Math.floor((new Date-new Date(o.created_at))/864e5)>7);s.length>0&&showConfirmGlobal("Bersih-bersih Laci",`Terdapat ${s.length} notif yang sudah lewat dari seminggu. Mau dihapus biar laci rapi?`,async()=>{const o=s.map(a=>a.id);f=f.filter(a=>!o.includes(a.id)),v(),L();try{await Promise.all(o.map(a=>fetch(`${u}/api/notifications/${a}`,{method:"DELETE",headers:{Authorization:`Bearer ${m}`}})))}catch{}},!0,"primary")}v(),L()}catch(t){console.error("Gagal load notif",t)}},v=()=>{const e=document.getElementById("headerMenuBadge"),t=document.getElementById("notifBadgeCounter"),n=document.getElementById("notifCountText");f.length>0?(e&&e.classList.remove("hidden"),t&&(t.innerText=f.length,t.classList.remove("hidden"),t.classList.add("inline-flex","items-center","justify-center")),n&&(n.innerText=f.length)):(e&&e.classList.add("hidden"),t&&(t.classList.add("hidden"),t.classList.remove("inline-flex","items-center","justify-center")),n&&(n.innerText="0"))},L=()=>{const e=document.getElementById("notifListContainer");if(!e)return;if(f.length===0){e.innerHTML='<div class="text-center py-10 flex flex-col items-center justify-center opacity-50"><i class="fa-regular fa-bell-slash text-5xl text-gray-300 mb-3"></i><p class="text-xs text-gray-500 font-bold">Belum ada notifikasi baru.</p></div>';return}const t={};f.forEach(s=>{const o=W(s.created_at);t[o]||(t[o]=[]),t[o].push(s)});const n=["Pagi Ini","Siang Ini","Sore Ini","Malam Ini","Hari Ini","Kemarin","Minggu Ini","Beberapa Minggu Lalu"];e.innerHTML=n.map(s=>{if(!t[s]||t[s].length===0)return"";const o=t[s].map(a=>{const i=new Date(a.created_at).toLocaleTimeString("id-ID",{hour:"2-digit",minute:"2-digit"}),r=a.notif_type==="exam",l=r?{wrap:"bg-blue-50/70 border-blue-100 hover:bg-blue-100/60",iconWrap:"text-blue-500 border-blue-50",textMain:"text-blue-700",textAccent:"text-blue-600",icon:"fa-file-pen",label:"UJIAN"}:{wrap:"bg-green-50/70 border-green-100 hover:bg-green-100/60",iconWrap:"text-green-500 border-green-50",textMain:"text-green-700",textAccent:"text-green-600",icon:"fa-book-open",label:"PR"},c=r?a.title||"Ujian":`PR ${a.subject}${a.week?` Pertemuan ${a.week}`:""}`;return`
                <div onclick="openNotifDetail('${a.id}')" class="${l.wrap} border p-3.5 rounded-2xl flex gap-3 relative group cursor-pointer transition-colors">
                    <div class="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center ${l.iconWrap} shrink-0 font-black text-xs border">
                        <i class="fa-solid ${l.icon}"></i>
                    </div>

                    <div class="flex-1 min-w-0 pr-8 pointer-events-none">
                        <div class="flex items-center gap-1.5 mb-1">
                            <span class="text-[8px] font-black px-2 py-0.5 rounded-full ${r?"bg-blue-100 text-blue-600":"bg-green-100 text-green-600"}">
                                ${l.label}
                            </span>
                            <span class="text-[8px] font-black text-gray-400 uppercase">${a.subject||"-"}</span>
                        </div>

                        <p class="text-xs text-gray-700 leading-relaxed">
                            <b class="${l.textMain}">${a.student_name}</b>
                            telah mengerjakan <b class="${l.textAccent}">${c}</b>.
                        </p>

                        <p class="text-[9px] font-bold text-gray-400 mt-1.5 uppercase tracking-wider">
                            <i class="fa-regular fa-clock"></i> ${i}
                        </p>
                    </div>

                    <button onclick="event.stopPropagation(); deleteNotif('${a.id}')" class="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-white border border-red-200 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-xl flex items-center justify-center transition-all opacity-100 sm:opacity-0 sm:group-hover:opacity-100 active:scale-95 shadow-sm z-10">
                        <i class="fa-solid fa-trash-can"></i>
                    </button>
                </div>
                `}).join("");return`
                <div class="mb-4">
                    <h4 class="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2 pl-1 border-b border-gray-100 pb-1">${s}</h4>
                    <div class="space-y-2">
                        ${o}
                    </div>
                </div>
            `}).join("")};let E={};window.handleNotifLeaderboardModeChange=async()=>{const e=document.getElementById("lbMode")?.value||"pr",t=document.getElementById("lbPRFilters"),n=document.getElementById("lbExamFilters");e==="exam"?(t?.classList.add("hidden"),n?.classList.remove("hidden"),await loadExamOptionsForLB()):(n?.classList.add("hidden"),t?.classList.remove("hidden"),loadPRLeaderboard())};window.loadExamOptionsForLB=async()=>{const e=document.getElementById("lbExamSubject")?.value||"tajwid",t=document.getElementById("lbExamId");if(t){t.innerHTML='<option value="">Memuat ujian...</option>';try{if(!E[e]){const a=((await(await fetch(`${u}/api/exams`,{headers:{Authorization:`Bearer ${m}`}})).json()).data||[]).filter(i=>i.is_active===!0&&String(i.subject||"").toLowerCase()===String(e).toLowerCase());E[e]=a}const n=E[e];if(n.length===0){t.innerHTML='<option value="">Belum ada ujian aktif</option>',document.getElementById("lbPRContainer").innerHTML=`
                    <p class="text-center text-xs text-gray-400 italic py-10 font-medium">
                        Belum ada ujian aktif untuk mapel ini.
                    </p>
                `;return}t.innerHTML=n.map(s=>`
                <option value="${s.id}">${s.title}</option>
            `).join(""),loadPRLeaderboard()}catch(n){console.error(n),t.innerHTML='<option value="">Gagal memuat ujian</option>'}}};window.loadPRLeaderboard=async()=>{const e=document.getElementById("lbMode")?.value||"pr",t=document.getElementById("lbPRContainer");t.innerHTML=`
            <div class="text-center py-10">
                <i class="fa-solid fa-spinner fa-spin text-indigo-500 text-2xl"></i>
                <p class="text-[10px] text-indigo-400 font-bold mt-2">Menghitung Peringkat...</p>
            </div>
        `;try{let n="";if(e==="exam"){const i=document.getElementById("lbExamId")?.value;if(!i){t.innerHTML='<p class="text-center text-xs text-gray-400 italic py-10 font-medium">Pilih ujian terlebih dahulu.</p>';return}n=`${u}/api/onboarding/leaderboard-pr?mode=exam&exam_id=${i}`}else{const i=document.getElementById("lbFilterSubject").value,r=document.getElementById("lbFilterWeek").value;if(!i||!r)return;n=`${u}/api/onboarding/leaderboard-pr?subject=${i}&week=${r}`}let a=(await(await fetch(n,{headers:{Authorization:`Bearer ${m}`}})).json()).data||[];if(e==="pr"&&(a=a.filter(i=>i.is_pr===!0)),a=a.filter(i=>{const r=String(i.name||"").toLowerCase();return!r.includes("john doe")&&!r.includes("xaviera")&&!r.includes("xaveria")}),a=a.slice(0,5),a.length===0){t.innerHTML=`
                    <p class="text-center text-xs text-gray-400 italic py-10 font-medium">
                        Belum ada data leaderboard ${e==="exam"?"ujian ini":"PR ini"}.
                    </p>
                `;return}t.innerHTML=a.map((i,r)=>{const l=["bg-amber-100 text-amber-600 border-amber-200","bg-slate-100 text-slate-500 border-slate-200","bg-orange-100 text-orange-600 border-orange-200","bg-indigo-50 text-indigo-500 border-indigo-100","bg-indigo-50 text-indigo-500 border-indigo-100"],c=e==="exam"?'<span class="bg-blue-50 text-blue-600 border border-blue-100 text-[8px] font-black px-2 py-0.5 rounded-lg">UJIAN</span>':'<span class="bg-green-50 text-green-600 border border-green-100 text-[8px] font-black px-2 py-0.5 rounded-lg">PR</span>';return`
                    <div class="flex items-center gap-3 bg-white border border-gray-100 rounded-2xl p-3 shadow-sm">
                        <div class="w-9 h-9 rounded-xl flex items-center justify-center font-black text-xs border ${l[r]||l[4]}">
                            #${r+1}
                        </div>

                        <div class="flex-1 min-w-0">
                            <div class="flex items-center gap-1.5 mb-1">
                                ${c}
                                <p class="font-black text-xs text-gray-800 truncate">${i.name}</p>
                            </div>
                            <p class="text-[9px] font-bold text-gray-400">
                                Nilai asli: ${i.raw_score??i.score??0}
                                ${i.time_taken&&i.time_taken!=="-"?` • ${i.time_taken}s`:""}
                            </p>
                        </div>

                        <div class="text-right">
                            <p class="text-lg font-black text-indigo-600">${i.composite_score}</p>
                            <p class="text-[8px] font-bold text-gray-400 uppercase">Poin</p>
                        </div>
                    </div>
                `}).join("")}catch(n){console.error(n),t.innerHTML=`
                <div class="text-center py-10 bg-red-50 rounded-2xl border border-red-100">
                    <i class="fa-solid fa-triangle-exclamation text-red-500 text-2xl mb-2"></i>
                    <p class="text-xs font-bold text-red-500">Gagal memuat leaderboard.</p>
                </div>
            `}};window.openNotifModal=()=>{const e=document.getElementById("modalNotif"),t=document.getElementById("notifBox");switchNotifTab("list"),e.classList.replace("hidden","flex"),setTimeout(()=>{e.classList.replace("opacity-0","opacity-100"),t.classList.replace("translate-y-full","translate-y-0")},10),H(!1)};window.closeNotifModal=()=>{const e=document.getElementById("modalNotif"),t=document.getElementById("notifBox");e.classList.replace("opacity-100","opacity-0"),window.innerWidth<640&&t.classList.replace("translate-y-0","translate-y-full"),setTimeout(()=>e.classList.replace("flex","hidden"),300)};window.deleteNotif=e=>{showConfirmGlobal("Hapus Notifikasi?","Notif ini akan dihapus permanen dari laci.",async()=>{f=f.filter(t=>t.id!==e),v(),L();try{await fetch(`${u}/api/notifications/${e}`,{method:"DELETE",headers:{Authorization:`Bearer ${m}`}})}catch{}},!1,"danger")};window.clearAllNotifs=()=>{f.length!==0&&showConfirmGlobal("Hapus Semua?","Yakin mau hapus semua notifikasi? Laci akan kembali kosong.",async()=>{f=[],v(),L();try{await fetch(`${u}/api/notifications/clear`,{method:"DELETE",headers:{Authorization:`Bearer ${m}`}})}catch{}},!1,"danger")};window.openNotifDetail=async e=>{const t=document.getElementById("modalNotifDetail"),n=document.getElementById("notifDetailBox"),s=document.getElementById("notifDetailLoading"),o=document.getElementById("notifDetailContent");t.classList.replace("hidden","flex"),setTimeout(()=>{t.classList.replace("opacity-0","opacity-100"),n.classList.replace("scale-95","scale-100")},10),s.classList.remove("hidden"),o.classList.add("hidden");try{const a=await fetch(`${u}/api/notifications/${e}/detail`,{headers:{Authorization:`Bearer ${m}`}}),i=await a.json();if(!a.ok||i.status==="error")throw new Error(i.message||"Gagal mengambil detail notifikasi.");const r=i.data,l=r.type==="exam";document.getElementById("detailStudentName").innerText=r.student_name||"Siswa",document.getElementById("detailSubjectWeek").innerText=l?`${r.subject||"UJIAN"} • ${r.title||"Ujian"}`:`${r.subject||"PR"} • PERTEMUAN ${r.week||"-"}`;const c=document.getElementById("detailScore"),d=Number(r.score||0);c.innerText=d,c.className=`text-5xl font-black drop-shadow-sm ${d>=80?"text-green-600":d>=60?"text-amber-500":"text-red-500"}`;const p=document.getElementById("detailSatpamPhoto"),w=document.getElementById("detailSatpamPlaceholder");r.photo_url?(p.src=r.photo_url,p.classList.remove("hidden"),w.classList.add("hidden")):(p.src="",p.classList.add("hidden"),w.classList.remove("hidden")),s.classList.add("hidden"),o.classList.remove("hidden")}catch(a){s.innerHTML=`
                <div class="text-center">
                    <i class="fa-solid fa-triangle-exclamation text-red-500 text-3xl mb-3"></i>
                    <p class="text-xs font-bold text-gray-500">${a.message}</p>
                </div>
            `}};window.closeNotifDetail=()=>{const e=document.getElementById("modalNotifDetail"),t=document.getElementById("notifDetailBox");e.classList.replace("opacity-100","opacity-0"),t.classList.replace("scale-100","scale-95"),setTimeout(()=>e.classList.replace("flex","hidden"),300)};window.toggleDangerZone=()=>{const e=document.getElementById("dangerContent"),t=document.getElementById("dangerIcon");e&&e.classList.toggle("hidden"),t&&t.classList.toggle("rotate-180")};window.promptMaintenanceToggle=e=>{const t=e.checked;e.checked=!t;const n=t?"Mengaktifkan":"Mematikan",s=t?"Semua akses murid ke halaman PR akan diblokir dan dialihkan ke halaman Maintenance.":"Murid dapat kembali mengakses halaman PR secara normal.";showConfirmGlobal(`${n} Maintenance?`,s,()=>executeMaintenanceToggle(t,e),!1,"warning")};window.executeMaintenanceToggle=async(e,t)=>{try{const n=await fetch(`${u}/api/onboarding/system/status`,{method:"POST",headers:{Authorization:`Bearer ${m}`,"Content-Type":"application/json"},body:JSON.stringify({is_maintenance:e})}),s=await n.json();if(!n.ok)throw new Error(s.message||"Gagal update status");t.checked=e,window.showToast?.("success","Berhasil",`Mode perbaikan berhasil di${e?"aktifkan":"matikan"}.`)}catch(n){window.showToast?.("danger","Error",n.message)}};const x=document.getElementById("resetPasswordInput"),b=document.getElementById("btnExecuteReset"),z=[{key:"students_progress",label:"Progres Siswa (poin, item, hafalan) — nama tetap"},{key:"attendances",label:"Absensi"},{key:"onboarding_results",label:"Hasil PR (tugas)"},{key:"pr_locks",label:"Status & Deadline PR"},{key:"pr_notifications",label:"Notifikasi"},{key:"pr_extension_requests",label:"Permintaan Perpanjangan PR"},{key:"satpam_logs",label:"Foto Satpam (PR)"},{key:"consultations",label:"Konsultasi / Curhat"},{key:"memorization_logs",label:"Setoran Hafalan"},{key:"raports",label:"Raport"},{key:"todos",label:"To-do / Tugas Harian"},{key:"exam_results",label:"Hasil Ujian"},{key:"exam_retake_permissions",label:"Izin Ulang Ujian"},{key:"oral_exam_sessions",label:"Sesi Ujian Hafalan"},{key:"oral_exam_session_students",label:"Peserta Sesi Hafalan"},{key:"oral_exam_results",label:"Hasil Ujian Hafalan"},{key:"oral_exam_result_items",label:"Detail Nilai Hafalan"},{key:"student_gallery",label:"Galeri Siswa"},{key:"gamification_logs",label:"Riwayat Poin & Serangan"},{key:"coin_transfers",label:"Transfer Koin"},{key:"digital_rewards_purchases",label:"Pembelian Hadiah"},{key:"daily_challenge_logs",label:"Log Tantangan Harian"},{key:"daily_challenge_progress",label:"Progress Tantangan Harian"},{key:"app_feedbacks",label:"Feedback Aplikasi"}];let h="auto";const P=()=>{const e=new Date,t=e.getFullYear();return e.getMonth()+1>=7?`${t}-${t+1}`:`${t-1}-${t}`},O=()=>{const e=document.getElementById("resetTableChecks");e&&(e.innerHTML=z.map(t=>`
            <label class="flex items-center gap-3 p-2.5 rounded-xl border border-gray-100 bg-gray-50 cursor-pointer active:scale-[0.99] transition-all">
                <input type="checkbox" class="reset-table-check w-4 h-4 accent-red-600 shrink-0" value="${t.key}" onchange="updateResetButtonState()">
                <span class="text-[11px] font-bold text-gray-700 leading-snug">${t.label}</span>
            </label>`).join(""))};window.setResetMode=e=>{h=e;const t=document.getElementById("resetModeAutoBtn"),n=document.getElementById("resetModeManualBtn"),s=e==="auto";t.className=`flex-1 py-2.5 text-[11px] font-bold rounded-xl transition-all uppercase tracking-wider ${s?"bg-white text-red-600 shadow-sm":"text-gray-400"}`,n.className=`flex-1 py-2.5 text-[11px] font-bold rounded-xl transition-all uppercase tracking-wider ${s?"text-gray-400":"bg-white text-red-600 shadow-sm"}`,document.getElementById("resetAutoNote").classList.toggle("hidden",!s),document.getElementById("resetManualList").classList.toggle("hidden",s),updateResetButtonState()};window.toggleAllResetTables=e=>{document.querySelectorAll(".reset-table-check").forEach(t=>t.checked=e),updateResetButtonState()};const R=()=>Array.from(document.querySelectorAll(".reset-table-check:checked")).map(e=>e.value);window.updateResetButtonState=()=>{const e=(x?.value.trim().length||0)>=3,t=h==="auto"||R().length>0;b&&(b.disabled=!(e&&t))};window.openResetModal=()=>{x&&(x.value=""),b&&(b.innerHTML="Unduh CSV & Reset"),O(),setResetMode("auto"),document.getElementById("modalReset")?.classList.replace("hidden","flex"),setTimeout(()=>{x&&x.focus()},100)};window.closeResetModal=()=>{document.getElementById("modalReset")?.classList.replace("flex","hidden")};const K=e=>{const t=o=>{if(o==null)return"";let a=typeof o=="object"?JSON.stringify(o):String(o);return/[",\n\r]/.test(a)&&(a='"'+a.replace(/"/g,'""')+'"'),a};let n=`BACKUP DATA yukNgaji,Tahun Ajaran ${P()},Diunduh ${new Date().toLocaleString("id-ID")}

`;const s=e?.data||{};for(const[o,a]of Object.entries(s)){if(n+=`# TABEL: ${o} (${a.length} baris)
`,!a.length){n+=`(kosong)

`;continue}const i=Object.keys(a[0]);n+=i.map(t).join(",")+`
`,a.forEach(r=>{n+=i.map(l=>t(r[l])).join(",")+`
`}),n+=`
`}return"\uFEFF"+n};x&&b&&(x.addEventListener("input",updateResetButtonState),b.onclick=async()=>{const e=x.value.trim();if(!e)return;const t=R();if(h==="manual"&&t.length===0){window.showToast?.("warning","Pilih Data","Centang minimal satu data untuk direset.");return}const n=h==="auto"?"SEMUA data transaksi & progres siswa":`${t.length} jenis data terpilih`;if(!confirm(`Peringatan Terakhir!

Data akan diunduh sebagai CSV lalu ${n} akan DIKOSONGKAN permanen.

Lanjutkan?`))return;const s=h==="auto"||t.includes("students_progress"),o=t.filter(a=>a!=="students_progress");b.disabled=!0,b.innerHTML='<i class="fa-solid fa-spinner fa-spin"></i> Memproses...';try{const a=await fetch(`${u}/api/admin/factory-reset`,{method:"POST",headers:{Authorization:`Bearer ${m}`,"Content-Type":"application/json"},body:JSON.stringify({password:e,mode:h,tables:o,reset_student_progress:s})}),i=await a.json();if(a.ok){const r=K(i.backup),l=new Blob([r],{type:"text/csv;charset=utf-8;"}),c=URL.createObjectURL(l),d=document.createElement("a");d.href=c,d.download=`Tahun_Ajaran_${P()}.csv`,document.body.appendChild(d),d.click(),document.body.removeChild(d),URL.revokeObjectURL(c),window.showToast?.("success","Reset Selesai","Backup CSV terunduh & data dikosongkan."),closeResetModal(),setTimeout(()=>window.location.reload(),2e3)}else throw new Error(i.message)}catch(a){window.showToast?.("danger","Gagal",a.message||"Terjadi kesalahan."),b.innerHTML="Unduh CSV & Reset",updateResetButtonState(),x.focus()}});window.prLocksCache={};const Y=async()=>{try{const e={Authorization:`Bearer ${m}`},t=await fetch(`${u}/api/insights/filters`,{headers:e});if(t.ok){const n=await t.json();M=n.data.available_tasks||[];const s=n.data.subjects||[],o=s.map(d=>fetch(`${u}/api/onboarding/pr-locks/${d.toLowerCase()}`,{headers:e}).then(p=>p.json()).catch(()=>({data:[]}))),a=await Promise.all(o);s.forEach((d,p)=>{window.prLocksCache[d.toLowerCase()]=a[p].data||[]});const i=document.getElementById("modalFilterSubject"),r=document.getElementById("modalFilterWeek");i&&(i.innerHTML='<option value="">Semua Pelajaran</option>'+s.map(d=>`<option value="${d.toLowerCase()}">${d}</option>`).join(""));const l=document.getElementById("lbFilterWeek"),c=(n.data.weeks||[]).map(d=>`<option value="${d}">Pert. ${d}</option>`).join("");r&&(r.innerHTML='<option value="">Semua Pertemuan</option>'+c),l&&(l.innerHTML=c),i?.addEventListener("change",I),r?.addEventListener("change",I)}J()}catch(e){console.error("Gagal memuat filter dan task",e)}},J=()=>{g.forEach(n=>{const s=n.completed_tasks||[];n.missing_tasks=M.filter(o=>!s.some(a=>a.subject===o.subject&&a.week===o.week))});const e=g.filter(n=>n.missing_tasks.length>0),t=document.getElementById("notDoneCount");t&&(t.innerText=e.length),q()},q=async()=>{try{const e=new Set(g.filter(i=>(i.missing_tasks||[]).length>0).map(i=>String(i.id))),n=await(await fetch(`${u}/api/insights/exam-missing`,{headers:{Authorization:`Bearer ${m}`}})).json(),s=new Set((n.data?.students||[]).map(i=>String(i.id))),o=new Set([...e,...s]),a=document.getElementById("notDoneCount");a&&(a.innerText=o.size)}catch(e){console.error("Gagal menghitung ringkasan tunggakan gabungan:",e)}},I=()=>{const e=document.getElementById("modalFilterSubject")?.value,t=parseInt(document.getElementById("modalFilterWeek")?.value),n=document.getElementById("notDoneListContainer");if(!n)return;const s=g.filter(o=>!o.missing_tasks||o.missing_tasks.length===0?!1:o.missing_tasks.some(a=>{const i=e?a.subject.toLowerCase()===e:!0,r=t?a.week===t:!0;return i&&r}));if(s.length===0){n.innerHTML='<p class="text-center py-10 text-xs text-gray-400 italic">Alhamdulillah, tidak ada tunggakan sesuai kriteria ini! 🎉</p>';return}n.innerHTML=s.map(o=>{const a=o.missing_tasks.filter(l=>{const c=e?l.subject.toLowerCase()===e:!0,d=t?l.week===t:!0;return c&&d});let i="",r="items-center";if(!e||!t){const l=a.slice(0,2).map(d=>{const w=window.prLocksCache[d.subject.toLowerCase()]?.includes(d.week)?'<span class="bg-indigo-500 text-white px-1 py-0.5 rounded-[4px] ml-1 flex items-center gap-0.5 shadow-sm"><i class="fa-solid fa-house-laptop text-[6px]"></i> PR</span>':"";return`<span class="flex items-center text-[8px] bg-red-100 text-red-600 px-1.5 py-0.5 rounded font-black uppercase tracking-widest border border-red-200">
                        ${d.subject} (Pert ${d.week})${w}
                    </span>`}).join(""),c=a.length>2?`<span class="flex items-center text-[8px] bg-gray-100 text-gray-500 px-1.5 py-0.5 rounded font-bold border border-gray-200">+${a.length-2}</span>`:"";i=`<div class="flex flex-wrap gap-1 mt-1.5">${l}${c}</div>`,r="items-start pt-0.5"}return`
                <div class="flex items-center justify-between p-3 rounded-2xl bg-gray-50 border border-gray-100 hover:border-red-200 hover:bg-red-50 transition-all cursor-pointer group" onclick="window.location.href='/student/${o.id}'">
                    <div class="flex ${r} gap-3">
                        <div class="w-10 h-10 rounded-xl bg-white flex items-center justify-center font-bold text-xs text-gray-400 border border-gray-200 group-hover:border-red-200 overflow-hidden shadow-sm shrink-0">
                            ${o.photo_url?`<img src="${o.photo_url}" class="w-full h-full object-cover">`:o.name.substring(0,2).toUpperCase()}
                        </div>
                        <div>
                            <span class="text-xs font-bold text-gray-700 group-hover:text-red-600 block leading-tight">${o.name}</span>
                            ${i}
                        </div>
                    </div>
                    <i class="fa-solid fa-arrow-right text-[10px] text-gray-300 group-hover:text-red-400"></i>
                </div>
            `}).join("")};window.openNotDoneModal=()=>{const e=document.getElementById("modalNotDone");e&&e.classList.replace("hidden","flex"),window.switchMissingTab(S||"pr")};window.closeNotDoneModal=()=>{const e=document.getElementById("modalNotDone");e&&e.classList.replace("flex","hidden")};window.switchMissingTab=e=>{S=e;const t=document.getElementById("tabMissingPR"),n=document.getElementById("tabMissingExam"),s=document.getElementById("missingPRFilters"),o=document.getElementById("missingExamFilters"),a="flex-1 py-2.5 text-[10px] font-bold bg-white text-red-600 rounded-xl shadow-sm transition-all uppercase tracking-widest",i="flex-1 py-2.5 text-[10px] font-bold text-gray-400 hover:text-gray-600 transition-all uppercase tracking-widest";if(e==="pr"){t.className=a,n.className=i,s.classList.remove("hidden"),s.classList.add("flex"),o.classList.add("hidden"),I();return}n.className=a,t.className=i,s.classList.add("hidden"),s.classList.remove("flex"),o.classList.remove("hidden"),loadMissingExamList()};window.loadMissingExamList=async()=>{const e=document.getElementById("notDoneListContainer"),t=document.getElementById("modalFilterExamSubject")?.value||"",n=t||"all";if(e){e.innerHTML=`
            <div class="text-center py-8">
                <i class="fa-solid fa-spinner fa-spin text-red-500 text-xl"></i>
                <p class="text-[10px] font-bold text-gray-400 mt-2">Memuat tunggakan ujian...</p>
            </div>
        `;try{if(!y[n]){const s=t?`?subject=${encodeURIComponent(t)}`:"",o=await fetch(`${u}/api/insights/exam-missing${s}`,{headers:{Authorization:`Bearer ${m}`}}),a=await o.json();if(!o.ok||a.status==="error")throw new Error(a.message||"Gagal memuat data ujian.");y[n]=a.data}Q(y[n])}catch(s){console.error(s),e.innerHTML=`
                <div class="text-center py-8 bg-red-50 border border-red-100 rounded-2xl">
                    <i class="fa-solid fa-triangle-exclamation text-red-500 text-2xl mb-2"></i>
                    <p class="text-xs font-bold text-red-500">Gagal memuat data tunggakan ujian.</p>
                </div>
            `}}};const Q=e=>{const t=document.getElementById("notDoneListContainer");if(!t)return;const n=e?.students||[],s=document.getElementById("modalFilterExamSubject")?.value||"";if(n.length===0){t.innerHTML=`
                <div class="text-center py-10 bg-green-50 rounded-3xl border border-green-100">
                    <i class="fa-solid fa-circle-check text-green-500 text-3xl mb-3"></i>
                    <p class="text-xs font-black text-green-600">Semua siswa sudah mengerjakan ujian${s?" mapel ini":""}.</p>
                </div>
            `;return}t.innerHTML=n.map(o=>{const a=(o.name||"??").substring(0,2).toUpperCase(),i=(o.missing_exams||[]).map(r=>`
                <span class="inline-block mt-1 mr-1 bg-indigo-50 text-indigo-600 border border-indigo-100 px-2 py-0.5 rounded-lg text-[8px] font-black uppercase tracking-wider">
                    ${r.subject} • ${r.title}
                </span>
            `).join("");return`
                <div class="bg-white border border-red-100 rounded-2xl p-3 shadow-sm hover:bg-red-50 transition-colors">
                    <div class="flex items-start justify-between gap-3">
                        <div class="flex items-start gap-3 min-w-0">
                            <div class="w-10 h-10 bg-red-50 text-red-500 rounded-xl flex items-center justify-center font-black text-xs shrink-0">
                                ${a}
                            </div>
                            <div class="min-w-0">
                                <span class="text-xs font-black text-gray-800 block leading-tight capitalize">${o.name}</span>
                                <p class="text-[9px] font-bold text-red-400 mt-1">${o.missing_count} ujian belum dikerjakan</p>
                                <div class="mt-1">
                                    ${i}
                                </div>
                            </div>
                        </div>
                        <i class="fa-solid fa-file-circle-xmark text-red-300 text-sm mt-1"></i>
                    </div>
                </div>
            `}).join("")},G=async()=>{try{const e={Authorization:`Bearer ${m}`,"Content-Type":"application/json"};try{const r=await fetch(`${u}/api/onboarding/system/status`,{headers:e});if(r.ok){const l=await r.json();if(l.data){const c=document.getElementById("toggleMaintenance");c&&(c.checked=l.data.is_maintenance)}}}catch{console.log("Gagal fetch system status")}const[t,n]=await Promise.all([fetch(`${u}/api/insights/dashboard`,{headers:e}),fetch(`${u}/api/students/stats/enriched`,{headers:e})]);if(t.status===401||n.status===401)throw new Error("Sesi habis");const s=await t.json();g=(await n.json()).data||[],y={};const a=document.getElementById("statStudents");a&&(a.innerText=s.data.total_students||g.length||0);const i=document.getElementById("statExams");i&&(i.innerText=s.data.total_exams||0),F(),V(),await Y(),H(!0)}catch{window.showToast&&window.showToast("danger","Error","Gagal memuat data dashboard."),document.getElementById("studentList").innerHTML='<div class="text-center py-6 text-red-500 text-xs font-bold">Gagal memuat.</div>',document.getElementById("podiumContainer").innerHTML='<div class="text-center w-full text-red-500 text-xs font-bold">Gagal memuat.</div>'}},F=()=>{const e=document.getElementById("filterList");if(!e)return;const t=e.value,n=document.getElementById("studentList"),s=document.getElementById("remainingStudentsContainer"),o=document.getElementById("remainingStudentsText");if(g.length===0){n.innerHTML='<div class="empty-state card" style="border-style:dashed;"><div class="empty-icon"><i class="fa-solid fa-folder-open text-2xl"></i></div><p class="caption font-semibold">Belum ada data Anak.</p></div>',s&&s.classList.add("hidden");return}let a=[...g];t==="abjad"?a.sort((r,l)=>r.name.localeCompare(l.name)):t==="nilai"?a.sort((r,l)=>l.finalScore-r.finalScore):t==="rajin"&&a.sort((r,l)=>l.hadir-r.hadir);const i=a.slice(0,5);n.innerHTML=i.map((r,l)=>{const c=r.name.substring(0,2).toUpperCase(),d=r.photo_url?`<img src="${r.photo_url}" class="w-full h-full object-cover" alt="${r.name}" />`:c;let p="";return t==="nilai"?p=`<span class="badge badge-warning ml-2"><i class="fa-solid fa-star text-[8px]"></i> Rata: ${r.finalScore}</span>`:t==="rajin"&&(p=`<span class="badge badge-info ml-2"><i class="fa-solid fa-calendar-check text-[8px]"></i> Hadir: ${r.hadir}x</span>`),`
                <div class="card card-interactive card-pad !p-3.5 flex items-center justify-between" onclick="window.location.href='/student/${r.id}'">
                    <div class="flex items-center gap-3 min-w-0">
                        <div class="relative flex-shrink-0">
                            <div class="avatar w-12 h-12 text-base overflow-hidden">
                                ${d}
                            </div>
                            ${t!=="abjad"?`<div class="absolute -top-1 -left-1 w-5 h-5 rounded-full flex items-center justify-center text-[9px] font-bold border-2 border-white z-10" style="background-color: var(--ink); color:#fff;">${l+1}</div>`:""}
                        </div>
                        <div class="min-w-0">
                            <h4 class="section-title truncate max-w-[150px]">${r.name}</h4>
                            <div class="flex items-center mt-0.5">
                                <p class="eyebrow">${r.grade}</p>
                                ${p}
                            </div>
                        </div>
                    </div>
                    <div class="w-8 h-8 rounded-full flex items-center justify-center text-tertiary flex-shrink-0" style="background-color: var(--surface-sunken);">
                        <i class="fa-solid fa-chevron-right text-[10px]"></i>
                    </div>
                </div>
            `}).join(""),s&&o&&(a.length>5?(o.innerText=`+ ${a.length-5} anak lainnya`,s.classList.remove("hidden")):s.classList.add("hidden"))},j=document.getElementById("filterList");j&&j.addEventListener("change",F);const V=()=>{const e=document.getElementById("podiumContainer"),t=document.getElementById("leaderboardTable");if(!e||!t)return;if(g.length===0){e.innerHTML='<div class="text-center w-full"><p class="text-gray-400 text-xs font-bold">Belum ada data untuk Leaderboard.</p></div>';return}const s=[...g].sort((a,i)=>i.finalScore-a.finalScore).slice(0,5),o=(a,i)=>{if(!a)return'<div class="w-12 h-12 rounded-full border-2 border-dashed border-gray-300 bg-gray-50"></div>';const r=a.photo_url?`<img src="${a.photo_url}" class="w-full h-full object-cover rounded-full" alt="Foto ${a.name}" />`:a.name.substring(0,2).toUpperCase();return`
                <div class="relative w-14 h-14 ${i} rounded-full flex items-center justify-center font-black text-lg z-10 shadow-lg border-2 border-white cursor-pointer hover:-translate-y-1 transition-transform overflow-hidden" onclick="window.location.href='/student/${a.id}'">
                    ${r}
                </div>
                <p class="text-[9px] font-bold mt-1 text-gray-700 truncate w-16 text-center capitalize">${a.name.split(" ")[0]}</p>
                <p class="text-[8px] font-black text-amber-500"><i class="fa-solid fa-star"></i> ${a.finalScore}</p>
            `};e.innerHTML=`
            <div class="flex flex-col items-center">
                ${o(s[1],"bg-slate-200 text-slate-600")}
                <div class="w-20 h-20 bg-gradient-to-t from-slate-300 to-slate-100 rounded-t-xl shadow-inner flex items-start justify-center pt-2 mt-2 border border-slate-200">
                    <span class="text-slate-400 font-black text-2xl drop-shadow-sm">2</span>
                </div>
            </div>

            <div class="flex flex-col items-center">
                <i class="fa-solid fa-crown text-amber-400 text-3xl mb-1 animate-bounce drop-shadow-md"></i>
                ${o(s[0],"bg-amber-100 text-amber-600 border-4 border-amber-300 w-16 h-16 text-2xl")}
                <div class="w-24 h-28 bg-gradient-to-t from-amber-400 to-amber-200 rounded-t-xl shadow-inner flex items-start justify-center pt-2 mt-2 border border-amber-300">
                    <span class="text-amber-600 font-black text-4xl drop-shadow-sm">1</span>
                </div>
            </div>

            <div class="flex flex-col items-center">
                ${o(s[2],"bg-orange-100 text-orange-600")}
                <div class="w-20 h-16 bg-gradient-to-t from-orange-300 to-orange-100 rounded-t-xl shadow-inner flex items-start justify-center pt-2 mt-2 border border-orange-200">
                    <span class="text-orange-400 font-black text-xl drop-shadow-sm">3</span>
                </div>
            </div>
        `,t.innerHTML=s.map((a,i)=>{const r=a.photo_url?`<img src="${a.photo_url}" class="w-full h-full object-cover" />`:`<span class="text-[10px]">${a.name.substring(0,2).toUpperCase()}</span>`;return`
            <tr class="hover:bg-gray-50 transition-colors cursor-pointer" onclick="window.location.href='/student/${a.id}'">
                <td class="p-3">
                    <div class="flex items-center gap-2">
                        <div class="w-6 h-6 rounded-md bg-gray-100 flex items-center justify-center font-black text-gray-500 overflow-hidden shadow-inner flex-shrink-0">
                            ${r}
                        </div>
                        <div>
                            <p class="font-bold text-gray-800 truncate max-w-[90px]">${a.name.split(" ")[0]}</p>
                            <p class="text-[8px] font-bold text-gray-400 uppercase">${a.grade}</p>
                        </div>
                    </div>
                </td>
                <td class="p-3 text-center font-bold text-green-600">${a.t_avg>0?a.t_avg:"-"}</td>
                <td class="p-3 text-center font-bold text-blue-600">${a.f_avg>0?a.f_avg:"-"}</td>
                <td class="p-3 text-center font-bold text-purple-600">${a.th_avg>0?a.th_avg:"-"}</td>
                <td class="p-3 text-center font-black text-gray-700 bg-gray-50/50">${a.hadir}x</td>
            </tr>
            `}).join("")};G();document.getElementById("btnLogout")?.addEventListener("click",()=>{localStorage.clear(),window.location.replace("/")});const Z=async()=>{try{const t=await(await fetch(`${u}/api/attendances/today-status`,{headers:{Authorization:`Bearer ${m}`}})).json(),n=document.getElementById("absensiStatusText"),s=document.getElementById("absensiPulse");if(!n||!s)return;t.isDone?(n.innerText="Selesai (Sudah Absen)",n.style.color="var(--accent)",n.style.fontWeight="600"):(n.innerText=t.isMandatory?"Wajib Absen Sekarang!":"Absensi Sunnah",t.isMandatory&&(n.style.color="var(--danger)",n.style.fontWeight="600",s.style.borderColor="rgba(229,72,77,0.5)",s.classList.add("animate-pulse")))}catch{}};Z();window.openTransferDrawer=()=>{const e=document.getElementById("transferStudentSelect"),t=document.getElementById("transferAmountInput");g&&g.length>0?e.innerHTML='<option value="" disabled selected>-- Siapa yang berhasil jawab? --</option>'+g.map(n=>`<option value="${n.id}">${n.name}</option>`).join(""):e.innerHTML='<option value="">Gagal memuat siswa.</option>',t.value="",document.getElementById("drawerTransfer").classList.replace("hidden","flex")};window.closeTransferDrawer=()=>{document.getElementById("drawerTransfer").classList.replace("flex","hidden")};window.setTransferAmount=e=>{document.getElementById("transferAmountInput").value=e};window.submitTransfer=async()=>{const e=document.getElementById("transferStudentSelect").value,t=parseInt(document.getElementById("transferAmountInput").value);if(!e||!t||t<=0){window.showToast?.("warning","Ups","Pilih murid dan pastikan koin diisi dengan benar.");return}const n=document.getElementById("btnSubmitTransfer"),s=n.innerHTML;n.innerHTML='<i class="fa-solid fa-spinner fa-spin"></i> Mengirim...',n.disabled=!0;try{if(!(await fetch(`${u}/api/onboarding/transfer-reward`,{method:"POST",headers:{Authorization:`Bearer ${m}`,"Content-Type":"application/json"},body:JSON.stringify({student_id:e,amount:t})})).ok)throw new Error("Gagal mengirim koin");window.showToast?.("success","Terkirim!",`Berhasil transfer ${t} koin sebagai reward.`),closeTransferDrawer(),G()}catch{window.showToast?.("danger","Error","Gagal mentransfer koin. Coba lagi.")}finally{n.innerHTML=s,n.disabled=!1}};window.openDailyChallengeLinkModal=()=>{document.getElementById("modalDailyChallengeLink")?.classList.replace("hidden","flex")};window.closeDailyChallengeLinkModal=()=>{document.getElementById("modalDailyChallengeLink")?.classList.replace("flex","hidden")};window.copyDailyChallengeLink=async e=>{const t=window.location.origin,n=document.getElementById("dcEventName").value.trim(),s=document.getElementById("dcEventCoin").value||5;let o="";n&&(o=`&eventName=${encodeURIComponent(n)}&eventCoin=${s}`);const a=e==="preview"?`${t}/daily-challenge?preview=true&token=${m}${o}`:`${t}/daily-challenge?token=${m}${o}`,i=e==="preview"?`Link simulasi Daily Challenge:
${a}`:`Assalamualaikum, ini link Daily Challenge hari ini untuk mendapatkan koin:
${a}`;await navigator.clipboard.writeText(i),window.showToastAlert?window.showToastAlert("success","Link Disalin",e==="preview"?"Link simulasi sudah disalin.":"Link real murid beserta event sudah disalin."):alert("Link berhasil disalin!"),window.closeDailyChallengeLinkModal()};window.toggleEventDuration=()=>{const e=document.getElementById("dcIsLimitedEvent").checked,t=document.getElementById("dcEventDurationContainer");e?t.classList.remove("hidden"):t.classList.add("hidden")};window.copyDailyChallengeLink=async e=>{const t=window.location.origin,n=document.getElementById("dcEventName").value.trim(),s=document.getElementById("dcEventCoin").value||5,o=document.getElementById("dcIsLimitedEvent").checked,a=parseInt(document.getElementById("dcEventDuration").value);let i="";if(n&&(i=`&eventName=${encodeURIComponent(n)}&eventCoin=${s}`,o)){const c=Date.now()+a*24*60*60*1e3;i+=`&eventDeadline=${c}`}const r=e==="preview"?`${t}/daily-challenge?preview=true&token=${m}${i}`:`${t}/daily-challenge?token=${m}${i}`,l=e==="preview"?`Link simulasi Daily Challenge:
${r}`:`Assalamualaikum, ini link Daily Challenge hari ini untuk mendapatkan koin:
${r}`;await navigator.clipboard.writeText(l),window.showToastAlert?window.showToastAlert("success","Link Disalin","Link beserta setingan event sudah disalin."):alert("Link berhasil disalin!"),window.closeDailyChallengeLinkModal()};
