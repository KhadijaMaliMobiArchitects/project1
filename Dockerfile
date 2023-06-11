# Utilisation de l image Node.js LTS en tant que base
FROM node:lts-alpine

# Definition du repertoire de travail dans le conteneur
WORKDIR /app

# Copie des fichiers package.json et package-lock.json pour installer les dependances
COPY package*.json ./

# Installation des dependances
RUN npm install --production

# Installation du module @faker-js/faker pour resoudre le prob
RUN npm install @faker-js/faker

# Copie du reste des fichiers de l application
COPY . .

# Construction de l application React
RUN npm run build

# Configuration du serveur web pour servir l'application statique
FROM nginx:stable-alpine

# Copie des fichiers de build de l application dans le repertoire de deploiement de Nginx
COPY --from=0 /app/build /usr/share/nginx/html

# Exposition du port 80 pour le trafic HTTP
EXPOSE 80

# Demarrage du serveur web Nginx
CMD ["nginx", "-g", "daemon off;"]
