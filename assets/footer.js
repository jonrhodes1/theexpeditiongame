(function () {
  function renderExpeditionFooter() {
    if (document.querySelector(".site-footer")) return;

    const footer = document.createElement("footer");
    footer.className = "site-footer";
    footer.innerHTML = "<p>Developed by Dr Jonathan Rhodes<br>University of Plymouth, Plymouth Expedition and Discovery Research Unit</p>";
    document.body.appendChild(footer);
  }

  window.renderExpeditionFooter = renderExpeditionFooter;
})();
