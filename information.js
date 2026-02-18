const instructionToggle = document.getElementById('instructionToggle');
const instructionContent = document.getElementById('instructionContent');

if (instructionToggle && instructionContent) {
  instructionToggle.addEventListener('click', function() {
    this.classList.toggle('active');
    instructionContent.classList.toggle('show');
  });
}