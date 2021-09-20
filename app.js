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

// var slideIndex = 1;
// showDivs(slideIndex);

// function plusDivs(n) {
//   showDivs(slideIndex += n);
//   changeTime = 0;
// }
// function showDivs(n) {
//   var i;
//   var x = document.getElementsByClassName("slider-img");
//   if (n > x.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = x.length} ;
  
//   // for (i = 0; i < x.length; i++) {
//   //   x[i].style.display = none;
//   // }
//   // x[slideIndex-1].style.display = "block";
// }

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
      console.log(timeDelay)
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
  setTimeout(() => {$('.slider__buy-btn').style.opacity = 0;}, 10);
  setTimeout(() => {$('.slider__buy-btn').classList.toggle(`flip-button`);}, 1000);
  setTimeout(() => {$('.slider__buy-btn').style.opacity = 1;}, 1000);

  $('.buy-label').classList.toggle(`opacity-animation`);
  $('.buy-label').style['animation-delay'] = 0 + 's';
  setTimeout(() => {$('.buy-label').style.opacity = 0;}, 200);
  setTimeout(() => {$('.buy-label').classList.toggle(`opacity-animation`);}, 0);
  setTimeout(() => {$('.buy-label').style.opacity = 1;}, 1000);

  $('.buy-btn:nth-child(1)').classList.toggle('active');
  $('.buy-btn:nth-child(2)').classList.toggle('active');
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


// Animation

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

// Text-heading
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