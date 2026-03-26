Para usar o React diretamente em um arquivo HTML sem precisar instalar dezenas de ferramentas no computador, 
nós utilizamos links de CDN para importar três bibliotecas fundamentais: o React (o núcleo do framework), 
o React DOM (para fazer o React interagir com o HTML) e o 
Babel (um tradutor que converte a sintaxe JSX para um JavaScript que os navegadores consigam entender)

Abaixo está um exemplo didático de um arquivo index.html funcional:

<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Meu Primeiro React via CDN</title>
    
    <!-- 1. Importando o React via CDN -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/react/18.2.0/umd/react.production.min.js"></script>
    
    <!-- 2. Importando o React DOM via CDN -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/react-dom/18.2.0/umd/react-dom.production.min.js"></script>
    
    <!-- 3. Importando o Babel via CDN para traduzir o JSX -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/7.21.4/babel.min.js"></script>
</head>
<body>

    <!-- Esta é a div vazia onde o React vai injetar toda a aplicação -->
    <div id="root"></div>

    <!-- Nosso código React precisa do type="text/babel" para ser traduzido -->
    <script type="text/babel">
        
        // Criando um Componente React simples usando JSX
        function MeuComponente() {
            // A função retorna o HTML misturado com JS (JSX)
            const nome = "Mundo";
            return (
                <div>
                    <h1>Olá, {nome}!</h1>
                    <p>Este é um componente React renderizado via CDN.</p>
                </div>
            );
        }

        // Selecionando a div "root" no HTML
        const container = document.getElementById('root');
        
        // Inicializando o React DOM na div e renderizando o nosso componente
        const root = ReactDOM.createRoot(container);
        root.render(<MeuComponente />);

    </script>

</body>
</html>


O que acontece nesse arquivo?
O HTML carrega vazio, contendo apenas a <div id="root"></div>

As CDNs baixam o React, o React DOM e o Babel para o navegador do usuário

O Babel lê o script, percebe a sintaxe especial (JSX) dentro do return da função MeuComponente e a transforma em JavaScript puro

O ReactDOM.createRoot pega o nosso componente e o injeta dentro da <div id="root">, fazendo o texto aparecer na tela