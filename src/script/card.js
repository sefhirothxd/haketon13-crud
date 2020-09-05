import Modal from './modal.js';

export default function initCard(modal) {
    const form1 = document.querySelector('.js_form');
    const nombre = document.querySelector('#js_input_nombre');
    const apellido = document.querySelector('#js_input_apellidos');
    const telefono = document.querySelector('#js_input_telefono');
    const raza = document.querySelector('#js_input_raza');
    const pais = document.querySelector('#js_input_pais');
    const url = document.querySelector('#js_input_url');
    form1.onsubmit = function(e) {
        e.preventDefault();
        console.log(e.target[9].id);
        // if (e.target[9].id === 'btn-guardar') {
        console.log('submit!!!');
        inserDomCard(
            crearCard({
                nombre: nombre.value,
                apellido: apellido.value,
                telefono: telefono.value,
                raza: raza.value,
                pais: pais.value,
                img: url.value,
            })
        );
        form1.reset();
        modal.cerrar();
        // }
    };
}

function crearCard(values) {
    const { nombre, apellido, telefono, raza, pais, img } = values;
    const card = document.createElement('article');
    card.classList.add('card');
    card.innerHTML = `
    <img src="${img}" alt="">
    <div class="card-content">
    <h2>Nombre: ${nombre}</h2>
    <h2>Apellido: ${apellido}</h2>
    <h2>Telefono: ${telefono}</h2>
    <h2>Raza: ${raza}</h2>
    <h2>Pais: ${pais}</h2>
    </div>
    <div class="container-btn-modal">
    <button class="js_card_edit">Editar</button>
    <button class="js_card_delete">Eliminar</button></div>
`;
    card.querySelector('.js_card_edit').onclick = () => {
        editCard(card, values);
    };

    card.querySelector('.js_card_delete').onclick = () => {
        card.remove();
    };
    return card;
}

function editCard(card, values) {
    const form1 = document.querySelector('.js_form');
    const nombre = document.querySelector('#js_input_nombre');
    const apellido = document.querySelector('#js_input_apellidos');
    const telefono = document.querySelector('#js_input_telefono');
    const raza = document.querySelector('#js_input_raza');
    const pais = document.querySelector('#js_input_pais');
    const url = document.querySelector('#js_input_url');
    nombre.value = values.nombre;
    apellido.value = values.apellido;
    telefono.value = values.telefono;
    raza.value = values.raza;
    pais.value = values.pais;
    url.value = values.img;

    const modal = new Modal(document.querySelector('#container__modal'), {
        aceptar: function() {
            form1.onsubmit = (e) => {
                e.preventDefault();
                const nombre = document.querySelector('#js_input_nombre');
                const apellido = document.querySelector('#js_input_apellidos');
                const telefono = document.querySelector('#js_input_telefono');
                const raza = document.querySelector('#js_input_raza');
                const pais = document.querySelector('#js_input_pais');
                const img = document.querySelector('#js_input_url');
                card.innerHTML = `
                <img src="${img.value}" alt="">
                <div class="card-content">
                <h2>Nombre: ${nombre.value}</h2>
                <h2>Apellido: ${apellido.value}</h2>
                <h2>Telefono: ${telefono.value}</h2>
                <h2>Raza: ${raza.value}</h2>
                <h2>Pais: ${pais.value}</h2>
                </div>
                <div class="container-btn-modal">
                <button class="js_card_edit">Editar</button>
                <button class="js_card_delete">Eliminar</button></div>`;

                card.querySelector('.js_card_edit').onclick = () => {
                    editCard(card, values);
                };

                card.querySelector('.js_card_delete').onclick = () => {
                    card.remove();
                };
                form1.reset();
            };

            modal.cerrar();
        },
        cancelar: function() {
            console.log('precionando cancelar');
            modal.cerrar();
        },
    });
    modal.open();
}

function inserDomCard(node) {
    const container = document.getElementById('container-agregar');
    container.appendChild(node);
}