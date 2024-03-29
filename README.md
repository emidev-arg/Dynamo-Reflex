<h1 align="center">
  <br>
  <a href=""><img src="https://res.cloudinary.com/dn7fidyht/image/upload/v1705703822/rewzyggrew4h3vpthemt.gif"width="800"></a>
  <div align="center">
        <img src="https://img.shields.io/badge/DiscordJS-30adf0">
  <img src="https://img.shields.io/badge/NodeJS-038005">
  <img src="https://img.shields.io/badge/GPT-3.5-32ba6f">
  </div>
</h1>

<p align="center">Bot inteligente de Discord, desarrollado con DiscordJS y la API de CHAT GPT 3.5, el cuál, responde las consultas que tu indiques en el campo correspondiente.</p>

## ¿Como utilizarlo? (Para clientes)
* Para ejecutar Dynamo, necesitas invitarlo a tu servidor dandole click al boton de Invite Dynamo.
* Una vez dentro de tu servidor, para inicializar el bot deberas utilizar: `/question [query]`.
* Puede utilizarse en cualquier canal del servidor.

<div align="left">
  <a href="https://discord.com/api/oauth2/authorize?client_id=1197650101301162035&permissions=8936887438352&scope=bot"><img src="https://media.discordapp.net/attachments/1197653255526826034/1198002096998465566/invitedynamo.png?ex=65bd5165&is=65aadc65&hm=93524b392636ddb5f963f31380c061573ff89977fc298c32dcf8e6d0151dced7&=&format=webp&quality=lossless" width="200"></a>
</div>


## ¿Como utilizarlo? (Para desarrolladores)
* Clona el repositorio mediante `git clone https://github.com/emidev-arg/Dynamo-Reflex.git`
* Una vez clonado, instala los paquetes necesarios para poder ejecutar el servidor.

## Paquetes a instalar:
* <img src="https://img.shields.io/badge/DotEnv-ded309"> Para poder utilizar variables de entorno (.env) `npm i dotenv`
* <img src="https://img.shields.io/badge/DiscordJS-30adf0"> Para poder inicializar el cliente y sus respectivas funciones `npm i discord.js`
* <img src="https://img.shields.io/badge/CHATGPT-32ba6f"> Para poder inicialzar el chat con el bot `npm i chatgpt`

  
## ⚠️ Importante ⚠️
Para poder obtener los ID´s tanto de cliente, como de servidor y la clave API de CHATGPT, a continuación te dejo los enlaces para que puedas continuar con el proceso.
* Inicia sesión en <a href="https://openai.com/">OpenAI</a> y dirígete a la sección de API Keys.
* Obten los ID de cliente y servidor en <a href="https://discord.com/developers/applications/">Discord Developer Portal</a>


## Inicializar proyecto:
* Dirígite a <a href="https://discord.com/developers/applications/">Discord Developer Portal</a>
* Crea una aplicación y dentro de la misma, su respectivo Bot, en la seccion de `Bot`
* Configura las variables de entorno de tu proyecto con las credenciales de tu Bot y Aplicacion en `.env`
* Genera una URL desde <a href="https://discord.com/developers/applications/">Discord Developer Portal</a> en la seccion de `OAuth2/URL Generator`. En la sección de Scopes, marca `bot`, y a continuación en sus permisos marca `Admistrator`. Una vez hecho esto, automaticamente te aparecerá generada la URL para invitar a tu Bot
* Una vez configurado todo tu proyecto, abre una terminal desde el mismo directorio e inicia el proyecto con `node app.js`
* Disfruta de tu Bot Inteligente.
