const keys = document.querySelectorAll('.key');
const output = document.getElementById('output');

keys.forEach(key => {
  key.addEventListener('click', () => {
    const keyValue = key.getAttribute('data-key');
    if (keyValue === 'Backspace') {
      output.value = output.value.slice(0, -1);
    } else if (keyValue === 'Space') {
      output.value += ' ';
    } else if (keyValue === 'Enter') {
      output.value += '\n';
    } else {
      output.value += keyValue;
    }
  });
});