const { Telegraf } = require("telegraf");
const chatBot = require("./api");
const bot = new Telegraf("7101546461:AAE1oMw7SZR_9xxFOpQIbAhRlqmnmO10mcw");

bot.start((ctx) => {
	ctx.reply("Hi" + " " + ctx.chat.first_name + " " + "Give me any quetion");
});

bot.on("message", async (ctx) => {
	ctx.reply("🧐...");
	const req = await chatBot(ctx.message.text);
	ctx.reply(req);
});

bot.launch().then();
