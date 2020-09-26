import React from 'react';
import ReactDOM from 'react-dom';

/**
 * React Component com o Formulário de nova venda.
 *
 * @param
 * @returns
 */
class ModalNewSale extends React.Component{
    constructor() {
        super();
    }
    render() {
        return(
        <div id="saleModal" className="modal fade" tabIndex="-1" role="dialog">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Nova Venda</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <p>Modal body text goes here.</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary">Salvar</button>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default ModalNewSale;
