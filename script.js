// O script permanece quase o mesmo, apenas ajuste sutil nas descrições 
// para garantir que caibam bem nos novos cartões.

const translations = {
    pt: {
        "nav-home": "Home",
        "nav-about": "Sobre",
        "nav-projects": "Projetos",
        "nav-awards": "Conquistas",
        "hero-title": "Desenvolvedor Unity",
        "hero-subtitle": "Desenvolvedor Generalita, com conhecimentos em Front-end, Design e Social Media",
        "btn-portfolio": "Ver Portfólio",
        "section-about": "Sobre Mim",
        "about-intro": "Olá! Sou o <strong>Denis</strong>, programador com sólida experiência em Unity. Meu diferencial reside na capacidade de ser bom em Unity e dominar outras tecnologias, como: UI/UX e Design usando Figma, Front-end usando Javascript ou Flutter, e além de outros conhecimentos mais estratégicos e teóricos que ajudam no crescimento da empresa.",
        "label-age": "Idade:",
        "val-age": "29 anos",
        "label-focus": "Foco:",
        "val-focus": "Mecânicas de Jogo, Design, Soluções Criativas",
        "label-tech": "Tecnologias:",
        "awards-title": "Destaques & Prêmios",
        "award-lipsync-title": "Prêmio de Inovação LipSync",
        "award-lipsync-desc": "Fui premiado com <strong class='text-glow'>R$ 70.000,00</strong> pelo desenvolvimento de um sistema proprietário de sincronia labial automatizada.",
        "award-article-title": "Pesquisa Científica",
        "award-article-desc": "Autor de artigo científico publicado, focando em tecnologias emergentes e soluções técnicas aplicadas à computação.",
        "footer-text": "&copy; 2024 Denis Ken - Desenvolvedor Unity"
    },
    en: {
        "nav-home": "Home",
        "nav-about": "About",
        "nav-projects": "Projects",
        "nav-awards": "Awards",
        "hero-title": "Unity Developer",
        "hero-subtitle": "Generalist Developer, with knowledge in Front-end, Design, and Social Media.",
        "btn-portfolio": "View Portfolio",
        "section-about": "About Me",
        "about-intro": "Hello! I’m <strong>Denis</strong>, a programmer with solid experience in Unity. My strength lies in being highly skilled in Unity while also mastering other technologies, such as UI/UX and Design using Figma, Front-end development using JavaScript or Flutter, as well as other strategic and theoretical knowledge that can help support the company’s growth.",
        "label-age": "Age:",
        "val-age": "29 years old",
        "label-focus": "Focus:",
        "val-focus": "Game Mechanics, Design, Creative Solutions",
        "label-tech": "Technologies:",
        "awards-title": "Highlights & Awards",
        "award-lipsync-title": "LipSync Innovation Award",
        "award-lipsync-desc": "Awarded <strong class='text-glow'>R$ 70,000.00</strong> for developing a proprietary automated lip-sync system.",
        "award-article-title": "Scientific Research",
        "award-article-desc": "Published scientific author, focusing on emerging technologies and technical solutions applied to computing.",
        "footer-text": "&copy; 2024 Denis Ken - Unity Developer"
    }
};

// Projetos com suporte a tradução
const projects = [
    {
        title: { pt: "BioAtlas - Anatomia Humana", en: "BioAtlas – Human Anatomy" },
        desc: { 
            pt: "Aplicativo de ensino para estudantes de medicina.", 
            en: "Educational app for medical students." 
        },
        images: ["images/bioatlas_1.png", "images/bioatlas_2.png", "images/bioatlas_3.png"]
    }
    ,
    {
        title: { pt: "OWI – Olos Web Interactive", en: "OWI – Olos Web Interactive" },
        desc: { 
            pt: "OWI é uma das soluções mais versáteis da plataforma omnichannel da Olos.", 
            en: "OWI is one of the most versatile solutions in the Olos omnichannel platform." 
        },
        images: ["images/owi_1.png", "images/owi_2.png", "images/owi_3.png"]
    },
    ,
    {
        title: { pt: "TIKI - Cubic Game for Children", en: "TIKI – Cubic Game for Children" },
        desc: { 
            pt: "Cada bloco se comunica com adjacentes, usando métodos recursivos.", 
            en: "Each cube communicates with adjancentes, using recursive methods." 
        },
        images: ["images/tiki_1.png", "images/tiki_2.png", "images/tiki_3.png", "images/tiki_4.png"]
    },
    {
        title: { pt: "Olos VR - Showroom", en: "Olos VR - Showroom" },
        desc: { 
            pt: "Solução Omnichannel, que integra todo sistema de comunicação.", 
            en: "Omnichannel solution that integrates the entire communication system." 
        },
        images: ["images/conarec_1.png", "images/conarec_2.png", "images/conarec_3.png", "images/conarec_4.png"]
    },
    {
        title: { pt: "Motor de LipSync Inteligente", en: "Intelligent LipSync Engine" },
        desc: { 
            pt: "Ferramenta Web premiada que automatiza sincronia labial.", 
            en: "Award-winning Web tool for automated lip-syncing." 
        },
        images: ["images/lipsync1.png", "images/lipsync2.png", "images/lipsync3.png", "images/lipsync4.png"]
    }
    // Adicione os outros 4 projetos seguindo esse modelo {pt: "", en: ""}
];

