# Stage 1: Build the TypeScript application
# Usa un'immagine Node.js con supporto per TypeScript
FROM node:20-alpine AS builder

# Imposta la directory di lavoro all'interno del container
WORKDIR /app

# Copia i file di configurazione del progetto (package.json, package-lock.json)
# Questo permette a Docker di usare la cache per npm install se questi file non cambiano
COPY package.json package-lock.json ./

# Installa le dipendenze del progetto
# npm ci è più robusto per le build di CI/CD rispetto a npm install
RUN npm ci

# Copia il resto del codice sorgente nella directory di lavoro
COPY . .

# Compila l'applicazione TypeScript in JavaScript
# Assicurati che il tuo package.json abbia uno script 'build' che esegua la compilazione (es. 'tsc')
RUN npm run build

# Stage 2: Serve the application with a lightweight Node.js runtime
# Usa un'immagine Node.js più leggera per l'esecuzione finale
FROM node:20-alpine

# Imposta la directory di lavoro all'interno del container
WORKDIR /usr/src/app

# Copia i file JavaScript compilati e i nodi di produzione dalla fase di build
# Assicurati che la tua build TypeScript produca i file JS in una cartella 'dist' o simile
# Ad esempio, se tsc compila in 'dist', il percorso sarà /app/dist
COPY --from=builder /app/dist ./dist
# Copia il package.json per installare solo le dipendenze di produzione
COPY --from=builder /app/package.json ./

# Installa solo le dipendenze di produzione
RUN npm install --only=production

# Espone la porta su cui il server Node.js ascolterà.
# Cloud Run imposterà la variabile d'ambiente PORT a 8080.
EXPOSE 8080

# Comando per avviare l'applicazione.
# Il tuo index.ts compilato si troverà in ./dist/index.js
CMD [ "node", "dist/index.js" ]

