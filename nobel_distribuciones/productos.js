const productos = {
        royal: [
        { nombre: "Alimento Dog", img: "img/productos/vitalex1.jpg" }
    ],

    recamier: [
        { nombre: "Shampoo Recamier", img: "img/productos/recamier1.jpg" },
        { nombre: "Acondicionador Recamier", img: "img/productos/recamier2.jpg" }
    ],

    vitalex: [
        { nombre: "Proteína Vitalex", img: "img/productos/vitalex1.jpg" }
    ],

    takis: [
        { nombre: "Takis Fuego", img: "img/productos/takis1.jpg" }
    ],

    achiras: [
        { nombre: "Achiras Tradicional", img: "img/productos/achiras1.jpg" }
    ]
};

const logos = {
    royal: "img/nobel_y_royal.png",
    takis: "img/nobel_y_takis.png",
    recamier: "img/nobel_y_recamier.png",
    vitalex: "img/nobel_y_vitalex.png",
    achiras: "img/nobel_y_achiras.png"
};

const params = new URLSearchParams(window.location.search);
const marca = params.get("marca");

document.getElementById("logoMarca").src = logos[marca];
document.getElementById("tituloMarca").innerText = "Productos " + marca.toUpperCase();

const contenedor = document.getElementById("contenedorProductos");

productos[marca].forEach(p => {
    contenedor.innerHTML += `
        <div class="producto-card">
            <img src="${p.img}">
            <h3>${p.nombre}</h3>
        </div>
    `;
});
