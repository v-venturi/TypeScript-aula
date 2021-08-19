export class Utils {
    validaEmail(email) {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    }
    calculaDesconto(valor, desconto) {
        return valor - (valor * desconto) / 100;
    }
    calculaJurosSimples(valor, taxa, meses) {
        const juros = valor * taxa * meses;
        const montante = valor + juros;
        return {
            juros,
            montante
        };
    }
}
