import { revisarTablero } from './checkboard.js';
import { tablero, buttons } from './dom.js';


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
        addMark: function(position, mark) {
            position.textContent = mark;
        },

        // Función iniciar juego
        renderBoard: function() {
            tablero();
            buttons();
        },

        startBoard: function(inicioButton) {
            // Se obtiene 
            return document.getElementById('playersContainer')
        },

        stateBoard: function(salir, ganador, amountEmpty, contenedorTablero) {
            const message = document.createElement('p');
            message.classList.add('final');

            if (salir) {
                message.textContent = `Felicidades ${ganador} has ganado 🎉`
                document.body.append(message);
                contenedorTablero.inert = true;
            }
            
            if (amountEmpty === 1) {
                message.textContent = `¡Ha sido un empate!`
                document.body.append(message);
                contenedorTablero.inert = true;
            } 
        },

        // Función para reiniciar juego
        resetTablero: function() {
            this.gameboard = [
                ' ', ' ', ' ', 
                ' ', ' ', ' ', 
                ' ', ' ', ' '
            ]
        }
    };
}

export function player(name, mark) {
    return {name, mark};
}

// Función para determinar los turnos del jugador
export function turnPlayer(player1, player2) {
    let playerTurn; // Turno del jugador
    if (!player1.classList.contains('turno')) {
        player2.classList.remove('turno');
        player1.classList.add('turno');
        playerTurn = player1; // Fijar turno por primera vez
        return {
            player: playerTurn.textContent.split(' ')[1],
            mark: 'X'
        };
    } else {
        // Alternar turno
        player1.classList.remove('turno')
        player2.classList.add('turno')
        playerTurn = player2;
        return {
            player: playerTurn.textContent.split(' ')[1],
            mark: 'O'
        };
    };
}

export function gameController() {
    // Tablero
    let board = gameboard();

    board.renderBoard();

    let player1;
    let player2;
    let play;

    // Eventos boton iniciar
    const inicioButton = document.getElementById('iniciar');
    inicioButton.addEventListener('click', () => {
        inicioButton.classList.add('active')
        containerBoard.inert = false;
    })

    // Eventos tablero de juego
    const containerBoard = document.getElementById('container');
    containerBoard.inert = true;
    containerBoard.addEventListener('click', (event)=> {
        // Inicia partida
        if(inicioButton.classList.contains('active')) {
            player1 = board.startBoard(inicioButton).children[0];
            player2 = board.startBoard(inicioButton).children[1];
            inicioButton.classList.toggle('active');
        }

        // Cantidad de casillas libres
        let amountEmpty = board.gameboard.filter((cell) => cell === ' ').length;

        // Solo continúa si el clic fue sobre una celda
        if (!event.target.matches('.celda')) return;

        if (event.target.textContent !== 'X' && event.target.textContent !== 'O') {
            play = turnPlayer(player1, player2); // Turnos
            board.addMark(event.target, play.mark);
            const position = Number(event.target.id.replace('espacio', ''));
            board.gameboard[position - 1] = play.mark;
            console.log(board.gameboard)
        } 

        let salir = false; // Variable para indicar salida cuando haya un ganador
        salir = revisarTablero(board.gameboard);

        board.stateBoard(salir, play.player, amountEmpty, containerBoard);
    })

    // --- BOTÓN REINICIAR ---
    const resetButton = document.getElementById('reset');

    resetButton.addEventListener('click', () => {
        // 1️⃣ Reinicia el array del tablero
        board.resetTablero();

        // 2️⃣ Limpia el tablero en pantalla
        const celdas = containerBoard.querySelectorAll('.celda');
        celdas.forEach(celda => celda.textContent = '');

        // 3️⃣ Borra jugadores del DOM
        const playersContainer = document.getElementById('playersContainer');
        if (playersContainer) playersContainer.innerHTML = '';

        // 4️⃣ Borra mensaje de ganador si existe
        const mensaje = document.querySelector('.final');
        if (mensaje) mensaje.remove();

        // 5️⃣ Bloquea el tablero nuevamente hasta iniciar
        containerBoard.inert = true;

        // 6️⃣ Habilita el botón "Iniciar" otra vez
        const inicioButton = document.getElementById('iniciar');
        inicioButton.classList.remove('disabled', 'active');
        inicioButton.disabled = false;

        console.clear();
        console.log('Juego reiniciado');
    });
}
