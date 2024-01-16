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

function sendEmail() {
  var name = document.getElementById("name").value;
  var message = document.getElementById("message").value;

  if (!name) {
    alert("Bitte gib deinen Namen ein (Discord-Name) 👤");
    return false;
  }

  if (!message) {
    alert("Bitte gib eine Nachricht an 📧");
    return false;
  }

  var mailtoLink =
    "mailto:ninoos.mail@gmail.com" +
    "?subject=Supportanfrage von " +
    name +
    "&body=" +
    message;

  window.location.href = mailtoLink;

  window.location.href = "https://nino-os.github.io/dashboard/";

  return false;
}

if (localStorage.getItem("darkMode") === "enabled") {
  enableDarkMode();
}

function toggleTheme() {
  if (localStorage.getItem("darkMode") === "enabled") {
    disableDarkMode();
  } else {
    enableDarkMode();
  }
}

function enableDarkMode() {
  document.body.classList.add("dark-theme");
  document.querySelector(".theme-toggle").classList.add("active");
  localStorage.setItem("darkMode", "enabled");
}

function disableDarkMode() {
  document.body.classList.remove("dark-theme");
  document.querySelector(".theme-toggle").classList.remove("active");
  localStorage.setItem("darkMode", "disabled");
}

function scrollToElement(elementSelector) {
  const element = document.querySelector(elementSelector);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const link1 = document.getElementById("FAQ");
  const link2 = document.getElementById("Kontakt");

  link1.addEventListener("click", (event) => {
    event.preventDefault();
    scrollToElement(".section1");
  });

  link2.addEventListener("click", (event) => {
    event.preventDefault();
    scrollToElement(".section2");
  });
});
