document.addEventListener('DOMContentLoaded', function () {
    const menubar = document.querySelector('#menu');
    const Navbar = document.querySelector('.navbar');
    menubar.onclick = () => {
        menubar.classList.toggle('bx-x');
        Navbar.classList.toggle('active');
    }

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

    document.getElementById('backToTop').addEventListener('click', function (e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
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

    // Inicializando o EmailJS
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
                
                setTimeout(() => {
                    successMessage.style.display = 'none';
                }, 5000);
            })
            .catch(function (error) {
                console.error('Error:', error);
                errorMessage.style.display = 'block';
                successMessage.style.display = 'none';
                
                setTimeout(() => {
                    errorMessage.style.display = 'none';
                }, 5000);
            });
    });

    // Animação de texto
    const textElement = document.getElementById('typing-text');
    const texts = [
        "Desenvolvedor de Software", 
        "Desenvolvedor Full-Stack", 
        "Web Designer", 
        "Universitário", 
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

    // ==============================================
    // CARROSSEL COM DRAG - VERSÃO CORRIGIDA
    // ==============================================
    
    const carousel = document.getElementById('carousel');
    const projects = document.querySelectorAll('.project');
    let isDragging = false;
    let startX = 0;
    let scrollLeft = 0;
    let currentIndex = 0;

    // Define cursor inicial
    carousel.style.cursor = 'grab';

    // Mouse Down - Início do drag
    carousel.addEventListener('mousedown', (e) => {
        isDragging = true;
        carousel.style.cursor = 'grabbing';
        startX = e.pageX - carousel.offsetLeft;
        scrollLeft = carousel.scrollLeft;
        carousel.style.transition = 'none'; // Remove transição durante drag
    });

    // Mouse Leave - Cancela drag se sair
    carousel.addEventListener('mouseleave', () => {
        if (isDragging) {
            isDragging = false;
            carousel.style.cursor = 'grab';
            carousel.style.transition = 'transform 0.5s ease-in-out';
            snapToNearestSlide();
        }
    });

    // Mouse Up - Fim do drag
    carousel.addEventListener('mouseup', () => {
        if (isDragging) {
            isDragging = false;
            carousel.style.cursor = 'grab';
            carousel.style.transition = 'transform 0.5s ease-in-out';
            snapToNearestSlide();
        }
    });

    // Mouse Move - Durante o drag
    carousel.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - carousel.offsetLeft;
        const walk = (x - startX) * 2; // Multiplica por 2 para mais sensibilidade
        const newTransform = scrollLeft - walk;
        carousel.style.transform = `translateX(${newTransform}px)`;
    });

    // Touch Events para mobile
    carousel.addEventListener('touchstart', (e) => {
        isDragging = true;
        startX = e.touches[0].pageX - carousel.offsetLeft;
        scrollLeft = carousel.scrollLeft;
        carousel.style.transition = 'none';
    });

    carousel.addEventListener('touchend', () => {
        if (isDragging) {
            isDragging = false;
            carousel.style.transition = 'transform 0.5s ease-in-out';
            snapToNearestSlide();
        }
    });

    carousel.addEventListener('touchmove', (e) => {
        if (!isDragging) return;
        const x = e.touches[0].pageX - carousel.offsetLeft;
        const walk = (x - startX) * 2;
        const newTransform = scrollLeft - walk;
        carousel.style.transform = `translateX(${newTransform}px)`;
    });

    // Função para ajustar ao slide mais próximo
    function snapToNearestSlide() {
        const containerWidth = carousel.offsetWidth;
        const currentTransform = getTranslateX();
        const nearestIndex = Math.round(Math.abs(currentTransform) / containerWidth);
        
        // Limita o índice entre 0 e 4
        currentIndex = Math.max(0, Math.min(nearestIndex, 4));
        
        moveToSlide(currentIndex);
    }

    // Pega o valor atual de translateX
    function getTranslateX() {
        const style = window.getComputedStyle(carousel);
        const matrix = style.transform || style.webkitTransform || style.mozTransform;
        
        if (matrix === 'none' || typeof matrix === 'undefined') {
            return 0;
        }
        
        const matrixValues = matrix.match(/matrix.*\((.+)\)/)[1].split(', ');
        return parseFloat(matrixValues[4]);
    }

    // Função global para navegação por botões
    window.moveToSlide = function(index) {
        currentIndex = index;
        const containerWidth = carousel.offsetWidth;
        carousel.style.transition = 'transform 0.5s ease-in-out';
        carousel.style.transform = `translateX(-${currentIndex * containerWidth}px)`;
    }

    // Atualiza posição ao redimensionar
    window.addEventListener('resize', () => {
        moveToSlide(currentIndex);
    });
});
