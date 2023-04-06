let menu = document.querySelector('.menu-icon');
let navbar = document.querySelector('.menu');

// menu.onclick = () => {
//     navbar.classList.toggle('active');
//     menu.classList.toggle('move');
//     bell.classList.remove('active');
// }

//Notification
// let bell = document.querySelector('.notification');


// document.querySelector('#bell-icon').onclick = () =>{
//     bell.classList.toggle('active');
// }


//swiper
var swiper = new Swiper(".dev-content", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay:{
        delay:3000,
        disableOnInteraction: false,
    },
    breakpoints: {
      "@0.00": {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      "@0.75": {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      "@1.00": {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      "@1.50": {
        slidesPerView: 3,
        spaceBetween: 50,
      },
    },
  });


 //contact
//  function sendEmail(){
//   Email.send({
//     SecureToken : "C973D7AD-F097-4B95-91F4-40ABC5567812",
//     Host : "smtp.elasticemail.com",
//     Username : "ryanjayantonio305@gmail.com",
//     Password : "sinulid0500",
//     To : 'ryanjayantonio305@gmail.com',
//     From : document.getElementById("email").value,
//     Subject : "This is the New Contact Form Inquiry",
//     Body : "And this is the body"
//   }).then(
//       message => alert(message)
//     );
//  }

 //popup image

 document.querySelectorAll('.img-gallery img').forEach(image => {
  image.onclick = () =>{
    document.querySelector('.popup-img').style.display = 'block';
    document.querySelector('.popup-img img').src = image.getAttribute('src');
  }
 });

 document.querySelector('.popup-img span').onclick = () =>{
  document.querySelector('.popup-img').style.display = 'none';
 }