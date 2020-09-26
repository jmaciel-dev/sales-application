import React from 'react';
import ReactDOM from 'react-dom';

/**
 * React Component com a total de vendas.
 *
 * @param
 * @returns
 */
class SaleTotal extends React.Component {
    constructor() {
        super();
    }
    render() {
        return(
                <div className="card-footer">
                    <h4>Total: R$ 18,00</h4>
                </div>
        );
    }
}

export default SaleTotal;
