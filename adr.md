# Architecture Decision Record

Documentar as decisões arquiteturais importantes, o contexto em que foram tomadas, e as alternativas consideradas.

---

# ADR [Número]: [Título da Decisão]

## Contexto

[Descreva o problema ou necessidade técnica que levou à decisão.]

## Decisão

[Declare a decisão tomada.]

## Alternativas Consideradas

- [Opção 1]: [Prós e contras]
- [Opção 2]: [Prós e contras]

## Consequências

[Impacto esperado, tanto positivo quanto negativo.]

---

# ADR 1: Soft-delete para Tasks

## Contexto

Foi requisitado pelo PO que as tarefas deletadas não fossem removidas do banco de dados, mas sim marcadas como deletadas.

## Decisão

Utilizar o middleware do prisma para automatizar a deleção de tarefas.

## Alternativas Consideradas

- Utilizar @deletedAt para marcar a data de deleção da tarefa (Prisma removeu essa opção)
- Utilizar um campo booleano para marcar a tarefa como deletada (Usando timestamp ganhamos uma informação a mais)

## Consequências

Estamos usando o `Prisma.$use` para criar middlewares nas funções de delete. Uma consequência é a escalabilidade, pois precisamos criar a lógica para cada `model` que queremos adicionar o soft-delete.

---

# ADR 2: Sessão ou Login?

## Contexto

Precisamos de um sistema de autenticação para que o sistema suporte multiplos usuários.

## Decisão

Criar uma tabela de `sessions` para que cada usuário possa ter uma sessão.
A sessão é gerada pelo navegador (cookies) e é usada para identificar o usuário.

## Alternativas Consideradas

- Criar uma tabela de `users` para que cada usuário possa ter um login. (Não é necessário para o MVP)
- Criar uma tabela de `tokens` para que cada usuário possa ter um token. (Não é necessário para o MVP)
- Implementar Passport para autenticação. (Não é necessário para o MVP)
- Utilizar AuthJs (NextAuth) com Keycloak. (Não é necessário para o MVP)

## Consequências

- Facilidade de implementação para o MVP.
- Proximidade para adicionar autenticação futura.

---

# ADR 3: Modelagem Inicial do Banco de Dados para TODO list (MVP1)

## Contexto

O projeto precisa suportar tarefas com título e status.
As tarefas podem ser atualizadas e deletadas.

## Decisão

Criar uma tabela `tasks` com colunas `id`, `title`, `status`, `createdAt`, `updatedAt` e `deletedAt`.
As tarefas são `soft-delete`, ou seja, elas não são deletadas permanentemente.

## Alternativas Consideradas

- Modelar com subtarefas desde o início (complexidade adicional desnecessária).
- Atribuir um responsável para cada tarefa (não é necessário para o MVP).

## Consequências

- Facilidade de implementação para o MVP.
- Será necessário adicionar relações/colunas futuras para suportar novas funcionalidades.

---
