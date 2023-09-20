document.getElementById("year");
document
  .getElementById("year")
  .setAttribute("datetime", new Date().getFullYear());
document.getElementById("year").textContent = new Date().getFullYear();
