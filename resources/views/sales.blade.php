@extends( 'layouts.app', [ 'current' => 'vendas' ] )

@section( 'body' )

            @if ( count( $sales ) )
                <div class="card mb-4 box-shadow">
                    <div class="card-header">
                        <h4 class="my-0 font-weight-normal">Venda N° xx</h4>
                    </div>
                    <div class="card-body">
                        <h1 class="card-title pricing-card-title">$0 <small class="text-muted">/ mo</small></h1>
                        <ul class="list-unstyled mt-3 mb-4">
                              <li>10 users included</li>
                              <li>2 GB of storage</li>
                              <li>Email support</li>
                              <li>Help center access</li>
                        </ul>
                        <button type="button" class="btn btn-lg btn-block btn-outline-primary">Sign up for free</button>
                    </div>
                </div>
            @else

            @endif

<div class="card border">
    <div class="card-body">

    </div>
    <div class="card-footer">
        <button type="button" class="btn btn-sm btn-primary" role="button" onclick="novoProduto()">Nova Venda</button>
    </div>
</div>
<div class="modal" tabindex="-1" role="dialog" id="dlgProdutos">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <form class="form-horizontal" id="formProduto">
                <div class="modal-header">
                    <h5 class="modal-title">Nova Venda</h5>
                </div>
                <div class="modal-body">
                    <input type="hidden" id="id" class="form-control">
                    <div class="form-group">
                        <label for="nomeProduto" class="control-label">Nome do produto</label>
                        <div class="input-group">
                            <input type="text" class="form-control" id="nomeProduto" placeholder="Nome do produto">
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="precoProduto" class="control-label">Preço</label>
                        <div class="input-group">
                            <input type="number" class="form-control" id="precoProduto" placeholder="Preço do produto">
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="quantidadeProduto" class="control-label">Quantidade</label>
                        <div class="input-group">
                            <input type="number" class="form-control" id="quantidadeProduto" placeholder="Quantidade do produto">
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="departamentoProduto" class="control-label">Departamento do produto</label>
                        <div class="input-group">
                            <select class="form-control" id="departamentoProduto">

                            </select>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="submit" class="btn btn-primary">Salvar</button>
                    <button type="cancel" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                </div>
            </form>
        </div>
    </div>
</div>
@endsection
@section( 'javascript' )
<script type="text/javascript">

    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': "{{ csrf_token() }}"
        }
    });

    function novoProduto() {
        $( '#id' ).val( '' );
        $( '#nomeProduto' ).val( '' );
        $( '#precoProduto' ).val( '' );
        $( '#quantidadeProduto' ).val( '' );
        $( '#dlgProdutos' ).modal( 'show' );
    }
    function carregarCategorias() {
        $.getJSON( '/api/categorias', ( data ) => {
            for (var i = 0; i < data.length; i++) {
                var opcao = `<option value="${data[i].id}">${data[i].name}</option>`;
                $( '#departamentoProduto' ).append( opcao );
            };
        } );
    }
    function carregarProdutos() {
        $.getJSON( '/api/produtos', ( produtos ) => {
            for (var i = 0; i < produtos.length; i++) {
                var linha = montarLinha( produtos[i] );
                $('#tabelaProdutos>tbody').append( linha );
            };
        } );
    }
    function montarLinha( p ) {
        //console.log( opcao );
        return `<tr>
                    <td>${ p.id }</td>
                    <td>${ p.name }</td>
                    <td>${ p.stock }</td>
                    <td> R$ ${ p.price }</td>
                    <td>${ p.category_id }</td>
                    <td>
                    <button type="button" class="btn btn-sm btn-primary" onclick="editar(${ p.id })">Editar</button>
                    <button type="button" class="btn btn-sm btn-danger" onclick="apagar(${ p.id })">Apagar</button>
                    </td>
                </tr>`;
    }
    function criarProduto() {
        var prod = {
            name: $( '#nomeProduto' ).val(),
            price: $( '#precoProduto' ).val(),
            stock: $( '#quantidadeProduto' ).val(),
            category_id: $( '#departamentoProduto' ).val()
        }
        $.post('/api/produtos', prod, ( data ) => {
            var produto = JSON.parse( data );
            var linha = montarLinha( produto );
            $('#tabelaProdutos>tbody').append( linha );
        } );
    }
    function salvarProduto() {
        var prod = {
            id: $( '#id' ).val(),
            name: $( '#nomeProduto' ).val(),
            price: $( '#precoProduto' ).val(),
            stock: $( '#quantidadeProduto' ).val(),
            category_id: $( '#departamentoProduto' ).val()
        }
        $.ajax( {
            type: 'PUT',
            url: `/api/produtos/${ prod.id }`,
            context: this,
            data: prod,
            success: ( data ) => {
                var prod = JSON.parse( data );
                var linhas = $( '#tabelaProdutos>tbody>tr' );
                var e = linhas.filter( ( i, element ) => {
                    return element.cells[0].textContent == prod.id;
                } );
                if ( e ) {
                    e[0].cells[0].textContent = prod.id;
                    e[0].cells[1].textContent = prod.name;
                    e[0].cells[2].textContent = prod.stock;
                    e[0].cells[3].textContent = `R$ ${ prod.price }`;
                    e[0].cells[4].textContent = prod.category_id;
                }
            },
            error: ( err ) => {
                console.log( err );
            }
        } );
    }
    function editar( id ) {
        $.getJSON( `/api/produtos/${ id }`, ( data ) => {
            $( '#id' ).val( data.id );
            $( '#nomeProduto' ).val( data.name );
            $( '#precoProduto' ).val( data.price );
            $( '#quantidadeProduto' ).val( data.stock );
            $( '#departamentoProduto' ).val( data.category_id );
            $( '#dlgProdutos' ).modal( 'show' );
        } );
    }
    function apagar( id ) {
        $.ajax( {
            type: 'DELETE',
            url: `/api/produtos/${ id }`,
            context: this,
            success: () => {
                var linhas = $( '#tabelaProdutos>tbody>tr' );
                var e = linhas.filter( ( i, element ) => {
                    return element.cells[0].textContent == id;
                } );
                if ( e ) e.remove();
            },
            error: ( err ) => {
                console.log( err );
            }
        } );
    }
    $('#formProduto').submit( ( e ) => {
        e.preventDefault();
        if ( $( '#id' ).val() == '' ) {
            criarProduto();
        } else {
            salvarProduto();
        }
        $( '#dlgProdutos' ).modal( 'hide' );
    } );
    $( () => {
        carregarCategorias();
        carregarProdutos();
    } );
</script>
@endsection
