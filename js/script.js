function openAside() {
  const aside = document.querySelector("aside");

  aside.setAttribute("data-open", true);
}

function closeAside() {
  const aside = document.querySelector("aside");

  aside.setAttribute("data-open", false);
}

function reveal() {
  var reveals = document.querySelectorAll(".progress-section");
  var html = document.querySelectorAll(".html")
  var css = document.querySelectorAll(".css")
  var node = document.querySelectorAll(".node")
  var js = document.querySelectorAll(".js")
  var react = document.querySelectorAll(".react")
  var mysql = document.querySelectorAll(".mysql")

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
      html[i].classList.add("active");
      css[i].classList.add("active");
      node[i].classList.add("active");
      js[i].classList.add("active");
      mysql[i].classList.add("active");
      react[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
      html[i].classList.remove("active");
      css[i].classList.remove("active");
      node[i].classList.remove("active");
      js[i].classList.remove("active");
      mysql[i].classList.remove("active");
      react[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);
