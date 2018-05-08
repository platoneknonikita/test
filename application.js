App.onLaunch = function(options) {
   function mySlideshow() {
      var images = ['https://e-oboi.com/wp-content/uploads/2017/10/stock-photo-picturesque-morning-view-of-plitvice-national-park-colorful-spring-scene-of-green-forest-with-pure-717874486.jpg.pagespeed.ce.X2rWFjZqSb.jpg', 'https://e-oboi.com/wp-content/uploads/2018/03/1268952669.jpg'];
      Slideshow.start(images, { 'showSettings': '0' });
   }
   mySlideshow();
}

