class FPSViewer {
    constructor(position) {
        this.position = position;
    }

    //No toma el teclado
    keyboardEvent() {}
    //No se mueve en el canvas
    update() {}
    // Se pinta un texto con los FPS
    draw(delta, ctx) {
        //Cálculo de FPS
        const fps = (1 / delta).toFixed(0);
        //Indicar fuente y tamaño
        ctx.font = '20px Consolas';
        //Pintar FPS
        ctx.fillStyle = '#000';
        ctx.fillText(`FPS: ${fps}`, this.position.x, this.position.y);
    }
}
