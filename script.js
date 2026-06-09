// تشغيل الجزيئات السيبرانية بالخلفية
function createParticles() {
    const bg = document.getElementById('animatedBg');
    if (!bg) return;
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('bg-particle');
        
        const size = Math.random() * 100 + 20;
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        const duration = Math.random() * 30 + 20;
        const delay = Math.random() * 5;
        const opacity = Math.random() * 0.05 + 0.02;
        
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${posX}%`;
        particle.style.top = `${posY}%`;
        particle.style.animationDuration = `${duration}s`;
        particle.style.animationDelay = `${delay}s`;
        particle.style.opacity = opacity;
        
        bg.appendChild(particle);
    }
}

// تأثير الهيدر عند السكرول
window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    if (!header) return;
    if (window.pageYOffset > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// تعبئة أشرطة التقدم (Progress Bars) تلقائياً عند النزول لقسم المهارات
function animateProgressBars() {
    const progressBars = document.querySelectorAll('.progress-bar');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bar = entry.target;
                const percentage = bar.getAttribute('data-progress');
                bar.style.width = percentage;
                observer.unobserve(bar); 
            }
        });
    }, { threshold: 0.3 });

    progressBars.forEach(bar => observer.observe(bar));
}

// تشغيل روابط كروت الاتصال (تمت إضافة كرت GitHub هنا)
const contactCards = document.querySelectorAll('.contact-card');
contactCards.forEach(card => {
    card.addEventListener('click', function() {
        if (this.id === 'linkedin-card') {
            window.open('https://www.linkedin.com/in/maher-farid-mohsen-alsharafi-a41104386', '_blank');
        } else if (this.id === 'github-card') {
            window.open('https://github.com/maher-0', '_blank');
        } else if (this.id === 'whatsapp-card') {
            window.open('https://wa.me/601139296602', '_blank');
        }
    });
});

// القائمة الجانبية للهواتف الذكية
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navMenu = document.getElementById('navMenu');

if (mobileMenuBtn && navMenu) {
    mobileMenuBtn.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        if (navMenu.classList.contains('active')) {
            navMenu.style.display = 'flex';
            navMenu.style.flexDirection = 'column';
            navMenu.style.position = 'fixed';
            navMenu.style.top = '80px';
            navMenu.style.right = '0';
            navMenu.style.background = 'rgba(13, 19, 36, 0.95)';
            navMenu.style.padding = '30px';
            navMenu.style.width = '250px';
            navMenu.style.border = '1px solid rgba(0, 240, 255, 0.2)';
            navMenu.style.backdropFilter = 'blur(20px)';
        } else {
            navMenu.style.display = 'none';
        }
    });
}

// تشغيل السكريبت عند تحميل الصفحة
window.addEventListener('DOMContentLoaded', () => {
    createParticles();
    animateProgressBars();
    
    const yearEl = document.getElementById('currentYear');
    if (yearEl) yearEl.textContent = new Date().getFullYear();
});
