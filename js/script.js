function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  const btn = document.getElementById("subir-btn");
btn.addEventListener("click", scrollToTop);
