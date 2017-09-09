"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = platzom;
function platzom(str) {
  var translation = str;

  //si la palabra termina en ar se le quitan esos dos caracteres
  if (str.toLowerCase().endsWith("ar")) {
    translation = str.slice(0, -2);
  }
  // si la palabre inicia con Z, se le añade "pe" al final
  if (str.toLowerCase().startsWith("z")) {
    translation += 'pe';
  }

  //si la palabra traducida tiene 10 o mas letras se debe partie a la mitad y agrgar un guion medio
  if (translation.length >= 10) {
    var firstHalf = translation.slice(0, Math.round(translation.length / 2));
    var seconfHalf = translation.slice(Math.round(translation.length / 2));
    translation = firstHalf + "-" + seconfHalf;
  }

  // si la palabra original es un palindromo,
  // ninguna regla anterioe cuenta y se devuelve la misma palabra intercalando mayusculas y minusculas
  var reverse = function reverse(str) {
    return str.split('').reverse().join('');
  };
  function minMay(str) {
    var length = str.length;
    var translation = '';
    var capitalize = true;
    for (var i = 0; i < length; i++) {
      //El método charAt () devuelve el carácter en el índice especificado en una cadena.
      var char = str.charAt(i);
      //console.log(char)
      translation += capitalize ? char.toUpperCase() : char.toLowerCase();
      capitalize = !capitalize;
    }
    return translation;
  }

  if (str == reverse(str)) {
    return minMay(str);
  }
  return translation;
}
