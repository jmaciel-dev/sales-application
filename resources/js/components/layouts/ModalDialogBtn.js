import React from 'react';
import ReactDOM from 'react-dom';

/**
 * React Component com o botão de abrir o modal de nova venda.
 *
 * @param
 * @returns
 */
class ModalDialogBtn extends React.Component {
    constructor() {
        super();
    }

    render() {
        return(
              <div className="card-header">
                  <div className="row align-items-center justify-content-end">
                      <div className="col-4">
                          <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#saleModal">
                              Add
                          </button>
                      </div>
                  </div>
            </div>
        );
    }
}

export default ModalDialogBtn;
