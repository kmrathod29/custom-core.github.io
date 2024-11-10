// Close the navbar when clicking outside
$(document).on("click", function (e) {
    var target = $(e.target);
    if (!target.closest(".navbar").length) {
      $(".navbar-collapse").collapse("hide");
    }
  });

  const srtop = ScrollReveal({
    origin: "top",
    distance: "80px",
    duration: 1000,
    reset: false,
  });

  srtop.reveal(".products .lg-title", { delay: 200 });
  srtop.reveal(".products .text-dark", { delay: 300 });
  srtop.reveal(".products .product-items", { delay: 500 });

  // Open the modal when the link is clicked
document.getElementById("loginBtn").onclick = function (event) {
  event.preventDefault(); // Prevent default anchor behavior
  $("#loginModal").modal("show");
};

// Open the Sign Up modal when the sign up link is clicked
document.getElementById('signupBtn').onclick = function(event) {
  event.preventDefault();
  $('#signupModal').modal('show');
};

// Get the product details and set them in the modal when the "Buy Now" button is clicked
document.querySelectorAll('.btn-buy').forEach(button => {
  button.addEventListener('click', function () {
      // Get the parent product details
      const product = this.closest('.product');
      const productName = product.getAttribute('data-product-name');
      const productPrice = product.getAttribute('data-product-price');
      
// Set product details in the modal
      document.getElementById('modalProductName').textContent = productName;
      document.getElementById('modalProductPrice').textContent = productPrice;
      document.getElementById('totalPrice').textContent = productPrice;
  });
});

// Quantity increase and decrease functionality
const increaseButton = document.getElementById('increaseQuantity');
const decreaseButton = document.getElementById('decreaseQuantity');
const quantityInput = document.getElementById('quantity');
const totalPrice = document.getElementById('totalPrice');

// Price per unit will be set dynamically based on the product price in the modal
let pricePerUnit = 0;

increaseButton.addEventListener('click', function () {
    let currentQuantity = parseInt(quantityInput.value);
    currentQuantity++;
    quantityInput.value = currentQuantity;
    totalPrice.textContent = `${currentQuantity * pricePerUnit}`; // Update total price with ₹ symbol
});

decreaseButton.addEventListener('click', function () {
    let currentQuantity = parseInt(quantityInput.value);
    if (currentQuantity > 1) { // Prevent quantity from going below 1
        currentQuantity--;
        quantityInput.value = currentQuantity;
        totalPrice.textContent = `${currentQuantity * pricePerUnit}`; // Update total price with ₹ symbol
    }
});

// Update pricePerUnit when the modal is shown
$('#buyNowModal').on('shown.bs.modal', function () {
    pricePerUnit = parseInt(document.getElementById('modalProductPrice').textContent);
    totalPrice.textContent = `${pricePerUnit}`; // Set the initial total price when modal opens
});

// Form validation and order confirmation
document.getElementById('placeOrderButton').addEventListener('click', function () {
  const form = document.getElementById('orderForm');
  if (form.checkValidity()) {
      // Show demo message if form is valid
      alert('This is a demo. Your order has been placed.');
      $('#buyNowModal').modal('hide');
  } else {
      form.reportValidity(); // Trigger validation
  }
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