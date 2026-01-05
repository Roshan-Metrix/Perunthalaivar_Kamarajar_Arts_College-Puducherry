// // Main JavaScript File (index.html)

// document.addEventListener("DOMContentLoaded", () => {
//   // --- DOM Elements ---
//   const mobileMenuButton = document.getElementById("mobile-menu-button");
//   const mobileMenu = document.getElementById("mobile-menu");
//   const slidesWrapper = document.getElementById("slides-wrapper");
//   const prevButton = document.getElementById("prev-slide");
//   const nextButton = document.getElementById("next-slide");
//   const dotsContainer = document.getElementById("slider-dots");

//   // --- State ---
//   const heroImages = [
//     { url: "../images/clg_front_view.jpg"},
//     { url: "../images/Flag.jpg" },
//     { url: "../images/clg_image-1.jpg" },
//     { url: "../images/clg_image-2.jpg" },
//     { url: "../images/clg_image-3.jpg" },
//     { url: "../images/front_view_2.jpg" },
//   ];
//   let currentSlide = 0;
//   let slideInterval;

//   // --- Slider Logic ---
//   function buildSlider() {
//     slidesWrapper.innerHTML = "";
//     heroImages.forEach((img) => {
//       const slide = document.createElement("div");
//       slide.className = "hero-slide absolute inset-0 opacity-0 z-0";
//       slide.style.backgroundImage = `url('${img.url}')`;
//       slidesWrapper.appendChild(slide);
//     });
//     initializeSlider();
//   }

//   function initializeSlider() {
//     dotsContainer.innerHTML = "";
//     clearInterval(slideInterval);

//     const slides = slidesWrapper.querySelectorAll(".hero-slide");
//     if (slides.length === 0) {
//       slidesWrapper.innerHTML = `<div class="hero-slide absolute inset-0 opacity-100 z-0" style="background-image: url('https://placehold.co/1920x1080/334155/FFFFFF?text=Welcome');"></div>`;
//       return;
//     }

//     slides.forEach((slide) => {
//       slide.classList.remove("opacity-100", "z-10");
//       slide.classList.add("opacity-0", "z-0");
//     });

//     currentSlide = 0;
//     if (slides[currentSlide]) {
//       slides[currentSlide].classList.add("opacity-100", "z-10");
//       slides[currentSlide].classList.remove("opacity-0", "z-0");
//     }

//     slides.forEach((_, i) => {
//       const dot = document.createElement("button");
//       dot.className = "w-3 h-3 rounded-full bg-white/50 transition";
//       dot.setAttribute("aria-label", `Go to slide ${i + 1}`);
//       if (i === 0) dot.classList.add("bg-white");
//       dotsContainer.appendChild(dot);
//       dot.addEventListener("click", () => {
//         goToSlide(i);
//         resetInterval();
//       });
//     });

//     startInterval();
//   }

//   const dots = () => dotsContainer.querySelectorAll("button");

//   function goToSlide(slideIndex) {
//     const slides = slidesWrapper.querySelectorAll(".hero-slide");
//     if (!slides.length || !slides[currentSlide] || !dots()[currentSlide])
//       return;

//     slides[currentSlide].classList.remove("opacity-100", "z-10");
//     slides[currentSlide].classList.add("opacity-0", "z-0");
//     dots()[currentSlide].classList.remove("bg-white");
//     dots()[currentSlide].classList.add("bg-white/50");

//     currentSlide = slideIndex;

//     slides[currentSlide].classList.remove("opacity-0", "z-0");
//     slides[currentSlide].classList.add("opacity-100", "z-10");
//     dots()[currentSlide].classList.add("bg-white");
//     dots()[currentSlide].classList.remove("bg-white/50");
//   }

//   function next() {
//     if (heroImages.length === 0) return;
//     const nextIndex = (currentSlide + 1) % heroImages.length;
//     goToSlide(nextIndex);
//   }

//   function prev() {
//     if (heroImages.length === 0) return;
//     const prevIndex =
//       (currentSlide - 1 + heroImages.length) % heroImages.length;
//     goToSlide(prevIndex);
//   }

//   function startInterval() {
//     if (heroImages.length > 1) {
//       slideInterval = setInterval(next, 4000);
//     }
//   }

//   function resetInterval() {
//     clearInterval(slideInterval);
//     startInterval();
//   }

//   // --- Event Listeners ---
//   mobileMenuButton.addEventListener("click", () => {
//     mobileMenu.classList.toggle("hidden");
//   });

//   nextButton.addEventListener("click", () => {
//     next();
//     resetInterval();
//   });
//   prevButton.addEventListener("click", () => {
//     prev();
//     resetInterval();
//   });
//   const heroSection = document.getElementById("hero-container");
//   heroSection.addEventListener("mouseenter", () =>
//     clearInterval(slideInterval)
//   );
//   heroSection.addEventListener("mouseleave", startInterval);

//   // --- Initial Load ---
//   const observer = new IntersectionObserver(
//     (entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add("reveal-visible");
//         }
//       });
//     },
//     { threshold: 0.1 }
//   );
//   document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

