$(document).on("click", function (e) {
  var target = $(e.target);
  if (!target.closest(".navbar").length) {
    $(".navbar-collapse").collapse("hide");
  }
});

document.getElementById("loginBtn").onclick = function (event) {
  event.preventDefault(); // Prevent default anchor behavior
  $("#loginModal").modal("show");
};

document.getElementById("signupBtn").onclick = function (event) {
  event.preventDefault();
  $("#signupModal").modal("show");
};

document.querySelectorAll(".btn-buy").forEach((button) => {
  button.addEventListener("click", function () {
    const product = this.closest(".product");
    const productName = product.getAttribute("data-product-name");
    const productPrice = product.getAttribute("data-product-price");

    document.getElementById("modalProductName").textContent = productName;
    document.getElementById("modalProductPrice").textContent = productPrice;
    document.getElementById("totalPrice").textContent = productPrice;
  });
});

const increaseButton = document.getElementById("increaseQuantity");
const decreaseButton = document.getElementById("decreaseQuantity");
const quantityInput = document.getElementById("quantity");
const totalPrice = document.getElementById("totalPrice");

let pricePerUnit = 0;

increaseButton.addEventListener("click", function () {
  let currentQuantity = parseInt(quantityInput.value);
  currentQuantity++;
  quantityInput.value = currentQuantity;
  totalPrice.textContent = `${currentQuantity * pricePerUnit}`; 
});

decreaseButton.addEventListener("click", function () {
  let currentQuantity = parseInt(quantityInput.value);
  if (currentQuantity > 1) {
    currentQuantity--;
    quantityInput.value = currentQuantity;
    totalPrice.textContent = `${currentQuantity * pricePerUnit}`; 
  }
});

$("#buyNowModal").on("shown.bs.modal", function () {
  pricePerUnit = parseInt(
    document.getElementById("modalProductPrice").textContent
  );
  totalPrice.textContent = `${pricePerUnit}`; 
});

document
  .getElementById("placeOrderButton")
  .addEventListener("click", function () {
    const form = document.getElementById("orderForm");
    if (form.checkValidity()) {
      alert("This is a demo.");
      $("#buyNowModal").modal("hide");
    } else {
      form.reportValidity(); // Trigger validation
    }
  });

// Get the product details and set them in the modal when the "Shop Now" button is clicked
document.querySelectorAll(".shop-button").forEach((button) => {
  button.addEventListener("click", function () {
    const product = this.closest(".productt");
    const productName = product.getAttribute("data-product-name");
    const productPrice = product.getAttribute("data-product-price");

    document.getElementById("modalProductName").textContent = productName;
    document.getElementById("modalProductPrice").textContent = productPrice;
    document.getElementById("totalPrice").textContent = productPrice;
  });
});

document.querySelectorAll(".btn-cart").forEach((button) => {
  button.addEventListener("click", function () {
    const productElement = this.closest(".product");
    const productName = productElement.getAttribute("data-product-name");
    const productPrice = productElement.getAttribute("data-product-price");
    alert(
      `${productName} has been added to your cart at a price of ₹${productPrice}. This is demo`
    );
  });
});

window.addEventListener("load", function () {
  const homeLink = document.querySelector(".home-link");
  homeLink.classList.add("active");
});

