import "../css/main.css"
import "../css/font/flaticon.css"

const container = document.querySelector(".icons");

const data = [
  {
    url: "https://www.linkedin.com/in/rcristianh/",
    class: "flaticon-010-linkedin",
  },
  {
    url: "https://twitter.com/rCristianHR",
    class: "flaticon-002-twitter",
  },
  {
    url: "",
    class: "flaticon-011-instagram",
  },
  {
    url: "",
    class: "flaticon-001-facebook",
  },
  {
    url: "",
    class: "flaticon-008-youtube",
  },
];
const generateLinks = (
  content: Array<{ url: string; class: string }>,
  container: Element
) => {
  let template = ``;
  content.forEach((data) => {
    template += `<a href="${data.url}"><span class="${data.class}"></span></a>`;
  });
  container.innerHTML = template;
};

if (container) {
  generateLinks(data, container);
}
