function navDropdown() {
  document.getElementById("navDropdown").classList.toggle("show");
}
window.onclick = function (event) {
  if (
    !event.target.matches(".dropbtn") &&
    !event.target.matches(".dotsImage")
  ) {
    let dropdowns = document.getElementsByClassName("dropdown-content");
    for (let i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};
