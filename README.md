# Platzom

Platzom es un idioma inventado para un curso de aprendisaje de fundamentos de JS, disponoble en mi [github](https://github.com/GerardoSanchez07)

## Descripcion del Idioma
- Si la palabra termina en ar se le quitan esos dos caracteres
- Si la palabre inicia con Z, se le añade "pe" al final
- Si la palabra traducida tiene 10 o mas letras se debe partie a la mitad y agrgar un guion medio
- Si la palabra original es un palindromo,
- Ninguna regla anterioe cuenta y se devuelve la misma palabra intercalando mayusculas y minusculas

## Instalacion
```
npm install platzom
```

## Uso
```
import platzom from 'platzom'

platzom("Programar") // Program
```
