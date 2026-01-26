const track = document.getElementById("featuredTrack");
const slides = Array.from(track.children);
const prev = document.getElementById("featPrev");
const next = document.getElementById("featNext");
const dots = document.getElementById("featDots");

let index = 0;

function update() {
  track.style.transform = `translateX(-${index * 100}%)`;

  dots.innerHTML = "";
  slides.forEach((_, i) => {
    const b = document.createElement("button");
    if (i === index) b.classList.add("active");
    b.onclick = () => {
      index = i;
      update();
    };
    dots.appendChild(b);
  });
}

prev.onclick = () => {
  index = (index - 1 + slides.length) % slides.length;
  update();
};

next.onclick = () => {
  index = (index + 1) % slides.length;
  update();
};

update();