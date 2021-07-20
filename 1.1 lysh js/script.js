// document.querySelector('.send_btn').onclick = sendMessage;
document.querySelector('.send_btn').addEventListener('click', sendMessage);

function sendMessage() {
   let inputValue = document.querySelector('.input_tt').value;
   console.log(inputValue);
   document.querySelector('.out').innerHTML += ' ' + inputValue;
   document.querySelector('.input_tt').value = ''
}

document.querySelector('.clear_btn').addEventListener('click', clearInput);

function clearInput() {
   document.querySelector('.input_tt').value = ''
}

// function readInput() {
//    if (e.keyCode == 13) {
//       document.querySelector('.out').innerHTML += ' ' + inputValue;
//       document.querySelector('.input_tt').value = '';
//       alert(inputValue)
//    }
// }