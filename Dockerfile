# Etapa 1: Instalação de dependências e build do projeto
FROM node:18-alpine AS builder

# Definir diretório de trabalho
WORKDIR /app

# Instalar pnpm globalmente
RUN npm install -g pnpm

# Copiar arquivos de dependências
COPY package.json pnpm-lock.yaml ./

# Instalar dependências com pnpm (apenas dependências necessárias para o build)
RUN pnpm install --frozen-lockfile

# Copiar o restante do projeto
COPY . .

# Build da aplicação Next.js
RUN pnpm run build

# Etapa 2: Imagem final para produção
FROM node:18-alpine AS runner

# Instalar pnpm globalmente
RUN npm install -g pnpm

# Configurar diretório de trabalho
WORKDIR /app

# Copiar apenas os arquivos necessários para produção
COPY --from=builder /app/.next .next
COPY --from=builder /app/node_modules node_modules
COPY --from=builder /app/package.json ./
COPY --from=builder /app/public ./public

# Variáveis de ambiente padrão (substituir conforme necessário)
ENV NODE_ENV=production
ENV PORT=3000

# Expor porta padrão do Next.js
EXPOSE 3000

# Comando para iniciar o servidor Next.js em modo produção
CMD ["pnpm", "start"]
