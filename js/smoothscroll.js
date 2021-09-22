const linksHead = document.querySelectorAll(".menu-list__link");
const mainScroll = document.querySelector(".main__scroll");
const newArray = [...linksHead, mainScroll];

newArray.forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const Id = e.target.getAttribute("href").substr(1);

    document.getElementById(Id).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
});
