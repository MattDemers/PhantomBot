!function(){function e(){var e;for(e=1;$.lang.exists("roulette.win."+e);e++)i.win++;for(e=1;$.lang.exists("roulette.lost."+e);e++)i.lost++;$.consoleLn($.lang.get("roulette.console.loaded",i.win,i.lost))}function t(e){setTimeout(function(){$.say(".timeout "+e+" "+n)},2500)}var n=$.inidb.exists("roulette","timeoutTime")?parseInt($.inidb.get("roulette","timeoutTime")):60,i={win:0,lost:0},s=0;$.bind("command",function(e){var r,a,o,g=e.getSender().toLowerCase(),u=e.getCommand(),l=e.getArgs();if(u.equalsIgnoreCase("roulette"))if(a=$.randRange(1,2),o=$.randRange(1,2),a==o){do r=$.randRange(1,i.win);while(r==s);$.say($.lang.get("roulette.win."+r,$.resolveRank(g)))}else{do r=$.randRange(1,i.lost);while(r==s);$.say($.lang.get("roulette.lost."+r,$.resolveRank(g))),$.isModv3(g,e.getTags())||($.getBotWhisperMode()&&$.say($.whisperPrefix(g)+$.lang.get("roulette.timeout.notifyuser",n)),t(g))}if(u.equalsIgnoreCase("roulettetimeouttime")){if(!$.isAdmin(g))return void $.say($.whisperPrefix(g)+$.adminMsg);if(isNaN(parseInt(l[0])))return void $.say($.whisperPrefix(g)+$.lang.get("roulette.set.timeouttime.usage"));n=parseInt(l[0]),$.inidb.set("roulette","timeoutTime",n),$.say($.whisperPrefix(g)+$.lang.get("roulette.set.timeouttime.success",n))}}),$.bind("initReady",function(){$.bot.isModuleEnabled("./games/roulette.js")&&(e(),$.registerChatCommand("./games/roulette.js","roulette",7))})}();
