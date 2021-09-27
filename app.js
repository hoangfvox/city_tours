const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);



// Thêm dấu mũi tên 
var Subnav = $$('.sub-nav');
Array.from(Subnav).map(function(item, index) {
    let SubnavLi = item.querySelectorAll('li');
    Array.from(SubnavLi).map(function(item, index) {
        if (item.querySelector('ul')) {
            item.classList.add('right-arrow');
        }
    })
})


// Next Slider
var arrowBtn = () => {
  $('.move-img').classList.toggle('fade-img');
  $('.move-img').classList.toggle('appear-img');
  changeTime = 0;
  var timeDelay = 0;
  
  Array.from($$('.text-heading__item')).map(function(item, index) {
    timeDelay = 500;
    item.classList.toggle(`heading-${index + 1}-fade`);
    setTimeout(() => {
      item.classList.toggle(`heading-${index + 1}-fade`);
  }, timeDelay);
  });
  timeDelay = 0;
  Array.from($$('.text-content li')).map(function(item) {
    item.classList.toggle('content-fadein');
    item.style['animation-delay'] = 0 + 's';
    setTimeout(() => {item.style.opacity = 0;}, 200);

    setTimeout(() => { 
      timeDelay += 100;
      item.style['animation-delay'] = (timeDelay/1000) + 's';
    }, 500);
    setTimeout(() => { 
      item.classList.toggle('content-fadein');
    }, 500);
    setTimeout(() => {item.style.opacity = 1;}, 1000);
  });
  
  Array.from($$('.text-content li')).map(function(item, index) {
  });

  $('.slider__buy-btn').classList.toggle(`flip-button`);
  $('.slider__buy-btn').style['animation-delay'] = 0 + 's';
  $('.slider__buy-btn').classList.add(`fade-in__btn`);
  setTimeout(() => {
    $('.slider__buy-btn').classList.toggle(`flip-button`);
    $('.slider__buy-btn').classList.toggle(`fade-in__btn`);
  }, 800);

  $('.buy-label').classList.toggle(`appear-in__btn`);
  $('.buy-label').style['animation-delay'] = 0 + 's';
  // setTimeout(() => {$('.buy-label').style.opacity = 0;}, 1000);
  setTimeout(() => {$('.buy-label').classList.toggle(`appear-in__btn`);}, 1000);
  // setTimeout(() => {$('.buy-label').style.opacity = 1;}, 1000);

  setTimeout(() => {
    $('.buy-btn:nth-child(1)').classList.toggle('active');
    $('.buy-btn:nth-child(2)').classList.toggle('active');
  }, 1000);
};

// Reload không có hình tĩnh
setTimeout(() => {
  $('.inert-img').style.opacity = 1;
}, 1000);

// 10s chuyển hình
var changeSlider = $('.change-slider');
var changeTime = 0;
setInterval(() => {
  if (changeTime > 100) {
    arrowBtn();
  }
  changeTime += 0.1;
  changeSlider.style.width = changeTime + '%';
}, 10);


// Slider Animation
var sliderTextAnimation = () => {
  var timeDelay = 0.1;
  for (let i = 0; i < 6; i++) {
    timeDelay += 0.2;
    switch (i) {
      case 0:
        // setTimeout(() => {
        //   $('.text-heading__item:nth-child(2)').style.opacity = 1;
        // }, timeDelay * 1000);
        break;
      case 1:
      case 2:
      case 3:
        $(`.text-content li:nth-child(${i})`).style['animation-delay'] = timeDelay - 0.1 + 's';
        setTimeout(() => {
          $(`.text-content li:nth-child(${i})`).style.opacity = 1;
        }, timeDelay * 1000);
        break;
      case 4:
        $('.slider__buy-btn').style['animation-delay'] = timeDelay - 0.1 + 's';
        setTimeout(() => {
          $('.slider__buy-btn').style.opacity = 1;
        }, timeDelay * 1000);
        break;
      case 5:
        $('.buy-label').style['animation-delay'] = timeDelay - 0.1 + 's';
        setTimeout(() => {
          $('.buy-label').style.opacity = 1;
        }, timeDelay * 1000);
        break;
    }
  }
}
sliderTextAnimation();

// Text-heading animation
var element = $('.text-heading');
var angle = 0;
var x = 0;
var y = 0;
var w = 4;
var h = 4;

function ballCircle() {
    x = w - w * Math.cos(angle * Math.PI / 180);
    y = h + h * Math.sin(angle * Math.PI / 180);

    element.style.left = x + 'px';
    element.style.top = y + 'px';

    angle++;
    if (angle > 360) {
        angle = 0;
    }
    setTimeout(ballCircle,2);
}
ballCircle();

// Tours price color
const gradientColor = [
  'linear-gradient(to right, #ffd205 0%, #ff9b05 100%)',
  'linear-gradient(to right, #f76570 0%, #f78d65 100%)',
  'linear-gradient(to right, #ba71da 0%, #da717b 100%)',
  'linear-gradient(to right, #14b9d5 0%, #14d5b1 100%)',
];
var tourPrice = $$('.tour-price');
Array.from(tourPrice).map(function(item, index) {
  item.style['background'] = gradientColor[index];
});


// Our Services
const serviceColor = [
  '#1bbc9b',
  '#ff6868',
  '#14b9d5',
  'var(--primary-color)',
  '#c755da',
  '#ff6868',
];

var servicesItemValue = [
  {
    img: './assets/img/ico-00.png',
    h1: 'Insurance',
    btnColor: serviceColor[0],
  },
  {
    img: './assets/img/ico-01.png',
    h1: 'Medical Care',
    btnColor: serviceColor[1],
  },
  {
    img: './assets/img/ico-02.png',
    h1: 'Meals Included',
    btnColor: serviceColor[2],
  },
  {
    img: './assets/img/ico-03.png',
    h1: 'Accessibility',
    btnColor: serviceColor[3],
  },
  {
    img: './assets/img/ico-04.png',
    h1: 'Customer Care',
    btnColor: serviceColor[4],
  },
  {
    img: './assets/img/ico-05.png',
    h1: 'Shuttle Included',
    btnColor: serviceColor[5],
  },
]

var servicesItem = Array.from($$('.services-item'));
const htmls = servicesItemValue.map((item, index) => {
  const html = `
  <img src="${item.img}" alt="" class="service-icon">
  <div class="service-content white-text">
      <h1>${item.h1}</h1>
      <p>Lorem ipsum dolor sit amet conse ctetur adip iscing elit Proin rhonc us urna dictum.</p>
      <a href="" class="btn" style="background-color: ${item.btnColor}">View More</a>
  </div>
  `
  servicesItem[index].innerHTML = html;
})
// servicesItem[index].innerHTML = htmls.join('');
