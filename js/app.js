const firebaseConfig = {
    apiKey: "AIzaSyBcZ_Yjb_atoNoR5tVG_JB_yW5kP5XfbRI",
    authDomain: "jmartweb-79b7e.firebaseapp.com",
    databaseURL: "https://jmartweb-79b7e.firebaseio.com",
    projectId: "jmartweb-79b7e",
    storageBucket: "jmartweb-79b7e.appspot.com",
    messagingSenderId: "360168469882",
    appId: "1:360168469882:web:814f1e6b8a0565dba312c3"
  };
  firebase.initializeApp(firebaseConfig);

  // Get a reference to the storage service, which is used to create references in your storage bucket
  var storage = firebase.storage();

  var html = '<div class="col-lg-4 col-sm-6">
  <a class="portfolio-box" href="img/portfolio/fullsize/9.jpg">
    <img class="img-fluid" src="img/portfolio/thumbnails/9.jpg" alt="">
    <div class="portfolio-box-caption p-3">
      <div class="project-category text-white-50">
        Impressos/Design
      </div>
      <div class="project-name">
        Dr. Enedy
      </div>
    </div>
  </a>
</div>'