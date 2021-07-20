"use strict";

// const { default: Swiper } = require("swiper");

let menuIcon = document.querySelector(".header__menu-icon");
if (menuIcon) {
  menuIcon.addEventListener("click", function (e) {
    this.classList.toggle("_opened");
    if (this.classList.contains("_opened")) {
      document.querySelector(".header").classList.add("_locked");
      [...document.querySelectorAll("._menu")].forEach((item) => {
        item.classList.add("_active");
      });
    } else {
      document.querySelector(".header").classList.remove("_locked");
      [...document.querySelectorAll("._menu")].forEach((item) => {
        item.classList.remove("_active");
      });
    }
  });
}

let dropdownLanguages = document.querySelector("#dropdown__languages");
if (dropdownLanguages) {
  dropdownLanguages.addEventListener("click", function (e) {
    this.classList.toggle("_show");
    e.preventDefault();
  });
}

let languages = dropdownLanguages.querySelectorAll(
  ".header__top-dropdown__link"
);
if (languages.length > 0) {
  for (let i = 0; i < languages.length; i++) {
    languages[i].addEventListener("click", function (e) {
      [...languages].forEach((item) => {
        item.classList.remove("_active");
      });
      this.classList.add("_active");
    });
  }
}

let servicesLink = document.querySelectorAll(".services__nav-link");
if (servicesLink.length > 0) {
  for (let i = 0; i < servicesLink.length; i++) {
    servicesLink[i].addEventListener("click", function (e) {
      [...servicesLink].forEach((item) => {
        item.classList.remove("_active");
      });
      this.classList.add("_active");

      let servicesProducts = document.querySelectorAll(".services__products");
      let dataId = this.getAttribute("id");

      [...servicesProducts].forEach((productsItem) => {
        productsItem.classList.remove("_shown");
        if (productsItem.dataset.name == dataId) {
          productsItem.classList.add("_shown");
        }
      });

      e.preventDefault();
    });
  }
}

let count = 0;

document.body.onresize = () => {
  checkDevice();

  if(window.innerWidth > 576){
      count++;
      if(count == 1){
        location.reload()
      }  
  }else{
      count = 0;
  }
};

function checkDevice() {
  let swiperSlide = document.querySelectorAll(".services__products-box");
  let servicesNavItem = document.querySelectorAll(".services__nav-item");
  let servicesProducts = document.querySelectorAll(".services__products");

  [...swiperSlide].forEach((item) => {
    if (window.innerWidth > 576) {
      item.classList.remove("swiper-wrapper");
    } else {
      item.classList.add("swiper-wrapper");
      widthWindow();
    }
  });

  [...servicesNavItem].forEach((item) => {
    if (window.innerWidth > 576) {
      item.classList.remove("swiper-slide");
    } else {
      item.classList.add("swiper-slide");
      widthWindow();
    }
  });

  [...servicesProducts].forEach((item) => {
    if (window.innerWidth > 576) {
      item.classList.remove("swiper-wrapper");
    } else {
      item.classList.add("swiper-wrapper");
      widthWindow();
    }
});

  
}

function widthWindow() {
  if (window.innerWidth < 576) {
    slider();
  }
}

document.addEventListener("DOMContentLoaded", () => {
  if (window.innerWidth < 576) {
    widthWindow();
    checkDevice();
  }
});

function slider() {
  const servicesNavSlider = new Swiper(".services__nav-slider", {
    breakpoints: {
      319: {
        slidesPerView: 1.3,
      },
      470: {
        slidesPerView: 2.2,
      },
      576: {
        slidesPerView: 4,
        simulateTouch: false,
      },
    },
  });
  const industrySlider = new Swiper(".industry__block-slider", {
    breakpoints: {
      319: {
        slidesPerView: 1.5,
        spaceBetween: 12.76,
      },
      576: {
        slidesPerView: 2,
        simulateTouch: false,
      },
    },
  });
  const domesticSlider = new Swiper(".domestic__block-slider", {
    breakpoints: {
      319: {
        slidesPerView: 1.5,
        spaceBetween: 12.76,
      },
      576: {
        simulateTouch: false,
      },
    },
  });
  const partsSlider = new Swiper(".parts__block-slider", {
    breakpoints: {
      319: {
        slidesPerView: 1.5,
        spaceBetween: 12.76,
      },
      576: {
        simulateTouch: false,
      },
    },
  });
  const serviceSlider = new Swiper(".service__block-slider", {
    breakpoints: {
      319: {
        slidesPerView: 1.5,
        spaceBetween: 12.76,
      },
      576: {
        simulateTouch: false,
      },
    },
  });
}

let servicesButton = document.querySelector(".services__button");
if (servicesButton) {
  servicesButton.addEventListener("click", function (e) {
    this.classList.toggle("_pressed");

    let hide = document.querySelectorAll(".hide");
    [...hide].forEach((item) => {
      if (this.classList.contains("_pressed")) {
        this.textContent = "СКРЫТЬ";
        item.classList.add("_showed");
      } else {
        this.textContent = "ПОКАЗАТЬ ВСЕ";
        item.classList.remove("_showed");
      }
    });

    e.preventDefault();
  });
}


let contactsBtn = document.querySelector('.contacts__btn');

if (contactsBtn) {
    contactsBtn.addEventListener('click', function() {
        document.body.classList.add('_lock');

        let modalWindow = document.querySelector('.modal');
        modalWindow.classList.add('_active');

        if (modalWindow.classList.contains('_active')) {
            modalWindow.style.cssText = `top: -300%`
        }
        if (modalWindow.classList.contains('_active')) {

            let scroll = document.documentElement.scrollTop;
           
            let location = scroll + 70;
           
            modalWindow.style.cssText = `top: ${location}px`;

        }


        let modalCancel = document.querySelector('.modal__icon');
        if (modalCancel) {
            modalCancel.addEventListener('click', function() {
                modalWindow.classList.remove('_active');
                modalWindow.style.cssText = `top: -300%`
                document.body.classList.remove('_lock');
            })
        }

    })
}