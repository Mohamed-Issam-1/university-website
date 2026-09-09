// تهيئة AOS
AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true
});

// Preloader
window.addEventListener('load', function () {
    const preloader = document.querySelector('.preloader');
    preloader.style.opacity = '0';
    setTimeout(() => {
        preloader.style.display = 'none';
    }, 500);
});

// تأثير الكتابة
function typeWriter(elementId, text, speed) {
    let i = 0;
    const element = document.getElementById(elementId);

    function typing() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(typing, speed);
        }
    }

    // مسح النص أولاً إذا كان موجودًا
    element.innerHTML = '';
    typing();
}

// استدعاء تأثير الكتابة عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', function () {
    typeWriter('typing-text', 'مرحباً بكم في جامعة الأقصى', 100);
});

// شريط الأخبار المتحرك
const newsTicker = document.getElementById('newsTicker');
const newsItems = [
    "تم افتتاح التسجيل للفصل الدراسي الجديد - آخر موعد 30/4/2025",
    "ورشة عمل حول أمن المعلومات يوم الأحد القادم في قاعة المؤتمرات بالحرم الجامعي",
    "إعلان نتائج الامتحانات النهائية للفصل الأول متاحة الآن على بوابة الطالب",
    "مسابقة البحث العلمي للطلبة - آخر موعد لتسليم الأبحاث 20/4/2025",
    "محاضرة عامة حول الذكاء الاصطناعي يلقيها البروفيسور أحمد خليل يوم الثلاثاء القادم"
];

let currentItem = 0;

function updateTicker() {
    newsTicker.innerHTML = `<span>📢 ${newsItems[currentItem]}</span>`;
    currentItem = (currentItem + 1) % newsItems.length;
}

updateTicker();
setInterval(updateTicker, 5000);

// القائمة المتحركة للهواتف
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// زر العودة للأعلى
window.addEventListener('scroll', function () {
    const backToTop = document.getElementById('backToTop');
    if (window.pageYOffset > 300) {
        backToTop.style.display = 'flex';
    } else {
        backToTop.style.display = 'none';
    }
});

document.getElementById('backToTop').addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// تأثيرات الأزرار
const buttons = document.querySelectorAll('button, .read-more, .social-icons a, .submit-btn');
buttons.forEach(button => {
    button.addEventListener('mouseenter', () => {
        button.style.transform = 'scale(1.05)';
    });
    button.addEventListener('mouseleave', () => {
        button.style.transform = 'scale(1)';
    });
});

// التمرير السلس للروابط
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });

            // إغلاق القائمة إذا كانت مفتوحة على الهاتف
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
            }
        }
    });
});

// نموذج الاتصال
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        Swal.fire({
            title: 'تم الإرسال بنجاح!',
            text: 'شكراً لتواصلك مع جامعة الأقصى، سنرد عليك في أقرب وقت ممكن.',
            icon: 'success',
            confirmButtonText: 'حسناً',
            confirmButtonColor: '#006747'
        });

        // إعادة تعيين النموذج
        contactForm.reset();
    });
}

// تأثيرات عند التمرير
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;

    // تأثير التلاشي للعناصر
    const fadeElements = document.querySelectorAll('.news-card, .event-card, .faculty-card');

    fadeElements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top + scrollPosition;
        const windowHeight = window.innerHeight;

        if (elementPosition < scrollPosition + windowHeight - 100) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
});

// تهيئة العناصر للظهور عند التحميل
document.addEventListener('DOMContentLoaded', () => {
    const fadeElements = document.querySelectorAll('.news-card, .event-card, .faculty-card');

    fadeElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });

    // جعل العناصر تظهر بعد تحميل الصفحة
    setTimeout(() => {
        fadeElements.forEach((element, index) => {
            setTimeout(() => {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }, index * 100);
        });
    }, 300);
});