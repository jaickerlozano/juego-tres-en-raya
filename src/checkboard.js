// Función para revisar las filas columnas y diagonales del tablero

export function revisarTablero (board) {  
    const filas = [board.slice(0,3), board.slice(3,6), board.slice(6, 9)];
    const filaGanadora = filas.filter((fila) => fila.join('').replace(',','') === 'XXX' || fila.join('').replace(',','') === 'OOO');

    // Revisar fila
    if (filaGanadora.join('').replaceAll(',','') === 'XXX' || filaGanadora.join('').replaceAll(',','') === 'OOO') {
        return true;
    };

    const columnas = [filas.map((fila) => fila[0]), filas.map((fila) => fila[1]), filas.map((fila) => fila[2])];
    const columnaGanadora = columnas.filter((columna) => columna.join('').replace(',','') === 'XXX' || columna.join('').replace(',','') === 'OOO')

    // Revisar columna
    if (columnaGanadora.join('').replaceAll(',','') === 'XXX' || columnaGanadora.join('').replaceAll(',','') === 'OOO') {
        return true;
    };

    const diagonal1 = board.filter((cell, i) => {
        if (i === 0 || i === 4 || i === 8){
            return cell;
        }
    });
    
    // Revisar diagonal1
    if (diagonal1.join('').replaceAll(',','') === 'XXX' || diagonal1.join('').replaceAll(',','') === 'OOO') {
        return true;
    };

    const diagonal2 = board.filter((cell, i) => {
        if (i === 2 || i === 4 || i === 6) {
            return cell;
        }
    })

    // Revisar diagonal2
    if (diagonal2.join('').replaceAll(',','') === 'XXX' || diagonal2.join('').replaceAll(',','') === 'OOO') {
        return true;
    };

    return false;
}