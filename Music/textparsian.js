const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { lineReply } = require("discord-reply");

module.exports = {
  name: "textpersian",
  aliases: ["textPersian", "Textpersian", "TextPersian", "TEXTPERSIAN", "tp"],
  description: "Show text",
  usage: "text",
  async execute(message, args, client) {
    
    
    let replies = ["من هیچوقت برای موفقیت رویاپردازی نکردم، بلکه واسه‌ش کار کردم!","وقتی حالت خوب نيست خاطره ها زود تر از همه ميان به عيادتت.","ممکنه از یکدیگر دور باشیم، اما تو به همان ماه نگاه میکنی که من نگاه میکنم!","گاهی باید ساکت بمونی و ببینی کیا واسه حرف زدن باهات تلاش میکنن : )","وقتی نیستی یه سیگار کنج لبم،تموم حس نبودنت به شخم چپم :))))","تازگیا همه یاد گرفتن فقد بیان کمتر کسی پیدا میشه که بمونه(:","‏کاش حداقل یه تیکه کاغذ برای نشون دادن هنرش داشت :)","‌برای آشغال بودن راه های زیادی هست ولی هیچ کدوم به اندازه ی تظاهر به دوست داشتن، کثیف نیست!","ما همه قبل از اینکه توانایی پروازمونو احساس کنیم سقوط میکنیم.","مهربان باش،نه فقط با دیگران،با خودت هم باش","تنهایی رو ترجیح میدم به بودن با آدمای لب و دهن تو خالی و الکی(:","قورباغه رو روی تخت طلا هم بشونی بازم میپره تو آب ...جریان لیاقت بعضیاس :))","تو بازیو بردی؟ تو منو باختی میفهمی؟","‌دلداری دادناتون بوی مخ زدن میده!","ازونایی بترس که فکر میکنی خوبن چون نمیدونی چقدر بدن!","‌دلداری دادناتون بوی مخ زدن میده!","هیچی بیشتر از افکار خودت نمیکشتت!","هیچی بیشتر از افکار خودت نمیکشتت!","تو بازیو بردی؟ تو منو باختی میفهمی؟","راه خودتونو با ذهن خودتون بسازید!","اشكالی نداره که به جای آهنگ های عاشقانه براش یه آهنگ ملی بفرستی،وقتیکه حس میکنی وطنت شده ...","مهربان باش،نه فقط با دیگران،با خودت هم باش","تو بازیو بردی؟ تو منو باختی میفهمی؟","تنهایی رو ترجیح میدم به بودن با آدمای لب و دهن تو خالی و الکی(:","سایی واسمون زیرآبی میرن که خودمون بهشون شنا کردن یاد دادیم !","بذار رو راست باشم من به كسى اعتماد ندارم !","بیشتر از اون چیزی که بتونم توضیح بدم دوستت دارم.","اگه من دور شدم، بخاطر اینه که منو نزدیک خودت نگه نداشتی!","دلم میخاد بزنم تو گوش بعضیا بگم ببین؛ من خیلی چیزارو میدونم ولی به رو خودم نمیارم.","مهربان باش،نه فقط با دیگران،با خودت هم باش","همه فک میکنن من تنهام:)... دیگه نمیدونن که من تنها نیستم تنها منه","اگه دلت خواست برام تنگ شه ؛ يادت بياد كه من نرفتم؛ تو گذاشتى كه برم","اگه هدفتون شما رو از جمعیت جدا میکنه، تنها بمونید!","اشكالی نداره که به جای آهنگ های عاشقانه براش یه آهنگ ملی بفرستی،وقتیکه حس میکنی وطنت شده ...","اميدوارم كسى رو پيدا كنين كه بدونه چطور دوستتون داشته باشه وقتى غمگين هستين!","قورباغه رو روی تخت طلا هم بشونی بازم میپره تو آب ...جریان لیاقت بعضیاس :))"];

    let Member =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]) ||
      message.member;

    let result = Math.floor((Math.random() * replies.length));

    message.lineReplyNoMention(replies[result]).then(message => {
			message.react('<a:emoji_10:869913862604996669>').then(r => {
				message.react('<a:emoji_11:869913887913422848>);
           });
          });
      }
}