//   buildSlider();
// });



// Main JavaScript File (script.js)

document.addEventListener("DOMContentLoaded", () => {
  // --- DOM Elements ---
  const mobileMenuButton = document.getElementById("mobile-menu-button");
  const mobileMenu = document.getElementById("mobile-menu");
  const slidesWrapper = document.getElementById("slides-wrapper");
  const prevButton = document.getElementById("prev-slide");
  const nextButton = document.getElementById("next-slide");
  const dotsContainer = document.getElementById("slider-dots");
  const heroSection = document.getElementById("hero-container");

  if (!slidesWrapper || !dotsContainer) {
    console.error("Slider elements missing");
    return;
  }

  // --- State ---
  const heroImages = [
    { url: "../images/clg_front_view.jpg" },
    { url: "../images/Flag.jpg" },
    { url: "../images/clg_image-1.jpg" },
    { url: "../images/clg_image-2.jpg" },
    { url: "../images/clg_image-3.jpg" },
    { url: "../images/front_view_2.jpg" },
  ];

  let currentSlide = 0;
  let slideInterval = null;
  let dots = [];

  // --- Slider Logic ---
  function buildSlider() {
    slidesWrapper.innerHTML = "";

    heroImages.forEach((img) => {
      const slide = document.createElement("div");
      slide.className =
        "hero-slide absolute inset-0 opacity-0 z-0 transition-opacity duration-700";
      slide.style.backgroundImage = `url('${img.url}')`;
      slide.style.backgroundSize = "cover";
      slide.style.backgroundPosition = "center";
      slidesWrapper.appendChild(slide);
    });

    initializeSlider();
  }

  function initializeSlider() {
    clearInterval(slideInterval);
    dotsContainer.innerHTML = "";
    dots = [];

    const slides = slidesWrapper.querySelectorAll(".hero-slide");
    if (!slides.length) return;

    slides.forEach((slide) => {
      slide.classList.remove("opacity-100", "z-10");
      slide.classList.add("opacity-0", "z-0");
    });

    currentSlide = 0;
    activateSlide(currentSlide);

    slides.forEach((_, i) => {
      const dot = document.createElement("button");
      dot.className =
        "w-3 h-3 rounded-full bg-white/50 transition focus:outline-none";
      dot.setAttribute("aria-label", `Go to slide ${i + 1}`);

      if (i === 0) dot.classList.add("bg-white");

      dot.addEventListener("click", () => {
        goToSlide(i);
        resetInterval();
      });

      dotsContainer.appendChild(dot);
      dots.push(dot);
    });

    startInterval();
  }

  function activateSlide(index) {
    const slides = slidesWrapper.querySelectorAll(".hero-slide");
    if (!slides[index]) return;

    slides[index].classList.remove("opacity-0", "z-0");
    slides[index].classList.add("opacity-100", "z-10");

    if (dots[index]) {
      dots[index].classList.add("bg-white");
      dots[index].classList.remove("bg-white/50");
    }
  }

  function deactivateSlide(index) {
    const slides = slidesWrapper.querySelectorAll(".hero-slide");
    if (!slides[index]) return;

    slides[index].classList.remove("opacity-100", "z-10");
    slides[index].classList.add("opacity-0", "z-0");

    if (dots[index]) {
      dots[index].classList.remove("bg-white");
      dots[index].classList.add("bg-white/50");
    }
  }

  function goToSlide(index) {
    const slides = slidesWrapper.querySelectorAll(".hero-slide");

    if (
      index === currentSlide ||
      !slides[index] ||
      !slides[currentSlide]
    ) {
      return;
    }

    deactivateSlide(currentSlide);
    currentSlide = index;
    activateSlide(currentSlide);
  }

  function next() {
    const slides = slidesWrapper.querySelectorAll(".hero-slide");
    if (slides.length < 2) return;

    goToSlide((currentSlide + 1) % slides.length);
  }

  function prev() {
    const slides = slidesWrapper.querySelectorAll(".hero-slide");
    if (slides.length < 2) return;

    goToSlide((currentSlide - 1 + slides.length) % slides.length);
  }

  function startInterval() {
    clearInterval(slideInterval);
    slideInterval = setInterval(next, 4000);
  }

  function resetInterval() {
    startInterval();
  }

  // --- Event Listeners ---
  mobileMenuButton?.addEventListener("click", () => {
    mobileMenu?.classList.toggle("hidden");
  });

  nextButton?.addEventListener("click", () => {
    next();
    resetInterval();
  });

  prevButton?.addEventListener("click", () => {
    prev();
    resetInterval();
  });

  heroSection?.addEventListener("mouseenter", () =>
    clearInterval(slideInterval)
  );

  heroSection?.addEventListener("mouseleave", startInterval);

  // --- Reveal Animation ---
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal-visible");
        }
      });
    },
    { threshold: 0.1 }
  );

  document.querySelectorAll(".reveal").forEach((el) =>
    observer.observe(el)
  );

  // --- Init ---
  buildSlider();
});
