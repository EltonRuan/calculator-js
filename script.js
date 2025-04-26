
const result = document.getElementById('result');
const buttons = document.querySelectorAll('.buttons input');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.value;

    if (value === 'C') {
      result.value = '';
    } 
    else if (value === '=') {
      try {
        result.value = eval(result.value);
      } catch (e) {
        result.value = 'Erro';
      }
    } 
    else if (value === '√') {
      if (result.value !== '') {
        result.value = Math.sqrt(eval(result.value));
      }
    } 
    else if (value === 'x²') {
      if (result.value !== '') {
        result.value = Math.pow(eval(result.value), 2);
      }
    } 
    else if (value === '%') {
      if (result.value !== '') {
        result.value = eval(result.value) / 100;
      }
    } 
    else {
      result.value += value;
    }
  });
});
