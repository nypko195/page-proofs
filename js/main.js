const burger = document.querySelector('.menu__burger'),
      burgerClick = document.querySelector('.menu__burger-btn'),
      menuLeft = document.querySelector('.menu__left'),
      menuRight = document.querySelector('.menu__right'),
      content = document.querySelector('body'),
      blockNews = document.querySelector('.news');

burger.addEventListener('click', (e) => {
   if(e.target === burger || e.target === burgerClick) {
      burger.classList.toggle('active');
      menuLeft.classList.toggle('active');
      menuRight.classList.toggle('active');
      content.classList.toggle('lock');
      blockNews.classList.toggle('active');
   }
})