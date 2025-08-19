const button = document.getElementById('magicBtn');
const message = document.getElementById('message');

button.addEventListener('click', () => {
  // Random fun fact
  const facts = [
    "JavaScript can run in your browser!",
    "GitHub Pages hosts static websites for free.",
    "You just clicked a button using JavaScript!",
    "You can style this page with CSS.",
    "Hello from michael-s-james.github.io!"
  ],
    window.open('https://example.com', '_blank')
    ;

  const randomFact = facts[Math.floor(Math.random() * facts.length)];
  message.textContent = randomFact;

  // Change background color
  document.body.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
});
