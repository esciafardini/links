const harvester = document.getElementById("harvester");
const dedBox = document.getElementById("ded-box");

document.querySelectorAll(".mega-head").forEach((img) => {
  img.style.cursor = "pointer";
  img.addEventListener("click", () => {
    const hint = document.querySelector(".hint");
    if (harvester.paused) {
      harvester.play();
      dedBox.innerHTML = '<img src="gifs/soul.gif" alt="soul" class="soul-gif"><img src="gifs/soul.gif" alt="soul" class="soul-gif">';
      hint.textContent = "NOW PLAYING: HARVESTER BY TODD CAGE";
    } else {
      harvester.pause();
      dedBox.innerHTML = "";
      hint.textContent = 'touch an orb to hearing this "theme song"??';
    }
  });
});
