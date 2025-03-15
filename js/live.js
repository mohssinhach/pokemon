var credit = " Coins",
    credits = "2,500 5,200 5,200".split(" "),
    names = "LilSheep Stefani4 EmileQueen BeverlyK ElenaGreat Artur98 WorstGamer03 Abraham99 IrisBerry CallMeAlexa xManOnFire Caprice05 Combat666 HailMary DataMiner02 IdleKing WatchForYoko YasminFlower HDstreaming Hopeland97 Hylysackxx ImBetterThanU CarmeloLoco WizardLucyMo Anton177 AdahMoer HondaLover Francisco82 Roger2x LetsTourAround TkCombat AntonSphere Unitara54".split(" ");

function create() {
    VanillaToasts.create({
        title: document.body.valueToUse = names[Math.floor(Math.random() * names.length)] || null,
        text: document.body.valueToUse = credits[Math.floor(Math.random() * credits.length)] + credit,
        type: "success",
        icon: "https://i.postimg.cc/VsCJNsLK/bd92f61e-e4cf-416c-b093-144a68a3aed2.png",
        timeout: 2500 // وقت ظهور الإشعار نفسه (2.5 ثانية)
    });
    setTimeout(create, 10000); // تم تغيير القيمة إلى 10000 (10 ثوانٍ)
}

create();
