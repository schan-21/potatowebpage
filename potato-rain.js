const potatoRainBtn = document.querySelector(".potato-rain-btn");

function addPotatoes() {
  // Create a potato image element
  const potatoImg = document.createElement("img");

  // Set the image source to the provided URL
  potatoImg.src = "potato.png";
  
  // Set the background of the potato image to transparent
  potatoImg.style.background = "transparent";

  // Set the size of the potato image
  potatoImg.style.width = "50px";
  potatoImg.style.height = "50px";

  // Generate a random x-coordinate for the potato to fall from
  const x = Math.random() * window.innerWidth;

  // Set the starting position of the potato
  potatoImg.style.position = "absolute";
  potatoImg.style.left = `${x}px`;
  potatoImg.style.top = "-50px";

  // Append the potato image to the body
  document.body.appendChild(potatoImg);

  // Animate the potato falling down the screen
  const animation = potatoImg.animate(
    [
      { transform: `translateY(-100px) rotate(0deg)` },
      { transform: `translateY(${window.innerHeight}px) rotate(720deg)` }
    ],
    {
      duration: 3000,
      easing: "cubic-bezier(0.075, 0.82, 0.165, 1)",
      iterations: 1,
      fill: "forwards"
    }
  );

  // Remove the potato image element from the DOM after the animation finishes
  animation.onfinish = () => potatoImg.remove();
}

potatoRainBtn.addEventListener("click", () => {
  for (let i = 0; i < 35; i++) {
    addPotatoes();
  }
});
