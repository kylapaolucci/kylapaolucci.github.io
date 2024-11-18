// script.js
const snowContainer = document.getElementById('snow-container');

function createSnowflake() {
  const snowflake = document.createElement('div');
  const size = Math.random() * 10 + 5; // Random size between 5px and 15px
  const left = Math.random() * window.innerWidth;

  snowflake.classList.add('snowflake');
  snowflake.style.width = `${size}px`;
  snowflake.style.height = `${size}px`;
  snowflake.style.left = `${left}px`;
  snowflake.style.animationDuration = `${Math.random() * 3 + 2}s`; // 2-5 seconds
  snowflake.style.animationDelay = `${Math.random() * 5}s`;

  snowContainer.appendChild(snowflake);

  // Remove the snowflake after it falls
  setTimeout(() => {
    snowflake.remove();
  }, 5000);
}

// Generate snowflakes at intervals
setInterval(createSnowflake, 200);
