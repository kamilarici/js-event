console.log("mrhaba");

//! **********
// const div1 = document.getElementById("h2");
// const body1 = document.getElementById("body");
// const click1 = document.getElementById("click");
// mouse1.onmouseover = () => {
//     let color1 = Math.trunc(Math.random() * 10000 + 1000);
//     body1.style.backgroundColor = `#${color1}`;
//     div1.innerHTML = body1.style.backgroundColor;
//   };
//! *********
const body1 = document.getElementById("body");

const div1 = document.getElementById("h2");

const click1 = document.getElementById("click");

const mouse1 = document.getElementById("mouse");

click1.onclick = () => {
  let color1 = Math.trunc(Math.random() * 255);
  let color2 = Math.trunc(Math.random() * 255);
  let color3 = Math.trunc(Math.random() * 255);
  body1.style.backgroundColor =
    "rgb(" + color1 + "," + color2 + "," + color3 + ")";
  console.log(body1.style.backgroundColor);
  div1.innerHTML = body1.style.backgroundColor;
};

mouse1.onmouseover = () => {
  let color1 = Math.trunc(Math.random() * 255);
  let color2 = Math.trunc(Math.random() * 255);
  let color3 = Math.trunc(Math.random() * 255);
  body1.style.backgroundColor =
    "rgb(" + color1 + "," + color2 + "," + color3 + ")";
  console.log(body1.style.backgroundColor);
  div1.innerHTML = body1.style.backgroundColor;
};

//! *******alternatif random çözümü*****
// btnCLick.onclick = () => {
//     let color1 = Math.trunc(Math.random()*(1000000 - 1000))+ 1000;
//     document.body.style.backgroundColor = `#${color1}`
//     text.innerHTML = document.body.style.backgroundColor;
//     console.log("#"+ color1);
// }
