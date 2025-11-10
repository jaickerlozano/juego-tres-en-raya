import { gameboard } from "./game";

// Contenedores
const boardContainer = document.getElementById('container'); // Contenedor del tablero

const buttonsContainer = document.createElement('div'); // Contenedor de botones
buttonsContainer.id = 'buttonsContainer';
boardContainer.after(buttonsContainer);

const playersContainer = document.createElement('div'); // Contenedor jugadores
playersContainer.id = 'playersContainer';

// Se crea el tablero para insertar en el DOM
export function tablero() {
    for (let i = 0; i < 9; i++) {
        const celda = document.createElement('div');
        celda.id = `espacio${i+1}`;
        celda.classList.add('celda');
        boardContainer.appendChild(celda);
    }
    return boardContainer;
}

// Función para crear botones
function buttonCreate(type, id, classe, textcontent, element = 'button') {
    const button = document.createElement(`${element}`);
    button.type = `${type}`;
    button.id = `${id}`;
    button.classList.add(`${classe}`);
    button.textContent = `${textcontent}`;

    return button;
}

// Función para crear jugadores
function playerInsert(name, mark, numero) {
    // Se obtiene el contenedor principal
    const container = document.getElementById('container');
    
    // Se inserta un contenedor de jugadores antes del tablero
    container.before(playersContainer);

    // Se crean los jugadores
    const playerName = document.createElement('p');
    playerName.id = `player${numero}`
    playerName.textContent = `Jugador: ${name} - Marca: ${mark}`;

    playersContainer.appendChild(playerName);
}

// Botones
export function buttons() {
    // Se crea el botón iniciar
    const startButton = buttonCreate('button', 'iniciar', 'button', 'Iniciar');

    // Se crea el boton reiniciar
    const resetButton = buttonCreate('button', 'reset', 'button', 'Reiniciar');
    
    // Se insertan los botones en el DOM
    buttonsContainer.append(startButton);
    buttonsContainer.appendChild(resetButton);

    // Eventos con el boton Iniciar
    startButton.addEventListener('click', () =>{
        // Se inhabilita el boton inciar
        startButton.classList.add('disabled');
        startButton.disabled = true;

        // Se crea un formulario 
        const form = document.createElement('form');
        form.classList.add('form');

        // Se crean las entradas
        for (let i = 0; i < 2; i++) {
            const nameLabel = document.createElement('label'); // Se crea el label
            nameLabel.htmlFor = `name${i+1}`;
            nameLabel.textContent = `Jugador ${i+1}`;

            const playerInput = document.createElement('input'); // Se crea la entrada
            playerInput.type = 'text';
            playerInput.id = `name${i+1}`;
            playerInput.required = true;

            const mark = document.createElement('p');
            mark.textContent = i === 0 ? 'Jugador 1 = X' : 'Jugador 2 = O'; // Elige la marca del jugador
            mark.classList.add('marca');
            form.append(nameLabel);
            form.append(playerInput);
            form.append(mark);
        }

        // Form para ingresar los datos de los jugadores
        document.body.appendChild(form);

        // Se crea el botón aceptar con tipo submit
        const acceptButton = buttonCreate('submit', 'accept', 'button', 'Aceptar');
        form.append(acceptButton);

        // Evento al enviar el formulario
        form.addEventListener('submit', (event) => {
            event.preventDefault(); // evita que la página se recargue
            
            const players = [form.elements[0].value.trim(), form.elements[1].value.trim()];
            players.forEach((player, i) => {
                const mark = i === 0 ? 'X' : 'O';
                playerInsert(player, mark, i+1);
            });

            form.remove();
        });
    })
}