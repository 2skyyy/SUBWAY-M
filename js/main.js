var swiper = new Swiper(".mySwiper", {
   spaceBetween: 30,
   centeredSlides: true,
   autoplay: {
      delay: 2500,
      disableOnInteraction: false,
   },
   pagination: {
      el: ".swiper-pagination",
      clickable: true,
   },
   navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
   },
});

//side

const sideWrap = document.querySelector('.side_wrap');
const navBar = document.querySelector('.navBar');
const closed = document.querySelector('.closed');

navBar.onclick = () => {
   sideWrap.classList.add('active')
}
closed.onclick = () => {
   sideWrap.classList.remove('active')
}

let targetMainMenu = $("a.nav-link");

targetMainMenu.click(function () {
   var targetSubMenu = $(this).next("ul.nav-item");
   for (var i = 0; i < targetMainMenu.length; i++) {
      if ($(this).text() == targetMainMenu[i].innerText) {

         if (targetSubMenu.is(":visible")) {
            targetSubMenu.slideUp();
         } else {
            targetSubMenu.slideDown();
         }
      } else {
         $(targetMainMenu[i]).next("ul.nav-item").css("display", "none");
      }
   }
});


