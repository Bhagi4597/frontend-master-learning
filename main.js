console.log("Hello Frontend! Your script is working ✅");

// Add a small interaction
document.addEventListener("DOMContentLoaded", () => {
  const hero = document.querySelector(".hero");
  hero.addEventListener("click", () => {
    alert("You clicked the Hero section!");
  });
});
