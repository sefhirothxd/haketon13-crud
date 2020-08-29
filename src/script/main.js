import Modal from './modal.js';
import initCard from "./card.js";

function main() {
    let btnModal = document.querySelector('#btn-open_modal');
    let btnPlus = document.querySelector('#btn-plus');
    btnModal.onclick = function() {
        let modal = new Modal(document.getElementById('container__modal'), {
            aceptar: function() {
                initCard(modal);
                btnModal.style.display = 'none'
                btnPlus.style.display = 'inline-block'
            },
            cancelar: function() {
                modal.cerrar();
            },
        });
        modal.open();
    };
    btnPlus.onclick = function() {
        let modal = new Modal(document.getElementById('container__modal'), {
            aceptar: function() {
                initCard(modal);


            },
            cancelar: function() {
                modal.cerrar();
            },
        });
        modal.open();
    };
}

main();