import { Utils } from './utils.js';

const utils = new Utils();

console.log('Validação de e-mail: ', utils.validaEmail('nome@email.com'));
console.log('Valor com desconto(%):', utils.calculaDesconto(1000, 10));
console.log('Juros simples: ', utils.calculaJurosSimples(1000, 0.01, 10));
