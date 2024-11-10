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

srtop.reveal(".team .heading", { delay: 200 });
srtop.reveal(".team .row", { delay: 500 });

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
