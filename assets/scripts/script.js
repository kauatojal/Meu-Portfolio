document.addEventListener('DOMContentLoaded', function () {
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
    const texts = [
        "Desenvolvedor de Software", 
        "Desenvolvedor Full-Stack", 
        "Web Designer", 
        "Formado em ADS", 
        "Flamenguista", 
        "Gamer", 
        "Entusiasta dos E-Sports"
    ];
    let currentTextIndex = 0;
    let index = 0;
    let isTyping = true;

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
        
        carousel.style.transition = 'transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        carousel.style.transform = `translateX(${movimentoAtual}px)`;
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
