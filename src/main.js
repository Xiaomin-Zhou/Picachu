
const $mouth = $('.mouth');
const $sound = $('#sound').get(0);
console.log(sound)
$mouth.on('mouseover', () => {
  $sound.play();
})

