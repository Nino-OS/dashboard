document.addEventListener("DOMContentLoaded", async function () {
  await startProgressBarAnimation();
  setTimeout(() => {
    document.querySelector(".all-load").style.display = "none";
    document.querySelector(".loading-footer").style.display = "none";
    document.querySelector(".all").style.display = "block";
    document.body.classList.add("fade-in");
  }, 4000);
});

async function startProgressBarAnimation() {
  document.querySelector(".progress-bar").style.width = "100%";
}

function scrollToElement(elementSelector, instance = 0) {
  const elements = document.querySelectorAll(elementSelector);
  if (elements.length > instance) {
    elements[instance].scrollIntoView({ behavior: "smooth" });
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const link1 = document.getElementById("link1");
  const link2 = document.getElementById("link2");
  const link3 = document.getElementById("link3");

  link1.addEventListener("click", (event) => {
    event.preventDefault();
    scrollToElement(".header");
  });

  link2.addEventListener("click", (event) => {
    event.preventDefault();
    scrollToElement(".sub-header");
  });

  link3.addEventListener("click", (event) => {
    event.preventDefault();
    scrollToElement(".column");
  });
});
