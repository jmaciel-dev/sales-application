import React from 'react';
import ReactDOM from 'react-dom';
import SaleRow from './SaleRow';

/**
 * React Component com a tabela de vendas.
 *
 * @param
 * @returns
 */
 class SaleTable extends React.Component {
     constructor() {
         super();
     }

     render() {
         const rows = [];
         this.props.sales.forEach((sale) => {
             rows.push(
                 <SaleRow
                 sale={sale}
                 key={sale.name}/>
             );
         });
         return (
               <div className="card-body">
                   <table className="table">
                       <thead>
                           <tr>
                              <th scope="col">Nome</th>
                              <th scope="col">Preço</th>
                              <th scope="col">Fornecedor</th>
                           </tr>
                       </thead>
                       <tbody>
                           {rows}
                       </tbody>
                 </table>
             </div>
         );
     }
 }

export default SaleTable;
