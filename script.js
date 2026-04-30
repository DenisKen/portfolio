// O script permanece quase o mesmo, apenas ajuste sutil nas descrições 
// para garantir que caibam bem nos novos cartões.

const translations = {
    pt: {
        "nav-home": "Home",
        "nav-about": "Sobre",
        "nav-projects": "Projetos",
        "nav-awards": "Conquistas",
        "hero-title": "Desenvolvedor Unity",
        "hero-subtitle": "Especialista em C#, Sistemas Interativos e LipSync",
        "btn-portfolio": "Ver Portfólio",
        "section-about": "Sobre Mim",
        "about-text": "Olá! Sou o Denis, programador com sólida experiência em Unity, C# e Python...",
        "awards-title": "Destaques & Prêmios",
        "award-lipsync-title": "Prêmio de Inovação LipSync",
        "award-lipsync-desc": "Premiado com R$ 70.000,00 pelo desenvolvimento de sistema proprietário.",
        "award-article-title": "Pesquisa Científica",
        "award-article-desc": "Autor de artigo científico publicado sobre tecnologias emergentes."
    },
    en: {
        "nav-home": "Home",
        "nav-about": "About",
        "nav-projects": "Projects",
        "nav-awards": "Awards",
        "hero-title": "Unity Developer",
        "hero-subtitle": "Expert in C#, Interactive Systems, and LipSync",
        "btn-portfolio": "View Portfolio",
        "section-about": "About Me",
        "about-text": "Hi! I'm Denis, a programmer with solid experience in Unity, C#, and Python...",
        "awards-title": "Highlights & Awards",
        "award-lipsync-title": "LipSync Innovation Award",
        "award-lipsync-desc": "Awarded R$ 70,000.00 for developing a proprietary lip-sync system.",
        "award-article-title": "Scientific Research",
        "award-article-desc": "Published scientific author focusing on emerging technologies."
    }
};

// Projetos com suporte a tradução
const projects = [
    {
        title: { pt: "Motor de LipSync Inteligente", en: "Intelligent LipSync Engine" },
        desc: { 
            pt: "Ferramenta Unity premiada que automatiza sincronia labial.", 
            en: "Award-winning Unity tool for automated lip-syncing." 
        },
        images: ["images/lipsync1.jpg", "images/lipsync2.jpg", "images/lipsync3.jpg", "images/lipsync4.jpg"]
    }
    ,
    {
        title: { pt: "Motor de LipSync Inteligente", en: "Intelligent LipSync Engine" },
        desc: { 
            pt: "Ferramenta Unity premiada que automatiza sincronia labial.", 
            en: "Award-winning Unity tool for automated lip-syncing." 
        },
        images: ["images/lipsync1.jpg", "images/lipsync2.jpg", "images/lipsync3.jpg", "images/lipsync4.jpg"]
    },
    ,
    {
        title: { pt: "Motor de LipSync Inteligente", en: "Intelligent LipSync Engine" },
        desc: { 
            pt: "Ferramenta Unity premiada que automatiza sincronia labial.", 
            en: "Award-winning Unity tool for automated lip-syncing." 
        },
        images: ["images/lipsync1.jpg", "images/lipsync2.jpg", "images/lipsync3.jpg", "images/lipsync4.jpg"]
    },
    {
        title: { pt: "Motor de LipSync Inteligente", en: "Intelligent LipSync Engine" },
        desc: { 
            pt: "Ferramenta Unity premiada que automatiza sincronia labial.", 
            en: "Award-winning Unity tool for automated lip-syncing." 
        },
        images: ["images/lipsync1.jpg", "images/lipsync2.jpg", "images/lipsync3.jpg", "images/lipsync4.jpg"]
    },
    {
        title: { pt: "Motor de LipSync Inteligente", en: "Intelligent LipSync Engine" },
        desc: { 
            pt: "Ferramenta Unity premiada que automatiza sincronia labial.", 
            en: "Award-winning Unity tool for automated lip-syncing." 
        },
        images: ["images/lipsync1.jpg", "images/lipsync2.jpg", "images/lipsync3.jpg", "images/lipsync4.jpg"]
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
    // Salva a preferência
    localStorage.setItem('preferredLang', lang);
    
    // Traduz textos estáticos
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            el.innerText = translations[lang][key];
        }
    });

    // Recarrega a vitrine de projetos com o idioma novo
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