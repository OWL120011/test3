document.addEventListener('DOMContentLoaded', () => {
    const downloadBtns = document.querySelectorAll('.download-btn');
    const optionsModal = document.getElementById('download-modal');
    const confirmModal = document.getElementById('confirm-modal');
    const optionsCloseBtn = document.getElementById('options-close');
    const confirmCloseBtn = document.getElementById('confirm-close');
    const modalTitle = document.getElementById('modal-title');
    const modalLinks = document.getElementById('modal-links');
    const confirmTitle = document.getElementById('confirm-title');
    const confirmText = document.getElementById('confirm-text');
    const confirmYesBtn = document.getElementById('confirm-yes-btn');
    const confirmNoBtn = document.getElementById('confirm-no-btn');

    const examData = {
        "วิชาสามัญ": [
            { text: "Physics Exam 2555", file: "exam/วิชาสามัญ/วิชาสามัญปี 2555.pdf" },
            { text: "Physics Exam 2556", file: "exam/วิชาสามัญ/วิชาสามัญปี 2556.pdf" },
            { text: "Physics Exam 2557", file: "exam/วิชาสามัญ/วิชาสามัญปี 2557.pdf" },
            { text: "Physics Exam 2558", file: "exam/วิชาสามัญ/วิชาสามัญปี 2558.pdf" },
            { text: "Physics Exam 2559", file: "exam/วิชาสามัญ/วิชาสามัญปี 2559.pdf" },
            { text: "Physics Exam 2560", file: "exam/วิชาสามัญ/วิชาสามัญปี 2560.pdf" },
            { text: "Physics Exam 2561", file: "exam/วิชาสามัญ/วิชาสามัญปี 2561.pdf" },
            { text: "Physics Exam 2562", file: "exam/วิชาสามัญ/วิชาสามัญปี 2562.pdf" },
            { text: "Physics Exam 2563", file: "exam/วิชาสามัญ/วิชาสามัญปี 2563.pdf" },
            { text: "Physics Exam 2564", file: "exam/วิชาสามัญ/วิชาสามัญปี 2564.pdf" },
            { text: "Physics Exam 2565", file: "exam/วิชาสามัญ/วิชาสามัญปี 2565.pdf" }
        ],
        "A-level": [
            { text: "A-level Physics 2566", file: "exam/Alevel/Alevel ปี 2566.pdf" },
            { text: "A-level Physics 2567", file: "exam/Alevel/Alevel ปี 2567.pdf" },
            { text: "A-level Physics 2568", file: "exam/Alevel/Alevel ปี 2568.pdf" }
        ],
        "Entrance": [
            { text: "Entrance Oct 2543", file: "exam/Ent/ข้อสอบ Ent ตุลาคม ปี 43.pdf" },
            { text: "Entrance Oct 2544", file: "exam/Ent/ข้อสอบ Ent ตุลาคม ปี 44.pdf" },
            { text: "Entrance Oct 2545", file: "exam/Ent/ข้อสอบ Ent ตุลาคม ปี 45.pdf" },
            { text: "Entrance Oct 2546", file: "exam/Ent/ข้อสอบ Ent ตุลาคม ปี 46.pdf" },
            { text: "Entrance Oct 2547", file: "exam/Ent/ข้อสอบ Ent ตุลาคม ปี 47.pdf" },
            { text: "Entrance Mar 2543", file: "exam/Ent/ข้อสอบ Ent มีนาคม ปี 43.pdf" },
            { text: "Entrance Mar 2544", file: "exam/Ent/ข้อสอบ Ent มีนาคม ปี 44.pdf" },
            { text: "Entrance Mar 2545", file: "exam/Ent/ข้อสอบ Ent มีนาคม ปี 45.pdf" },
            { text: "Entrance Mar 2546", file: "exam/Ent/ข้อสอบ Ent มีนาคม ปี 46.pdf" },
            { text: "Entrance Mar 2547", file: "exam/Ent/ข้อสอบ Ent มีนาคม ปี 47.pdf" },
            { text: "Entrance Mar 2548", file: "exam/Ent/ข้อสอบ Ent มีนาคม ปี 48.pdf" }
        ]
    };

    let fileToDownload = '';

    downloadBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const examType = btn.getAttribute('data-exam');
            const links = examData[examType];
            
            modalTitle.textContent = examType + " Download options";
            
            modalLinks.innerHTML = '';
            if (links) {
                links.forEach(linkData => {
                    const a = document.createElement('a');
                    a.className = "modal-link";
                    a.textContent = linkData.text;
                    a.setAttribute('data-file', linkData.file);
                    modalLinks.appendChild(a);
                });
            }
            optionsModal.style.display = 'flex';
        });
    });

    modalLinks.addEventListener('click', (e) => {
        if (e.target.tagName === 'A') {
            fileToDownload = e.target.getAttribute('data-file');
            optionsModal.style.display = 'none';
            confirmText.textContent = `Are you sure you want to download "${e.target.textContent}"?`;
            confirmModal.style.display = 'flex';
        }
    });

    confirmYesBtn.addEventListener('click', () => {
        if (fileToDownload) {
            const a = document.createElement('a');
            a.href = fileToDownload;
            a.download = fileToDownload.split('/').pop();
            a.style.display = 'none';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            confirmModal.style.display = 'none'
        }
    });

    confirmYesBtn.addEventListener('click', () => {
        if (fileToDownload) {
            const a = document.createElement('a');
            a.href = fileToDownload;
            a.download = fileToDownload.split('/').pop();
            a.style.display = 'none';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            confirmModal.style.display = 'none';
        }
    });

    confirmNoBtn.addEventListener('click', () => {
        confirmModal.style.display = 'none';
        optionsModal.style.display = 'flex';
    });

    optionsCloseBtn.addEventListener('click', () => {
        optionsModal.style.display = 'none';
    });
    
    confirmCloseBtn.addEventListener('click', () => {
        confirmModal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target == optionsModal) {
            optionsModal.style.display = 'none';
        }
        if (e.target == confirmModal) {
            confirmModal.style.display = 'none';
        }
    });
});