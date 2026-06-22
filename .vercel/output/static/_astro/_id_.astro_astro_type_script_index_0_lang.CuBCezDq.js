const k="http://localhost:3000",x=localStorage.getItem("token"),B=window.location.pathname.split("/").pop();let r={},i=[],o=0,g=!1,b=!1;const c=t=>{g=t;const e=document.getElementById("btnSaveExam");e&&(t?(e.disabled=!1,e.innerHTML='<i class="fa-solid fa-save text-sm"></i>',e.classList.remove("bg-green-50","text-green-600"),e.classList.add("bg-gray-100","text-gray-600","hover:bg-gray-200"),e.title="Simpan Perubahan"):(e.disabled=!0,e.innerHTML='<i class="fa-solid fa-check text-sm"></i>',e.classList.remove("bg-gray-100","text-gray-600","hover:bg-gray-200"),e.classList.add("bg-green-50","text-green-600"),e.title="Sudah Tersimpan"))},_=t=>{const e=document.getElementById("examStatusBadge"),a=document.getElementById("menuPublishLabel"),n=document.getElementById("menuPublishIconWrap"),l=document.getElementById("menuPublishIcon");e&&(e.textContent=t?"Published":"Draft",e.className="badge flex-shrink-0 "+(t?"badge-accent":"badge-warning")),a&&(a.textContent=t?"Tarik ke Draft":"Terbitkan Ujian"),l&&(l.className="fa-solid "+(t?"fa-folder-open":"fa-paper-plane")),n&&(n.style.backgroundColor=t?"var(--warning-soft)":"var(--accent-soft)",n.style.color=t?"var(--warning)":"var(--accent-strong)")};window.toggleExamMenu=t=>{t&&t.stopPropagation();const e=document.getElementById("examMenu"),a=e.classList.contains("hidden");if(e.classList.toggle("hidden"),a){const n=l=>{!e.contains(l.target)&&!l.target.closest('[onclick^="toggleExamMenu"]')&&(e.classList.add("hidden"),document.removeEventListener("click",n))};setTimeout(()=>document.addEventListener("click",n),10)}};window.closeExamMenu=()=>document.getElementById("examMenu")?.classList.add("hidden");const E=async()=>{try{const t=await fetch(`${k}/api/exams/${B}`,{headers:{Authorization:`Bearer ${x}`}}),e=await t.json();t.ok&&(r=e.data,i=e.data.questions.map(a=>{if(a.question_type==="fill_in_blanks"&&typeof a.correct_answer=="string")try{a.correct_answer=JSON.parse(a.correct_answer)}catch{a.correct_answer=[""]}return a})||[],document.getElementById("uiTitle").innerText=r.title,document.getElementById("uiMeta").innerText=`${r.subject} • ${r.duration_minutes} Menit`,_(r.is_active),i.length===0?addEmptyQuestion():u(),c(!1))}catch(t){console.error(t),window.showToast?.("danger","Error","Gagal memuat ujian.")}};window.handleBack=()=>{g?document.getElementById("modalConfirmBack").classList.replace("hidden","flex"):window.location.href="/exams"};window.closeBackModal=()=>document.getElementById("modalConfirmBack").classList.replace("flex","hidden");window.forceBack=()=>window.location.href="/exams";window.addEmptyQuestion=()=>{i.push({question_type:"multiple_choice",question:"",options:{A:"",B:"",C:"",D:""},correct_answer:"A",hint:"",image_url:null}),o=i.length-1,u(),c(!0)};window.openAddQuestionModal=()=>{document.getElementById("formAddQuestion").reset(),document.getElementById("addType").value="multiple_choice",toggleAddType(),document.getElementById("modalAddQuestion").classList.remove("hidden")};window.closeAddQuestionModal=()=>document.getElementById("modalAddQuestion").classList.add("hidden");window.toggleAddType=()=>{const t=document.getElementById("addType").value==="fill_in_blanks";document.getElementById("addPGSection").classList.toggle("hidden",t),document.getElementById("addBlankNote").classList.toggle("hidden",!t)};document.getElementById("formAddQuestion").onsubmit=t=>{t.preventDefault();const e=document.getElementById("addType").value,a={question_type:e,question:document.getElementById("addQuestion").value,hint:document.getElementById("addHint").value,image_url:null};e==="fill_in_blanks"?(a.options={},a.correct_answer=[""]):(a.options={A:document.getElementById("addOptA").value,B:document.getElementById("addOptB").value,C:document.getElementById("addOptC").value,D:document.getElementById("addOptD").value},a.correct_answer=document.getElementById("addKey").value),i.push(a),o=i.length-1,u(),c(!0),closeAddQuestionModal(),window.showToast?.("success","Ditambah","Soal baru ditambahkan. Lengkapi & simpan.")};window.openUploadTemplate=()=>{document.getElementById("templatePasteArea").value="",document.getElementById("templateParseHint").classList.add("hidden"),document.getElementById("modalUploadTemplate").classList.remove("hidden")};window.closeUploadTemplate=()=>document.getElementById("modalUploadTemplate").classList.add("hidden");window.downloadExamTemplate=()=>{const t=`TIPE: pilgan
Q: Hukum mempelajari ilmu fiqih adalah?
A: Mubah
B: Fardhu kifayah
C: Haram
D: Makruh
KUNCI: B
CLUE: Cukup sebagian umat yang mempelajarinya.

TIPE: tf
Q: Niat termasuk salah satu rukun wudhu.
A: Benar
B: Salah
KUNCI: A

TIPE: isian
Q: Sebutkan dua rukun shalat secara berurutan (takbir lalu ...).
KUNCI: Takbiratul ihram, Membaca Al-Fatihah
CLUE: Diawali takbir.`,e=new Blob([t],{type:"text/plain"}),a=URL.createObjectURL(e),n=document.createElement("a");n.href=a,n.download="template_ujian_yukNgaji.txt",n.click(),URL.revokeObjectURL(a)};const I=t=>{const e=t.replace(/\r/g,"").split(/\n\s*\n/).map(n=>n.trim()).filter(Boolean),a=[];return e.forEach(n=>{const l=n.split(`
`).map(p=>p.trim()).filter(Boolean),d=p=>{const f=l.find(T=>T.toUpperCase().startsWith(p+":"));return f?f.slice(f.indexOf(":")+1).trim():""},s=(d("TIPE")||"pilgan").toLowerCase(),m=d("Q")||d("SOAL");if(!m)return;const y=d("CLUE")||d("HINT")||"",v=d("KUNCI");if(s==="isian"||s==="fill_in_blanks"){const p=(v||"").split(",").map(f=>f.trim()).filter(Boolean);if(!p.length)return;a.push({question_type:"fill_in_blanks",question:m,options:{},correct_answer:p,hint:y||null,image_url:null});return}let h;s==="tf"?h={A:d("A")||"Benar",B:d("B")||"Salah",C:"",D:""}:h={A:d("A"),B:d("B"),C:d("C"),D:d("D")};const w=(v||"A").toUpperCase().charAt(0);["A","B","C","D"].includes(w)&&h[w]&&a.push({question_type:"multiple_choice",question:m,options:h,correct_answer:w,hint:y||null,image_url:null})}),a};window.parseAndAddTemplate=()=>{const t=document.getElementById("templatePasteArea").value.trim(),e=document.getElementById("templateParseHint");if(!t){window.showToast?.("warning","Kosong","Tempel dulu isi templatenya.");return}let a=[];try{a=I(t)}catch{a=[]}if(!a.length){e.textContent="Tidak ada soal valid terbaca. Cek format (TIPE/Q/KUNCI).",e.style.color="var(--danger)",e.classList.remove("hidden");return}i.push(...a),o=i.length-1,u(),c(!0),closeUploadTemplate(),window.showToast?.("success","Berhasil",`${a.length} soal ditambahkan dari template. Cek lalu simpan.`)};window.qPrev=()=>{o>0&&(o--,u())};window.qNext=()=>{o<i.length-1&&(o++,u())};window.qJump=t=>{o=parseInt(t)||0,u()};window.changeQuestionType=(t,e)=>{i[t].question_type=e,e==="fill_in_blanks"?i[t].correct_answer=[""]:i[t].correct_answer="A",c(!0),u()};window.addBlank=t=>{i[t].correct_answer.push(""),c(!0),u()};window.removeBlank=(t,e)=>{i[t].correct_answer.splice(e,1),c(!0),u()};window.updateBlank=(t,e,a)=>{i[t].correct_answer[e]=a,c(!0)};window.removeQuestion=t=>{i.splice(t,1),o>=i.length&&(o=Math.max(0,i.length-1)),u(),c(!0),window.showToast?.("warning","Dihapus","Soal dihapus dari tampilan (Simpan untuk mematenkan).")};document.getElementById("questionsContainer").addEventListener("input",t=>{const e=t.target,a=parseInt(e.getAttribute("data-index")),n=e.getAttribute("data-field");if(!isNaN(a)){if(c(!0),n==="question")i[a].question=e.value;else if(n==="hint")i[a].hint=e.value;else if(n==="correct")i[a].correct_answer=e.value;else if(n.startsWith("opt_")){const l=n.split("_")[1];i[a].options[l]=e.value}}});window.handleImageUpload=(t,e)=>{const a=t.target.files[0];if(a){const n=new FileReader;n.onload=l=>{i[e].image_url=l.target.result,u(),c(!0)},n.readAsDataURL(a)}};window.removeImage=t=>{i[t].image_url=null,u(),c(!0)};const u=()=>{const t=document.getElementById("questionsContainer"),e=i.length;if(e===0){t.innerHTML='<div class="card card-pad"><div class="empty-state"><div class="empty-icon"><i class="fa-solid fa-inbox text-2xl"></i></div><p class="caption font-semibold">Belum ada soal.</p><p class="text-[11px] text-tertiary mt-1">Tekan tombol "Tambah Soal" di pojok kanan bawah.</p></div></div>';return}o>=e&&(o=e-1),o<0&&(o=0);const a=o,n=i[a],l=Array.from({length:e},(s,m)=>`<option value="${m}" ${m===a?"selected":""}>Soal ${m+1}</option>`).join(""),d=n.question_type==="fill_in_blanks"?`
            <div>
                <div class="flex justify-between items-center mb-2">
                    <label class="field-label !mb-0">Kunci Isian (Urut)</label>
                    <button type="button" onclick="addBlank(${a})" class="badge badge-info active:scale-95"><i class="fa-solid fa-plus"></i> Kolom</button>
                </div>
                <div class="space-y-2">
                    ${(Array.isArray(n.correct_answer)?n.correct_answer:[""]).map((s,m)=>`
                        <div class="flex items-center gap-2">
                            <div class="w-9 h-9 rounded-[var(--r-md)] flex items-center justify-center text-xs font-bold flex-shrink-0" style="background-color: var(--accent-soft); color: var(--accent-strong);">${m+1}</div>
                            <input type="text" value="${s}" oninput="updateBlank(${a}, ${m}, this.value)" placeholder="Ketik kata yang benar..." class="field field-sunken text-sm flex-1">
                            ${m>0?`<button type="button" onclick="removeBlank(${a}, ${m})" class="btn-icon !w-9 !h-9 flex-shrink-0" style="color: var(--danger);"><i class="fa-solid fa-xmark"></i></button>`:""}
                        </div>
                    `).join("")}
                </div>
            </div>
        `:`
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
                ${["A","B","C","D"].map(s=>`
                    <div class="flex items-center field field-sunken !p-0 overflow-hidden">
                        <div class="w-9 self-stretch flex items-center justify-center font-bold text-secondary" style="background-color: var(--hairline);">${s}</div>
                        <input type="text" data-index="${a}" data-field="opt_${s}" value="${n.options[s]||""}" placeholder="Pilihan ${s}" class="flex-1 px-3 py-2.5 bg-transparent text-sm outline-none">
                    </div>
                `).join("")}
            </div>
            <div>
                <label class="field-label">Kunci Jawaban</label>
                <select data-index="${a}" data-field="correct" class="field text-accent font-semibold">
                    ${["A","B","C","D"].map(s=>`<option value="${s}" ${n.correct_answer===s?"selected":""}>Kunci: ${s}</option>`).join("")}
                </select>
            </div>
        `;t.innerHTML=`
            <div class="card card-pad">
                <div class="flex items-center justify-between gap-2 mb-4 pb-3 border-b" style="border-color: var(--divider);">
                    <h3 class="section-title">Soal ${a+1} <span class="text-tertiary font-normal">/ ${e}</span></h3>
                    <button onclick="removeQuestion(${a})" class="badge badge-danger active:scale-95"><i class="fa-solid fa-trash"></i> Hapus</button>
                </div>

                <div class="space-y-4">
                    <div>
                        <label class="field-label">Tipe Soal</label>
                        <select onchange="changeQuestionType(${a}, this.value)" class="field field-sunken text-sm font-medium">
                            <option value="multiple_choice" ${n.question_type!=="fill_in_blanks"?"selected":""}>Pilihan Ganda</option>
                            <option value="fill_in_blanks" ${n.question_type==="fill_in_blanks"?"selected":""}>Isian Berurut (Kolom)</option>
                        </select>
                    </div>
                    <div>
                        <label class="field-label">Teks Soal</label>
                        <textarea data-index="${a}" data-field="question" rows="2" placeholder="Tulis pertanyaan di sini..." class="field field-sunken text-sm">${n.question||""}</textarea>
                    </div>
                    ${d}
                    <div>
                        <label class="field-label"><i class="fa-solid fa-lightbulb" style="color: var(--warning);"></i> Clue / Hint Siswa</label>
                        <input type="text" data-index="${a}" data-field="hint" value="${n.hint||""}" placeholder="Bantuan jika siswa kesusahan..." class="field field-sunken text-sm">
                    </div>
                </div>

                <div class="flex items-center justify-between gap-2 mt-5 pt-3 border-t" style="border-color: var(--divider);">
                    <button onclick="qPrev()" class="btn-icon" ${a===0?"disabled":""} aria-label="Sebelumnya"><i class="fa-solid fa-chevron-left"></i></button>
                    <select onchange="qJump(this.value)" class="field !py-2 !px-3 !w-auto text-sm font-medium">${l}</select>
                    <button onclick="qNext()" class="btn-icon" ${a===e-1?"disabled":""} aria-label="Berikutnya"><i class="fa-solid fa-chevron-right"></i></button>
                </div>
            </div>`};window.publishExamToggle=()=>{if(!r.is_active&&i.length<10){window.showToast?.("warning","Gagal Terbit","Minimal harus ada 10 soal untuk bisa menerbitkan ujian.");return}const t=document.getElementById("publishModalTitle"),e=document.getElementById("publishModalDesc"),a=document.getElementById("btnConfirmPublish"),n=document.getElementById("publishModalIcon"),l=document.getElementById("publishModalIconWrap");r.is_active?(t.innerText="Tarik ke Draft?",e.innerText="Ujian akan ditarik dan disembunyikan. Siswa tidak akan bisa mengakses ujian ini lagi dari Portal mereka.",a.innerText="Tarik ke Draft",a.style.backgroundColor="var(--warning)",a.onclick=()=>forcePublish(!1),n.className="fa-solid fa-folder-open",l.style.backgroundColor="var(--warning-soft)",l.style.color="var(--warning)"):(t.innerText="Terbitkan Ujian?",e.innerText="Ujian ini akan segera aktif dan langsung dapat diakses oleh siswa. Pastikan semua soal sudah benar.",a.innerText="Terbitkan",a.style.backgroundColor="var(--accent)",a.onclick=()=>forcePublish(!0),n.className="fa-solid fa-paper-plane",l.style.backgroundColor="var(--accent-soft)",l.style.color="var(--accent-strong)"),document.getElementById("modalConfirmPublish").classList.replace("hidden","flex")};window.closePublishModal=()=>document.getElementById("modalConfirmPublish").classList.replace("flex","hidden");window.forcePublish=t=>{const e=document.getElementById("btnConfirmPublish");e.innerHTML=`<i class="fa-solid fa-spinner fa-spin mr-1"></i> ${t?"Menerbitkan...":"Menarik..."}`,e.disabled=!0,saveExamAction(t)};window.saveExamAction=async(t=r.is_active)=>{if(b||t===r.is_active&&!g)return;b=!0;const e=document.getElementById("btnSaveExam");t===r.is_active&&e&&(e.disabled=!0,e.innerHTML='<i class="fa-solid fa-spinner fa-spin text-sm"></i>');const a={title:r.title,duration_minutes:r.duration_minutes,is_active:t,questions:i};try{const n=await fetch(`${k}/api/exams/${B}`,{method:"PUT",headers:{Authorization:`Bearer ${x}`,"Content-Type":"application/json"},body:JSON.stringify(a)});if(n.ok)c(!1),t!==r.is_active?(r.is_active=t,_(t),closePublishModal(),window.showToast?.("success","Status Berubah",t?"Ujian telah Terbit!":"Ujian ditarik ke Draft.")):window.showToast?.("success","Tersimpan","Draft disimpan dengan aman.");else{const l=await n.json();throw new Error(l.message)}}catch(n){window.showToast?.("danger","Error",n.message||"Gagal menyimpan."),c(!0)}finally{b=!1;const n=document.getElementById("btnConfirmPublish");n&&(n.disabled=!1)}};window.previewExam=()=>{if(typeof g<"u"&&g){window.showToast?.("warning","Simpan Dulu","Ada perubahan yang belum disimpan. Simpan dulu sebelum melihat preview.");return}if(typeof i<"u"&&i.length===0){window.showToast?.("warning","Kosong","Belum ada soal untuk disimulasikan.");return}const e=`teacher_preview_tutorial_seen_${window.location.pathname.split("/").pop()}`;if(!(localStorage.getItem(e)==="true")){localStorage.setItem(e,"true"),startTeacherPreview(!0);return}document.getElementById("modalPreviewTutorialChoice")?.classList.replace("hidden","flex")};window.startTeacherPreview=t=>{const e=window.location.pathname.split("/").pop();document.getElementById("modalPreviewTutorialChoice")?.classList.replace("flex","hidden");const a=t?"force":"skip";window.location.href=`/play/${e}?preview=true&teacher_preview=true&preview_tutorial=${a}&preview_final_flow=true`};E();
