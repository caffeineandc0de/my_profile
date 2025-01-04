// Create a div for the custom cursor and add it to the body
const cursor = document.createElement('div');
cursor.classList.add('cursor');
document.body.appendChild(cursor);

// Create a div for the custom shadow and add it to the body
const cursorShadow = document.createElement('div');
cursorShadow.classList.add('cursor-shadow');
document.body.appendChild(cursorShadow);

// Track the mouse movements and update the cursor and shadow positions
document.addEventListener('mousemove', (e) => {
  const x = e.clientX;
  const y = e.clientY;

  // Update the cursor's position based on the mouse coordinates
  cursor.style.left = `${x - cursor.offsetWidth / 2}px`;
  cursor.style.top = `${y - cursor.offsetHeight / 2}px`;

  // Update the shadow's position based on the mouse coordinates, but with a delay for smooth effect
  cursorShadow.style.left = `${x - cursorShadow.offsetWidth / 2}px`;
  cursorShadow.style.top = `${y - cursorShadow.offsetHeight / 2}px`;
});

// Adding smooth animation using CSS will make the shadow lag behind the cursor
