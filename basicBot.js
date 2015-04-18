(function () {
    
    var fork = "Kelvin";
		
		
    function extend() {
        
        if (!window.bot) {
            return setTimeout(extend, 1 * 1000);
        }


        var bot = window.bot;


        bot.retrieveSettings();

        bot.commands.cookieCommand.cookies =['deu-lhe um biscoito de chocolate!',
                    'Quer te fuder até o talo!( ͡° ͜ʖ ͡°)',
                    'deu-lhe um biscoito que está escrito "você é um viado"',
                    'deu-lhe um biscoito da sorte, tem escrito: "Vou te dar um ban eterno de 30 dias"',
                    'deu-lhe um biscoito da sorte, tem escrito: "Mostra as teta ae :trollface:"',
                    'deu-lhe um cookie vencido!"',
                    'deu-lhe um biscoito da sorte, tem escrito: "Você é um fracassado!"',
                    'deu-lhe um biscoito da sorte, tem escrito: "Se você mecher o quadril, vão achar que você é gay!',
                    'deu-lhe um biscoito da sorte, tem escrito: "Eu te amo *-*"',
                    'deu-lhe um Trakinas e um copo de refrigerante',
                    'deu-lhe um biscoito de arco-íris feito com amor :heart:',
                    'deu-lhe um biscoito que foi esquecido na chuva... eu não comeria.',
                    'te trouxe biscoitos fresquinhos... parecem deliciosos! :3'
                ];
                bot.commands.cookieCommand = {
            command: 'cookie',
            rank: 'ambassador',
            type: 'exact',
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    
                }
            }
        };
        
            bot.commands.pingCommand = {
            command: 'ping',
            rank: 'mod',
            type: 'exact',
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    
                }
            }
        };
        
        
        bot.loadChat();
    }

        localStorage.setItem("basicBotsettings", JSON.stringify({
        botName: "Olá,seja bem vindo infeliz e volte sempre arrombado :point_right: :ok_hand:",
        language: "portuguese",
        chatLink: "https://rawgit.com/Yemasthui/basicBot/master/lang/pt.json",
        startupCap: 9,
        startupVolume: 50,
        startupEmoji: true,
        maximumAfk: 60,
        afkRemoval: true,
        maximumDc: 60,
        bouncerPlus: true,
        lockdownEnabled: false,
        lockGuard: true,
        maximumLocktime: 10,
        cycleGuard: true,
        maximumCycletime: 10,
        voteSkip: true,
        voteSkipLimit: 10,
        timeGuard: true,
        maximumSongLength: 8.30,
        autodisable: true,
        commandCooldown: 30,
        usercommandsEnabled: true,
        lockskipPosition: 3,
        lockskipReasons: [
                ["tema", "A música não se encaixa nos padrões da sala. "],
                ["op", "Essa música está na lista OP. "],
                ["historico", "A música ainda está no histórico. "],
                ["mix", "Você tocou um mix (muito longo) - não permitido. "],
                ["som", "A música que você tocou tinha má qualidade ou estava sem som. "],
                ["nsfw", "A música que você tocou é NSFW (impróprio). "],
                ["indisponivel", "A música que você tocou está indisponível. "]
            ],
        afkpositionCheck: 15,
        afkRankCheck: "ambassador",
        motdEnabled: true,
        motdInterval: 8,
        motd: "!roulette",
        filterChat: true,
        etaRestriction: true,
        welcome: true,
        opLink: null,
        rulesLink: null,
        themeLink: null,
        fbLink: null,
        youtubeLink: null,
        website: null,
        intervalMessages: [Recomendamos que use o OrigemWoot, veja um tutorial de como usa-lo. http://origem-woot.com/],
        messageInterval: 5,
        songstats: false,
        commandLiteral: "!",
        blacklists: {
            NSFW: "https://rawgit.com/Yemasthui/basicBot-customization/master/blacklists/ExampleNSFWlist.json",
            OP: "https://rawgit.com/Yemasthui/basicBot-customization/master/blacklists/ExampleOPlist.json"
        }
    }));

    $.getScript('https://rawgit.com/motelbible/basicBot/master/basicBot.js', extend);

}).call(this);
