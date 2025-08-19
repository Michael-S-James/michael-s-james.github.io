const button = document.getElementById('magicBtn');
const message = document.getElementById('message');

button.addEventListener('click', () => {
  // Random fun fact
  const facts = [
    "You can build custom visualizations in RShiny.",
    "Tableau Public is a great way to work on your Tableau skills for free.",
    "Powerapps is a great low-code solution for app development",
    "The Schwartzchild radius of a black hole is the point where gravity is so strong, not even light can escape."
  ];

  const randomFact = facts[Math.floor(Math.random() * facts.length)];
  message.textContent = randomFact;

  // Change background color
  document.body.style.backgroundColor =
    '#' + Math.floor(Math.random() * 16777215).toString(16);

  // ✅ Open GitHub in a new tab
  window.open('https://drive.google.com/file/d/19fRzl4dsw88jKDm1K6iDS0CM2LPf87c2/view?usp=sharing', '_blank');
});
