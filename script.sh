# Write your commands here
sudo su <<HERE
docker pull ocpcontainerregistry.azurecr.io/ocp/recette:latest
docker run -d --name ocprecette -p 80:3000 ocpcontainerregistry.azurecr.io/ocp/recette:latest
HERE
