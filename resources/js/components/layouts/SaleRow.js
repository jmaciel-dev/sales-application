import React from 'react';
import ReactDOM from 'react-dom';

/**
 * React Component com as linhas da tabela vendas.
 *
 * @param
 * @returns
 */
class SaleRow extends React.Component {
    constructor() {
        super();
    }
    render() {
        const sale = this.props.sale;
        return(
            <tr>
                <td>{sale.name}</td>
                <td>{sale.price}</td>
                <td>{sale.provider}</td>
            </tr>
        );
    }
}

export default SaleRow;
