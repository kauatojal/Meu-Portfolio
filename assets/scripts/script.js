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

    // Inicializando o EmailJS com a sua chave pública
    emailjs.init("etN9nKcU-6xqOc7nd");

    // Selecionando o formulário e a mensagem de sucesso
    const form = document.getElementById('contactForm');
    const successMessage = document.getElementById('successMessage');
    const errorMessage = document.getElementById('errorMessage');

    // Função para validar email
    function validateEmail(email) {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9]{2,6}$/;
        return emailPattern.test(email);
    }

    // Função para enviar o formulário via EmailJS
    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const userName = document.getElementById('user_name').value;
        const userEmail = document.getElementById('user_email').value;
        const userSubject = document.getElementById('user_subject').value;
        const userMessage = document.getElementById('contact__message').value;

        // Validação de email
        if (!validateEmail(userEmail)) {
            alert("Por favor, insira um email válido.");
            return;
        }

        // Enviando o email via EmailJS
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
                
                // Esconde a mensagem após 5 segundos
                setTimeout(() => {
                    successMessage.style.display = 'none';
                }, 5000);
            })
            .catch(function (error) {
                console.error('Error:', error);
                errorMessage.style.display = 'block';
                successMessage.style.display = 'none';
                
                // Esconde a mensagem após 5 segundos
                setTimeout(() => {
                    errorMessage.style.display = 'none';
                }, 5000);
            });
    });

    // Animação de texto digitando
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
    // CARROSSEL COM DRAG - FUNCIONALIDADE COMPLETA
    // ==============================================
    
    const carousel = document.getElementById('carousel');
    let isDragging = false;
    let startPos = 0;
    let currentTranslate = 0;
    let prevTranslate = 0;
    let animationID = 0;
    let currentIndex = 0;

    // Event Listeners para Drag
    carousel.addEventListener('mousedown', dragStart);
    carousel.addEventListener('touchstart', dragStart);
    carousel.addEventListener('mouseup', dragEnd);
    carousel.addEventListener('touchend', dragEnd);
    carousel.addEventListener('mousemove', drag);
    carousel.addEventListener('touchmove', drag);
    carousel.addEventListener('mouseleave', dragEnd);

    function dragStart(event) {
        isDragging = true;
        startPos = getPositionX(event);
        animationID = requestAnimationFrame(animation);
        carousel.style.cursor = 'grabbing';
    }

    function drag(event) {
        if (isDragging) {
            const currentPosition = getPositionX(event);
            currentTranslate = prevTranslate + currentPosition - startPos;
        }
    }

    function dragEnd() {
        isDragging = false;
        cancelAnimationFrame(animationID);
        
        const movedBy = currentTranslate - prevTranslate;
        
        // Navega para o próximo ou anterior se arrastou o suficiente
        if (movedBy < -100 && currentIndex < 4) currentIndex += 1;
        if (movedBy > 100 && currentIndex > 0) currentIndex -= 1;
        
        setPositionByIndex();
        carousel.style.cursor = 'grab';
    }

    function getPositionX(event) {
        return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX;
    }

    function animation() {
        setSliderPosition();
        if (isDragging) requestAnimationFrame(animation);
    }

    function setSliderPosition() {
        carousel.style.transform = `translateX(${currentTranslate}px)`;
    }

    function setPositionByIndex() {
        currentTranslate = currentIndex * -carousel.offsetWidth;
        prevTranslate = currentTranslate;
        setSliderPosition();
    }

    // Função global para navegação por botões
    window.moveToSlide = function(index) {
        currentIndex = index;
        setPositionByIndex();
    }

    // Define cursor inicial
    carousel.style.cursor = 'grab';

    // Atualiza posição ao redimensionar a janela
    window.addEventListener('resize', () => {
        setPositionByIndex();
    });
});
