const x="http://localhost:3000",I=localStorage.getItem("token");I||window.location.replace("/");let p=[],M=[],H="",P="";const G={1:"Tajwid",2:"Fiqih",3:"Tauhid",5:"Hafalan Al-Quran"},T=[{value:"hadir",label:"Hadir",tone:"ok"},{value:"izin:sakit",label:"Sakit",tone:"warn"},{value:"izin:pergi",label:"Pergi (Mendesak)",tone:"warn"},{value:"izin:haid",label:"Haid",tone:"warn"},{value:"izin:belajar",label:"Belajar",tone:"warn"},{value:"izin:lainnya",label:"Lainnya",tone:"warn"},{value:"alpa",label:"Tidak Hadir",tone:"bad"}],$=document.getElementById("modalAbsensi"),E=document.getElementById("modalInfoAlpa"),K=()=>$.classList.replace("hidden","flex"),z=()=>$.classList.replace("flex","hidden"),N=()=>E.classList.replace("hidden","flex"),A=()=>E.classList.replace("flex","hidden");document.getElementById("btnCloseModal").addEventListener("click",z);document.getElementById("btnInfoAbsensi").addEventListener("click",N);document.getElementById("btnCloseInfo").addEventListener("click",A);document.getElementById("btnCloseInfo2").addEventListener("click",A);$.addEventListener("click",t=>{t.target===$&&z()});E.addEventListener("click",t=>{t.target===E&&A()});const R=()=>{const t=document.getElementById("calendarGrid");t.innerHTML="";const e=new Date,[n,a,l]=e.toLocaleDateString("en-CA",{timeZone:"Asia/Jakarta"}).split("-"),d=`${n}-${a}-${l}`,s=new Date(+n,+a,0).getDate();document.getElementById("monthYearHeader").innerText=e.toLocaleDateString("id-ID",{month:"long",year:"numeric"});for(let i=s;i>=1;i--){const o=`${n}-${a}-${String(i).padStart(2,"0")}`,b=new Date(o),m=b.getDay(),y=o===d,_=o>d,h=[1,2,3,5].includes(m),L=G[m]||"Sunnah",S=b.toLocaleDateString("id-ID",{weekday:"long"}),g=M.some(O=>O.date===o);let k="",B="",w="";_?(k="background:var(--surface-sunken);border-color:var(--hairline);",B="opacity-40 cursor-not-allowed",w='<span class="text-[10px] font-semibold uppercase tracking-wide mt-2 inline-block" style="color:var(--ink-tertiary)"><i class="fa-solid fa-lock"></i> Terkunci</span>'):y?(k=g?"background:var(--accent-soft);border-color:var(--accent-soft-2);":"background:var(--canvas);border-color:var(--accent);box-shadow:var(--shadow-soft);",w=`<button
                    class="open-modal-btn w-full py-2.5 mt-3 rounded-xl text-[11px] font-bold uppercase tracking-wide active:scale-95 transition-all"
                    style="${g?"background:var(--canvas);border:1px solid var(--accent);color:var(--accent-strong);":"background:var(--accent);color:var(--on-accent);"}"
                    data-date="${o}" data-subject="${L}" data-dayname="${S}">
                    ${g?'<i class="fa-solid fa-pen-to-square mr-1"></i> Edit Absen':"Lakukan Absen"}
                </button>`):(k="background:var(--canvas);border-color:var(--hairline);",B=g?"":"opacity-60",w=g?`<button class="open-modal-btn w-full py-2 mt-2 rounded-lg text-[10px] font-semibold active:scale-95 transition-all" style="background:var(--surface-sunken);color:var(--ink-secondary)" data-date="${o}" data-subject="${L}" data-dayname="${S}"><i class="fa-solid fa-pen-to-square mr-1"></i> Edit</button>`:'<span class="text-[9px] font-semibold uppercase inline-block mt-2" style="color:var(--ink-tertiary)"><i class="fa-solid fa-minus mr-1"></i> Kosong</span>'),t.innerHTML+=`
                <div class="${y?"col-span-2":"col-span-1"} p-4 rounded-2xl border ${B} flex flex-col justify-between transition-all" style="${k}">
                    <div>
                        <div class="flex justify-between items-start mb-1">
                            <span class="text-3xl font-bold" style="color:${y?"var(--accent)":"var(--ink)"}">${i}</span>
                            ${h&&!g&&y?'<span class="w-2.5 h-2.5 rounded-full animate-pulse mt-1" style="background:var(--danger)"></span>':""}
                        </div>
                        <p class="text-[10px] font-semibold uppercase tracking-wide" style="color:var(--ink-tertiary)">${S}</p>
                        <p class="text-[9px] font-semibold mt-1.5 truncate inline-block ${h?"px-1.5 py-0.5 rounded-md":""}" style="${h?"color:var(--accent-strong);background:var(--accent-soft)":"color:var(--ink-tertiary)"}">${L}${h?" (Wajib)":""}</p>
                    </div>
                    ${w}
                </div>
            `}t.addEventListener("click",i=>{const o=i.target.closest(".open-modal-btn");o&&(i.stopPropagation(),J(o.dataset.date,o.dataset.subject,o.dataset.dayname))})},v=document.getElementById("studentCard");let c={},u=[],r=0,f="az",D="";const U=[{label:"Hadir",opts:T.filter(t=>t.tone==="ok")},{label:"Izin",opts:T.filter(t=>t.tone==="warn")},{label:"Tidak Hadir",opts:T.filter(t=>t.tone==="bad")}],J=(t,e,n)=>{H=t,P=e;const a=new Date(t).toLocaleDateString("id-ID",{day:"numeric",month:"long",year:"numeric"});document.getElementById("modalSubtitle").innerText=`${n}, ${a} • ${e}`;const d=M.find(s=>s.date===t)?.present_students??{};c={},p.forEach(s=>{const i=d[s.id];c[s.id]={status:i?.status??"hadir",reason:i?.reason??""}}),D="",r=0,document.getElementById("absSearch").value="",C(),K()},C=()=>{u=p.filter(t=>t.name.toLowerCase().includes(D)).sort((t,e)=>t.name.localeCompare(e.name,"id",{sensitivity:"base"})),f==="za"&&u.reverse(),r>=u.length&&(r=0),j()},j=()=>{const t=document.getElementById("absCounter"),e=document.getElementById("absPrev"),n=document.getElementById("absNext");if(!p.length||!u.length){const o=p.length?"fa-magnifying-glass":"fa-user-slash",b=p.length?"Tidak ada nama yang cocok.":"Belum ada data Anak aktif.";v.innerHTML=`<div class="empty-state"><div class="empty-icon"><i class="fa-solid ${o}"></i></div><p class="caption">${b}</p></div>`,t.textContent="0 / 0",e.disabled=!0,n.disabled=!0;return}const a=u[r],l=c[a.id]||{status:"hadir",reason:""},d=l.status==="izin:lainnya",s=a.has_infaq_can,i=U.map(o=>{const b=o.opts.map(m=>`
                <button type="button" class="att-opt ${l.status===m.value?"is-active":""}"
                    data-status="${m.value}" data-tone="${m.tone}">${m.label}</button>`).join("");return`
                <div>
                    <p class="field-label mb-1.5">${o.label}</p>
                    <div class="flex flex-wrap gap-1.5">${b}</div>
                </div>`}).join("");v.innerHTML=`
        <div class="card card-pad space-y-4" data-student-id="${a.id}">
            <!-- Nama -->
            <div class="flex items-center gap-3">
                <div class="avatar w-11 h-11 text-base capitalize">${a.name.substring(0,2)}</div>
                <div class="flex-1 min-w-0">
                    <h4 class="text-base font-semibold text-ink capitalize truncate">${a.name}</h4>
                    <p class="text-[10px] font-semibold uppercase tracking-wide text-tertiary">${a.grade}</p>
                </div>
            </div>

            <div class="border-t border-[var(--divider)]"></div>

            <!-- Status (tombol, dikelompokkan) -->
            <div class="status-group space-y-3">
                ${i}
                <div id="otherWrap" class="${d?"":"hidden"}">
                    <p class="field-label mb-1.5">Keterangan</p>
                    <textarea id="reasonInput" class="field field-sunken text-sm h-16" placeholder="Tulis alasan izin...">${l.reason}</textarea>
                </div>
            </div>

            <div class="border-t border-[var(--divider)]"></div>

            <!-- Kaleng Infaq -->
            <div class="flex items-center justify-between">
                <div class="flex items-center gap-2.5">
                    <div class="icon-chip-sm" style="background:var(--accent-soft);color:var(--accent-strong);"><i class="fa-solid fa-jar"></i></div>
                    <div>
                        <p class="text-xs font-semibold text-ink">Kaleng Infaq</p>
                        <p id="kalengCap" class="text-[10px] font-medium text-tertiary">${s?"Masih dipegang":"Sudah dikembalikan"}</p>
                    </div>
                </div>
                <button type="button" role="switch" aria-checked="${s?"true":"false"}"
                    class="kaleng-btn kaleng-switch ${s?"is-on":""}"
                    data-student-id="${a.id}" data-has-kaleng="${s?"true":"false"}"
                    title="${s?"Masih dipegang — klik bila sudah dikembalikan":"Sudah dikembalikan — klik bila masih dipegang"}">
                    <span class="ks-track"><span class="ks-thumb"></span></span>
                </button>
            </div>
        </div>`,t.textContent=`${r+1} / ${u.length}`,e.disabled=r<=0,n.disabled=r>=u.length-1};document.getElementById("absSearch").addEventListener("input",t=>{D=t.target.value.toLowerCase().trim(),r=0,C()});document.getElementById("absSort").addEventListener("click",()=>{f=f==="az"?"za":"az",document.getElementById("absSortLabel").textContent=f==="az"?"A–Z":"Z–A",document.querySelector("#absSort i").className=f==="az"?"fa-solid fa-arrow-down-a-z":"fa-solid fa-arrow-down-z-a",r=0,C()});document.getElementById("absPrev").addEventListener("click",()=>{r>0&&(r--,j())});document.getElementById("absNext").addEventListener("click",()=>{r<u.length-1&&(r++,j())});v.addEventListener("click",t=>{const e=t.target.closest(".att-opt");if(!e)return;t.stopPropagation();const n=e.closest("[data-student-id]"),a=n.dataset.studentId;n.querySelectorAll(".att-opt").forEach(i=>i.classList.remove("is-active")),e.classList.add("is-active"),c[a]=c[a]||{status:"hadir",reason:""},c[a].status=e.dataset.status;const l=e.dataset.status==="izin:lainnya",d=document.getElementById("otherWrap"),s=document.getElementById("reasonInput");d.classList.toggle("hidden",!l),l?s.focus():(s.value="",c[a].reason="")});v.addEventListener("input",t=>{if(t.target.id!=="reasonInput")return;const e=t.target.closest("[data-student-id]")?.dataset.studentId;e&&c[e]&&(c[e].reason=t.target.value)});v.addEventListener("click",async t=>{const e=t.target.closest(".kaleng-btn");if(!e)return;t.stopPropagation();const n=e.dataset.studentId,a=e.dataset.hasKaleng!=="true";e.disabled=!0,e.classList.add("opacity-50");try{if(!(await fetch(`${x}/api/students/${n}/infaq-can`,{method:"PATCH",headers:{Authorization:`Bearer ${I}`,"Content-Type":"application/json"},body:JSON.stringify({has_infaq_can:a})})).ok)throw new Error("Gagal");e.dataset.hasKaleng=a?"true":"false",e.setAttribute("aria-checked",a?"true":"false"),e.classList.toggle("is-on",a),e.title=a?"Masih dipegang — klik bila sudah dikembalikan":"Sudah dikembalikan — klik bila masih dipegang";const d=document.getElementById("kalengCap");d&&(d.textContent=a?"Masih dipegang":"Sudah dikembalikan");const s=p.find(i=>i.id==n);s&&(s.has_infaq_can=a)}catch{window.showToast?.("danger","Error","Gagal update status kaleng infaq.")}finally{e.disabled=!1,e.classList.remove("opacity-50")}});document.getElementById("formAbsensi").addEventListener("submit",async t=>{t.preventDefault();const e={};p.forEach(({id:l})=>{const d=c[l]||{status:"hadir",reason:""};e[l]={status:d.status,reason:d.status==="izin:lainnya"?(d.reason||"").trim():""}});const n=document.getElementById("btnSaveAbsensi"),a=n.innerHTML;n.innerHTML='<i class="fa-solid fa-spinner fa-spin"></i> Memproses...',n.disabled=!0;try{if(!(await fetch(`${x}/api/attendances`,{method:"POST",headers:{Authorization:`Bearer ${I}`,"Content-Type":"application/json"},body:JSON.stringify({date:H,subject:P,present_students:e})})).ok)throw new Error("Server error");window.showToast?.("success","Berhasil","Data kehadiran berhasil disimpan."),z(),q()}catch{window.showToast?.("danger","Error","Gagal menyimpan data kehadiran.")}finally{n.innerHTML=a,n.disabled=!1}});const q=async()=>{const t=document.getElementById("calendarGrid");t.innerHTML='<div class="col-span-2 text-center py-10 caption animate-pulse">Memuat kalender...</div>';try{const e={Authorization:`Bearer ${I}`},[n,a]=await Promise.all([fetch(`${x}/api/students`,{headers:e}),fetch(`${x}/api/attendances`,{headers:e})]);p=(await n.json()).data??[],M=(await a.json()).data??[],R()}catch{window.showToast?.("danger","Error","Gagal memuat data absensi.")}};q();