const container = document.getElementById('projects-container');
let currentGallery = [];
let currentIndex = 0;

// Renderizar Projetos
projects.forEach((proj, pIdx) => {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.innerHTML = `
        <img src="${proj.images[0]}" class="project-thumb" onclick="openModal(${pIdx}, 0)" alt="${proj.title}">
        <div class="project-info">
            <h3>${proj.title}</h3>
            <p>${proj.desc}</p>
            <div class="gallery-thumbs">
                ${proj.images.map((img, iIdx) => `<img src="${img}" class="thumb-small" onclick="openModal(${pIdx}, ${iIdx})" alt="Thumbnail">`).join('')}
            </div>
        </div>
    `;
    container.appendChild(card);
});

// Lógica do Modal
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');

window.openModal = (pIdx, iIdx) => {
    currentGallery = projects[pIdx].images;
    currentIndex = iIdx;
    modal.style.display = "block";
    modalImg.src = currentGallery[currentIndex];
    document.body.style.overflow = 'hidden'; // Previne scroll ao fundo
};

const closeModal = () => {
    modal.style.display = "none";
    document.body.style.overflow = 'auto'; // Restaura scroll
};

document.getElementById('nextBtn').onclick = (e) => {
    e.stopPropagation(); // Previne fechar o modal
    currentIndex = (currentIndex + 1) % currentGallery.length;
    modalImg.src = currentGallery[currentIndex];
};

document.getElementById('prevBtn').onclick = (e) => {
    e.stopPropagation();
    currentIndex = (currentIndex - 1 + currentGallery.length) % currentGallery.length;
    modalImg.src = currentGallery[currentIndex];
};

document.querySelector('.close').onclick = closeModal;
modal.onclick = closeModal; // Fecha ao clicar no fundo

function setLanguage(lang) {
    localStorage.setItem('preferredLang', lang);
    
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            // Usamos innerHTML para que o <strong> funcione
            el.innerHTML = translations[lang][key]; 
        }
    });

    // Lógica de classe ativa simplificada
    const langBtns = document.querySelectorAll('.btn-lang');
    langBtns.forEach(btn => {
        btn.classList.remove('active');
    });

    // Se clicou em PT, ativa o primeiro botão, se EN, o segundo
    if (lang === 'pt') langBtns[0].classList.add('active');
    else langBtns[1].classList.add('active');

    renderProjects(lang);
}

function renderProjects(lang) {
    const container = document.getElementById('projects-container');
    container.innerHTML = ''; // Limpa para re-renderizar
    
    projects.forEach((proj, pIdx) => {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.innerHTML = `
            <img src="${proj.images[0]}" class="project-thumb" onclick="openModal(${pIdx}, 0)">
            <div class="project-info">
                <h3>${proj.title[lang]}</h3>
                <p>${proj.desc[lang]}</p>
                <div class="gallery-thumbs">
                    ${proj.images.map((img, iIdx) => `<img src="${img}" class="thumb-small" onclick="openModal(${pIdx}, ${iIdx})">`).join('')}
                </div>
            </div>
        `;
        container.appendChild(card);
    });
}

// DETECÇÃO AUTOMÁTICA
window.onload = () => {
    // 1. Checa se o usuário já escolheu manualmente antes
    let lang = localStorage.getItem('preferredLang');
    
    if (!lang) {
        // 2. Se não, detecta a linguagem do navegador
        const browserLang = navigator.language || navigator.userLanguage;
        lang = browserLang.startsWith('pt') ? 'pt' : 'en';
    }

    setLanguage(lang);
};