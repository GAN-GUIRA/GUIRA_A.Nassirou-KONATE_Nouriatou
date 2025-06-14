
const texts = [
  "Bienvenue au Burkina Faso",
  "Découvrez des paysages à couper le souffle",
  "Explorez les merveilles culturelles du pays"
];

let i = 0;
setInterval(() => {
  document.getElementById("mainText").textContent = texts[i];
  i = (i + 1) % texts.length;
}, 4000);

function openImage(src) {
  document.getElementById("lightbox-img").src = src;
  document.getElementById("lightbox").style.display = "flex";
}
