/**
 * funcao faz a adicao segura entre 2 numeros,
 * lancando excecoes para casos de overflow e underflow 
 */
function safeadd(left, right) {
    if (right > 0) {
        if (left > Number.MAX_SAFE_INTEGER - right)
            throw 'Overflow';
    } else {
        if (left < Number.MIN_SAFE_INTEGER - right)
            throw 'Underflow';
    }

    return left + right;
}

module.exports = safeadd;