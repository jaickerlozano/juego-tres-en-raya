# 🎮 Juego Tres en Raya

Un proyecto interactivo desarrollado con **JavaScript Vanilla**, **HTML**, **SASS** y **Vite**, donde se aplica la lógica del clásico juego de “Tres en Raya” (Tic Tac Toe) implementando buenas prácticas de programación y estructura modular.  

El objetivo principal fue construir el juego primero en consola, luego trasladar toda la lógica al **DOM** aplicando conceptos de **encapsulamiento**, **modularización** y **responsabilidad única (SRP)**.

---

## 🚀 Demo en vivo

🔗 **Juega aquí:** [https://jaickerlozano.github.io/juego-tres-en-raya/](https://jaickerlozano.github.io/juego-tres-en-raya/)

---

## 🧠 Características principales

✅ Interfaz creada completamente desde JavaScript (DOM dinámico)  
✅ Alternancia de turnos entre jugadores con indicador visual  
✅ Revisión automática de filas, columnas y diagonales ganadoras  
✅ Sistema de validación que evita sobreescritura de celdas  
✅ Hover de colores personalizados según el jugador del turno  
✅ Mensaje animado de victoria o empate  
✅ Botón de **Reinicio** que limpia el tablero y reactiva el juego sin recargar la página  
✅ Código dividido en módulos (`game.js`, `dom.js`, `checkboard.js`, `main.js`) siguiendo el patrón **Factory Functions + IIFE**

---

## 🧩 Tecnologías utilizadas

| Tecnología | Uso principal |
|-------------|---------------|
| **HTML5** | Estructura del proyecto |
| **SASS (CSS3)** | Estilos modulares y animaciones |
| **JavaScript (ES6 Modules)** | Lógica de juego, DOM, eventos |
| **Vite** | Bundler y servidor de desarrollo |
| **GitHub Pages** | Despliegue del proyecto |

---

## 🗂️ Estructura del proyecto

```bash
📦 tres-en-raya
├── 📂 dist
│   ├── 📂 assets
│   │   ├── 📄 index-CREZWCEz.js
│   │   └── 📄 index-DE5opt7m.css
│   └── 📄 index.html
├── 📄 index.html
├── 📄 package-lock.json
├── 📄 package.json
├── 📂 src
│   ├── 📄 checkboard.js
│   ├── 📄 dom.js
│   ├── 📄 game.js
│   ├── 📄 main.js
│   └── 📂 sass
│       ├── 📄 _layout.scss
│       ├── 📄 _mixin.scss
│       ├── 📄 _variables.scss
│       └── 📄 styles.scss
└── 📄 vite.config.js

```
---

## ⚙️ Instalación y ejecución local

1. Clonar el repositorio:
   ```bash
    git clone https://github.com/jaickerlozano/juego-tres-en-raya.git
2. Entrar al directorio:
  ```bash
    cd juego-tres-en-raya
  ```

3. Instalar dependencias:
  ```bash
    npm install
  ```
4. Ejecutar en modo desarrollo:
```bash
npm run dev
 ```
5. Crear la versión optimizada:
```bash
npm run build
 ```
6. Desplegar manualmente o con:
 ```bash
npm run deploy
 ```
---

🎨 Mejoras y animaciones

✨ Animación de resultado:
El mensaje de victoria o empate aparece con una animación visual (fade-in o bounce) para mejorar la experiencia del jugador.

🎯 Hover dinámico:
Cada jugador tiene un color de hover distinto — azul para “X” y rojo para “O” — que indica claramente de quién es el turno.

♻️ Reinicio elegante:
El tablero se limpia y vuelve al estado inicial sin refrescar la página, manteniendo el flujo del juego.

💡 Aprendizajes aplicados

🧩 Modularización del código con ES Modules
⚙️ Principio de responsabilidad única (SRP)
🧠 Patrón Factory Functions
🎨 Manipulación avanzada del DOM
💾 Uso de inert para controlar estados interactivos
🚀 Configuración y despliegue con Vite + GitHub Pages

---

📸 Capturas del proyecto

![Vista del tablero](./src/img/tresenraya-preview.png)

---

👨‍💻 Autor

👤 Jaicker Lozano
📍 Desarrollador Full Stack en formación
- 💼 [LinkedIn](https://www.linkedin.com/in/jaicker-rafael-lozano-flores-970197264)
- 🐙 [GitHub](https://github.com/jaickerlozano)
- ✉️ Email: jlozano.dev@gmail.com

---

⭐ Si te gustó este proyecto…

Ayúdame dejando una estrella ⭐ en el repositorio
y compártelo en tus redes 🙌
