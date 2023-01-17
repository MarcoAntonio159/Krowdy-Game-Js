let playerName = "";
let gameStarted = false;
let previousName = "";
let gameWon = false;

while (!gameStarted) {
    playerName = prompt("Bienvenido! ¿Cuál es tu nombre?");
    if (playerName === "") {
        alert("Por favor ingrese un nombre válido");
        continue;
    }
    let menuChoice = prompt(`Bienvenido ${playerName}!
    1. Cambiar de nombre
    2. Iniciar juego
    Por favor selecciona una opción:`);

    if (menuChoice === "1") {
        previousName = playerName;
        playerName = prompt("Por favor ingresa tu nuevo nombre:");
        if (playerName === previousName) {
            alert("No puedes usar el mismo nombre anterior, por favor ingresa uno nuevo");
            continue;
        }
        if (playerName === "") {
            alert("Por favor ingrese un nombre válido");
            continue;
        }
    } else if (menuChoice === "2") {
        gameStarted = true;
        alert("¡El juego ha comenzado!");
    }
}

while (gameStarted && !gameWon) {
    let scene1Choice = prompt(`Te encuentras en un bosque. Ves un camino a la izquierda y otro a la derecha.
    1. Tomar el camino de la izquierda
    2. Tomar el camino de la derecha
    3. Quedarte quieto
    Por favor selecciona una opción:`);
    if (scene1Choice === "1") {
        alert("Encuentras un río y encuentras un bote para cruzar. Continúas tu viaje.");
    } else if (scene1Choice === "2") {
        alert("Encuentras un acantilado empinado y te caes a tu muerte. Fin del juego.");
        gameStarted = false;
    } else if (scene1Choice === "3") {
        alert("Eres atacado por un animal salvaje y mueres. Fin del juego.");
        gameStarted = false;
    }
    let scene2Choice = prompt(`Te encuentras en una cueva. Hay una luz al fondo y un camino oscuro a la derecha.
    1. Ir hacia la luz
    2. Tomar el camino oscuro
    3. Esperar
    Por favor selecciona una opción:`);
    if (scene2Choice === "1") {
        alert("Encuentras un tesoro y ganas el juego!");
        gameWon = true;
    } else if (scene2Choice === "2") {
        alert("Te pierdes en la cueva y mueres de hambre. Fin del juego.");
        gameStarted = false;
    } else if (scene2Choice === "3") {
        alert("Te duermes y mueres de frío. Fin del juego.");
        gameStarted = false;
    }
    if (gameStarted && !gameWon) {
        let scene3Choice = prompt("Te encuentras en una villa.Hay una casa a la izquierda, una tienda al frente y una posada a la derecha. 1. Entrar a la casa 2. Entrar a la tienda 3. Entrar a la posada Por favor selecciona una opción: ");
        if (scene3Choice === "1") {
            alert("Te encuentras con un anciano que te ayuda a encontrar un camino para salir de la selva y ganas el juego!");
            gameWon = true;
        } else if (scene3Choice === "2") {
            alert("Te roban todo tu dinero y mueres de hambre. Fin del juego.");
            gameStarted = false;
        } else if (scene3Choice === "3") {
            alert("Te enfrentas a un asesino y mueres. Fin del juego.");
            gameStarted = false;
        }
    }
}

if (gameWon) {
    alert(`¡Felicidades ${ playerName }! Has ganado el juego.`);
} else {
    alert(`Lo siento ${ playerName }, has perdido el juego.`);
}