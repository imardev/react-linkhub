const formBtn = document.querySelector("#contactForm");

if (formBtn) {
  formBtn.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("Hola");
  });
}
