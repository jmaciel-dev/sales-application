<!DOCTYPE html>
<html lang="pt-BR">
    <head>
        <meta charset="utf-8">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <title>Vendas</title>
        <link rel="stylesheet" href="{{ asset( 'css/app.css' )}}">
        <style>
            body {
                padding: 20px;
            }
            .navbar {
                margin-bottom: 20px;
            }
        </style>
    </head>
    <body>
            @component( 'navbar', [ 'current' => $current ] )

            @endcomponent
            <main role="main">
                @hasSection( 'body' )
                    @yield( 'body' )
                @endif
            </main>
            
        <script src="{{ asset( 'js/app.js' )}}"type="text/javascript"></script>
        @hasSection( 'javascript' )
            @yield( 'javascript' )
        @endif
    </body>
</html>
