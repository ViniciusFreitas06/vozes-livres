/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL EVENTS ====================*/
// Throttle scroll events for better performance
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Combined scroll handler for better performance
const handleScroll = throttle(() => {
    scrollHeader();
    scrollUp();
    scrollActive();
}, 16); // ~60fps

window.addEventListener('scroll', handleScroll);

/*==================== SCROLL FUNCTIONS ====================*/
function scrollHeader(){
    const nav = document.getElementById('header')
    // When the scroll is greater than 80 viewport height, add the scroll-header class to the header tag
    if(window.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}

function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(window.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}

const sections = document.querySelectorAll('section[id]')
function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            const activeLink = document.querySelector('.nav__menu a[href*=' + sectionId + ']');
            if(activeLink) activeLink.classList.add('active-link')
        }else{
            const activeLink = document.querySelector('.nav__menu a[href*=' + sectionId + ']');
            if(activeLink) activeLink.classList.remove('active-link')
        }
    })
}

/*==================== SMOOTH SCROLLING ====================*/
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

/*==================== CAROUSEL FUNCTIONALITY ====================*/
class Carousel {
    constructor() {
        this.currentSlide = 0;
        this.slides = document.querySelectorAll('.carousel__item');
        this.indicators = document.querySelectorAll('.indicator');
        this.prevBtn = document.getElementById('prev-btn');
        this.nextBtn = document.getElementById('next-btn');
        this.totalSlides = this.slides.length;
        
        this.init();
    }
    
    init() {
        // Add event listeners
        this.prevBtn.addEventListener('click', () => this.prevSlide());
        this.nextBtn.addEventListener('click', () => this.nextSlide());
        
        // Add indicator click events
        this.indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => this.goToSlide(index));
        });
        
        // Auto-play carousel
        this.startAutoPlay();
    }
    
    showSlide(index) {
        // Hide all slides
        this.slides.forEach(slide => slide.classList.remove('active'));
        this.indicators.forEach(indicator => indicator.classList.remove('active'));
        
        // Show current slide
        this.slides[index].classList.add('active');
        this.indicators[index].classList.add('active');
    }
    
    nextSlide() {
        this.currentSlide = (this.currentSlide + 1) % this.totalSlides;
        this.showSlide(this.currentSlide);
    }
    
    prevSlide() {
        this.currentSlide = (this.currentSlide - 1 + this.totalSlides) % this.totalSlides;
        this.showSlide(this.currentSlide);
    }
    
    goToSlide(index) {
        this.currentSlide = index;
        this.showSlide(this.currentSlide);
    }
    
    startAutoPlay() {
        setInterval(() => {
            this.nextSlide();
        }, 5000); // Change slide every 5 seconds
    }
}

// Initialize carousel when DOM is loaded
let carouselInstance;
document.addEventListener('DOMContentLoaded', () => {
    carouselInstance = new Carousel();
    window.carouselInstance = carouselInstance;
});

/*==================== FORM VALIDATION ====================*/
class FormValidator {
    constructor() {
        this.form = document.getElementById('contact-form');
        this.nameInput = document.getElementById('name');
        this.emailInput = document.getElementById('email');
        this.messageInput = document.getElementById('message');
        
        this.init();
    }
    
    init() {
        this.form.addEventListener('submit', (e) => this.handleSubmit(e));
        
        // Real-time validation
        this.nameInput.addEventListener('blur', () => this.validateName());
        this.emailInput.addEventListener('blur', () => this.validateEmail());
        this.messageInput.addEventListener('blur', () => this.validateMessage());
    }
    
    handleSubmit(e) {
        e.preventDefault();
        
        const isNameValid = this.validateName();
        const isEmailValid = this.validateEmail();
        const isMessageValid = this.validateMessage();
        
        if (isNameValid && isEmailValid && isMessageValid) {
            this.showSuccessMessage();
            this.form.reset();
        }
    }
    
    validateName() {
        const name = this.nameInput.value.trim();
        if (name.length < 2) {
            this.showError(this.nameInput, 'Nome deve ter pelo menos 2 caracteres');
            return false;
        }
        this.showSuccess(this.nameInput);
        return true;
    }
    
    validateEmail() {
        const email = this.emailInput.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (!emailRegex.test(email)) {
            this.showError(this.emailInput, 'Por favor, insira um e-mail válido');
            return false;
        }
        this.showSuccess(this.emailInput);
        return true;
    }
    
    validateMessage() {
        const message = this.messageInput.value.trim();
        if (message.length < 10) {
            this.showError(this.messageInput, 'Mensagem deve ter pelo menos 10 caracteres');
            return false;
        }
        this.showSuccess(this.messageInput);
        return true;
    }
    
    showError(input, message) {
        this.removeMessages(input);
        input.style.borderColor = '#e53e3e';
        
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.style.color = '#e53e3e';
        errorDiv.style.fontSize = '0.875rem';
        errorDiv.style.marginTop = '0.25rem';
        errorDiv.textContent = message;
        
        input.parentNode.appendChild(errorDiv);
    }
    
    showSuccess(input) {
        this.removeMessages(input);
        input.style.borderColor = '#38a169';
    }
    
    removeMessages(input) {
        const existingMessage = input.parentNode.querySelector('.error-message, .success-message');
        if (existingMessage) {
            existingMessage.remove();
        }
        input.style.borderColor = '#e2e8f0';
    }
    
