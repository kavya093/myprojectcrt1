
  let currentIndex = 0;
  const slides = document.querySelectorAll('.slide');

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove('active');
      if (i === index) {
        slide.classList.add('active');
      }
    });
  }

  function startSlideShow() {
    showSlide(currentIndex);
    currentIndex = (currentIndex + 1) % slides.length;
  }

  // Initial call and set interval
  showSlide(currentIndex);
  setInterval(startSlideShow, 3000); // changes every 3 seconds
// function addToCart(name, price, image) {
//   let cart = JSON.parse(localStorage.getItem("cart")) || [];

//   cart.push({ name, price, image });
//   localStorage.setItem("cart", JSON.stringify(cart));
//   // Redirect to cart page
//   window.location.href = "cart.html";
// }
function addToCart(productName, price, imageSrc) {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push({ name: productName, price: price, image: imageSrc });
    localStorage.setItem("cart", JSON.stringify(cart));
    window.location.href = "cart.html";
}


