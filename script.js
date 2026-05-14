const levels = [
    { answer: 'Flowers', nextVideo: '8947-215890483_medium.mp4' },
    { answer: 'Earth', nextVideo: '' },

];


function check(event) {
   event.preventDefault();
   let score = document.getElementById('score');
   let level = document.getElementById('level'); 
   const inputValue = event.target.userAnswer.value;
   const video = document.getElementById('videoPlayer');
   const currentLevel = Number(level.value) - 1;

   if (currentLevel < levels.length && inputValue == levels[currentLevel].answer) {
       alert("Answer correct");
       score.value = Number(score.value) + 1;
       level.value = Number(level.value) + 1; // Move to next level

        if (levels[currentLevel].nextVideo) {
           video.children[0].src = levels[currentLevel].nextVideo;
           console.log( video.children[0].src );
           
           video.load();
       }
   } else {
       score.value = Number(score.value) - 1;
       alert("Answer incorrect or wrong level!");
   }

   return false;
}