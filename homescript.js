// Close the navbar when clicking outside
$(document).on("click", function (e) {
  var target = $(e.target);
  if (!target.closest(".navbar").length) {
    $(".navbar-collapse").collapse("hide");
  }
});

// // smooth scrolling
// $('a[href*="#"]').on("click", function (e) {
//   e.preventDefault();
//   $("html, body").animate(
//     {
//       scrollTop: $($(this).attr("href")).offset().top,
//     },
//     500,
//     "linear"
//   );
// });

/* ===== SCROLL REVEAL ANIMATION ===== */
const srtop = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 1000,
  reset: true,
});

/* SCROLL Home */
srtop.reveal(".hero .row", { interval: 200 });

/* SCROLL Preproduct */
srtop.reveal(".preproduct .h1", { interval: 200 });
srtop.reveal(".preproduct .p", { interval: 400 });
srtop.reveal(".preproduct .product-card", { interval: 500 });

