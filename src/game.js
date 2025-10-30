import { revisarTablero } from './checkboard.js';
import { buttons, tablero } from './dom.js';

tablero();
buttons();

// Función tablero de juego
export function gameboard() {
    return {
        gameboard : [
            ' ', ' ', ' ', 
            ' ', ' ', ' ', 
            ' ', ' ', ' '
        ],

        // Función para obtener el tablerp
        getTablero: function() {
            let filas = [this.gameboard.slice(0,3), this.gameboard.slice(3,6), this.gameboard.slice(6,9)];
            // Se mapea cada fila a una cadena con '|' entre elementos
            let filasFormateadas = filas.map(fila => fila.join('|'));
            // Se unen las filas con separadores
            return filasFormateadas.join('\n-----\n');
        },

        // Función para marcar en el tablero
        addMark: function(position ,mark) {
            this.gameboard[position] = mark;
        },

        // Función para reiniciar juego
        resetTablero: function() {
            this.gameboard = [
                ' ', ' ', ' ', 
                ' ', ' ', ' ', 
                ' ', ' ', ' '
            ];
        }
    };
}

export function player(name, mark) {
    return {name, mark};
}

export function gameController() {
    // Tablero
    let board = gameboard();

    // Players
    const player1 = player('Jai' , 'X');
    const player2 = player('Ely', 'O');

    // Cantidad de casillas libres
    let amountEmpty = board.gameboard.filter((cell) => cell === ' ').length;

    let playerTurn; // Turno del jugador

    let salir = false; // Variable para indicar salida cuando haya un ganador
    do {

        // Turnos
        if (amountEmpty === 9) {
            playerTurn = player1; // Fijar turno por primera vez

        } else {
            // Alternar turno
            playerTurn = playerTurn.name === player1.name ? player2 : player1;
        };
        
        // Ingreso de jugada por consola
        const position = Number(prompt(`Turno de ${playerTurn.name}, ingresa posición`));

        // Revisión de posición
        if (board.gameboard[position].includes('X') || board.gameboard[position].includes('O')) {
            console.log('posición ocupada. Intente en otra posición');
            // Alternar turno
            playerTurn = playerTurn.name === player1.name ? player2 : player1;
            continue;
        }

        // Marcar posición
        board.addMark(position, playerTurn.mark);

        // Revisar si hay tres en raya
        salir = revisarTablero(board.gameboard);

        console.log(board.getTablero())

        // Revisar cantidad de jugadas disponibles
        amountEmpty = board.gameboard.filter((cell) => cell === ' ').length;

        // Mientras existan jugadas y no exista un ganador se repite el ciclo
    } while (amountEmpty !== 8 && !salir);

    if (salir) {
        console.log(`Felicidades ${playerTurn.name} has ganado 🎉`);
    }
}
