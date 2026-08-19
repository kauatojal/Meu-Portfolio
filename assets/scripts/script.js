document.addEventListener('DOMContentLoaded', function () {
    // ============================================
    // IDIOMA PT-BR / EN
    // ============================================
    const languageSelect = document.querySelector('#language-select');
    const languageFlag = document.querySelector('.language-flag');
    const languageLabel = document.querySelector('#language-label');
    const translations = {
        pt: {
            meta: { title: 'Kauã Tojal - Portfólio' },
            language: { label: 'Idioma' },
            nav: { home: 'Home', about: 'Sobre Mim', projects: 'Projetos', skills: 'Skills', contact: 'Fale Comigo' },
            hero: { greeting: 'Olá, me chamo' },
            actions: { downloadCv: 'Download CV', frontend: 'Front-end', backend: 'Back-end', viewSite: 'Ver Site', viewRepository: 'Ver Repositório', watchDemo: 'Ver Funcionamento' },
            sections: { aboutPrefix: 'Sobre', aboutSuffix: 'Mim', projectsPrefix: 'Meus', projectsSuffix: 'Projetos', skillsPrefix: 'Minhas', skillsSuffix: 'Skills', contactPrefix: 'Fale', contactSuffix: 'Comigo' },
            about: {
                paragraph1: 'Converto requisitos em aplicações web robustas e entregues com rapidez. Tenho mais de quatro anos desenvolvendo soluções Full Stack, criando aplicações escaláveis, integrações e interfaces modernas.',
                paragraph2: 'Meu trabalho começa entendendo o problema, projetando a melhor solução e entregando código limpo, performático e preparado para crescer. Ao longo da minha experiência, desenvolvi aplicações React, APIs com Spring Boot, sistemas de gerenciamento e integrações REST que melhoraram a produtividade, reduziram tempo de processamento e aumentaram a geração de resultados.',
                paragraph3Prefix: 'Tenho paixão por arquitetura, experiência do usuário e boas práticas de desenvolvimento, sempre buscando entregar software confiável e de alta qualidade. Se quiser transformar uma ideia em um produto moderno e bem desenvolvido, entre em',
                contactLink: 'contato'
            },
            projects: {
                flap: { title: 'Flap - Gerenciamento de Tarefas', description: 'Desenvolvi uma aplicação de gerenciamento de tarefas estilo Trello utilizando React e JavaScript, com sistema de drag-and-drop (@hello-pangea/dnd), autenticação JWT, controle de acesso baseado em roles e integração com API REST Spring Boot. Implementei componentes complexos incluindo modais, filtros, calendário anual, gestão de clientes e prioridades, utilizando Context API e React Router.' },
                inove: { title: 'Inove Imobiliária', description: 'Desenvolvi o site institucional e um sistema completo de gerenciamento de imóveis para a imobiliária internacional Inove, em Portugal, utilizando HTML, CSS, JavaScript, Axios, Java com Spring Boot e Hibernate. Criei uma API RESTful para integrar dados em tempo real, implementei um design responsivo com filtros de pesquisa avançados, sistema de cadastro, edição e visualização de propriedades, e utilizei MySQL para gerenciar o banco de dados, garantindo performance e escalabilidade.' },
                fsph: { title: 'Fundação de Saúde Parreiras Horta', description: 'Desenvolvi um sistema de gerenciamento de não conformidades para a Fundação de Saúde Parreiras Horta, utilizando Java com Spring Boot e Hibernate, visando automatizar o acompanhamento e a resolução de problemas, garantindo maior eficiência e conformidade nos processos internos.' },
                quonsumo: { title: 'Quonsumo: O Jogo Energético', description: 'Desenvolvi um modelo de machine learning para classificar consumidores de energia como residenciais ou comerciais a cada 2 horas, utilizando Python e scikit-learn. O projeto visa otimizar a distribuição de energia com base em padrões de consumo.' },
                portfolio: { title: 'Meu Portfólio', description: 'Desenvolvi meu currículo e portfólio na forma de um site, utilizando HTML, CSS e JavaScript, para apresentar de maneira interativa minhas experiências, projetos, habilidades e contatos. O projeto visa facilitar o acesso às minhas informações profissionais e promover minha visibilidade no mercado.' },
                navigationLabel: 'Navegação dos projetos'
            },
            skills: { hardTitle: 'HARD SKILLS', softTitle: 'SOFT SKILLS', teamwork: 'Trabalho em Equipe', problemSolving: 'Resolução de Problemas', communication: 'Comunicação', timeManagement: 'Gestão de Tempo', adaptability: 'Adaptabilidade', creativity: 'Criatividade', resultsFocus: 'Foco em Resultados', continuousLearning: 'Aprendizado Contínuo' },
            contact: { name: 'Nome Completo', email: 'Email', subject: 'Assunto', message: 'Descrição', submit: 'Enviar Mensagem', success: 'Mensagem enviada com sucesso!', error: 'Ocorreu um erro ao enviar seu formulário. Tente novamente mais tarde.' },
            footer: { copyright: 'Copyright @ 2025 by Kauã Tojal' }
        },
        en: {
            meta: { title: 'Kauã Tojal - Portfolio' },
            language: { label: 'Language' },
            nav: { home: 'Home', about: 'About Me', projects: 'Projects', skills: 'Skills', contact: 'Contact Me' },
            hero: { greeting: 'Hi, I am' },
            actions: { downloadCv: 'Download Resume', frontend: 'Front-end', backend: 'Back-end', viewSite: 'View Site', viewRepository: 'View Repository', watchDemo: 'Watch Demo' },
            sections: { aboutPrefix: 'About', aboutSuffix: 'Me', projectsPrefix: 'My', projectsSuffix: 'Projects', skillsPrefix: 'My', skillsSuffix: 'Skills', contactPrefix: 'Contact', contactSuffix: 'Me' },
            about: {
                paragraph1: 'I turn requirements into robust web applications delivered with speed. With more than four years of experience building Full Stack solutions, I create scalable applications, integrations, and modern interfaces.',
                paragraph2: 'My work starts by understanding the problem, designing the best solution, and delivering clean, high-performance code built to grow. Throughout my experience, I have developed React applications, Spring Boot APIs, management systems, and REST integrations that improved productivity, reduced processing time, and increased results.',
                paragraph3Prefix: 'I am passionate about architecture, user experience, and development best practices, always aiming to deliver reliable, high-quality software. If you want to turn an idea into a modern, well-built product, get in',
                contactLink: 'touch'
            },
            projects: {
                flap: { title: 'Flap - Task Management', description: 'I developed a Trello-style task management application using React and JavaScript, with drag-and-drop (@hello-pangea/dnd), JWT authentication, role-based access control, and integration with a Spring Boot REST API. I implemented complex components including modals, filters, an annual calendar, client management, and priorities using Context API and React Router.' },
                inove: { title: 'Inove Real Estate', description: 'I developed the institutional website and a complete property management system for the international real estate company Inove in Portugal, using HTML, CSS, JavaScript, Axios, Java with Spring Boot, and Hibernate. I created a RESTful API for real-time data integration, implemented responsive design with advanced search filters, property registration, editing and viewing, and used MySQL to ensure performance and scalability.' },
                fsph: { title: 'Parreiras Horta Health Foundation', description: 'I developed a non-compliance management system for the Parreiras Horta Health Foundation using Java, Spring Boot, and Hibernate. The solution automated issue tracking and resolution, improving efficiency and compliance across internal processes.' },
                quonsumo: { title: 'Quonsumo: The Energy Game', description: 'I developed a machine learning model to classify energy consumers as residential or commercial every two hours using Python and scikit-learn. The project aims to optimize energy distribution based on consumption patterns.' },
                portfolio: { title: 'My Portfolio', description: 'I developed my resume and portfolio as a website using HTML, CSS, and JavaScript to present my experience, projects, skills, and contact information interactively. The project makes my professional information easier to access and strengthens my visibility in the market.' },
                navigationLabel: 'Project navigation'
            },
            skills: { hardTitle: 'HARD SKILLS', softTitle: 'SOFT SKILLS', teamwork: 'Teamwork', problemSolving: 'Problem Solving', communication: 'Communication', timeManagement: 'Time Management', adaptability: 'Adaptability', creativity: 'Creativity', resultsFocus: 'Results Focus', continuousLearning: 'Continuous Learning' },
            contact: { name: 'Full Name', email: 'Email', subject: 'Subject', message: 'Message', submit: 'Send Message', success: 'Message sent successfully!', error: 'There was an error sending your message. Please try again later.' },
            footer: { copyright: 'Copyright @ 2025 by Kauã Tojal' }
        }
    };

    function getTranslation(language, key) {
        return key.split('.').reduce((value, part) => value && value[part], translations[language]) || key;
    }

    function applyLanguage(language) {
        const selectedLanguage = language === 'en' ? 'en' : 'pt';
        const isEnglish = selectedLanguage === 'en';
        document.documentElement.lang = isEnglish ? 'en' : 'pt-BR';
        document.documentElement.dataset.language = selectedLanguage;
        localStorage.setItem('portfolio-language', selectedLanguage);

        document.querySelectorAll('[data-i18n]').forEach((element) => {
            element.textContent = getTranslation(selectedLanguage, element.dataset.i18n);
        });
        document.querySelectorAll('[data-i18n-placeholder]').forEach((element) => {
            element.setAttribute('placeholder', getTranslation(selectedLanguage, element.dataset.i18nPlaceholder));
        });
        document.querySelectorAll('[data-i18n-aria]').forEach((element) => {
            element.setAttribute('aria-label', getTranslation(selectedLanguage, element.dataset.i18nAria));
        });

        document.title = getTranslation(selectedLanguage, 'meta.title');
        if (languageSelect) languageSelect.value = selectedLanguage;
        if (languageFlag) languageFlag.textContent = isEnglish ? '🇺🇸' : '🇧🇷';
        if (languageLabel) languageLabel.textContent = getTranslation(selectedLanguage, 'language.label');

        const currentThemeToggle = document.querySelector('#theme-toggle');
        if (currentThemeToggle) {
            const isLight = document.body.dataset.theme === 'light';
            const nextTheme = isLight
                ? (isEnglish ? 'dark mode' : 'modo escuro')
                : (isEnglish ? 'light mode' : 'modo claro');
            currentThemeToggle.setAttribute('aria-label', `${isEnglish ? 'Enable' : 'Ativar'} ${nextTheme}`);
            currentThemeToggle.setAttribute('title', `${isEnglish ? 'Enable' : 'Ativar'} ${nextTheme}`);
        }

        const resumeLink = document.querySelector('.btn-curriculo');
        if (resumeLink) {
            resumeLink.href = isEnglish ? 'assets/pdf/CV_Kaua_Tojal_EN.pdf' : 'assets/pdf/CV_Kauã_Tojal.pdf';
            resumeLink.download = isEnglish ? 'Kaua_Tojal_Resume_English.pdf' : 'Curriculo_Kaua_Tojal.pdf';
        }

        const typingText = document.getElementById('typing-text');
        if (typingText) typingText.textContent = '';
        window.portfolioTypingTexts = isEnglish
            ? ['Software Developer', 'Full-Stack Developer', 'Web Designer', 'University Student', 'Flamengo Fan', 'Gamer', 'E-Sports Enthusiast']
            : ['Desenvolvedor de Software', 'Desenvolvedor Full-Stack', 'Web Designer', 'Universitário', 'Flamenguista', 'Gamer', 'Entusiasta dos E-Sports'];
        window.dispatchEvent(new CustomEvent('portfolio-language-change'));
    }

    const savedLanguage = localStorage.getItem('portfolio-language') || 'pt';
    applyLanguage(savedLanguage);
    languageSelect?.addEventListener('change', (event) => applyLanguage(event.target.value));

    // ============================================
    // TEMA CLARO / ESCURO
    // ============================================
    const themeToggle = document.querySelector('#theme-toggle');
    const themeIcon = themeToggle ? themeToggle.querySelector('i') : null;
    const savedTheme = localStorage.getItem('portfolio-theme');
    const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;

    function applyTheme(theme) {
        const isLight = theme === 'light';
        document.body.dataset.theme = theme;
        localStorage.setItem('portfolio-theme', theme);

        if (themeIcon) {
            themeIcon.className = `bx ${isLight ? 'bx-moon' : 'bx-sun'}`;
        }

        if (themeToggle) {
            const currentLanguage = document.documentElement.dataset.language || 'pt';
            const nextTheme = isLight
                ? (currentLanguage === 'en' ? 'dark mode' : 'modo escuro')
                : (currentLanguage === 'en' ? 'light mode' : 'modo claro');
            const actionText = currentLanguage === 'en' ? 'Enable' : 'Ativar';
            themeToggle.setAttribute('aria-label', `${actionText} ${nextTheme}`);
            themeToggle.setAttribute('title', `${actionText} ${nextTheme}`);
        }
    }

    applyTheme(savedTheme || (prefersLight ? 'light' : 'dark'));

    themeToggle?.addEventListener('click', () => {
        const nextTheme = document.body.dataset.theme === 'light' ? 'dark' : 'light';
        applyTheme(nextTheme);
    });

    // ============================================
    // NAVBAR E MENU
    // ============================================
    const menubar = document.querySelector('#menu');
    const Navbar = document.querySelector('.navbar');
    menubar.onclick = () => {
        menubar.classList.toggle('bx-x');
        Navbar.classList.toggle('active');
    }

    // ============================================
    // SCROLL E NAVEGAÇÃO
    // ============================================
    const section = document.querySelectorAll('section');
    const navlink = document.querySelectorAll('header nav a');
    window.onscroll = () => {
        section.forEach(sec => {
            let top = window.scrollY;
            let offset = sec.offsetTop - 150;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');
            if (top > offset && top < offset + height) {
                sec.classList.add('start-animation');
                navlink.forEach(links => {
                    links.classList.remove('active');
                    document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
                });
            }
        });
        var header = document.querySelector('.header');
        header.classList.toggle('sticky', window.scrollY > 100);
        menubar.classList.remove('bx-x');
        Navbar.classList.remove('active');
    }

    // ============================================
    // SCROLL REVEAL PREMIUM — EXECUTA UMA ÚNICA VEZ
    // ============================================
    const revealGroups = [
        ['.about .title, .about .aboutImg', 'reveal-zoom'],
        ['.about .text-content2 p', 'reveal-left'],
        ['.projects .title, .navigation', 'reveal-up'],
        ['.project-box', 'reveal-zoom'],
        ['.skills .title, .category-title', 'reveal-right'],
        ['.skill-card', 'reveal-up'],
        ['.contact .title, #contact .btn', 'reveal-right'],
        ['#contact input, #contact textarea', 'reveal-up'],
        ['footer', 'reveal-up']
    ];

    const revealObserver = 'IntersectionObserver' in window
        ? new IntersectionObserver((entries, observer) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            });
        }, { threshold: 0.16, rootMargin: '0px 0px -8% 0px' })
        : null;

    revealGroups.forEach(([selector, animationClass]) => {
        document.querySelectorAll(selector).forEach((element, index) => {
            element.classList.add('reveal-on-view', animationClass);
            if (element.classList.contains('skill-card')) {
                element.style.setProperty('--reveal-delay', `${Math.min(index, 7) * 70}ms`);
            }
            if (revealObserver) revealObserver.observe(element);
            else element.classList.add('is-visible');
        });
    });

    // ============================================
    // MICROINTERAÇÃO RIPPLE
    // ============================================
    const rippleTargets = document.querySelectorAll('button, .btn, .btn-curriculo, .github-button, .site-button, .youtube-button, .social-media a');

    rippleTargets.forEach((target) => {
        target.addEventListener('pointerdown', (event) => {
            const rect = target.getBoundingClientRect();
            const ripple = document.createElement('span');
            ripple.className = 'ripple';
            ripple.style.left = `${event.clientX - rect.left}px`;
            ripple.style.top = `${event.clientY - rect.top}px`;
            target.appendChild(ripple);
            ripple.addEventListener('animationend', () => ripple.remove(), { once: true });
        });
    });

    // ============================================
    // BOTÃO VOLTAR AO TOPO
    // ============================================
    document.getElementById('backToTop').addEventListener('click', function (e) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    window.addEventListener('scroll', function () {
        const backToTopButton = document.getElementById('backToTop');
        if (window.scrollY > 200) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });

    window.addEventListener('scroll', function () {
        const button = document.querySelector('.btn');
        if (window.scrollY > 300) {
            button.classList.add('show-btn');
        } else {
            button.classList.remove('show-btn');
        }
    });

    // ============================================
    // EMAILJS - FORMULÁRIO DE CONTATO
    // ============================================
    emailjs.init("etN9nKcU-6xqOc7nd");

    const form = document.getElementById('contactForm');
    const successMessage = document.getElementById('successMessage');
    const errorMessage = document.getElementById('errorMessage');

    function validateEmail(email) {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9]{2,6}$/;
        return emailPattern.test(email);
    }

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const userName = document.getElementById('user_name').value;
        const userEmail = document.getElementById('user_email').value;
        const userSubject = document.getElementById('user_subject').value;
        const userMessage = document.getElementById('contact__message').value;

        if (!validateEmail(userEmail)) {
            alert("Por favor, insira um email válido.");
            return;
        }

        emailjs.send('service_ixngxn3', 'template_bovu75u', {
            from_name: userName,
            from_email: userEmail,
            subject: userSubject,
            message: userMessage
        })
            .then(function (response) {
                console.log('Success!', response);
                successMessage.style.display = 'block';
                errorMessage.style.display = 'none';
                form.reset();
                setTimeout(() => { successMessage.style.display = 'none'; }, 5000);
            })
            .catch(function (error) {
                console.error('Error:', error);
                errorMessage.style.display = 'block';
                successMessage.style.display = 'none';
                setTimeout(() => { errorMessage.style.display = 'none'; }, 5000);
            });
    });

    // ============================================
    // ANIMAÇÃO DE TEXTO DIGITANDO
    // ============================================
    const textElement = document.getElementById('typing-text');
    let texts = window.portfolioTypingTexts || [
        'Desenvolvedor de Software',
        'Desenvolvedor Full-Stack',
        'Web Designer',
        'Universitário',
        'Flamenguista',
        'Gamer',
        'Entusiasta dos E-Sports'
    ];
    let currentTextIndex = 0;
    let index = 0;
    let isTyping = true;

    window.addEventListener('portfolio-language-change', () => {
        texts = window.portfolioTypingTexts || texts;
        currentTextIndex = 0;
        index = 0;
        isTyping = true;
        if (textElement) textElement.textContent = '';
    });

    function typeAndErase() {
        const currentText = texts[currentTextIndex];
        if (isTyping) {
            if (index < currentText.length) {
                textElement.textContent += currentText.charAt(index);
                index++;
            } else {
                isTyping = false;
            }
        } else {
            if (index > 0) {
                textElement.textContent = currentText.substring(0, index - 1);
                index--;
            } else {
                isTyping = true;
                currentTextIndex = (currentTextIndex + 1) % texts.length;
            }
        }
    }

    setInterval(typeAndErase, 120);

    // ============================================
    // CARROSSEL COM DRAG - IMPLEMENTAÇÃO LIMPA
    // ============================================
    
    const carousel = document.getElementById('carousel');
    
    // Estado do carrossel
    let slideAtual = 0;
    const totalDeSlides = 5;
    
    // Controle de drag
    let estouArrastando = false;
    let posicaoInicialDoMouse = 0;
    let movimentoAtual = 0;
    
    // Estilo inicial
    carousel.style.cursor = 'grab';
    carousel.style.willChange = 'transform';
    
    // ========== PREVENIR COMPORTAMENTOS INDESEJADOS ==========
    carousel.addEventListener('dragstart', e => e.preventDefault());
    carousel.addEventListener('selectstart', e => e.preventDefault());
    
    // ========== MOUSE: COMEÇAR A ARRASTAR ==========
    carousel.addEventListener('mousedown', function(evento) {
        estouArrastando = true;
        posicaoInicialDoMouse = evento.clientX;
        carousel.style.cursor = 'grabbing';
        carousel.style.transition = 'none';
    });
    
    // ========== MOUSE: ARRASTAR (SÓ SE ESTIVER PRESSIONADO) ==========
    window.addEventListener('mousemove', function(evento) {
        // SÓ EXECUTA SE ESTIVER REALMENTE ARRASTANDO!
        if (!estouArrastando) return;
        
        const posicaoAtualDoMouse = evento.clientX;
        const diferencaDeMovimento = posicaoAtualDoMouse - posicaoInicialDoMouse;
        
        const larguraDoSlide = carousel.offsetWidth;
        const posicaoBaseDoSlide = -slideAtual * larguraDoSlide;
        movimentoAtual = posicaoBaseDoSlide + diferencaDeMovimento;
        
        carousel.style.transform = `translateX(${movimentoAtual}px)`;
    });
    
    // ========== MOUSE: SOLTAR ==========
    window.addEventListener('mouseup', function(evento) {
        // SÓ EXECUTA SE ESTAVA ARRASTANDO!
        if (!estouArrastando) return;
        
        estouArrastando = false;
        carousel.style.cursor = 'grab';
        
        const posicaoFinalDoMouse = evento.clientX;
        const diferencaTotal = posicaoFinalDoMouse - posicaoInicialDoMouse;
        const larguraDoSlide = carousel.offsetWidth;
        
        // Mudou mais de 25% da tela? Então muda de slide
        if (diferencaTotal < -(larguraDoSlide * 0.25) && slideAtual < totalDeSlides - 1) {
            slideAtual++;
        } else if (diferencaTotal > (larguraDoSlide * 0.25) && slideAtual > 0) {
            slideAtual--;
        }
        
        irParaSlide(slideAtual);
    });
    
    // ========== TOUCH (MOBILE): COMEÇAR ==========
    carousel.addEventListener('touchstart', function(evento) {
        estouArrastando = true;
        posicaoInicialDoMouse = evento.touches[0].clientX;
        carousel.style.transition = 'none';
    });
    
    // ========== TOUCH (MOBILE): ARRASTAR ==========
    window.addEventListener('touchmove', function(evento) {
        if (!estouArrastando) return;
        
        const posicaoAtualDoMouse = evento.touches[0].clientX;
        const diferencaDeMovimento = posicaoAtualDoMouse - posicaoInicialDoMouse;
        
        const larguraDoSlide = carousel.offsetWidth;
        const posicaoBaseDoSlide = -slideAtual * larguraDoSlide;
        movimentoAtual = posicaoBaseDoSlide + diferencaDeMovimento;
        
        carousel.style.transform = `translateX(${movimentoAtual}px)`;
    });
    
    // ========== TOUCH (MOBILE): SOLTAR ==========
    window.addEventListener('touchend', function(evento) {
        if (!estouArrastando) return;
        
        estouArrastando = false;
        
        const larguraDoSlide = carousel.offsetWidth;
        const posicaoEsperada = -slideAtual * larguraDoSlide;
        const diferenca = movimentoAtual - posicaoEsperada;
        
        if (diferenca < -(larguraDoSlide * 0.25) && slideAtual < totalDeSlides - 1) {
            slideAtual++;
        } else if (diferenca > (larguraDoSlide * 0.25) && slideAtual > 0) {
            slideAtual--;
        }
        
        irParaSlide(slideAtual);
    });
    
    // ========== FUNÇÃO PARA IR A UM SLIDE ESPECÍFICO ==========
    function irParaSlide(numeroDoSlide) {
        slideAtual = numeroDoSlide;
        const larguraDoSlide = carousel.offsetWidth;
        movimentoAtual = -slideAtual * larguraDoSlide;
        
        carousel.style.transition = 'transform 0.62s cubic-bezier(0.22, 1, 0.36, 1)';
        carousel.style.transform = `translate3d(${movimentoAtual}px, 0, 0)`;

        document.querySelectorAll('.navigation button').forEach((button, indice) => {
            const active = indice === slideAtual;
            button.classList.toggle('active', active);
            button.setAttribute('aria-current', active ? 'true' : 'false');
        });
    }
    
    // ========== FUNÇÃO GLOBAL PARA OS BOTÕES NUMÉRICOS ==========
    window.moveToSlide = function(indice) {
        irParaSlide(indice);
    }
    
    // ========== ATUALIZAR AO REDIMENSIONAR JANELA ==========
    window.addEventListener('resize', function() {
        irParaSlide(slideAtual);
    });
    
    // ========== INICIALIZAR NA POSIÇÃO CORRETA ==========
    irParaSlide(0);
});
