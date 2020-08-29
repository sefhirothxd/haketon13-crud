class Modal {
    constructor(elemnt, objCb = {}) {
        this.elemnt = elemnt;
        this.btnClose = this.elemnt.querySelector('#js_btn-x');
        this.btnAceptar = this.elemnt.querySelector('#btn-guardar');
        this.btnCancelar = this.elemnt.querySelector('#btn-cancelar');

        this.btnClose.onclick = () => {
            this.cerrar();
        };
        this.btnAceptar.onclick = () => {
            objCb.aceptar();
        };
        this.btnCancelar.onclick = () => {
            objCb.cancelar();
        };

        window.onclick = function(event) {
            if (event.target == elemnt) {
                elemnt.classList.toggle('is-active');
            }
        }
    }

    open() {
        this.elemnt.classList.toggle('is-active');
    }
    cerrar() {
        this.elemnt.classList.toggle('is-active');
    }
    cancelar() {
        this.elemnt.classList.toggle('is-active');
    }
}

export default Modal;