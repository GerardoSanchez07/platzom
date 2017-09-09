export default function platzom(str){
  let translation = str

  //si la palabra termina en ar se le quitan esos dos caracteres
  if (str.toLowerCase().endsWith("ar")) {
    translation = str.slice(0, -2)

  }
   // si la palabre inicia con Z, se le añade "pe" al final
  if (str.toLowerCase().startsWith("z")) {
    translation +=  'pe'

  }

  //si la palabra traducida tiene 10 o mas letras se debe partie a la mitad y agrgar un guion medio
  if (translation.length >= 10) {
    const firstHalf = translation.slice(0, Math.round(translation.length / 2))
    const seconfHalf = translation.slice( Math.round(translation.length / 2))
    translation = `${firstHalf}-${seconfHalf}`
  }

  // si la palabra original es un palindromo,
  // ninguna regla anterioe cuenta y se devuelve la misma palabra intercalando mayusculas y minusculas
  const reverse = (str) => str.split('').reverse().join('')
  function minMay(str) {
    const length = str.length
    let translation = ''
    let capitalize = true
    for (let i = 0; i < length; i++) {
      //El método charAt () devuelve el carácter en el índice especificado en una cadena.
      const char = str.charAt(i)
      //console.log(char)
      translation += capitalize ? char.toUpperCase() : char.toLowerCase()
      capitalize =  !capitalize
    }
    return translation
  }

  if (str == reverse(str)) {
    return minMay(str)
  }
  return translation
}
