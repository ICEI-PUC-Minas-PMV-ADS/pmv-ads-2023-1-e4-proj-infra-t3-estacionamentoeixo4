# Plano de Testes de Software


> **Os requisitos para realização dos teste de software são:** 
>
> - O software precisa estar com o front-end funcional.
> - O software precisa que o back-end esteja recebendo os inputs do front-end. 
> - O software precisa que o back-end esteja registrando os dados inputados em um banco de dados.


Os testes funcionais a serem realizados na aplicação são descritos a seguir:

|  Caso de teste | CT-01- Cadastro de estacionamento  |
| :------------ | :------------ |
| **Requisito Associado**  |  RF-03 O sistema deve permitir ao administrador de estacionamento realizar um cadastro, informando apenas nome fantasia, CNPJ, e-mail e senha na aplicação Web. |
| **Objetivo do teste**  |  Verificar se ao inputar os dados na página de cadastro, os dados serão aramazenados no banco de dados. |
|  **Critérios de Êxito** | O banco de dados deve conter todos os dados do cadastro preenchidos conforme a página de login.  |


|  Caso de teste | CT-02- Login da aplicação  |
| :------------ | :------------ |
| **Requisito Associado**  |  RF-04 O sistema deve permitir ao administrador que tem cadastro fazer o login na aplicação Web. |
| **Objetivo do teste**  |  Verificar na página de login, se após inserir os dados do administrador, ele tem acesso ao sistema de controle de estacionamento. |
|  **Critérios de Êxito** | O administrsdor deve ser capaz de visualizar que sua conta foi acessada com sucesso.  |


|  Caso de teste | CT-03- Vagas disponíveis  |
| :------------ | :------------ |
| **Requisito Associado**  |  RF-08 O sistema deve permitir ao administrador informar quantas vagas possui o seu estacionamento, bem como o valor por hora e/ou tipo de veículo. |
| **Objetivo do teste**  | Verificar na página de consultar, quantas vagas estão disponíveis e seus respectivos valores. |
|  **Critérios de Êxito** | Exibir para o administrador as informações sobre quantidade de vagas e valores. |


|  Caso de teste | CT-04- Status de vagas  |
| :------------ | :------------ |
| **Requisito Associado**  |  RF-11 O sistema deve permitir ao administrador visualizar o status das vagas cadastradas para o seu estacionamento. |
| **Objetivo do teste**  |  Verificar na página de informações sobre o status de vagas disponíveis. |
|  **Critérios de Êxito** |O administrador deve ser capaz de controlar a disponibilidade de vagas. |


|  Caso de teste | CT-05- Monitoramento de vagas  |
| :------------ | :------------ |
| **Requisito Associado**  |  RF-12 O sistema deve permitir ao administrador acompanhar o andamento das reservas atuais e programadas. |
| **Objetivo do teste**  | Verificar na página de consultar, o andamento das reservas atuais e programadas. |
|  **Critérios de Êxito** | Exibir as reservas atuais e programadas.|


|  Caso de teste | CT-06- Cadastro de usuário  |
| :------------ | :------------ |
| **Requisito Associado**  |  RF-01 O sistema deve permitir ao cliente a criação de um cadastro, informando apenas nome, e-mail e senha, no aplicativo mobile.|
| **Objetivo do teste**  | Verificar na página de menu do usuário, as informações corretas. |
|  **Critérios de Êxito** | Acessar a conta do usuário com sucesso.|


|  Caso de teste | CT-07- Cadastro de veículo  |
| :------------ | :------------ |
| **Requisito Associado**  |  RF-01 O sistema deve permitir ao cliente a criação do cadastro do seu veículo, informando placa e modelo no aplicativo mobile.|
| **Objetivo do teste**  | Verificar na página *Veículos* o cadastramento do veículo. |
|  **Critérios de Êxito** | Verificar o cadastro do veículo.|


|  Caso de teste | CT-08- Veículo cadastrado  |
| :------------ | :------------ |
| **Requisito Associado**  |  RF-02 O sistema deve permitir ao cliente a verificação do cadastro do seu veículo, mostrando a placa e modelo no aplicativo mobile.|
| **Objetivo do teste**  | Verificar na página *Veículos* o cadastramento do veículo. |
|  **Critérios de Êxito** | Verificar o cadastro do veículo.|


|  Caso de teste | CT-09- Cadastro de reserva  |
| :------------ | :------------ |
| **Requisito Associado**  |  RF-02 O sistema deve permitir ao cliente a realização do cadastro da reserva.|
| **Objetivo do teste**  | Verificar na página *Reservas*, o cadastramento de reserva. |
|  **Critérios de Êxito** | Verificar o cadastro da reserva.|


|  Caso de teste | CT-10- Visualização da reserva  |
| :------------ | :------------ |
| **Requisito Associado**  |  RF-02 O sistema deve permitir ao cliente a visualização da reserva.|
| **Objetivo do teste**  | Verificar na página *Histórico*, o cadastramento de reserva. |
|  **Critérios de Êxito** | Verificar a reserva e, andamento.|

|  Caso de teste | CT-11- Busca por estacionamentos próximos  |
| :------------ | :------------ |
| **Requisito Associado**  |  RF-06 O sistema deve apresentar um mecanismo de busca que permita ao cliente localizar estacionamentos cadastrados que possuam vagas para estacionamento imediato de acordo com sua localização.|
| **Objetivo do teste**  | Verificar na página *Busca por estacionamentos*, se foram apresentados os estacionametos mais próximos ao endereço informado. |
|  **Critérios de Êxito** | Verificar a lista de estacionamentos exibida.|

