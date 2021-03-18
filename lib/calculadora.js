class Calculadora {
    /**
     * 
     * @param {*} arr 
     * @param {*} inicioInterv >= 0 e < fimInterv
     * @param {*} fimInterv >= 0 e > inicioInterv
     * @returns (i) media dos numeros que estao no intervalo [inicioInterv, fimInterv]
     *          (ii) -1 para parametros invalidos
     */
    calcularMedia(arr, inicioInterv, fimInterv) {
        if (inicioInterv < 0 || fimInterv < 0)
            return -1;

        if (inicioInterv >= fimInterv)
            return -1;

        let soma = 0, n = 0;
        for (const num of arr) {
            if (num >= inicioInterv && num <= fimInterv) {
                soma += num;
                n++;
            }
        }

        return soma / n;
    }

    calcularIdade(arr_ano_informado) {
        let ano_atual = new Date().getFullYear();
        let result = [];

        if(arr_ano_informado.length === 0){
            return result;
        }

        for(let i = 0; i < arr_ano_informado.length; i++) {
            result.push(ano_atual - arr_ano_informado[i]);
        }

        return result;
    }

    calcularCirculo(radius){
        let result = [];
        let calculo = 2 * Math.PI;

        if(radius.length === 0){
            return result;
        }

        for(let i = 0; i < radius.length; i++) {
            result.push(calculo * radius[i]);
        }

        return result;
    }

}

module.exports = Calculadora;