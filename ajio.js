
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

