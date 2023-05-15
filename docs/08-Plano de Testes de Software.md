# Plano de Testes de Software


> **Os requisitos para realização dos teste de software são:** 
>
> - O software precisa estar com o front-end funcional.
> - O software precisa que o back-end esteja recebendo os inputs do front-end. 
> - O software precisa que o back-end esteja registrando os dados inputados em um banco de dados.


Os testes funcionais a serem realizados na aplicação são descritos a seguir:

|  Caso de teste | CT-01- Cadastramento de estacionamento  |
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



