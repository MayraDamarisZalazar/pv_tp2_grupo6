const palabra = "Hola mi nombre es Alejandro";

const contarLetraA = (texto) => {
    let contador = 0;
    for (let i = 0; i < texto.length; i++) {
      if (texto[i] === 'a') {
        contador++;
      }
    }
    return contador;
};

console.log(`La letra "a" aparece ${contarLetraA(palabra)} veces.`);