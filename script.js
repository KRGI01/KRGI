document.addEventListener("DOMContentLoaded", () => {
    // Fade-in effect for photos using Intersection Observer
    const photos = document.querySelectorAll(".photo");
  
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1
    };
  
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in");
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);
  
    photos.forEach(photo => {
      observer.observe(photo);
    });
  
    // Lightbox functionality
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const closeBtn = document.querySelector(".close");
  
    photos.forEach(photo => {
      photo.addEventListener("click", () => {
        lightbox.style.display = "block";
        lightboxImg.src = photo.src;
      });
    });
  
    // Close the lightbox when clicking the close button
    closeBtn.addEventListener("click", () => {
      lightbox.style.display = "none";
    });
  
    // Also close when clicking outside the image in the modal
    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) {
        lightbox.style.display = "none";
      }
    });
  });
  
