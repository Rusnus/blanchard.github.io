window.addEventListener('DOMContentLoaded', function () {


  document.querySelectorAll('.accordion-item__button').forEach(function (tabsbtn) {
    tabsbtn.addEventListener('click', function (event) {
      const path = event.currentTarget.dataset.path
      const link = event.currentTarget.dataset.path

      document.querySelectorAll('.catalog-data').forEach(function (tabContent) {
        tabContent.classList.remove('catalog-data-active')
      })
      document.querySelector(`[data-target="${path}"]`).classList.add("catalog-data-active")

      document.querySelectorAll('.accordion-item__button-active').forEach(function (Content) {
        Content.classList.remove('accordion-item__button-active')
      })
      document.querySelector(`[data-path="${link}"]`).classList.add("accordion-item__button-active")
    })
  })

  const swiper = new Swiper('.swiper', {
    loop: true,
    // autoplay: {
    //   delay: 3000,
    // },
  });

  const swiper2 = new Swiper('.swiper2', {
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".gallery-swiper-button-next",
      prevEl: ".gallery-swiper-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 10,
        slidesPerGroup: 1,
      },

      425: {
        slidesPerView: 2,
        spaceBetween: 34,
        slidesPerGroup: 2,
      },
      1025: {
        slidesPerView: 3,
        spaceBetween: 57,
        slidesPerGroup: 3,
      }
    },
  });

  const swiper3 = new Swiper('.swiper3', {
    loop: false,
    navigation: {
      nextEl: ".developmets-swiper-button-next",
      prevEl: ".developmets-swiper-button-prev",
    },
    pagination: {
      el: '.swiper-pagination-dev',
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 10,
      },

      550: {
        slidesPerView: 2,
        spaceBetween: 34,
      },
      920: {
        slidesPerView: 3,
        spaceBetween: 27,
        slidesPerGroup: 2,
      },
      1025: {
        slidesPerView: 3,
        spaceBetween: 47,
      }
    },
  });

  const swiper4 = new Swiper('.swiper-4', {
    loop: true,
    navigation: {
      nextEl: ".project-swiper-button-next",
      prevEl: ".project-swiper-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 10,
      },

      500: {
        slidesPerView: 2,
        spaceBetween: 34,
      },
      920: {
        slidesPerView: 2,
        spaceBetween: 50,

      },
      1025: {
        slidesPerView: 3,
        spaceBetween: 48,
      }
    },
  });

  const miltiDefault = () => {
    const elements = document.querySelectorAll('.select');
    elements.forEach(el => {
      const choices = new Choices(el, {
        searchEnabled: false,
        itemSelectText: '',
        sorter: () => {},
      });
    });
  }
  miltiDefault();



  const button = document.querySelectorAll('.item__button');
  const drop = document.querySelectorAll('.dropdown-list')

  button.forEach(el => {
    el.addEventListener('click', (e) => {
      drop.forEach(el => {
        el.classList.remove(('dropdown--active'))
      })
      e.currentTarget.closest('li').querySelector('.dropdown').classList.toggle('dropdown--active');
    });
  });

  document.addEventListener('click', (e) => {
    console.log(e.target)
    if (!e.target.classList.contains('dropdown-list') && !e.target.classList.contains('item__button')) {
      drop.forEach(el => {
        el.classList.remove(('dropdown--active'))
      })
    }
  });

  document.querySelector(".nav__burger").addEventListener('click', function () {
    document.querySelector('.nav__menu').classList.toggle('burger-menu--active')
  })
  document.querySelector(".burger-close").addEventListener('click', function () {
    document.querySelector('.nav__menu').classList.toggle('burger-menu--active')
  })

  document.querySelector(".nav__search-btn").addEventListener('click', function () {
    document.querySelector('.search').classList.toggle('search--active')
  })
  document.querySelector(".search__close").addEventListener('click', function () {
    document.querySelector('.search').classList.toggle('search--active')
  })

  const element = document.querySelector('.gallery-block__list');
  const choices = new Choices(element, {
    searchEnabled: false,
    itemSelectText: '',
    sorter: () => {},
  });

  $(function () {
    $("#accordion").accordion({
      active: 0,
      collapsible: true,

    });
  });

  tippy('.project__tooltip', {
    theme: 'tooltip',
    maxWidth: 300,
  });


  ymaps.ready(init);

  function init() {
    const mapElem = document.querySelector('#map');
    const myMap = new ymaps.Map(
      "map", {
        center: [55.760442, 37.615007],
        zoom: 14,
        controls: ['geolocationControl', 'zoomControl']
      }, {
        suppressMapOpenBlock: true,
        geolocationControlSize: "large",
        geolocationControlPosition: {
          top: "355px",
          right: "11px"
        },
        geolocationControlFloat: 'none',
        zoomControlSize: "small",
        zoomControlFloat: "none",
        zoomControlPosition: {
          top: "261px",
          right: "11px",
        }
      }
    );

    myMap.behaviors.disable('scrollZoom');

    const myPlacemark = new ymaps.Placemark(
      [55.760442, 37.615007], {}, {
        iconLayout: "default#image",
        iconImageHref: "https://img.icons8.com/office/2x/one-free.png",
        iconImageSize: [40, 40],
        iconImageOffset: [-20, -40],
      }
    );

    myMap.geoObjects.add(myPlacemark);
    myMap.container.fitToViewport();
  }

  document.querySelectorAll('.js-scroll-link').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();

      const href = this.getAttribute('href').substring(1);
      const scrollTarget = document.getElementById(href);
      const elementPosition = scrollTarget.getBoundingClientRect().top;

      window.scrollBy({
        top: elementPosition,
        behavior: 'smooth'
      });
    });
  });

  var selector = document.getElementById("tel");

  var im = new Inputmask("+7(999)-999-99-99");
  im.mask(selector);

  const validate = new window.JustValidate('#form');

  validate
    .addField('#name', [{
        rule: 'required',
        errorMessage: 'Обязательное поле',
        errorLabelStyle: {
          color: 'black',
        },
      },
      {
        rule: 'minLength',
        value: 3,
        errorMessage: 'Имя слишком короткое'
      },
      {
        rule: 'maxLength',
        value: 12,
        errorMessage: 'Имя слишком длинное'
      },
      {
        rule: 'customRegexp',
        value: '^[A-zА-яЁё]+$',
        errorMessage: 'Недопустимый формат'
      },
    ])

    .addField('#tel', [{
      rule: 'required',
      errorMessage: 'Обязательное поле'
    }, ])
})