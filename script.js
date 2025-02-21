document.addEventListener("DOMContentLoaded", () => {
  // --- Photo Slider Setup ---
  const slideImage = document.getElementById("slide-image");
  const prevArrow = document.querySelector(".arrow.prev");
  const nextArrow = document.querySelector(".arrow.next");
  
  // Array of photo URLs (modify or extend as needed)
  const slidePhotos = [
    "https://i.postimg.cc/Jn54D2Yp/p1.jpg",
    "https://i.postimg.cc/W3v14v8D/p2.jpg",
    "https://i.postimg.cc/cC11QBV0/p3.jpg",
    "https://i.postimg.cc/3wpw7RX5/p4.jpg",
    "https://i.postimg.cc/0jtkZJsm/p5.jpg",
    "https://i.postimg.cc/fW5RM19L/p6.jpg",
    "https://i.postimg.cc/sDXDxKYJ/p7.jpg",
    "https://i.postimg.cc/wTGxmJFY/p8.jpg",
    "https://i.postimg.cc/FHSvk670/p10.jpg",
    "https://i.postimg.cc/8csQpK2J/p11.jpg",
    "https://i.postimg.cc/8ChT9YGT/p12.jpg",
    "https://i.postimg.cc/qMz44qrb/p13.jpg",
    "https://i.postimg.cc/pdtHfBF4/p14.jpg",
    "https://i.postimg.cc/pTsMtb6M/p15.jpg",
    "https://i.postimg.cc/7hcvf14B/p16.jpg",
    "https://i.postimg.cc/Qx2GDq0C/p17.jpg",
    "https://i.postimg.cc/LsScY8dM/p18.jpg",
    "https://i.postimg.cc/J4DVSF3S/p19.jpg",
    "https://i.postimg.cc/Sxc0xzvr/p20.jpg",
    "https://i.postimg.cc/MHg4WW0N/p21.jpg",
    "https://i.postimg.cc/1t5bB75C/p23.jpg",
    "https://i.postimg.cc/j5gmF6Ds/p24.jpg",
    "https://i.postimg.cc/2y1MRqWn/p25.jpg"
  ];
  
  let currentSlideIndex = 0;
  
  // Function to update the slider image
  function updateSlide() {
    slideImage.src = slidePhotos[currentSlideIndex];
  }
  
  // Initialize the first slide
  updateSlide();
  
  // Event listeners for navigation arrows
  nextArrow.addEventListener("click", () => {
    currentSlideIndex = (currentSlideIndex + 1) % slidePhotos.length;
    updateSlide();
  });
  
  prevArrow.addEventListener("click", () => {
    currentSlideIndex = (currentSlideIndex - 1 + slidePhotos.length) % slidePhotos.length;
    updateSlide();
  });
  
  // --- Lightbox Functionality ---
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const closeBtn = document.querySelector(".close");
  
  // Open lightbox on slide click
  slideImage.addEventListener("click", () => {
    lightbox.style.display = "block";
    lightboxImg.src = slideImage.src;
  });
  
  // Close lightbox on close button click
  closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
  });
  
  // Close lightbox when clicking outside the image
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      lightbox.style.display = "none";
    }
  });
});
