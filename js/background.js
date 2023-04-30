const images = ["0.jpg","1.jpg","2.jpg","3.jpg"];

const todayImage = images[Math.floor(Math.random()*images.length)];
const bgImage = document.createElement("img");
bgImage.src = `img/${todayImage}`;
bgImage.classList.add("bg-image"); // CSS를 적용하기 위해 클래스 추가

document.body.appendChild(bgImage);