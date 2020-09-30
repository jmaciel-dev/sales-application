import React from 'react';
import ReactDOM from 'react-dom';
import Utils from '../Utils';

/**
 * React Component com o Formulário de nova venda.
 *
 * @param
 * @returns
 */
class ModalNewSale extends React.Component{
    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.getAdress(e.target.value);
    }

    /**
     * Método que retorna o endereço a partir de um cep digitado.
     * @param  {[string]} cep [description]
     * @return {[Object]}     [description]
     */
    getAdress(cep) {
        const appKey = 'BqDCl6W0dNI3pGOG4AJFUZLB8E8w7yid';
        const appSecret = 'Vg5V5kntEQR3pNuyhsVY0KiuGV8L2sRTyWEE69smqAggniUh';
        let address = '';
        if (cep.length == 8) {
            let url = `https://webmaniabr.com/api/1/cep/${cep}/?app_key=${appKey}&app_secret=${appSecret}`;
            address = Utils.getUrl(url);
            console.log('getAdress if', cep, url);
        } else {
            console.log({
                appKey,
                appSecret,
                cep,
            });
        }
        console.log('getAdress if', cep, address);
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
                        <form>
                            <div className="form-group row">
                                <label className="col-sm-4 col-form-label" htmlFor="product-select">Produto*</label>
                                <div className="col-sm-8">
                                    <select className="form-control" id="product-select" required>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-4 col-form-label" htmlFor="provider-select">Fornecedor*</label>
                                <div className="col-sm-8">
                                    <select className="form-control" id="provider-select" required>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-4 col-form-label" htmlFor="sale-date">Data da venda*</label>
                                <div className="col-sm-8">
                                <input type="date" className="form-control" id="sale-date" required />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-4 col-form-label" htmlFor="sale-cep">CEP*</label>
                                <div className="col-sm-8">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="sale-cep"
                                    maxLength="8"
                                    required
                                    onChange={this.handleChange}
                                />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-4 col-form-label" htmlFor="sale-cep">UF</label>
                                <div className="col-sm-8">
                                <input type="text" className="form-control" id="sale-cep"  maxLength="8" required />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-4 col-form-label" htmlFor="sale-cep">Cidade</label>
                                <div className="col-sm-8">
                                <input type="text" className="form-control" id="sale-cep"  maxLength="8" required />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-4 col-form-label" htmlFor="sale-cep">Bairro</label>
                                <div className="col-sm-8">
                                <input type="text" className="form-control" id="sale-cep"  maxLength="8" required />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-4 col-form-label" htmlFor="sale-cep">Endereço</label>
                                <div className="col-sm-8">
                                <input type="text" className="form-control" id="sale-cep"  maxLength="8" required />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-4 col-form-label" htmlFor="sale-cep">Número*</label>
                                <div className="col-sm-8">
                                <input type="text" className="form-control" id="sale-cep"  maxLength="8" required />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-4 col-form-label" htmlFor="sale-cep">Complemento</label>
                                <div className="col-sm-8">
                                <input type="text" className="form-control" id="sale-cep"  maxLength="8" />
                                </div>
                            </div>
                        </form>
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
