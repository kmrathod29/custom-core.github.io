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

srtop.reveal(".about .heading", { delay: 200 });
srtop.reveal(".about .col-md-8", { delay: 400 });
srtop.reveal(".about img", { delay: 400 });
srtop.reveal(".about .mt-5", { delay: 600 });

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