    showSuccessMessage() {
        // Create success notification
        const notification = document.createElement('div');
        notification.className = 'success-notification';
        notification.innerHTML = `
            <div style="
                position: fixed;
                top: 20px;
                right: 20px;
                background: linear-gradient(135deg, #6A0DAD 0%, #C084FC 100%);
                color: white;
                padding: 1rem 1.5rem;
                border-radius: 8px;
                box-shadow: 0 4px 20px rgba(0,0,0,0.1);
                z-index: 1000;
                animation: slideInRight 0.3s ease;
            ">
                <i class="fas fa-check-circle" style="margin-right: 0.5rem;"></i>
                Mensagem enviada com sucesso!
            </div>
        `;
        
        document.body.appendChild(notification);
        
        // Remove notification after 3 seconds
        setTimeout(() => {
            notification.remove();
        }, 3000);
    }
}

// Initialize form validator when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new FormValidator();
});

/*==================== SCROLL REVEAL ANIMATION ====================*/
class ScrollReveal {
    constructor() {
        this.elements = document.querySelectorAll('.reveal');
        this.init();
    }
    
    init() {
        // Add reveal class to elements that should be animated
        this.addRevealClass();
        
        // Check which elements are in viewport on scroll
        window.addEventListener('scroll', () => this.checkElements());
        
        // Initial check - ativar elementos imediatamente se estiverem visíveis
        setTimeout(() => this.checkElements(), 100);
    }
    
    addRevealClass() {
        // Add reveal class to sections and cards
        const elementsToReveal = [
            '.sobre__content',
            '.sobre__image',
            '.objetivo__card',
            '.contato__info',
            '.contato__form',
            '.stat'
        ];
        
        elementsToReveal.forEach(selector => {
            const elements = document.querySelectorAll(selector);
            elements.forEach(el => el.classList.add('reveal'));
        });
    }
    
    checkElements() {
        this.elements = document.querySelectorAll('.reveal'); // Atualizar lista
        this.elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < window.innerHeight - elementVisible) {
                element.classList.add('active');
            }
        });
    }
}

// Initialize scroll reveal when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new ScrollReveal();
});

/*==================== COUNTER ANIMATION ====================*/
class CounterAnimation {
    constructor() {
        this.counters = document.querySelectorAll('.stat__number');
        this.init();
    }
    
    init() {
        window.addEventListener('scroll', () => this.animateCounters());
    }
    
    animateCounters() {
        this.counters.forEach(counter => {
            const rect = counter.getBoundingClientRect();
            const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
            
            if (isVisible && !counter.classList.contains('animated')) {
                counter.classList.add('animated');
                this.animateCounter(counter);
            }
        });
    }
    
    animateCounter(counter) {
        const target = parseInt(counter.textContent);
        const duration = 2000; // 2 seconds
        const step = target / (duration / 16); // 60fps
        let current = 0;
        
        const timer = setInterval(() => {
            current += step;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            counter.textContent = Math.floor(current) + '+';
        }, 16);
    }
}

// Initialize counter animation when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new CounterAnimation();
});

/*==================== LOADING ANIMATION ====================*/
window.addEventListener('load', () => {
    // Add loaded class to body for any load-specific animations
    document.body.classList.add('loaded');
    
    // Animate hero section on load
    const heroContent = document.querySelector('.hero__content');
    const heroImage = document.querySelector('.hero__image');
    
    if (heroContent) {
        heroContent.style.animation = 'fadeInUp 1s ease-out';
    }
    
    if (heroImage) {
        heroImage.style.animation = 'fadeInUp 1s ease-out 0.3s both';
    }
});

/*==================== MOBILE TOUCH IMPROVEMENTS ====================*/
// Improve touch interactions on mobile
if ('ontouchstart' in window) {
    // Add touch class to body
    document.body.classList.add('touch-device');
    
    // Improve button touch feedback
    const buttons = document.querySelectorAll('.button, .social__link, .carousel__btn');
    buttons.forEach(button => {
        button.addEventListener('touchstart', function() {
            this.style.transform = 'scale(0.95)';
        });
        
        button.addEventListener('touchend', function() {
            this.style.transform = '';
        });
    });
}

/*==================== ACCESSIBILITY IMPROVEMENTS ====================*/
// Keyboard navigation for carousel
document.addEventListener('keydown', (e) => {
    if (e.target.closest('.premiacoes__carousel')) {
        const carousel = window.carouselInstance;
        if (carousel && e.key === 'ArrowLeft') {
            e.preventDefault();
            carousel.prevSlide();
        } else if (carousel && e.key === 'ArrowRight') {
            e.preventDefault();
            carousel.nextSlide();
        }
    }
});

// Focus management for mobile menu
const navToggleEl = document.getElementById('nav-toggle');
const navCloseEl = document.getElementById('nav-close');
const firstNavLink = document.querySelector('.nav__link');

if (navToggleEl) {
    navToggleEl.addEventListener('click', () => {
        setTimeout(() => {
            if (firstNavLink) firstNavLink.focus();
        }, 100);
    });
}

if (navCloseEl) {
    navCloseEl.addEventListener('click', () => {
        if (navToggleEl) navToggleEl.focus();
    });
}

function lerMais() {
    const texto = document.getElementById("texto_extra");
    const btn = document.getElementById("btnLerMais");

    if (texto.style.display === "none") {
        texto.style.display = "block";
        btn.innerText = "Ler menos";
    } else {
        texto.style.display = "none";
        btn.innerText = "Ler mais";
    }
}

function verMais() {
  const itens = document.querySelectorAll(".gallery-item");
  const btn = document.getElementById("btnVerMais");

  const maxItens = window.innerWidth < 768 ? 4 : 8;

  if (btn.innerText === "Mostrar mais") {
    itens.forEach(item => (item.style.display = "block"));
    btn.innerText = "Mostrar menos";
  } else {
    itens.forEach((item, i) => {
      item.style.display = i < maxItens ? "block" : "none";
    });
    btn.innerText = "Mostrar mais";
  }
}

document.getElementById("btnVerMais").addEventListener("click", verMais);



