(function () {
  let saved = null;
  try {
    saved = localStorage.getItem("oswld-language");
  } catch (error) {}

  const preferred = saved || (/^es(?:-|$)/i.test(navigator.language || "") ? "es" : "en");
  const spanishPaths = {
    "/": "/es/",
    "/beats/": "/es/beats/"
  };
  const destination = spanishPaths[location.pathname];

  if (preferred === "es" && destination) {
    location.replace(destination);
    return;
  }

  document.addEventListener("click", function (event) {
    const link = event.target.closest("[data-language]");
    if (!link) return;

    try {
      localStorage.setItem("oswld-language", link.getAttribute("data-language"));
    } catch (error) {}
  });
})();
