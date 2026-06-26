const catalogo =
document.getElementById(
    "catalogo"
);

const buscador =
document.getElementById(
    "buscarRevista"
);

function renderRevistas(lista){

    catalogo.innerHTML = "";

    lista.forEach(revista=>{

        const card =
        document.createElement("div");

        card.className =
        "revista-card";

        card.innerHTML = `
            <img
                src="${revista.portada}"
                alt="${revista.titulo}">

            <h2>
                ${revista.titulo}
            </h2>

            <span>
                ${revista.edicion}
            </span>

            <small>
                ${revista.categoria}
            </small>
        `;

        card.addEventListener(
            "click",
            ()=>{

                parent.document
      .getElementById("visor")
      .src = ruta;

            }
        );

        catalogo.appendChild(card);

    });

}

renderRevistas(revistas);

buscador.addEventListener(
    "input",
    ()=>{

        const texto =
        buscador.value
        .toLowerCase();

        const filtradas =
        revistas.filter(r=>

            r.titulo
            .toLowerCase()
            .includes(texto)

            ||

            r.categoria
            .toLowerCase()
            .includes(texto)

        );

        renderRevistas(
            filtradas
        );

    }
);

window.addEventListener("load", () => {

    setTimeout(() => {

        const splash =
        document.getElementById("splash");

        splash.style.opacity = "0";

        setTimeout(() => {

            splash.remove();

        }, 1000);

    }, 1200);

});
function volver(){

    parent.document
          .getElementById("visor")
          .src = "launcher.html";

}