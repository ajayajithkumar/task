const eyes = document.querySelectorAll('.eye');
const pupils = document.querySelectorAll('.pupil');
// Function to calculate the movement of the pupils
document.addEventListener('mousemove', function (e) {
  eyes.forEach((eye, index) => {
    // Get the bounding rectangle of the eye
    const eyeRect = eye.getBoundingClientRect();
    const eyeCenterX = eyeRect.left + eyeRect.width / 2;
    const eyeCenterY = eyeRect.top + eyeRect.height / 2;

    // Calculate the angle between the mouse position and the center of the eye
    const angle = Math.atan2(e.clientY - eyeCenterY, e.clientX - eyeCenterX);

    // Calculate the maximum distance the pupil can move within the eye
    const distance = Math.min(eyeRect.width / 4, 20); // Limit the pupil movement

    // Calculate the offset for the pupil
    const offsetX = Math.cos(angle) * distance;
    const offsetY = Math.sin(angle) * distance;

    // Set the pupil position relative to the eye
    pupils[index].style.transform = `translate(-50%, -50%) translate(${offsetX}px, ${offsetY}px)`;
  });
});
document.addEventListener('mouseout',function(){
   let eye = document.querySelector('.eye');
   eyes.classList.add("eye");
   let eyes = document.querySelector('.eyes');
   eyes.classList.add("eyes");

})