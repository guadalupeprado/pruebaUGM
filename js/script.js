
const altoDisponible =
    window.innerHeight - 150;

const anchoDisponible =
    altoDisponible * 0.70;

const pageFlip = new St.PageFlip(
    document.getElementById("flipbook"),
    {
        width: anchoDisponible,
        height: altoDisponible,

        size: "stretch",

        minWidth: 280,
        maxWidth: 1200,

        minHeight: 400,
        maxHeight: 1400,

        showCover: true,

        usePortrait: true,

        drawShadow: true,

        maxShadowOpacity: 0.5,

        flippingTime: 700,

        mobileScrollSupport: false
    }
);
pageFlip.loadFromHTML(
    document.querySelectorAll(".page")
);

// Iniciar en la portada
setTimeout(() => {
    pageFlip.turnToPage(1);
}, 100);

// BOTÓN ANTERIOR
document.getElementById("btnPrev").onclick = () => {

    const pagina = pageFlip.getCurrentPageIndex();

    if (pagina > 1) {
        pageFlip.flipPrev();
    }

};

// BOTÓN SIGUIENTE
document.getElementById("btnNext").onclick = () => {

    const pagina = pageFlip.getCurrentPageIndex();

    if (pagina < 12) {
        pageFlip.flipNext();
    }

};

// CONTADOR Y BLOQUEO DE PÁGINAS BLANCAS
pageFlip.on("flip", (e) => {

    let pagina = e.data;

    // Página blanca inicial
    if (pagina === 0) {

        setTimeout(() => {
            pageFlip.turnToPage(1);
        }, 10);

        return;
    }

    // Página blanca final
    
    if (pagina === 13) {

        setTimeout(() => {
            pageFlip.turnToPage(12);
        }, 10);

        return;
    }

    document.getElementById("paginaActual").innerText =
        `Página ${pagina} de 12`;

});

// PANTALLA COMPLETA
const fullscreenBtn =
    document.getElementById("fullscreen");

if (fullscreenBtn) {

    fullscreenBtn.onclick = () => {

        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
        } else {
            document.exitFullscreen();
        }

    };

}

// ZOOM
document.getElementById("zoomIn").style.display = "none";
document.getElementById("zoomOut").style.display = "none";