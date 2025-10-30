// Se crea el tablero para insertar en el DOM
export function tablero() {
    const divcontainer = document.getElementById('container');

    for (let i = 0; i < 9; i++) {
        const celda = document.createElement('div');
        celda.id = `espacio${i+1}`;
        celda.classList.add('celda');
        celda.textContent = `Espacio ${i+1}`
        divcontainer.appendChild(celda);
    }
}
