// query selector
// id

// p {}, #id {}, .class {}
const heading = document.querySelector("h1");
console.log(heading);
heading.addEventListener("click", () => {
  console.log("Heading clicked");
});
heading.innerHTML = "Hello World!";
