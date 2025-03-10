function switchLanguage(lang) {
  // انتخاب تمامی عناصری که دارای ویژگی data-lang-fa و data-lang-en هستند
  const elements = document.querySelectorAll('[data-lang-fa], [data-lang-en]');
  
  // بروزرسانی زبان براساس مقدار انتخاب شده
  elements.forEach(element => {
    if (lang === 'FA') {
      element.textContent = element.getAttribute('data-lang-fa');
    } else if (lang === 'EN') {
      element.textContent = element.getAttribute('data-lang-en');
    }
  });
  
  // بروزرسانی متن دکمه تغییر زبان
  document.getElementById('current-lang').textContent = lang;
}

// تابع باز و بسته کردن منوی زبان
function toggleDropdown() {
  document.getElementById('dropdown').classList.toggle('show');
}

// بستن منوی زبان با کلیک در بیرون از آن
window.onclick = function(event) {
  if (!event.target.matches('.lang-switcher, .lang-switcher *')) {
    const dropdown = document.getElementById('dropdown');
    if (dropdown.classList.contains('show')) {
      dropdown.classList.remove('show');
    }
  }
}

// تابع برای نمایش یا مخفی کردن منوی کشویی و تغییر جهت آیکون
function toggleDropdown() {
  const dropdown = document.getElementById('dropdown');
  const arrowIcon = document.getElementById('arrow-icon');

  if (dropdown.style.display === 'none' || dropdown.style.display === '') {
      dropdown.style.display = 'block';
      arrowIcon.src = 'assets/img/icon-first/down-arrow-5-svgrepo-com (1).svg';
  } else {
      dropdown.style.display = 'none';
      arrowIcon.src = 'assets/img/icon-first/down-arrow-5-svgrepo-com.svg';
  }
}


const swiper = new Swiper('.mySwiper', {
    slidesPerView: 2, // تعداد اسلاید‌ها در نمایش دسکتاپ
    spaceBetween: 15,
    navigation: {
        nextEl: '.custom-next',
        prevEl: '.custom-prev',
    },
    loop: false,
    slidesPerGroup: 1,
    breakpoints: {
        768: {
            slidesPerView: 3, // نمایش دو اسلاید در تبلت
            spaceBetween: 20,
        },
        480: {
            slidesPerView: 1, // نمایش دو اسلاید در موبایل
            spaceBetween: 10,
        }
    }
});




function toggleFaq(element) {
    const answer = element.nextElementSibling;
    const icon = element.querySelector('.faq-icon');

    // Toggle answer visibility with animation
    if (answer.style.maxHeight) {
        answer.style.maxHeight = null;
        icon.textContent = '+';
    } else {
        answer.style.maxHeight = answer.scrollHeight + 'px';
        icon.textContent = '-';
    }
}
function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('show');
}








