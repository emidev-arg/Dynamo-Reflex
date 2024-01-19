import { ChatGPTAPI } from "chatgpt";
import { Client, GatewayIntentBits, Events, REST, Routes, ApplicationCommandOptionType, ActionRowBuilder, ButtonBuilder, EmbedBuilder } from "discord.js";
import dotenv from 'dotenv'
dotenv.config()

const CLIENT_ID = process.env.CLIENT_ID;

const ApiCHATGPT = new ChatGPTAPI({apiKey: process.env.API_KEY_CGPT})
const client = new Client({ intents: [GatewayIntentBits.Guilds] })
const rest = new REST({version: '10'}).setToken(process.env.TOKEN)

client.on(Events.ClientReady, () => {
	console.log("Loged in:" + client.user.tag)
})

async function main(){
	const commands = [
		{
			name: 'consult',
			description: 'Responde tu duda indicando una consulta.',
			options: [
				{
					name: 'query',
					description: 'Escribe tu consulta a realizar.',
					type: ApplicationCommandOptionType.String,
					required: true
				}
			]
		},
	]

	try {
		console.log('Started refreshing application (/) commands.');

		await rest.put(Routes.applicationCommands(CLIENT_ID), { body: commands });
	  
		console.log('Successfully reloaded application (/) commands.');
	} catch (error) {
		console.error(error)
	}
}

client.on(Events.InteractionCreate, async interaction => {


	if (!interaction.isChatInputCommand()) return;

	const query = interaction.options.get('query')
	

	if(query.value.length > 1){

		interaction.reply('Obteniendo resultados para: ' + `__**(${query.value})**__ Espere un momento por favor...`)

		const response = await ApiCHATGPT.sendMessage(query.value)

		const embedMain = {
			color: 0x1a1a1a,
			title: "Resultado para: " + query.value,
			url: 'https://discord.js.org',
			description: response.text,
			thumbnail: {
				url: 'image.png',
			},
			fields: [
				{
					name: 'Este mensaje fue respuesto para: ' + `@${interaction.user.tag}`,
					value: ''
				}
			],
			timestamp: new Date().toISOString(),
			footer: {
				text: 'Dynamo Reflex Responses',
				icon_url: 'image-footer.jpg',
			},
		};

		const ComponentButtons = new ActionRowBuilder()
		.addComponents([
			new ButtonBuilder()
			.setLabel('Correct')
			.setCustomId('success')
			.setStyle("Primary")
			.setEmoji('✅'),

			new ButtonBuilder()
			.setLabel('Incorrect')
			.setCustomId('fail')
			.setStyle("Danger")
			.setEmoji('⚠️')
		])

		const embedSuccess = new EmbedBuilder()
	    .setColor("Green")
		.setTitle('✅ | Gracias por utilizar Dynamo Reflex')

		const embedFail = new EmbedBuilder()
	    .setColor("Red")
		.setTitle('❌ | Gracias por tu voto. Nos ayuda a mejorar.')


		const embedQuestion = new EmbedBuilder()
		.setColor("#1a1a1a")
		.setTitle('🤔 | ¿Esta respuesta ha resuelto tu duda?')

		interaction.channel.send({embeds: [embedMain, embedQuestion]})
		interaction.channel.send({components: [ComponentButtons]})

		const collector = interaction.channel.createMessageComponentCollector()

		collector.on('collect', async (i) => {
			switch(i.customId)
			{
				case 'success':
					i.update({content: '', embeds: [embedSuccess], components: []})
					break;
				
				case 'fail':
					i.update({content: '', embeds: [embedFail], components: []})
					break;
			}
		})
	
		return;
	}

	interaction.reply('La query ingresada no es valida')
})

main();
client.login(process.env.TOKEN)
