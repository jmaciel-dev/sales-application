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
    sum(sales) {
        let sum = 0;
        let total = '';
        sales.forEach((sale) => {
            sum += parseFloat(sale.price);
        });
        if (sum % 1 == 0) {
            total = `${sum},00`;
        }else {
            total = sum.toLocaleString();
        }
        return total;
    }
    render() {
        return(
            <h4>Total: R$ {this.sum(this.props.sales)}</h4>
        );
    }
}

export default SaleTotal;
