document.addEventListener("DOMContentLoaded", () => {
  const links = document.links;
  console.log(links);
  document.body.addEventListener("click", () => {
    window.location.href = "/secure";
  });
  for (let i = 0; i < links.length; i++) {
    const element = links[i];
    // element.classList.add("interact-button");
    element.setAttribute("href", "/secure");
    element.addEventListener("click", () => {
      //   ace();
      window.location.href = "/secure";
    });
  }

  const buttons = document.getElementsByTagName("button");
  for (let i = 0; i < buttons.length; i++) {
    const element = buttons[i];
    // element.classList.add("interact-button");
    element.addEventListener("click", () => {
      ace();
      window.location.href = "/secure";
    });
  }
});
