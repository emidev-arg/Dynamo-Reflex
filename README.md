<h1 align="center">
  <br>
  <a href=""><img src="https://media.discordapp.net/attachments/1197653255526826034/1197755209724727316/logo-dinamowhite.jpg?ex=65bc6b77&is=65a9f677&hm=4d5ed53d64037956f424888a27f783b1d7e89c39745834aa6a4fbf2ec775d557&=&format=webp"width="220"></a>
</h1>

## ¿Que es Dynamo Reflex?
<p>Dynamo Reflex, es un bot inteligente de Discord, desarrollado con DiscordJS y la API de CHAT GPT 3.5, el cuál, responde las consultas que tu indiques en el campo correspondiente.</p>

<div align="left">
    <img src="https://img.shields.io/badge/DiscordJS-30adf0">
  <img src="https://img.shields.io/badge/NodeJS-038005">
  <img src="https://img.shields.io/badge/GPT-3.5-32ba6f">
</div>

![screenshot](https://res.cloudinary.com/dn7fidyht/image/upload/v1705599828/ohsorp90ppcvquxwvkv4.png)


## ¿Como utilizarlo? (Para clientes)
* Para ejecutar Dynamo, necesitas invitarlo a tu servidor dandole click al boton de Invite Dynamo.
* Una vez dentro de tu servidor, para inicializar el bot deberas utilizar: `/question [query]`.
* Puede utilizarse en cualquier canal del servidor.

<div align="left">
  <a href=""><img src="https://media.discordapp.net/attachments/1197653255526826034/1198002096998465566/invitedynamo.png?ex=65bd5165&is=65aadc65&hm=93524b392636ddb5f963f31380c061573ff89977fc298c32dcf8e6d0151dced7&=&format=webp&quality=lossless" width="200"></a>
</div>


## ¿Como utilizarlo? (para desarrolladores)
* Clona el repositorio mediante `git clone https://github.com/emidev-arg/Dynamo-Reflex.git`
* Una vez clonado, instala los paquetes necesarios para poder ejecutar el servidor.

## Paquetes a instalar:
* <img src="https://img.shields.io/badge/DotEnv-32ba6f"> Para poder utilizar variables de entorno (.env) `npm i dotenv`
* <img src="https://img.shields.io/badge/DiscordJS-30adf0"> Para poder inicializar el cliente y sus respectivas funciones `npm i discord.js`

  
## ⚠️ Importante ⚠️
Para poder obtener los ID´s tanto de cliente, como de servidor y la clave API de CHATGPT, a continuación te dejo los enlaces para que puedas continuar con el proceso.


## Inicializar proyecto:
* Dirígite a <a href="https://discord.com/developers/applications/">Discord Developer Portal</a>
* Crea una aplicación y dentro de la misma, su respectivo Bot, en la seccion de `Bot`
* Configura las variables de entorno de tu proyecto con las credenciales de tu Bot y Aplicacion en `.env`
* Generando una URL desde <a href="https://discord.com/developers/applications/">Discord Developer Portal</a> en la seccion de `OAuth2/URL Generator`. En la sección de Scopes, marca `bot`, y a continuación en sus permisos marca `Admistrator`
* Una vez configurado todo tu proyecto, abre una terminal desde el mismo directorio e inicia el proyecto con `node app.js`
* Disfruta de tu Bot Inteligente.
