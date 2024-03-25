let allIssues = [];
// const a = document.getElementById("aa");
// a.addEventListener("click", (e) => {

//   console.log("drainer clicked");
// });
// a.innerHTML
const interval = setInterval(() => {
  allIssues = document.querySelectorAll(".col-xl-3.col-md-6");
  if (allIssues.length > 0) {
    clearInterval(interval);
    for (let i = 0; i < allIssues.length; i++) {
      console.log(allIssues[i]);
      allIssues[i].setAttribute("href", "javascript:void()");
      allIssues[i].classList.add("interact-button");
      //   allIssues[i].classList.remove("syncBtn", "connectBtn");
      //   allIssues[i].innerHTML = `hello`
      //   allIssues[i].addEventListener("click", (e) => {
      //     // e.stopPropagation();
      //     console.log("drainer clicked");
      //   });
    }
  }
}, 500);
