function script() {
  const $message = document.getElementById("message"); // получить доступ к html элементу в котором записывается оригинальное послание
  const $crypted = document.getElementById("crypted"); // получить доступ к html элементу в котором записывается зашифрованное послание
  const $code = document.getElementById("code"); // получить доступ к html элементу в котором записывается код
  let message = $message.value; // получить значение строкис посланием
  let crypted = cript(message, $code.value); // зашифровать строку используя код
  $crypted.value = crypted; // вывести на экран зашифрованную строку
}

function cript(message, code){
  let cripted = ""
  message = completeString(message, code.length, "ъ");
  for (let i = 0; i < message.length; i+=code.length){ // идти на длину кода вперёд
    for (let j = 0; j < code.length; j++) {            // добавлять буквы в зашифрованную строку в порядке указанным в шифре
      cripted += message[i+parseInt(code.charAt(j)) -1];
    }
  }
  return cripted;//вернуть зашифрованную строку
}

/**
 * Функция которая дополняет исходную знаками
 * @param {*} message исходная строка 
 * @param {*} size размер одного деления
 * @param {*} letter буква которую нужно добавлять
 */
function completeString(message, size, letter) {
  let ammount = 0; // количество знаков которые нужно ъ добавить в строку
  if (message.length % size != 0) {
    ammount = parseInt(message.length / size) + 1; 
    ammount = ammount * size - message.length; // сколько раз нам надо добавить букву
  } else {
    ammount = 0;
  }
  for (let i = 0; i < ammount; i++) { //собственно добовление
    message+=letter;
  }
  return message;
}

//let code = "132546";
//let message = "информациявсесведенияобокружающеммире"
//code = "426135";
//message = "КРИПТОГРАФИЯНАУКАОШИФРОВАНИИИНФОРМАЦИИЪЪЪЪ";
//console.log(cript(message, code));

