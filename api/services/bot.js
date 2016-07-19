var TelegramBot=require('node-telegram-bot-api');
var token='x42025517x4:0AGgDcx4M0dkkO5x460vDAxx4x0bf3zx4m0Cx4t0';
var bot=new TelegramBot(
	token,{
		polling:true
	});
bot.getMe().then(function (me){
	console.log('Hi my name is %s!', me.username);
});
bot.onText(/^\/soy (.+)$/, function (msg, match){
	var name=match[1];
	bot.sendMessage(msg.chat.id,`!Hola ${name} !`).then(function(){
		
	});
});
bot.onText(/^\/pic/, function (msg) {
    var photo_id = './assets/images/stone.jpg';
    bot.sendPhoto(msg.chat.id, photo_id,{
        caption:'Mi banda favorita'
    });
});

bot.onText(/^\/vid/, function (msg) {
    var video = './assets/videos/vid.mp4';
    bot.sendVideo(msg.chat.id, video,{
        caption:'Uno de mis favoritos...'
    });
});

bot.onText(/^\/ubic/, function (msg) {
    var longitud = -98.3856392;
    var latitud = 20.0758063;
    bot.sendLocation(msg.chat.id, latitud, longitud, {
        caption:'Algo interesante por aquí?'
    });
});
