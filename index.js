const { Telegraf } = require('telegraf');
const axios = require('axios');
require('dotenv').config()

const bot = new Telegraf(process.env.BOT_TOKEN);


// we can add user name in start reply 


bot.start((ctx) => {

    let message = `" Hello ${ctx.from.first_name}, Welcome to the Shashwat Alight_Bot.\n This bot will send you new quotes just clicking \n -/NewQuote \n Some more feature adding"`
    bot.telegram.sendMessage(ctx.chat.id, message, {
        reply_markup: {
            inline_keyboard: [
                [{ text: 'NewQuote', callback_data: 'NewQuote' }],
                [{ text: 'World 🌍', callback_data: 'world' }]
            ]
        }



    });


})


bot.action('NewQuote', (ctx) => {
    ctx.answerCbQuery('Your Quote is Here');

  // use the above code for display other place
    axios.get("http://numbersapi.com/random/math?json")
        .then(res => {
            bot.telegram.sendMessage(ctx.chat.id, res.data.text, {
                reply_markup: {
                    inline_keyboard: [
                        [{ text: 'NewQuote', callback_data: 'NewQuote' }],
                        [{ text: 'World 🌍', callback_data: 'world' }]
                    ]
                }



            });
            console.log(res.data.text);
        }).catch(e => {
            console.log(e);
        })

        // use the above code for display other place



})

bot.help((ctx) => ctx.reply('Send me a sticker'))


bot.on('sticker', (ctx) => ctx.reply('👍'))

// its handle simple msg
bot.hears('hi', (ctx) => ctx.reply('Hey there, What do you want to us'))


//we know commands (those start with /) are case-sensitive so write both capital and small letter 
// don't forget to close commands in square brackets

bot.command(["Quote", "NewQuote"], (ctx) => {

    axios.get("http://numbersapi.com/random/math?json")
    .then(res => {
        bot.telegram.sendMessage(ctx.chat.id, res.data.text, {
            reply_markup: {
                inline_keyboard: [
                    [{ text: 'NewQuote', callback_data: 'NewQuote' }],
                    [{ text: 'World 🌍', callback_data: 'world' }]
                ]
            }



        });
        console.log(res.data.text);
    }).catch(e => {
        console.log(e);
    })
})


bot.launch()

// Enable graceful stop
// process.once('SIGINT', () => bot.stop('SIGINT'))
// process.once('SIGTERM', () => bot.stop('SIGTERM'))








 //⬢ gentle-dusk-24849
 //https://gentle-dusk-24849.herokuapp.com/ 





// let message=`Hey ${ctx.from.first_name} , Welcome to covid bot `
// bot.telegram.sendMessage(ctx.chat.id, message,{
//   reply_markup:{
//       inline_keyboard:[
//           [{ text:'Ethiopia 🇪🇹', callback_data:'ethiopia'}],
//           [{ text:'World 🌍', callback_data:'world'}]
//       ]
//   }



// });  


// })