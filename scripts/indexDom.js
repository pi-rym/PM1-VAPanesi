// instancia de repository

const actividad = new Repository ();

//funcion conversora: convierte los elementos de js a elementos html

const convertirAHtml = (activity) => {
    const { id, title, description, imgUrl } = activity;
    
    const contenedor = document.createElement("div");
    contenedor.classList.add("divActividad");
    
    const titulo = document.createElement("h3");
    titulo.innerHTML = title;
    titulo.classList.add("tituloActividad");
    
    const desarrolloActv = document.createElement("p");
    desarrolloActv.innerHTML = description;
    desarrolloActv.classList.add("textoActividad");
    
    const imagen = document.createElement("img");
    imagen.src = imgUrl;
    imagen.alt = titulo;
    imagen.classList.add("imagenActividad");
    
    const buttonHtml = document.createElement("button");
    buttonHtml.innerHTML = "borrar";
    buttonHtml.id = `eliminar-id-num ${id}`;
    buttonHtml.classList.add("botonBorrar");
    
    contenedor.appendChild(titulo);
    contenedor.appendChild(desarrolloActv);
    contenedor.appendChild(imagen);
    contenedor.appendChild(buttonHtml);
    
    buttonHtml.addEventListener("click", () => funcionHandlerDelete(id));

    return contenedor;
};

function funcionHandlerDelete(id) {
    actividad.deleteActivity(id);
    agregarActAlContenedor();
};

//funcion integradora

const agregarActAlContenedor = () => {
    const container = document.getElementById("divFinal");
    container.innerHTML = "";

    const actividades = actividad.getAllActivities();
    
    const elementosHTML = actividades.map((activity) => convertirAHtml(activity));
    
    elementosHTML.forEach(elemento => {
        container.appendChild(elemento);
    });
};

//funcion handler

function funcionHandler(event) {
    event.preventDefault();

    const nombreAct = document.getElementById("idNombre");
    const nombreDesc = document.getElementById("idDescrip");
    const nombreImg = document.getElementById("idImg");
    
    const valorAct = nombreAct.value;
    const valorDesc = nombreDesc.value;
    const valorImg = nombreImg.value;
    
    
    if (!valorAct || !valorDesc || !valorImg) {
        alert('Por favor, complete todos los campos.');
        return;
    };
    
    actividad.createActivity(valorAct, valorDesc, valorImg);

    nombreAct.value = "";
    nombreDesc.value = "";
    nombreImg.value = "";

    agregarActAlContenedor();

};

const boton = document.getElementById("boton-espe");
boton.addEventListener("click", funcionHandler);
