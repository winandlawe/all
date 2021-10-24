let i = 0;
const txt = ' Jura og Kode'; // deklarerer her mine variabler til funktionen
const speed = 80;

typeWriter = () => {
  if (i < txt.length) {
    document.querySelector("h1").innerHTML += txt.charAt(i); // tager her fat i min h1, som teksten bliver skrevet ind i
    i++;
    setTimeout(typeWriter, speed);
  }
}

openMenu = () => {
  document.querySelector("#toggle").classList.toggle("active");
  document.querySelector("nav").classList.toggle("active");
  document.querySelector("ul").classList.toggle("active");
  document.querySelector("#bar1").classList.toggle("active");
  document.querySelector("#bar2").classList.toggle("active");
  document.querySelector("#bar3").classList.toggle("active");
}

openText = () => {
  const element = document.querySelector("#myDIV");
  element.classList.add("mystyle");
  document.querySelector("#remove").style.display = "block";
}

closeText = () => {
  const element = document.querySelector("#myDIV");
  element.classList.remove("mystyle");
  document.querySelector("#remove").style.display = "none";
}

mySkills = () => {
  const element = document.querySelector("#myDIV2");
  element.classList.add("mystyle2");
  document.querySelector("#remove2").style.display = "block";
}

closeMyskills = () => {
  const element = document.querySelector("#myDIV2");
  element.classList.remove("mystyle2");
  document.querySelector("#remove2").style.display = "none";
}


topFunction = () => {
  document.body.scrollTop = 0; // til Safari
  document.documentElement.scrollTop = 0; // til Chrome, Firefox, IE og Opera
}