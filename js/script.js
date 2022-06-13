function openAside() {
  const aside = document.querySelector("aside");

  aside.setAttribute("data-open", true);
}

function closeAside() {
  const aside = document.querySelector("aside");

  aside.setAttribute("data-open", false);
}