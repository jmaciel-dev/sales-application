# sales-application
A application to manage sales.

TO DO
--------------------------------------------------------------------------------
SETUP LARAVEL + REACT INTEGRADO

1 - composer require laravel/ui - OK;

2 - php artisan ui react  OK;

3 - php artisan ui react --auth - Não é necessário;

4 - npm install && npm run dev -  OK

5 - Cria rota para a index ( react ) em money-control-api/routes/web.php OK

6 - Criar resources/views/index.blade.php com layout html básico de para a iniciar a aplicação react. OK

7 - http://localhost:8000/index -> Acessa a página index ( Havia um problema nos components Header, Body e Footer ) ok

8 - Criar resources/js/components/App.js para servir de base para os componentes react. ok

9 - npm run watch -> start o serviço watch que monitora as alterações dos arquivos react ok

--------------------------------------------------------------------------------

1: Separe a UI Em Uma Hierarquia De Componentes

 1.1 - SaleApp - Contém a totalidade do app; ok
 1.2 - SaleNavBar - navbar do app; ok
 1.3 - ModalDialogBtn - botão de ação para abrir o modal do formulário;
 1.4 - SaleTable - Contém tabela com a lista das vendas;
 1.5 - SaleRow - exibe os detalhes de uma venda;
 1.6 - SalesTotal - Exibe somátorio das vendas na lista;
 1.7 - ModalForm - Contém o formulário de venda;
 1.8 - ModalFormBtn - btão de salvar a venda;

 2: Crie Uma Versão Estática Em React

 1.1 - SaleApp - Contém a totalidade do app; ok
 1.2 - SaleNavBar - navbar do app; ok
 1.3 - ModalDialogBtn - botão de ação para abrir o modal do formulário; ok
 1.4 - SaleTable - Contém tabela com a lista das vendas; ok
 1.5 - SaleRow - exibe os detalhes de uma venda; ok
 1.6 - SalesTotal - Exibe somátorio das vendas na lista; ok
 1.7 - ModalNewSale - Contém o formulário de venda; ok
 1.8 - ModalFormBtn - btão de salvar a venda; ok

Passo 3: Identifique a Representação Mínima (mas completa) do State da UI

1 - Ele é recebido pelo pai via props? Se sim, provavelmente não é state.
2 - Ele se mantém inalterado ao longo do tempo? Se sim, provavelmente não é state.
3 - Ele pode ser computado através de qualquer outro state ou props do seu componente? Se sim, não é state.

States:

1 - salesTotal -> valor total que se altera conforme a quantidade de vendas;
2 - salesList -> Qtd de vendas que se altera conforme ação do usuário;
3 - address -> Endereço de entrega que se altera conforme ação do usuário;

Props:

products -> lista de produtos com nome e referência (ModalNewSale);
providers -> lista de fornecedores com nomes (ModalNewSale);

Passo 4: Identifique Onde o State Deve Ficar
States:
1 - salesTotal -> SaleApp;
2 - salesList -> SaleApp;
3 - address -> ModalNewSale;

Passo 5: Adicione o Fluxo de Dados Inverso  Em progresso
