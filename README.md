# Stock Demo
## Pre-requisitos
 - Ter Node instalado na versão mais recente
 - Ter Filemake PRO/Server 17 para servir como base de dados
 - Portas que devem estar liberadas: 3001 e 3002 (front-end e back-end)

## Criando banco de dados mockup
 - Abra o Filemaker Pro 17 usando o arquivo `stock` da pasta `filemaker`
 - Faça share do banco de dados com seu Filemaker 17 Server
 - Defina um usuario e senha (recomendo usar o proprio admin)
 - Configure permissão de `fmrest` para o usuario que irá logar

## Configurando back-end
 - Entre na pasta `server/src/core`
 - Copie e cole `parameters.dist.js` alterando o nome para `parameters.js`
 - Entre no `parameters.js`
 - Configure `api` colocando o endpoint do Filemaker data api e o nome do banco de dados seguindo exemplo ja inserido.
 - Insira o usuario e senha com acesso `fmrest` dentro do auth

## Configurando front-end
 - Entre na pasta `client/src/core`
 - Copie e cole `parameters.dist.js` alterando o nome para `parameters.js`

## Iniciando server
 - Abra um terminal/cmd novo
 - Acesse a pasta `server`
 - Rode o comando npm start

## Iniciando client
 - Abra um terminal/cmd novo
 - Acesse a pasta `client`
 - Rode o comando npm start

## Detalhes da implementação
 - Foi utilizado React.js para o front-ent juntamente com Material-ui para visual
 - Utilizando o conceito de REST API foi construido um back-end para requisitar informações do banco de dados Filemaker
 - Foi desenvolvido uma tela para simular os usuarios do sistema com a opção de resgatar e contribuir na previdencia privada.
 - O resgatar basicamente te da duas opções a contribuição Parcial e Completa, sendo a complete motivo de cancelamento do plano deixando o usuario com status de cancelado
 - Foi implementado algumas regras em relação ao tipo de status que o cliente está para poder realizar o resgate e a contribuição
 - Foi implementado regra para periodo de carencia para poder resgatar
 - A opção de contribuição tambem te da duas opções, contribuição adicional e a contribuição normal.
 - Algumas implmentação e regras não foram feitas, como criação de um cliente, regra de resgate de contribuição normal 20% a cada 2 anos e quantas parcelas o cliente quer para o resgate.