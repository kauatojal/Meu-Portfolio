document.addEventListener('DOMContentLoaded', function () {
    // ============================================
    // IDIOMA PT-BR / EN
    // ============================================
    const languageSelect = document.querySelector('#language-select');
    const languageFlag = document.querySelector('.language-flag');
    const languageLabel = document.querySelector('#language-label');
    const translations = {
        pt: {
            meta: {
                title: 'Kauã Tojal - Portfólio',
                description: 'Portfólio de Kauã Tojal, desenvolvedor Full Stack especializado em aplicações web, APIs e interfaces modernas.'
            },
            accessibility: { youtube: 'Abrir YouTube', github: 'Abrir GitHub', linkedin: 'Abrir LinkedIn', backToTop: 'Voltar ao topo', closeModal: 'Fechar detalhes do projeto', techStack: 'Tecnologias utilizadas' },
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
                flap: { title: 'Flap - Gerenciamento de Tarefas', category: 'Aplicação Full Stack', description: 'Desenvolvi uma aplicação de gerenciamento de tarefas estilo Trello utilizando React e JavaScript, com sistema de drag-and-drop (@hello-pangea/dnd), autenticação JWT, controle de acesso baseado em roles e integração com API REST Spring Boot. Implementei componentes complexos incluindo modais, filtros, calendário anual, gestão de clientes e prioridades, utilizando Context API e React Router.' },
                inove: { title: 'Inove Imobiliária', category: 'Produto digital imobiliário', description: 'Desenvolvi o site institucional e um sistema completo de gerenciamento de imóveis para a imobiliária internacional Inove, em Portugal, utilizando HTML, CSS, JavaScript, Axios, Java com Spring Boot e Hibernate. Criei uma API RESTful para integrar dados em tempo real, implementei um design responsivo com filtros de pesquisa avançados, sistema de cadastro, edição e visualização de propriedades, e utilizei MySQL para gerenciar o banco de dados, garantindo performance e escalabilidade.' },
                fsph: { title: 'Fundação de Saúde Parreiras Horta', category: 'Sistema corporativo', description: 'Desenvolvi um sistema de gerenciamento de não conformidades para a Fundação de Saúde Parreiras Horta, utilizando Java com Spring Boot e Hibernate, visando automatizar o acompanhamento e a resolução de problemas, garantindo maior eficiência e conformidade nos processos internos.' },
                quonsumo: { title: 'Quonsumo: O Jogo Energético', category: 'Machine learning aplicado', description: 'Desenvolvi um modelo de machine learning para classificar consumidores de energia como residenciais ou comerciais a cada 2 horas, utilizando Python e scikit-learn. O projeto visa otimizar a distribuição de energia com base em padrões de consumo.' },
                portfolio: { title: 'Meu Portfólio', category: 'Marca pessoal e portfólio', description: 'Desenvolvi meu currículo e portfólio na forma de um site, utilizando HTML, CSS e JavaScript, para apresentar de maneira interativa minhas experiências, projetos, habilidades e contatos. O projeto visa facilitar o acesso às minhas informações profissionais e promover minha visibilidade no mercado.' },
                eyebrow: 'Projetos em destaque',
                clickToView: 'Clique para ver detalhes do projeto',
                navigationLabel: 'Navegação dos projetos'
            },
            skills: { hardTitle: 'HARD SKILLS', softTitle: 'SOFT SKILLS', teamwork: 'Trabalho em Equipe', problemSolving: 'Resolução de Problemas', communication: 'Comunicação', timeManagement: 'Gestão de Tempo', adaptability: 'Adaptabilidade', creativity: 'Criatividade', resultsFocus: 'Foco em Resultados', continuousLearning: 'Aprendizado Contínuo' },
            contact: {
                eyebrow: 'Entre em contato',
                heading: 'Pronto para transformar uma ideia em produto?',
                copy: 'Seja para uma nova aplicação, uma parceria ou uma oportunidade profissional, vamos conversar.',
                channelsAria: 'Canais de contato',
                emailLabel: 'E-mail direto',
                emailCta: 'Enviar uma mensagem',
                emailAria: 'Enviar um e-mail para Kauã Tojal',
                whatsappLabel: 'WhatsApp / Chat instantâneo',
                whatsappCta: 'Iniciar conversa',
                whatsappAria: 'Abrir conversa no WhatsApp com Kauã Tojal',
                nameLabel: 'Seu nome',
                emailFieldLabel: 'Seu e-mail',
                subjectLabel: 'Tipo de projeto ou assunto',
                messageLabel: 'Mensagem',
                name: 'Nome Completo',
                email: 'Email',
                subject: 'Assunto',
                message: 'Descrição',
                submit: 'Enviar mensagem',
                success: 'Mensagem enviada com sucesso!',
                error: 'O serviço de e-mail está temporariamente indisponível. Tente novamente ou use o WhatsApp.',
                errorFallback: 'Falar comigo pelo WhatsApp',
                emailFallback: 'Tentar pelo e-mail'
            },
            footer: { tagline: 'Desenvolvedor Full Stack criando experiências digitais modernas.', navAria: 'Navegação do rodapé', socialAria: 'Redes sociais', home: 'Início', about: 'Sobre Mim', projects: 'Projetos', contact: 'Contato', rights: 'Todos os direitos reservados.', built: 'Construído com HTML, CSS e JavaScript.' }
        },
        en: {
            meta: {
                title: 'Kauã Tojal - Portfolio',
                description: 'Kauã Tojal portfolio, Full Stack developer focused on web applications, APIs, and modern user interfaces.'
            },
            accessibility: { youtube: 'Open YouTube', github: 'Open GitHub', linkedin: 'Open LinkedIn', backToTop: 'Back to top', closeModal: 'Close project details', techStack: 'Technologies used' },
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
                flap: { title: 'Flap - Task Management', category: 'Full Stack application', description: 'I developed a Trello-style task management application using React and JavaScript, with drag-and-drop (@hello-pangea/dnd), JWT authentication, role-based access control, and integration with a Spring Boot REST API. I implemented complex components including modals, filters, an annual calendar, client management, and priorities using Context API and React Router.' },
                inove: { title: 'Inove Real Estate', category: 'Real estate digital product', description: 'I developed the institutional website and a complete property management system for the international real estate company Inove in Portugal, using HTML, CSS, JavaScript, Axios, Java with Spring Boot, and Hibernate. I created a RESTful API for real-time data integration, implemented responsive design with advanced search filters, property registration, editing and viewing, and used MySQL to ensure performance and scalability.' },
                fsph: { title: 'Parreiras Horta Health Foundation', category: 'Enterprise system', description: 'I developed a non-compliance management system for the Parreiras Horta Health Foundation using Java, Spring Boot, and Hibernate. The solution automated issue tracking and resolution, improving efficiency and compliance across internal processes.' },
                quonsumo: { title: 'Quonsumo: The Energy Game', category: 'Applied machine learning', description: 'I developed a machine learning model to classify energy consumers as residential or commercial every two hours using Python and scikit-learn. The project aims to optimize energy distribution based on consumption patterns.' },
                portfolio: { title: 'My Portfolio', category: 'Personal brand and portfolio', description: 'I developed my resume and portfolio as a website using HTML, CSS, and JavaScript to present my experience, projects, skills, and contact information interactively. The project makes my professional information easier to access and strengthens my visibility in the market.' },
                eyebrow: 'Featured projects',
                clickToView: 'Click to view project details',
                navigationLabel: 'Project navigation'
            },
            skills: { hardTitle: 'HARD SKILLS', softTitle: 'SOFT SKILLS', teamwork: 'Teamwork', problemSolving: 'Problem Solving', communication: 'Communication', timeManagement: 'Time Management', adaptability: 'Adaptability', creativity: 'Creativity', resultsFocus: 'Results Focus', continuousLearning: 'Continuous Learning' },
            contact: {
                eyebrow: 'Get in touch',
                heading: 'Ready to turn an idea into a product?',
                copy: 'Whether it is a new application, a partnership, or a professional opportunity, let’s talk.',
                channelsAria: 'Contact channels',
                emailLabel: 'Direct email',
                emailCta: 'Send a message',
                emailAria: 'Send an email to Kauã Tojal',
                whatsappLabel: 'WhatsApp / Instant chat',
                whatsappCta: 'Start a conversation',
                whatsappAria: 'Open a WhatsApp conversation with Kauã Tojal',
                nameLabel: 'Your name',
                emailFieldLabel: 'Your email',
                subjectLabel: 'Project type or subject',
                messageLabel: 'Message',
                name: 'Full Name',
                email: 'Email',
                subject: 'Subject',
                message: 'Message',
                submit: 'Send message',
                success: 'Message sent successfully!',
                error: 'The email service is temporarily unavailable. Please try again or use WhatsApp.',
                errorFallback: 'Talk to me on WhatsApp',
                emailFallback: 'Try by email'
            },
            footer: { tagline: 'Full Stack developer creating modern digital experiences.', navAria: 'Footer navigation', socialAria: 'Social media', home: 'Home', about: 'About Me', projects: 'Projects', contact: 'Contact', rights: 'All rights reserved.', built: 'Built with HTML, CSS, and JavaScript.' }
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
        document.querySelectorAll('[data-i18n-title]').forEach((element) => {
            element.setAttribute('title', getTranslation(selectedLanguage, element.dataset.i18nTitle));
        });
        document.querySelectorAll('[data-i18n-alt]').forEach((element) => {
            element.setAttribute('alt', getTranslation(selectedLanguage, element.dataset.i18nAlt));
        });
        document.querySelectorAll('[data-i18n-content]').forEach((element) => {
            element.setAttribute('content', getTranslation(selectedLanguage, element.dataset.i18nContent));
        });

        document.title = getTranslation(selectedLanguage, 'meta.title');
        const currentYear = document.querySelector('#currentYear');
        if (currentYear) currentYear.textContent = new Date().getFullYear();
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

        // Define o contraste dos títulos diretamente para evitar que regras legadas
        // com !important deixem prefixo e sufixo com a mesma cor.
        document.querySelectorAll('.title .title-prefix').forEach((element) => {
            element.style.setProperty('color', isLight ? '#075e63' : '#ffffff', 'important');
        });
        document.querySelectorAll('.title .title-suffix').forEach((element) => {
            element.style.setProperty('color', isLight ? '#0f9fa6' : '#ff2600', 'important');
        });

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
    const rippleTargets = document.querySelectorAll('button, .btn, .btn-curriculo, .github-button, .site-button, .youtube-button, .social-media a, .contact-channel');

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

    document.querySelectorAll('.contact-channel').forEach((channel) => {
        channel.addEventListener('click', () => {
            channel.classList.add('is-opening');
            window.setTimeout(() => channel.classList.remove('is-opening'), 620);
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
    const EMAILJS_PUBLIC_KEY = 'etN9nKcU-6xqOc7nd';
    const EMAILJS_SERVICE_ID = 'service_ixngxn3';
    const EMAILJS_TEMPLATE_ID = 'template_bovu75u';
    const emailJsAvailable = Boolean(window.emailjs && typeof window.emailjs.init === 'function' && typeof window.emailjs.send === 'function');
    let emailJsReady = false;

    if (emailJsAvailable) {
        try {
            window.emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });
            emailJsReady = true;
        } catch (initializationError) {
            console.error('Não foi possível inicializar o EmailJS:', initializationError);
        }
    } else {
        console.error('EmailJS não foi carregado. Verifique a conexão com o CDN do EmailJS.');
    }

    const form = document.getElementById('contactForm');
    const successMessage = document.getElementById('successMessage');
    const errorMessage = document.getElementById('errorMessage');
    const fallbackLink = document.getElementById('contactFallback');
    const fallbackEmailLink = document.getElementById('contactEmailFallback');
    const submitButton = form ? form.querySelector('button[type="submit"]') : null;

    function setFormMessage(element, isVisible) {
        if (!element) return;
        element.hidden = !isVisible;
        element.style.display = isVisible ? 'block' : 'none';
        if (element === errorMessage) {
            [fallbackLink, fallbackEmailLink].forEach((link) => {
                if (link) link.hidden = !isVisible;
            });
        }
    }

    function validateEmail(email) {
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailPattern.test(email);
    }

    function updateFallbackLinks(userName, userEmail, userSubject, userMessage) {
        const fallbackMessage = `Olá Kauã! Tentei enviar uma mensagem pelo seu portfólio.\n\nNome: ${userName}\nE-mail: ${userEmail}\nAssunto: ${userSubject}\nMensagem: ${userMessage}`;
        if (fallbackLink) {
            fallbackLink.href = `https://wa.me/5579981369704?text=${encodeURIComponent(fallbackMessage)}`;
        }
        if (fallbackEmailLink) {
            const emailSubject = encodeURIComponent(userSubject || 'Contato via portfólio');
            const emailBody = encodeURIComponent(`Nome: ${userName}\nE-mail para resposta: ${userEmail}\n\n${userMessage}`);
            fallbackEmailLink.href = `mailto:kauatojal0@gmail.com?subject=${emailSubject}&body=${emailBody}`;
        }
    }

    if (form) {
        form.addEventListener('submit', function (event) {
            event.preventDefault();
            setFormMessage(successMessage, false);
            setFormMessage(errorMessage, false);

            if (!form.checkValidity()) {
                form.reportValidity();
                return;
            }

            const userName = document.getElementById('user_name').value.trim();
            const userEmail = document.getElementById('user_email').value.trim();
            const userSubject = document.getElementById('user_subject').value.trim();
            const userMessage = document.getElementById('contact__message').value.trim();

            if (!validateEmail(userEmail)) {
                document.getElementById('user_email').focus();
                setFormMessage(errorMessage, true);
                return;
            }

            updateFallbackLinks(userName, userEmail, userSubject, userMessage);

            if (!emailJsReady) {
                setFormMessage(errorMessage, true);
                return;
            }

            if (submitButton) {
                submitButton.disabled = true;
                submitButton.setAttribute('aria-busy', 'true');
                submitButton.dataset.originalText = submitButton.textContent;
                submitButton.textContent = document.documentElement.lang === 'en' ? 'Sending...' : 'Enviando...';
            }

            window.emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
                from_name: userName,
                from_email: userEmail,
                reply_to: userEmail,
                subject: userSubject,
                message: userMessage
            })
                .then(function (response) {
                    console.log('EmailJS enviado com sucesso:', response);
                    setFormMessage(successMessage, true);
                    form.reset();
                    window.setTimeout(() => setFormMessage(successMessage, false), 6000);
                })
                .catch(function (error) {
                    console.error('Falha no envio pelo EmailJS:', error);
                    setFormMessage(errorMessage, true);
                    window.setTimeout(() => setFormMessage(errorMessage, false), 8000);
                })
                .finally(function () {
                    if (submitButton) {
                        submitButton.disabled = false;
                        submitButton.removeAttribute('aria-busy');
                        submitButton.textContent = submitButton.dataset.originalText || 'Enviar mensagem';
                    }
                });
        });
    }

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
    // CARROSSEL INFINITO + MODAL DE PROJETOS — PADRÃO KOVA STUDIO
    // ============================================

    const carousel = document.getElementById('carousel');
    const carouselContainer = document.querySelector('.carousel-container');
    const projectModal = document.getElementById('project-modal');
    const modalContent = document.getElementById('modal-content');
    const modalClose = document.getElementById('project-modal-close');
    let lastFocusedProject = null;

    function applyModalLanguage() {
        const selectedLanguage = document.documentElement.dataset.language || 'pt';
        if (!modalContent) return;
        modalContent.querySelectorAll('[data-i18n]').forEach((element) => {
            element.textContent = getTranslation(selectedLanguage, element.dataset.i18n);
        });
        modalContent.querySelectorAll('[data-i18n-alt]').forEach((element) => {
            element.setAttribute('alt', getTranslation(selectedLanguage, element.dataset.i18nAlt));
        });
    }

    function openProjectModal(projectId, trigger = null) {
        if (!projectModal || !modalContent) return;
        const template = document.getElementById(`project-template-${projectId}`);
        if (!template) return;

        lastFocusedProject = trigger || document.activeElement;
        modalContent.replaceChildren(template.content.cloneNode(true));
        applyModalLanguage();
        projectModal.hidden = false;
        document.body.classList.add('modal-open');
        modalClose?.focus();
    }

    function closeProjectModal() {
        if (!projectModal || projectModal.hidden) return;
        projectModal.hidden = true;
        document.body.classList.remove('modal-open');
        modalContent?.replaceChildren();
        if (lastFocusedProject && document.contains(lastFocusedProject)) lastFocusedProject.focus();
        lastFocusedProject = null;
    }

    window.openProjectModal = openProjectModal;
    window.closeProjectModal = closeProjectModal;

    document.querySelectorAll('[data-modal-close]').forEach((element) => {
        element.addEventListener('click', closeProjectModal);
    });
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && projectModal && !projectModal.hidden) closeProjectModal();
    });

    if (carousel && carouselContainer) {
        const originalSlides = Array.from(carousel.querySelectorAll(':scope > .project-card'));
        const totalDeSlides = originalSlides.length;
        const animationDuration = 35000;
        let primaryGroup = null;
        let duplicateGroup = null;
        let slideStride = 0;
        let setWidth = 0;
        let offset = 0;
        let transitionTimer = null;
        let resumeTimer = null;
        let estouArrastando = false;
        let posicaoInicialDoMouse = 0;
        let offsetInicialDoMouse = 0;
        let pointerMoved = false;
        let isPaused = false;

        function createProjectGroup(slides, hidden = false) {
            const group = document.createElement('div');
            group.className = 'carousel-group';
            group.setAttribute('role', 'presentation');
            if (hidden) group.setAttribute('aria-hidden', 'true');
            slides.forEach((slide) => group.appendChild(slide));
            if (hidden) {
                group.querySelectorAll('a, button, input, textarea, select').forEach((element) => {
                    element.setAttribute('tabindex', '-1');
                });
            }
            return group;
        }

        primaryGroup = createProjectGroup(originalSlides);
        duplicateGroup = createProjectGroup(originalSlides.map((slide) => slide.cloneNode(true)), true);
        carousel.replaceChildren(primaryGroup, duplicateGroup);
        carousel.classList.add('is-infinite', 'animate-infinite-scroll');
        carousel.style.cursor = 'grab';
        carousel.style.willChange = 'transform';
        carousel.addEventListener('dragstart', (event) => event.preventDefault());
        carousel.addEventListener('selectstart', (event) => event.preventDefault());

        function normalizeOffset(value) {
            if (!setWidth) return value;
            let normalized = value % setWidth;
            if (normalized > 0) normalized -= setWidth;
            return normalized;
        }

        function readTransformOffset() {
            const transform = window.getComputedStyle(carousel).transform;
            if (!transform || transform === 'none') return offset;
            const matrix3d = transform.match(/^matrix3d\((.+)\)$/);
            if (matrix3d) return parseFloat(matrix3d[1].split(',')[12]) || 0;
            const matrix = transform.match(/^matrix\((.+)\)$/);
            if (matrix) return parseFloat(matrix[1].split(',')[4]) || 0;
            return offset;
        }

        function currentOffset() {
            return normalizeOffset(readTransformOffset());
        }

        function setAnimationPhase(value) {
            offset = normalizeOffset(value);
            const progress = setWidth ? Math.min(Math.max((-offset) / setWidth, 0), 1) : 0;
            carousel.style.animationDelay = `${-progress * animationDuration}ms`;
            carousel.style.transform = '';
        }

        function pauseAutoplay() {
            isPaused = true;
            carousel.classList.add('is-paused');
            if (resumeTimer) window.clearTimeout(resumeTimer);
        }

        function resumeAutoplay(delay = 0) {
            if (resumeTimer) window.clearTimeout(resumeTimer);
            if (delay > 0) {
                resumeTimer = window.setTimeout(() => {
                    isPaused = false;
                    carousel.classList.remove('is-paused');
                }, delay);
            } else {
                isPaused = false;
                carousel.classList.remove('is-paused');
            }
        }

        function freezeAnimation() {
            const frozenOffset = currentOffset();
            carousel.classList.remove('animate-infinite-scroll');
            carousel.style.animationDelay = '0ms';
            carousel.style.transition = 'none';
            offset = frozenOffset;
            carousel.style.transform = `translate3d(${offset}px, 0, 0)`;
            return offset;
        }

        function restartAnimation(value = offset) {
            setAnimationPhase(value);
            carousel.classList.remove('animate-infinite-scroll');
            void carousel.offsetWidth;
            carousel.classList.add('animate-infinite-scroll');
            if (isPaused) carousel.classList.add('is-paused');
        }

        function measureCarousel() {
            if (!primaryGroup || !totalDeSlides) return;
            const previousOffset = carousel.classList.contains('animate-infinite-scroll') ? currentOffset() : offset;
            const firstSlide = primaryGroup.querySelector('.project-card');
            if (!firstSlide) return;
            slideStride = firstSlide.getBoundingClientRect().width + parseFloat(getComputedStyle(primaryGroup).gap || '0');
            setWidth = primaryGroup.getBoundingClientRect().width;
            if (!setWidth) return;
            restartAnimation(previousOffset);
        }

        function animateTo(targetOffset, duration = 680) {
            if (transitionTimer) window.clearTimeout(transitionTimer);
            const startOffset = freezeAnimation();
            const distance = targetOffset - startOffset;
            carousel.style.transition = `transform ${duration}ms cubic-bezier(0.22, 1, 0.36, 1)`;
            requestAnimationFrame(() => {
                offset = startOffset + distance;
                carousel.style.transform = `translate3d(${offset}px, 0, 0)`;
            });
            transitionTimer = window.setTimeout(() => {
                carousel.style.transition = 'none';
                offset = normalizeOffset(offset);
                restartAnimation(offset);
                transitionTimer = null;
                resumeAutoplay(1800);
            }, duration + 40);
        }

        function moveToProject(projectIndex) {
            if (!totalDeSlides || !slideStride || !setWidth) return;
            const index = ((projectIndex % totalDeSlides) + totalDeSlides) % totalDeSlides;
            pauseAutoplay();
            const startOffset = currentOffset();
            let targetOffset = -index * slideStride;
            while (targetOffset - startOffset > setWidth / 2) targetOffset -= setWidth;
            while (targetOffset - startOffset < -setWidth / 2) targetOffset += setWidth;
            animateTo(targetOffset);
        }

        function handlePointerDown(event) {
            if (event.button !== undefined && event.button !== 0) return;
            if (transitionTimer) window.clearTimeout(transitionTimer);
            pauseAutoplay();
            freezeAnimation();
            estouArrastando = true;
            pointerMoved = false;
            posicaoInicialDoMouse = event.clientX;
            offsetInicialDoMouse = offset;
            carousel.style.cursor = 'grabbing';
            carousel.setPointerCapture?.(event.pointerId);
        }

        function handlePointerMove(event) {
            if (!estouArrastando) return;
            const difference = event.clientX - posicaoInicialDoMouse;
            if (Math.abs(difference) > 5) pointerMoved = true;
            offset = offsetInicialDoMouse + difference;
            carousel.style.transform = `translate3d(${offset}px, 0, 0)`;
        }

        function handlePointerUp(event) {
            if (!estouArrastando) return;
            estouArrastando = false;
            carousel.style.cursor = 'grab';
            carousel.releasePointerCapture?.(event.pointerId);
            const difference = event.clientX - posicaoInicialDoMouse;
            const threshold = Math.max(42, slideStride * 0.16);
            const currentIndex = Math.round(-normalizeOffset(offset) / slideStride);
            const nextIndex = difference < -threshold ? currentIndex + 1 : difference > threshold ? currentIndex - 1 : currentIndex;
            moveToProject(nextIndex);
        }

        carousel.addEventListener('pointerdown', handlePointerDown);
        carousel.addEventListener('pointermove', handlePointerMove);
        carousel.addEventListener('pointerup', handlePointerUp);
        carousel.addEventListener('pointercancel', handlePointerUp);
        carousel.addEventListener('click', (event) => {
            const projectCard = event.target.closest('.project-card');
            if (!projectCard || !carousel.contains(projectCard)) return;
            if (pointerMoved) {
                event.preventDefault();
                event.stopPropagation();
                pointerMoved = false;
                return;
            }
            openProjectModal(projectCard.dataset.projectId, projectCard);
        });
        carouselContainer.addEventListener('mouseenter', () => pauseAutoplay());
        carouselContainer.addEventListener('mouseleave', () => {
            if (!estouArrastando && !transitionTimer && (!projectModal || projectModal.hidden)) resumeAutoplay();
        });
        carouselContainer.addEventListener('focusin', () => pauseAutoplay());
        carouselContainer.addEventListener('focusout', (event) => {
            if (!carouselContainer.contains(event.relatedTarget)) resumeAutoplay();
        });

        window.moveToSlide = moveToProject;
        measureCarousel();
        window.addEventListener('resize', () => window.requestAnimationFrame(measureCarousel));
    }

    window.addEventListener('portfolio-language-change', applyModalLanguage);

});
