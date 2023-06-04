# Programação de Funcionalidades

# Implementação da Web API Rest, aplicativo mobile e outras configurações

## Rotas
<img src="img/rota_auth.png"/>

`A rota da Auth foi criada para complementar a autenticação feita pelo Front End em Firebase
`

<img src="img/rota_cliente.png"/>
`A rota Cliente foi criada para lidar com a transação dos dados de um dos usuários finais`

<img src="img/rota_veiculo.png"/>

`A rota Veiculo foi criada para lidar com a transação dos dados relacionado ao veículo do usuário 
`

<img src="img/rota_estacionamento.png"/>

`A rota Estacionamento foi criada para lidar com a transação dos dados relacionado pela reserva feita pelo cliente 
`

<img src="img/rota_adm.png"/>

`A rota Administrador foi criada para lidar com a transação dos dados relacionado a um dos usuários finais 
`

<img src="img/rota_reserva.png"/>

`A rota Reserva foi criada para lidar com as transaçôes dos dados feitas pelos usuarios finais atráves de microservicos de mensageria em busca de escalabilidade e segurança 
`


## Implementação das funcionalidades que envolvem o banco de dados NoSQL

<img src="img/redis.png"/>

`
  O grupo decidiu seguir com o Redis pela flexibilidade de um banco NoSQl e também por resolver o problema de cache com os dados de autenticação dos usuários   
`

## Implementação da autenticação
`
O Firebase Authentication foi utilizado para autenticar usuários no aplicativo:
`
![image_firebase](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e4-proj-infra-t3-estacionamentoeixo4/assets/88891675/a21306ba-4f20-43b4-a2bd-0351ecb59903)

# Implementação do banco de dados SQL

`O grupo optou por utilizar o PostgreSQL como banco de dados relacional. Na imagem abaixo é possível visualizar algumas tabelas do banco:`

![image_bancoDeDados](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e4-proj-infra-t3-estacionamentoeixo4/assets/88891675/3b9bd60a-e7f0-4291-bd71-24741bdf23f9)
