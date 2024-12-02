// Entrada
//Processamento
//Saída

//Funções; sub-programas; sub-rotina; métodos.

const total = 1 + 1;
const valores: [number, number] [] = [
    [2,3],
    [1,8],
    [3,5]
];

let acumulador = 0;

for (let numeros of valores) {
    const a = numeros[0];
    const b = numeros[1];

    const total = calcular(a, b);

    acumulador = acumulador + total;
}

function calcular(valor1: number, valor2: number) {
    return valor1 + valor2;
}

console.log(acumulador);
