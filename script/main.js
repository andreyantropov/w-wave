document.addEventListener("DOMContentLoaded", () => {
  const toTopBtn = document.querySelector(".to-top");

  window.onscroll = () => {
    if (
      document.body.scrollTop > 100 ||
      document.documentElement.scrollTop > 100
    ) {
      document.querySelector(".to-top").style.display = "block";
    } else {
      document.querySelector(".to-top").style.display = "none";
    }
  };

  toTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});
