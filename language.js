(function () {
  const isSpanish = /^es(?:-|$)/i.test(navigator.language || "");
  const spanishPaths = {
    "/": "/es/",
    "/beats/": "/es/beats/"
  };
  const destination = spanishPaths[location.pathname];

  if (isSpanish && destination) {
    location.replace(destination);
  }
})();
