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
        "about-intro": "Olá! Sou o <strong>Denis</strong>, programador com sólida experiência em Unity, C# e Python. Meu diferencial reside na capacidade de unir o rigor do desenvolvimento de software com a criatividade de sistemas interativos.",
        "label-age": "Idade:",
        "val-age": "23 anos",
        "label-focus": "Foco:",
        "val-focus": "Mecânicas de Jogo, IA e Arquitetura de Software",
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
        "hero-subtitle": "Expert in C#, Interactive Systems and LipSync",
        "btn-portfolio": "View Portfolio",
        "section-about": "About Me",
        "about-intro": "Hi! I'm <strong>Denis</strong>, a programmer with solid experience in Unity, C#, and Python. My strength lies in combining software development rigor with the creativity of interactive systems.",
        "label-age": "Age:",
        "val-age": "23 years old",
        "label-focus": "Focus:",
        "val-focus": "Game Mechanics, AI and Software Architecture",
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
        title: { pt: "Motor de LipSync Inteligente", en: "Intelligent LipSync Engine" },
        desc: { 
            pt: "Ferramenta Unity premiada que automatiza sincronia labial.", 
            en: "Award-winning Unity tool for automated lip-syncing." 
        },
        images: ["images/lipsync1.png", "images/lipsync2.png", "images/lipsync3.png", "images/lipsync4.png"]
    }
    ,
    {
        title: { pt: "Motor de LipSync Inteligente", en: "Intelligent LipSync Engine" },
        desc: { 
            pt: "Ferramenta Unity premiada que automatiza sincronia labial.", 
            en: "Award-winning Unity tool for automated lip-syncing." 
        },
        images: ["images/owi_1.png", "images/owi_2.png", "images/owi_3.png"]
    },
    ,
    {
        title: { pt: "Motor de LipSync Inteligente", en: "Intelligent LipSync Engine" },
        desc: { 
            pt: "Ferramenta Unity premiada que automatiza sincronia labial.", 
            en: "Award-winning Unity tool for automated lip-syncing." 
        },
        images: ["images/tiki_1.png", "images/tiki_2.png", "images/tiki_3.png", "images/tiki_4.png"]
    },
    {
        title: { pt: "Motor de LipSync Inteligente", en: "Intelligent LipSync Engine" },
        desc: { 
            pt: "Ferramenta Unity premiada que automatiza sincronia labial.", 
            en: "Award-winning Unity tool for automated lip-syncing." 
        },
        images: ["images/conarec_1.png", "images/conarec_2.png", "images/conarec_3.png", "images/conarec_4.png"]
    },
    {
        title: { pt: "Motor de LipSync Inteligente", en: "Intelligent LipSync Engine" },
        desc: { 
            pt: "Ferramenta Unity premiada que automatiza sincronia labial.", 
            en: "Award-winning Unity tool for automated lip-syncing." 
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