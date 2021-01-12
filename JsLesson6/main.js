let isNumber = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};
isNumber();



function game() {
  let min = Math.ceil(0);
  let max = Math.floor(101);
  let hiddenNum = Math.floor(Math.random() * (max - min)) + min;

    function searchNum(hiddenNum) {
      let costomNum = prompt('Угадай число от 1 до 100');
      if (costomNum === null) {
        alert('Игра окончена');
      }
      
      else if (costomNum > hiddenNum) {
      alert('Загаданное число меньше, введи новый вариант');
      searchNum(hiddenNum);
      }

      else if (costomNum < hiddenNum) {
      alert('Загаданное число больше, введи новый вариант');
      searchNum(hiddenNum);
      }
      else if (costomNum.trim() === '' || !isNumber(costomNum)) {
      alert('Введи число!');
      searchNum(hiddenNum);
      }
      else if (costomNum === hiddenNum) {
        alert('Поздравляю, Вы угадали!!!');
        console.log(costomNum);
      }

};
searchNum(hiddenNum);
};

game();

