// $(document).ready(function() {
// 	$(this).keydown(function(e) {
// 		// console.log(e.which);
// 		var key = $(this).find('.key[data-key = '+e.which+']');
// 		var audio = $(this).find('audio[data-key='+e.which+']')[0];
// 		// console.log(key);
// 		key.toggleClass('playing');
// 		// console.log(audio);
// 		audio.play();
// 		audio.currentTime = 0;
// 	});

// 	$(this).keyup(function(e) {
// 		// console.log(e.which);
// 		var key = $(this).find('.key[data-key='+e.which+']');
// 		// console.log(key);
// 		key.toggleClass('playing');
// 	});
// });

// Как всегда, проверим готовность документа
$(function() {
  // Отлавливаем события "Нажатие на клавишу"
  $(this).keydown(function(event) {
    // Создаем переменную, в которую помещаем div с подходящим data-key
    var key = $(this).find('.key[data-key='+event.which+']');
    // Находим на странице тег audio с нужным data-key и помещаем также в переменную для удобства 
    var audio = $(this).find('audio[data-key='+event.which+']')[0];
    // Присваиваем активный класс к клавише, чтобы подсветить ее
    key.toggleClass('playing');
    // проверяем существует ли audio тег с таким data-key
    if (!audio) return;
    // Воспроизводим звук
    audio.play();
    // Сбрасываем таймер звуковой дорожки снова на 0
    audio.currentTime = 0; 
  });
  // Отслеживаем событие, когда пользователь отпускает кнопку
  $(this).keyup(function(event) {
    // снова создаем переменную с нужным data-key
    var key = $(this).find('.key[data-key='+event.which+']');
    // Убираем класс, который подсвечивает кнопку
    key.toggleClass('playing');
  });
});