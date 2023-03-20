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

  // Generate a random delay for the potato to fall, up to 3 seconds
  const delay = Math.random() * 3000;

  // Generate a random spin direction for the potato
  const spinDirection = Math.random() < 0.5 ? -1 : 1;

  // Set the starting position and rotation of the potato
  potatoImg.style.position = "absolute";
  potatoImg.style.left = `${x}px`;
  potatoImg.style.top = "-50px";
  potatoImg.style.transform = `rotate(0deg)`;

  // Append the potato image to the body
  document.body.appendChild(potatoImg);

  // Animate the potato falling down the screen after a random delay, and spinning in a random direction
  setTimeout(() => {
    const animation = potatoImg.animate(
      [
        { transform: `translateY(-100px) rotate(0deg)` },
        { transform: `translateY(${window.innerHeight}px) rotate(${spinDirection * 720}deg)` }
      ],
      {
        duration: 3000,
        easing: "cubic-bezier(0.075, 0.82, 0.165, 1)",
        iterations: 1,
        fill: "forwards"
      }
    );

    // Add a bounce effect when the potato hits the bottom of the screen
    animation.addEventListener("finish", () => {
      potatoImg.animate(
        [
          { transform: `translateY(0px)` },
          { transform: `translateY(-25px)` },
          { transform: `translateY(0px)` }
        ],
        {
          duration: 500,
          easing: "ease-in-out",
          iterations: 1,
          fill: "forwards"
        }
      );
    });

    // Remove the potato image element from the DOM after the animation finishes
    animation.onfinish = () => potatoImg.remove();
  }, delay);
}

potatoRainBtn.addEventListener("click", () => {
  for (let i = 0; i < 769; i++) {
    addPotatoes();
  }
});
