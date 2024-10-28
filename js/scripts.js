//Crea una función que reciba un número, la función debe imprimir una cuenta atrás desde ese número hasta 0\.
const print = (number) => {
  for (let i = number; i >= 0; i--) {
    console.log(i);
  }
};
print(12);
//- Crea una función que reciba un array de 10 números e imprima por consola la suma de todos los valores del array.

const sumAllValues = (array) => {
  let marc = 0;
  for (let i = 0; i < array.length; i++) {
    marc = marc + array[i];
  }
  console.log(`La suma total es ${marc}`);
};
sumAllValues([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

//Crea una función que reciba un número e imprima por consola la tabla de multiplicar del número que ha recibido hasta el 10\. Para el 4 el resultado debe ser:

// 4 x 0 \= 0 4 x 1 \= 4 4 x 2 \= 8 4 x 3 \= 12 4 x 4 \= 16 4 x 5 \= 20 4 x 6 \= 24 4 x 7 \= 28 4 x 8 \= 32 4 x 9 \= 36 4 x 10 \= 40

const multiplicationTable = (number) => {
  for (let i = 0; i <= 10; i++) {
    mult = i * number;
    console.log(`${number} x ${i} = ${mult} `);
  }
};
multiplicationTable(4);

//Crea la función inversa para que la tabla de multiplicar salga en orden inverso. Para el 4 el resultado debe ser:

// 4 x 10 \= 40 4 x 9 \= 36 4 x 8 \= 32 4 x 7 \= 28 4 x 6 \= 24 4 x 5 \= 20 4 x 4 \= 16 4 x 3 \= 12 4 x 2 \= 8 4 x 1 \= 4 4 x 0 \= 0
const multiplicationTable2 = (number) => {
  for (let i = 10; i >= 0; i--) {
    mult = i * number;
    console.log(`${number} x ${i} = ${mult} `);
  }
};
multiplicationTable2(4);

//Crea una función que reciba el año actual y tu edad, la función debe imprimir:

// - "naciste en el año X"
// - "En el año X cumpliste 1 año"
// - "En el año X cumpliste 2 años"
// - "En el año X cumpliste 3 años"

const currentYearAndAge = (year, age) => {
  const year0 = year - age;
  console.log(`naciste en el año ${year0}`);
  console.log(`En el año ${year0 + 1} cumpliste ${1} año `);
  const year1 = year0 + 1;
  for (let i = 1; i <= age; i++) {
    console.log(`En el año ${year1 + i} cumpliste ${i + 1} años`);
  }
};
currentYearAndAge(2024, 24);

// - Crea una función que reciba dos números e imprima todos los números pares desde el primero hasta el segundo. Si recibe 2 y 12 imprimirá 2, 4, 6, 8, 10, 12\.

const printAllEvenNumbers = (number1, number2) => {
  for (let i = number1; i <= number2; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
};
printAllEvenNumbers(2, 12);

// - Crea una función que genere 2 arrays y los rellene con 5 números aleatorios cada uno, la función debe decir qué valores se han repetido en los dos arrays.

const valuesHaveBeenRepeated = () => {
  const array1 = [];
  const array2 = [];
  const array1R = [];
  for (let i = 0; i < 5; i++) {
    const random = Math.floor(Math.random() * 11);
    const random2 = Math.floor(Math.random() * 11);
    array1.push(random);
    array2.push(random2);
  }
  console.log(array1);
  console.log(array2);
  for (let i = 0; i < 5; i++) {
    if (array1.includes(array2[i])) {
      array1R.push(array2[i]);
    }
  }
  console.log('Se repiten: ' + array1R);
};
valuesHaveBeenRepeated();

// - LO PUEDO SALTAR!!!! Crea una función que reciba un número y te diga si es primo o no. Un número primo es aquel que sólo puede dividirse por si mismo

// - Crea una función que reciba un array de 10 números, imprime por consola cada número, su cuadrado y su cubo en este formato: "Número: 2 \- Cuadrado: 4 \- Cubo: 8". Nota: Dentro del objeto Math existe el método pow. Math.pow(número, exponente)
const  theSquareAndTheCube= (array) => {
  for (let i = 0; i < array.length; i++) {
    let square = Math.pow(array[i], 2);
    let cube = Math.pow(array[i], 3);
    console.log(`numero: ${array[i]} - cuadrado: ${square} - cubo: ${cube} `);
  }
};
theSquareAndTheCube(([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// - Crea una función que reciba una palabra e imprima por consola esa palabra pero con las vocales en mayúscula.
const printTheSameWord =(word) => {
  const aei='aeiouAEIOU'
  let newWord = ''
  for (let i=0; i<=word.length; i++){
    let letter = word[i]
    if(aei.includes(letter)){
      newWord+=letter.toUpperCase()
    } else { 
      newWord+=letter
    }
  }
  console.log(newWord);
}
printTheSameWord('hola')

// - Crea una función que reciba una frase e imprima el número de veces que se repite cada vocal, por ejemplo para la frase "Enrique ordeña cabras", el resultado por consola debe ser: a: 3, e: 3, i: 1, o: 1, u: 1
const repetitionOfEachVowel = (phrase)=>{
  const aei='aeiou'
  let marc = {a:0, e:0,i:0,o:0,u:0}
  for (let i=0; i<phrase.length; i++){
    let letters = phrase[i].toLowerCase()
    if(aei.includes(letters)){
    marc[letters]++
    }
  }
  console.log(`a : ${marc['a']},e : ${marc['e']},i : ${marc['i']},o : ${marc['o']},u : ${marc['u']}`);

}
repetitionOfEachVowel('Enrique ordeña cabras')
// - Crea una función que reciba dos palabras e intercale las letras de cada una para formar una nueva palabra. Si la función recibe (hola, adios) el resultado será "haodliao", pero si recibe (adios, hola) el resultado será "ahdoiloa"
const interleaveLetters = (word1,word2) =>{
  let phrase =''
  const maxphrase = Math.max(word1.length, word2.length)
  for (let i=0; i<=maxphrase; i++){
 if (i<word1.length){
  phrase +=word1[i]
 }
 if (i<word2.length){
  phrase +=word2[i]
  }
}
console.log (phrase)
}
interleaveLetters('hola','adios');
  // - Crea una función que reciba una palabra e imprima la misma palabra en orden inverso conservando las mayúsculas y las minúsculas. Si recibe "Mariposas" deberá imprimir "sasopiraM"
  const sameWordInReverseOrder = (word) =>{
    let phrase =''
    const reverse =word.length
    for (let i=reverse; i>=0; i--){
      if (i<reverse){
        phrase +=word[i]
       }
    }
    console.log (phrase)
  }
sameWordInReverseOrder('Mariposa')
/* Crea una función que reciba un array con 5 palabras, 
debes imprimir por consola un array que contenga la inicial y 
la última letra de cada palabra en mayúsculas, es decir, si 
nuestra función recibiera un array con \['hola', 'adios', 'gato', 'perro', 'casa'\] 
deberá imprimir por consola \['H', 'A', 'A', 'S', 'G', 'O', 'P','O', 'C', 'A'\]*/

const printInitialAndLastLetter = (array)=>{
  const array0=[]
  for (let i=0; i<array.length; i++){
    const word = array[i];
      const firstLetter = word[0].toUpperCase();
      const lastLetter = word[word.length -1].toUpperCase();

      array0.push(firstLetter);
      array0.push(lastLetter);
    }
    console.log(array0);

  }

printInitialAndLastLetter(['hola', 'adios', 'gato', 'perro', 'casa']);
