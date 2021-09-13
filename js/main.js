// $(".carousel_se_01_carousel").owlCarousel({
//     autoplay:true,
//     autoplayhoverpause:true,
//     autoplaytimeout:100,
//     items:3,
//     nav: true,
//     loop: true,
//     lazyLoad:true,
//     margin: 5,
//     padding: 5,
//     stagePadding: 5,
//     responsive: {
//         0: {
//             items: 1,
//             dots: false
//         },
//         485: {
//             items: 2,
//             dots: false
//         },
//         728: {
//             items:3,
//             dots: false
//         },
//         960: {
//             items: 3,
//             dots: false
//         },
//         1200: {
//             items: 3,
//             dots: true
//         }
//     }
// });


/*Require flicky lib 
https://unpkg.com/flickity@2/dist/flickity.pkgd.min.js
*/



   $(document).ready(function () {
    $(".carousel_se_01_carousel").owlCarousel({
    autoplay:true,
    autoplayhoverpause:true,
    autoplaytimeout:100,
    items:3,
    // nav: true,
    loop: true,
    lazyLoad:true,
    margin: 5,
    padding: 5,
    stagePadding: 5,
    responsive: {
        0: {
            items: 1,
            dots: false
        },
        485: {
            items: 2,
            dots: false
        },
        728: {
            items:3,
            dots: false
        },
        960: {
            items: 3,
            dots: false
        },
        1200: {
            items: 3,
            dots: true
        }
    }
    });
  });

  $(document).ready(function () {
    $(".carousel_se_02_carousel").owlCarousel({
      // autoplay:true,
      // autoplayhoverpause:true,
      // autoplaytimeout:100,
        items:1,
        video:true,
        lazyLoad:true,
        center:true,
        responsive:{
            480:{
                items:1
            },
            600:{
                items:1
            }
        }
    });
  });