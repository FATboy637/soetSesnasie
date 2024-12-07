// Function to hide the loading spinner once the page is fully loaded


// Function to detect if the user is on a mobile device
function isMobileDevice() {
  return window.innerWidth <= 768; // You can adjust this value based on your breakpoints
}

// Function to shorten the description
function shortenDescription() {
  const descriptions = document.querySelectorAll(".cookie-description");

  descriptions.forEach((description) => {
    const originalText = description.innerHTML;
    const maxLength = 100; // Set the maximum length for mobile

    if (isMobileDevice() && originalText.length > maxLength) {
      const shortenedText = originalText.substring(0, maxLength) + "..."; // Add ellipsis if text exceeds max length
      description.innerHTML = shortenedText;
    } else if (!isMobileDevice()) {
      // Reset to the original text if the viewport is wider
      description.innerHTML = originalText;
    }
  });
}

// Function to adjust the top padding of the carousel
function adjustCarouselPadding() {
  const carousel = document.querySelector("#carouselExampleControls");
  if (carousel) {
    if (isMobileDevice()) {
      carousel.style.paddingTop = "30px"; // Add more top padding for mobile devices
    } else {
      carousel.style.paddingTop = "60px"; // Default padding for larger screens
    }
  }
}

// Function to trigger fade-in animation when the element is in view
function fadeInOnScroll() {
  const elementsToFadeIn = document.querySelectorAll(
    ".main-content, .cookie-display, .custom-footer, #carouselExampleControls, .chunky-cookies, .cookie-description, .footer-heading, .bakster, .phone-number, .email, .delivery"
  );

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Add the fade-in class when the element is in view
          entry.target.classList.add("fade-in");
          observer.unobserve(entry.target); // Stop observing the element after it has faded in
        }
      });
    },
    {
      threshold: 0.5, // Trigger when 50% of the element is in view
    }
  );

  // Observe each element
  elementsToFadeIn.forEach((element) => {
    observer.observe(element);
  });
}

window.addEventListener("load", function () {
  const loadingSpinner = document.getElementById("loadingSpinner");
  loadingSpinner.style.display = "none"; // Hide the spinner
});
// Call the functions on page load and resize
window.addEventListener("load", () => {
  shortenDescription();
  adjustCarouselPadding();
  fadeInOnScroll(); // Initialize fade-in on scroll
});
window.addEventListener("resize", () => {
  shortenDescription();
  adjustCarouselPadding();
});

