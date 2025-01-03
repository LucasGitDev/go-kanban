# Knowledge Base

**Propósito**: Registrar aprendizados, padrões, boas práticas e dicas úteis para o time.

## Convenções de Código

### Geral
- Faça um self-review do código antes de enviar um PR.
- Faça commits com frequência. Evite commits grandes.
- Use camelCase para variáveis e funções.
- Use PascalCase para componentes React.  
- Ao adicionar uma nova `env`, adicione no `.env.example`.
- Ao adicionar uma nova integração, adicione no documento relacionado.
- Verifique a formatação do código com `pnpm lint` antes de enviar um PR.

### Estrutura de Pastas
- **/src**: Código principal.
- **/src/components/internal/**: Componentes React de escopo global. 
- **/src/components/ui/**: Componentes React de escopo Shadcn.
- **/src/lib/**: Funções auxiliares.
- **/src/app/**: Páginas do Next.js.
- **/src/hooks/**: Hooks do React.
- **/src/stores/**: Stores do Zustand.
- **/src/types/**: Tipos do TypeScript.
- **/src/utils/**: Funções auxiliares.

## Configuração do Prisma
- Rodar `pnpm migrate` para aplicar migrações.
- Arquivo `.env` precisa conter a variável `DATABASE_URL`.  
- Migrations devem ter nomes descritivos e não devem ter mais de 3 por PR.
- Uma nova coluna não nula deve ter um valor padrão.

## Processos de Versionamento
- Usar (Convetional Commits)[https://www.conventionalcommits.org/en/v1.0.0/]
- Branchs seguirão padrão de nome [feature/refactor/bugfix/hotfix]/{cod-jira}
- Atualizar o CHANGELOG.md com as mudanças do PR.