const progressBar = document.getElementById("progress-bar");

window.addEventListener("scroll", () => {

  const scrollTop = document.documentElement.scrollTop;

  const scrollHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  const progress =
    (scrollTop / scrollHeight) * 100;

  progressBar.style.width = `${progress}%`;

});

const pills = document.querySelectorAll(".pill");

pills.forEach((pill) => {

  pill.addEventListener("click", () => {

    pills.forEach((p) =>
      p.classList.remove("active")
    );

    pill.classList.add("active");

  });

});