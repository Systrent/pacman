window.onload = () => {
    //Obtetner el canvas
    const canvas = document.getElementById('canvas');
    //Darle un contexto al canvas
    const ctx = canvas.getContext('2d');

    //Crear un rectángulo
    // ctx.fillStyle = 'blue';
    // ctx.fillRect(80, 45, 100, 240);

    //Lista de instancias de Pacman's
    let actors = [new FPSViewer({ x: 8, y: 25 }), new Pacman({ x: 100, y: 200 }, '#ffd117')];

    //Parte del renderizado
    let lastFrame = 0;
    const render = (time) => {
        // Las funciones van a ser dependientes de delta
        let delta = (time - lastFrame) / 1000;
        lastFrame = time;

        //* Pasos:
        // - Por cada Pacman obtengo una nueva posición
        actors.forEach((actor) => actor.update(delta));
        // - Borro todo el canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        // - Por cada Pacman dibujo la nueva posición, y dirección y movimiento de la boca
        actors.forEach((actor) => actor.draw(delta, ctx));
        // Método Recursivo
        window.requestAnimationFrame(render);
    };

    //Permite renderizar
    window.requestAnimationFrame(render);

    //Obtener tecla por medio del DOM
    document.body.addEventListener('keydown', (e) => {
        // - Controla la dirección de todos los Pacman
        actors.forEach((actor) => actor.keyboardEvent(e.key));
    });
};