document
  .querySelector('a[href="#home"]')
  .addEventListener("click", function (event) {
    event.preventDefault();

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

window.addEventListener("scroll", function () {
  const homeSection = document.getElementById("home");
  const preproductSection = document.getElementById("preproduct");
  const servicesSection = document.getElementById("services");
  const contactSection = document.getElementById("contact");
  const footerSection = document.getElementById("footer");
  const homeLink = document.querySelector('a[href="#home"]');
  const offset = document.querySelector("nav").offsetHeight;

  const homeTop = homeSection.getBoundingClientRect().top;
  const homeBottom = homeSection.getBoundingClientRect().bottom;
  const preproductTop = preproductSection.getBoundingClientRect().top;
  const preproductBottom = preproductSection.getBoundingClientRect().bottom;
  const servicesTop = servicesSection.getBoundingClientRect().top;
  const servicesBottom = servicesSection.getBoundingClientRect().bottom;
  const contactTop = contactSection.getBoundingClientRect().top;
  const contactBottom = contactSection.getBoundingClientRect().bottom;
  const footerTop = footerSection.getBoundingClientRect().top;
  const footerBottom = footerSection.getBoundingClientRect().bottom;

  if (
    (homeTop <= offset && homeBottom > offset) ||
    (preproductTop <= offset && preproductBottom > offset) ||
    (servicesTop <= offset && servicesBottom > offset) ||
    (contactTop <= offset && contactBottom > offset) ||
    (footerTop <= offset && footerBottom > offset)
  ) {
    homeLink.classList.add("active");
  } else {
    homeLink.classList.remove("active");
  }
});

// About Us

function navigateAbout(event) {
  event.preventDefault();
  const aboutSection = document.getElementById("about");
  const offset = document.querySelector("nav").offsetHeight;
  const sectionTop = aboutSection.offsetTop - offset;

  if (window.scrollY !== sectionTop) {
    window.scrollTo({
      top: sectionTop,
      behavior: "smooth",
    });
  }
}

document
  .querySelector('a[href="#about"]')
  .addEventListener("click", navigateAbout);

window.addEventListener("scroll", function () {
  const aboutSection = document.getElementById("about");
  const aboutLink = document.querySelector('a[href="#about"]');

  const offset = document.querySelector("nav").offsetHeight;
  const sectionTop = aboutSection.offsetTop - offset;
  const sectionBottom = sectionTop + aboutSection.offsetHeight;

  if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
    aboutLink.classList.add("active");
  } else {
    aboutLink.classList.remove("active");
  }
});

// Our Team

function navigateTeam(event) {
  event.preventDefault();
  const teamSection = document.getElementById("team");
  const offset = document.querySelector("nav").offsetHeight;
  const sectionTop = teamSection.offsetTop - offset;

  if (window.scrollY !== sectionTop) {
    window.scrollTo({
      top: sectionTop,
      behavior: "smooth",
    });
  }
}

document
  .querySelector('a[href="#team"]')
  .addEventListener("click", navigateTeam);

window.addEventListener("scroll", function () {
  const teamSection = document.getElementById("team");
  const teamLink = document.querySelector('a[href="#team"]');

  const offset = document.querySelector("nav").offsetHeight;
  const sectionTop = teamSection.offsetTop - offset;
  const sectionBottom = sectionTop + teamSection.offsetHeight;

  if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
    teamLink.classList.add("active");
  } else {
    teamLink.classList.remove("active");
  }
});

// Our Products

function navigateProduct(event) {
  event.preventDefault();
  const product1Section = document.getElementById("product1");
  const offset = document.querySelector("nav").offsetHeight;
  const sectionTop = product1Section.offsetTop - offset;

  if (window.scrollY !== sectionTop) {
    window.scrollTo({
      top: sectionTop,
      behavior: "smooth",
    });
  }
}

document
  .querySelector('a[href="#product1"]')
  .addEventListener("click", navigateProduct);

window.addEventListener("scroll", function () {
  const product1Section = document.getElementById("product1");
  const product1Link = document.querySelector('a[href="#product1"]');

  const offset = document.querySelector("nav").offsetHeight;
  const sectionTop = product1Section.offsetTop - offset;
  const sectionBottom = sectionTop + product1Section.offsetHeight;

  if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
    product1Link.classList.add("active");
  } else {
    product1Link.classList.remove("active");
  }
});

const srtop = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 1000,
  reset: false,
});

srtop.reveal(".hero .row", { delay: 200 });
srtop.reveal(".preproduct .h1", { delay: 200 });
srtop.reveal(".preproduct .p", { interval: 400 });
srtop.reveal(".preproduct .product-card", { interval: 500 });
srtop.reveal(".about-section", { delay: 400 });
srtop.reveal(".about .morebtn", { interval: 200 });
srtop.reveal(".team .container", { delay: 200 });
srtop.reveal(".team .teammorebtn", { interval: 400 });
srtop.reveal(".products .container", { delay: 200 });
srtop.reveal(".product1 .product-items", { interval: 300 });
srtop.reveal(".product1 .productmorebtn", { interval: 400 });
srtop.reveal(".services .serviceheading", { delay: 400 });
srtop.reveal(".services .container", { delay: 600 });
srtop.reveal(".contact .conheading", { delay: 400 });
srtop.reveal(".contact .container", { delay: 600 });
