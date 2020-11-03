/* eslint-disable no-undef */
  (($)=> {
    $(document).ready(function(){
        $(".owl-carousel").owlCarousel({
          loop:true,
          margin:10,
          nav:false,
          responsive:{
              0:{
                  items:1
              },
              340:{
                 items:2
              },
              600:{
                  items:3
              },
              1000:{
                  items:5
              }
              ,
              1286:{
                  items:5
              }
          }
        });
    });
}) (jQuery);
