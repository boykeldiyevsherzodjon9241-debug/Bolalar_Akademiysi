const quizData = {
 idrok: [
  { title:"🎨 Idrok bo‘limi", question:"Qaysi shakl doira?", hint:"💡 Yumaloq!", answers:[{text:"⬛️ Kvadrat",correct:false},{text:"⚪️ Doira",correct:true},{text:"🔺 Uchburchak",correct:false},{text:"⭐️ Yulduz",correct:false}]},
  { title:"🎨 Idrok bo‘limi", question:"Qaysi rang ko‘k?", hint:"💡 Osmon!", answers:[{text:"🟡 Sariq",correct:false},{text:"🔵 Ko‘k",correct:true},{text:"🟢 Yashil",correct:false},{text:"⚫️ Qora",correct:false}]},
  { title:"🎨 Idrok bo‘limi", question:"Qaysi meva qizil?", hint:"💡 Shirin!", answers:[{text:"🍌 Banan",correct:false},{text:"🍎 Olma",correct:true},{text:"🍇 Uzum",correct:false},{text:"🍐 Nok",correct:false}]},
  { title:"🎨 Idrok bo‘limi", question:"Qaysi hayvon uchadi?", hint:"💡 Osmon!", answers:[{text:"🐶 It",correct:false},{text:"🐱 Mushuk",correct:false},{text:"🦅 Qush",correct:true},{text:"🐢 Tovuq",correct:false}]},
  { title:"🎨 Idrok bo‘limi", question:"Qaysi rang yashil?", hint:"💡 O‘t rangi!", answers:[{text:"🟢 Yashil",correct:true},{text:"🔴 Qizil",correct:false},{text:"🔵 Ko‘k",correct:false},{text:"⚫️ Qora",correct:false}]},
  { title:"🎨 Idrok bo‘limi", question:"Qaysi meva sariq?", hint:"💡 Maymun!", answers:[{text:"🍌 Banan",correct:true},{text:"🍎 Olma",correct:false},{text:"🍇 Uzum",correct:false},{text:"🍓 Qulupnay",correct:false}]},
  { title:"🎨 Idrok bo‘limi", question:"Qaysi hayvon suvda?", hint:"💡 Dengiz!", answers:[{text:"🐟 Baliq",correct:true},{text:"🐶 It",correct:false},{text:"🐱 Mushuk",correct:false},{text:"🐄 Sigir",correct:false}]},
  { title:"🎨 Idrok bo‘limi", question:"Qaysi shakl uchburchak?", hint:"💡 3 burchak!", answers:[{text:"🔺 Uchburchak",correct:true},{text:"⚪️ Doira",correct:false},{text:"⬛️ Kvadrat",correct:false},{text:"⭐️ Yulduz",correct:false}]},
  { title:"🎨 Idrok bo‘limi", question:"Qaysi rang qora?", hint:"💡 Tun!", answers:[{text:"⚫️ Qora",correct:true},{text:"🔵 Ko‘k",correct:false},{text:"🟢 Yashil",correct:false},{text:"🟡 Sariq",correct:false}]},
  { title:"🎨 Idrok bo‘limi", question:"Qaysi hayvon yuguradi?", hint:"💡 Tez!", answers:[{text:"🐴 Ot",correct:true},{text:"🐟 Baliq",correct:false},{text:"🐦 Qush",correct:false},{text:"🐢 Toshbaqa",correct:false}]}
],

 diqqat: [
  { title:"👀 Diqqat", question:"A,B,_,D", hint:"💡 Harf!", answers:[{text:"C",correct:true},{text:"E",correct:false},{text:"F",correct:false},{text:"G",correct:false}]},
  { title:"👀 Diqqat", question:"1,2,_,4", hint:"💡 Son!", answers:[{text:"3",correct:true},{text:"5",correct:false},{text:"6",correct:false},{text:"7",correct:false}]},
  { title:"👀 Diqqat", question:"Qizil,Sariq,_,Ko‘k", hint:"💡 Rang!", answers:[{text:"Yashil",correct:true},{text:"Qora",correct:false},{text:"Oq",correct:false},{text:"Jigarrang",correct:false}]},
  { title:"👀 Diqqat", question:"Kvadrat,Doira,_,Yulduz", hint:"💡 Shakl!", answers:[{text:"Uchburchak",correct:true},{text:"Romb",correct:false},{text:"Trapetsiya",correct:false},{text:"Oval",correct:false}]},
  { title:"👀 Diqqat", question:"It,Mushuk,_,Sigir", hint:"💡 Hayvon!", answers:[{text:"Ot",correct:true},{text:"Qo‘y",correct:false},{text:"Tovuq",correct:false},{text:"Baliq",correct:false}]},
  { title:"👀 Diqqat", question:"5,6,_,8", hint:"💡 Son!", answers:[{text:"7",correct:true},{text:"9",correct:false},{text:"10",correct:false},{text:"11",correct:false}]},
  { title:"👀 Diqqat", question:"A,_,C,D", hint:"💡 Harf!", answers:[{text:"B",correct:true},{text:"E",correct:false},{text:"F",correct:false},{text:"G",correct:false}]},
  { title:"👀 Diqqat", question:"Qora,Oq,_,Ko‘k", hint:"💡 Rang!", answers:[{text:"Qizil",correct:true},{text:"Yashil",correct:false},{text:"Sariq",correct:false},{text:"Jigarrang",correct:false}]},
  { title:"👀 Diqqat", question:"2,4,_,8", hint:"💡 Ketma-ket!", answers:[{text:"6",correct:true},{text:"5",correct:false},{text:"7",correct:false},{text:"9",correct:false}]},
  { title:"👀 Diqqat", question:"Olma,Banan,_,Uzum", hint:"💡 Meva!", answers:[{text:"Nok",correct:true},{text:"Sabzi",correct:false},{text:"Kartoshka",correct:false},{text:"Piyoz",correct:false}]}
],

 xotira: [
  { title:"🧠 Xotira", question:"Sariq meva?", hint:"💡 Maymun!", answers:[{text:"Banan",correct:true},{text:"Olma",correct:false},{text:"Uzum",correct:false},{text:"Qulupnay",correct:false}]},
  { title:"🧠 Xotira", question:"Sut beradigan?", hint:"💡 Qishloq!", answers:[{text:"Sigir",correct:true},{text:"Tovuq",correct:false},{text:"Baliq",correct:false},{text:"Ilon",correct:false}]},
  { title:"🧠 Xotira", question:"Sovuq fasl?", hint:"💡 Qor!", answers:[{text:"Qish",correct:true},{text:"Bahor",correct:false},{text:"Yoz",correct:false},{text:"Kuz",correct:false}]},
  { title:"🧠 Xotira", question:"Suv transport?", hint:"💡 Dengiz!", answers:[{text:"Kema",correct:true},{text:"Mashina",correct:false},{text:"Velosiped",correct:false},{text:"Samolyot",correct:false}]},
  { title:"🧠 Xotira", question:"Osmondagi rang?", hint:"💡 Yuqoriga qarang!", answers:[{text:"Ko‘k",correct:true},{text:"Sariq",correct:false},{text:"Yashil",correct:false},{text:"Qora",correct:false}]},
  { title:"🧠 Xotira", question:"Tez yuguruvchi?", hint:"💡 Hayvon!", answers:[{text:"Ot",correct:true},{text:"Toshbaqa",correct:false},{text:"Baliq",correct:false},{text:"Ilon",correct:false}]},
  { title:"🧠 Xotira", question:"Qizil meva?", hint:"💡 Shirin!", answers:[{text:"Olma",correct:true},{text:"Banan",correct:false},{text:"Uzum",correct:false},{text:"Nok",correct:false}]},
  { title:"🧠 Xotira", question:"Issiq fasl?", hint:"💡 Quyosh!", answers:[{text:"Yoz",correct:true},{text:"Qish",correct:false},{text:"Kuz",correct:false},{text:"Bahor",correct:false}]},
  { title:"🧠 Xotira", question:"Uchadigan?", hint:"💡 Qanot!", answers:[{text:"Qush",correct:true},{text:"It",correct:false},{text:"Sigir",correct:false},{text:"Ot",correct:false}]},
  { title:"🧠 Xotira", question:"Yashil rang?", hint:"💡 O‘t!", answers:[{text:"Yashil",correct:true},{text:"Qizil",correct:false},{text:"Ko‘k",correct:false},{text:"Qora",correct:false}]}
],

 tafakkur: [
  { title:"🧩 Tafakkur", question:"2 + 2 nechchi?", hint:"💡 Qo‘shish!", answers:[{text:"4",correct:true},{text:"3",correct:false},{text:"5",correct:false},{text:"6",correct:false}]},
  { title:"🧩 Tafakkur", question:"5 - 2 nechchi?", hint:"💡 Ayirish!", answers:[{text:"3",correct:true},{text:"2",correct:false},{text:"4",correct:false},{text:"5",correct:false}]},
  { title:"🧩 Tafakkur", question:"3 × 3 nechchi?", hint:"💡 Ko‘paytirish!", answers:[{text:"9",correct:true},{text:"6",correct:false},{text:"12",correct:false},{text:"8",correct:false}]},
  { title:"🧩 Tafakkur", question:"10 ÷ 2 nechchi?", hint:"💡 Bo‘lish!", answers:[{text:"5",correct:true},{text:"4",correct:false},{text:"6",correct:false},{text:"7",correct:false}]},
  { title:"🧩 Tafakkur", question:"7 + 3 nechchi?", hint:"💡 Qo‘shish!", answers:[{text:"10",correct:true},{text:"9",correct:false},{text:"11",correct:false},{text:"12",correct:false}]},
  { title:"🧩 Tafakkur", question:"6 + 4 nechchi?", hint:"💡 Qo‘shish!", answers:[{text:"10",correct:true},{text:"9",correct:false},{text:"11",correct:false},{text:"8",correct:false}]},
  { title:"🧩 Tafakkur", question:"8 - 3 nechchi?", hint:"💡 Ayirish!", answers:[{text:"5",correct:true},{text:"6",correct:false},{text:"4",correct:false},{text:"3",correct:false}]},
  { title:"🧩 Tafakkur", question:"4 × 2 nechchi?", hint:"💡 Ko‘paytirish!", answers:[{text:"8",correct:true},{text:"6",correct:false},{text:"9",correct:false},{text:"7",correct:false}]},
  { title:"🧩 Tafakkur", question:"12 ÷ 3 nechchi?", hint:"💡 Bo‘lish!", answers:[{text:"4",correct:true},{text:"3",correct:false},{text:"5",correct:false},{text:"6",correct:false}]},
  { title:"🧩 Tafakkur", question:"9 + 1 nechchi?", hint:"💡 Qo‘shish!", answers:[{text:"10",correct:true},{text:"11",correct:false},{text:"9",correct:false},{text:"8",correct:false}]}
],

 nutq: [
  { title:"🗣 Nutq", question:"Salomlashish so‘zi?", hint:"💡 Tongda!", answers:[{text:"Salom",correct:true},{text:"Rahmat",correct:false},{text:"Xayr",correct:false},{text:"Uzr",correct:false}]},
  { title:"🗣 Nutq", question:"Minnatdorchilik?", hint:"💡 Rahmat!", answers:[{text:"Rahmat",correct:true},{text:"Salom",correct:false},{text:"Xayr",correct:false},{text:"Iltimos",correct:false}]},
  { title:"🗣 Nutq", question:"Xayrlashish?", hint:"💡 Ketganda!", answers:[{text:"Xayr",correct:true},{text:"Salom",correct:false},{text:"Rahmat",correct:false},{text:"Uzr",correct:false}]},
  { title:"🗣 Nutq", question:"Yordam so‘rash?", hint:"💡 Iltimos!", answers:[{text:"Iltimos",correct:true},{text:"Rahmat",correct:false},{text:"Salom",correct:false},{text:"Xayr",correct:false}]},
  { title:"🗣 Nutq", question:"Kechirim so‘rash?", hint:"💡 Xato!", answers:[{text:"Uzr",correct:true},{text:"Rahmat",correct:false},{text:"Salom",correct:false},{text:"Xayr",correct:false}]},
  { title:"🗣 Nutq", question:"Do‘stga murojaat?", hint:"💡 Salom!", answers:[{text:"Salom",correct:true},{text:"Rahmat",correct:false},{text:"Xayr",correct:false},{text:"Uzr",correct:false}]},
  { title:"🗣 Nutq", question:"Minnat so‘zi?", hint:"💡 Rahmat!", answers:[{text:"Rahmat",correct:true},{text:"Salom",correct:false},{text:"Iltimos",correct:false},{text:"Xayr",correct:false}]},
  { title:"🗣 Nutq", question:"Ketish so‘zi?", hint:"💡 Xayr!", answers:[{text:"Xayr",correct:true},{text:"Salom",correct:false},{text:"Rahmat",correct:false},{text:"Uzr",correct:false}]},
  { title:"🗣 Nutq", question:"So‘rov so‘zi?", hint:"💡 Iltimos!", answers:[{text:"Iltimos",correct:true},{text:"Rahmat",correct:false},{text:"Salom",correct:false},{text:"Xayr",correct:false}]},
  { title:"🗣 Nutq", question:"Kechirim so‘zi?", hint:"💡 Uzr!", answers:[{text:"Uzr",correct:true},{text:"Rahmat",correct:false},{text:"Salom",correct:false},{text:"Xayr",correct:false}]}
],

 mevalar: [
  { title:"🍎 Mevalar", question:"Sariq meva?", hint:"💡 Banan!", answers:[{text:"Banan",correct:true},{text:"Olma",correct:false},{text:"Uzum",correct:false},{text:"Nok",correct:false}]},
  { title:"🍎 Mevalar", question:"Qizil meva?", hint:"💡 Olma!", answers:[{text:"Olma",correct:true},{text:"Banan",correct:false},{text:"Uzum",correct:false},{text:"Ananas",correct:false}]},
  { title:"🍎 Mevalar", question:"To‘p bo‘lib o‘sadi?", hint:"💡 Uzum!", answers:[{text:"Uzum",correct:true},{text:"Olma",correct:false},{text:"Banan",correct:false},{text:"Nok",correct:false}]},
  { title:"🍎 Mevalar", question:"Tikanli meva?", hint:"💡 Ananas!", answers:[{text:"Ananas",correct:true},{text:"Olma",correct:false},{text:"Uzum",correct:false},{text:"Banan",correct:false}]},
  { title:"🍎 Mevalar", question:"Yozgi meva?", hint:"💡 Tarvuz!", answers:[{text:"Tarvuz",correct:true},{text:"Olma",correct:false},{text:"Banan",correct:false},{text:"Uzum",correct:false}]},
  { title:"🍎 Mevalar", question:"Kichkina qizil?", hint:"💡 Qulupnay!", answers:[{text:"Qulupnay",correct:true},{text:"Olma",correct:false},{text:"Banan",correct:false},{text:"Uzum",correct:false}]},
  { title:"🍎 Mevalar", question:"Sariq uzun meva?", hint:"💡 Banan!", answers:[{text:"Banan",correct:true},{text:"Olma",correct:false},{text:"Nok",correct:false},{text:"Uzum",correct:false}]},
  { title:"🍎 Mevalar", question:"Sharbatli meva?", hint:"💡 Uzum!", answers:[{text:"Uzum",correct:true},{text:"Banan",correct:false},{text:"Olma",correct:false},{text:"Nok",correct:false}]},
  { title:"🍎 Mevalar", question:"Tropik meva?", hint:"💡 Ananas!", answers:[{text:"Ananas",correct:true},{text:"Olma",correct:false},{text:"Banan",correct:false},{text:"Uzum",correct:false}]},
  { title:"🍎 Mevalar", question:"Suvli meva?", hint:"💡 Tarvuz!", answers:[{text:"Tarvuz",correct:true},{text:"Olma",correct:false},{text:"Banan",correct:false},{text:"Uzum",correct:false}]}
],

 matematika: [
  { title:"➕ Matematik savollar", question:"2 + 3 nechchi?", hint:"💡 Qo‘shish!", answers:[{text:"5",correct:true},{text:"4",correct:false},{text:"6",correct:false},{text:"7",correct:false}]},
  { title:"➖ Matematik savollar", question:"6 - 2 nechchi?", hint:"💡 Ayirish!", answers:[{text:"4",correct:true},{text:"3",correct:false},{text:"5",correct:false},{text:"6",correct:false}]},
  { title:"✖️ Matematik savollar", question:"3 × 2 nechchi?", hint:"💡 Ko‘paytirish!", answers:[{text:"6",correct:true},{text:"5",correct:false},{text:"7",correct:false},{text:"8",correct:false}]},
  { title:"➗ Matematik savollar", question:"10 ÷ 2 nechchi?", hint:"💡 Bo‘lish!", answers:[{text:"5",correct:true},{text:"4",correct:false},{text:"6",correct:false},{text:"7",correct:false}]},
  { title:"➕ Matematik savollar", question:"7 + 8 nechchi?", hint:"💡 Qo‘shish!", answers:[{text:"15",correct:true},{text:"14",correct:false},{text:"16",correct:false},{text:"13",correct:false}]},
  { title:"➕ Matematik savollar", question:"9 + 1 nechchi?", hint:"💡 Qo‘shish!", answers:[{text:"10",correct:true},{text:"11",correct:false},{text:"9",correct:false},{text:"12",correct:false}]},
  { title:"➖ Matematik savollar", question:"8 - 3 nechchi?", hint:"💡 Ayirish!", answers:[{text:"5",correct:true},{text:"6",correct:false},{text:"4",correct:false},{text:"3",correct:false}]},
  { title:"✖️ Matematik savollar", question:"4 × 2 nechchi?", hint:"💡 Ko‘paytirish!", answers:[{text:"8",correct:true},{text:"6",correct:false},{text:"9",correct:false},{text:"7",correct:false}]},
  { title:"➗ Matematik savollar", question:"12 ÷ 3 nechchi?", hint:"💡 Bo‘lish!", answers:[{text:"4",correct:true},{text:"3",correct:false},{text:"5",correct:false},{text:"6",correct:false}]},
  { title:"➕ Matematik savollar", question:"5 + 5 nechchi?", hint:"💡 Qo‘shish!", answers:[{text:"10",correct:true},{text:"11",correct:false},{text:"9",correct:false},{text:"8",correct:false}]}
],

 fasllar: [
  { title:"🌸 Fasllar", question:"Qaysi faslda gullar ochadi?", hint:"💡 Bahor!", answers:[{text:"Bahor",correct:true},{text:"Yoz",correct:false},{text:"Kuz",correct:false},{text:"Qish",correct:false}]},
  { title:"☀️ Fasllar", question:"Qaysi fasl issiq?", hint:"💡 Yoz!", answers:[{text:"Yoz",correct:true},{text:"Bahor",correct:false},{text:"Kuz",correct:false},{text:"Qish",correct:false}]},
  { title:"🍂 Fasllar", question:"Barglar to‘kiladi?", hint:"💡 Kuz!", answers:[{text:"Kuz",correct:true},{text:"Bahor",correct:false},{text:"Yoz",correct:false},{text:"Qish",correct:false}]},
  { title:"❄️ Fasllar", question:"Qaysi faslda qor yog‘adi?", hint:"💡 Qish!", answers:[{text:"Qish",correct:true},{text:"Yoz",correct:false},{text:"Bahor",correct:false},{text:"Kuz",correct:false}]},
  { title:"🌦 Fasllar", question:"Yomg‘ir ko‘p qachon?", hint:"💡 Bahor!", answers:[{text:"Bahor",correct:true},{text:"Yoz",correct:false},{text:"Kuz",correct:false},{text:"Qish",correct:false}]},
  { title:"☀️ Fasllar", question:"Eng issiq fasl?", hint:"💡 Yoz!", answers:[{text:"Yoz",correct:true},{text:"Bahor",correct:false},{text:"Kuz",correct:false},{text:"Qish",correct:false}]},
  { title:"🍂 Fasllar", question:"Hosil yig‘iladi?", hint:"💡 Kuz!", answers:[{text:"Kuz",correct:true},{text:"Yoz",correct:false},{text:"Bahor",correct:false},{text:"Qish",correct:false}]},
  { title:"❄️ Fasllar", question:"Sovuq fasl?", hint:"💡 Qish!", answers:[{text:"Qish",correct:true},{text:"Yoz",correct:false},{text:"Bahor",correct:false},{text:"Kuz",correct:false}]},
  { title:"🌸 Fasllar", question:"Yangi hayot fasli?", hint:"💡 Bahor!", answers:[{text:"Bahor",correct:true},{text:"Yoz",correct:false},{text:"Kuz",correct:false},{text:"Qish",correct:false}]},
  { title:"☀️ Fasllar", question:"Dam olish fasli?", hint:"💡 Yoz!", answers:[{text:"Yoz",correct:true},{text:"Bahor",correct:false},{text:"Kuz",correct:false},{text:"Qish",correct:false}]}
],

 xorijiyTil: [
  { title:"🇬🇧 Ingliz tili", question:"Olma inglizcha?", hint:"💡 Apple!", answers:[{text:"Apple",correct:true},{text:"Banana",correct:false},{text:"Pear",correct:false},{text:"Grape",correct:false}]},
  { title:"🇷🇺 Rus tili", question:"Kitob ruscha?", hint:"💡 Книга!", answers:[{text:"Книга",correct:true},{text:"Тетрадь",correct:false},{text:"Ручка",correct:false},{text:"Стол",correct:false}]},
  { title:"🇬🇧 Ingliz tili", question:"Salom inglizcha?", hint:"💡 Hello!", answers:[{text:"Hello",correct:true},{text:"Bye",correct:false},{text:"Thanks",correct:false},{text:"Please",correct:false}]},
  { title:"🇷🇺 Rus tili", question:"Rahmat ruscha?", hint:"💡 Спасибо!", answers:[{text:"Спасибо",correct:true},{text:"Привет",correct:false},{text:"Пока",correct:false},{text:"Да",correct:false}]},
  { title:"🇬🇧 Ingliz tili", question:"It inglizcha?", hint:"💡 Dog!", answers:[{text:"Dog",correct:true},{text:"Cat",correct:false},{text:"Cow",correct:false},{text:"Horse",correct:false}]},
  { title:"🇬🇧 Ingliz tili", question:"Mushuk inglizcha?", hint:"💡 Cat!", answers:[{text:"Cat",correct:true},{text:"Dog",correct:false},{text:"Cow",correct:false},{text:"Pig",correct:false}]},
  { title:"🇷🇺 Rus tili", question:"Salom ruscha?", hint:"💡 Привет!", answers:[{text:"Привет",correct:true},{text:"Пока",correct:false},{text:"Да",correct:false},{text:"Нет",correct:false}]},
  { title:"🇬🇧 Ingliz tili", question:"Rahmat inglizcha?", hint:"💡 Thanks!", answers:[{text:"Thanks",correct:true},{text:"Hello",correct:false},{text:"Bye",correct:false},{text:"Please",correct:false}]},
  { title:"🇷🇺 Rus tili", question:"Xayr ruscha?", hint:"💡 Пока!", answers:[{text:"Пока",correct:true},{text:"Привет",correct:false},{text:"Да",correct:false},{text:"Нет",correct:false}]},
  { title:"🇬🇧 Ingliz tili", question:"Suv inglizcha?", hint:"💡 Water!", answers:[{text:"Water",correct:true},{text:"Milk",correct:false},{text:"Tea",correct:false},{text:"Coffee",correct:false}]}
],

 hayvonlar: [
  { title:"🐾 Hayvonlar", question:"O‘rmon shohi?", hint:"💡 Sher!", answers:[{text:"Sher",correct:true},{text:"Ayiq",correct:false},{text:"Yo‘lbars",correct:false},{text:"It",correct:false}]},
  { title:"🐾 Hayvonlar", question:"Suvda yashaydi?", hint:"💡 Baliq!", answers:[{text:"Baliq",correct:true},{text:"It",correct:false},{text:"Mushuk",correct:false},{text:"Sigir",correct:false}]},
  { title:"🐾 Hayvonlar", question:"Uchadi?", hint:"💡 Qush!", answers:[{text:"Qush",correct:true},{text:"Ot",correct:false},{text:"Sigir",correct:false},{text:"It",correct:false}]},
  { title:"🐾 Hayvonlar", question:"Sut beradi?", hint:"💡 Sigir!", answers:[{text:"Sigir",correct:true},{text:"Tovuq",correct:false},{text:"Baliq",correct:false},{text:"Ilon",correct:false}]},
  { title:"🐾 Hayvonlar", question:"Sekin yuradi?", hint:"💡 Toshbaqa!", answers:[{text:"Toshbaqa",correct:true},{text:"Quyon",correct:false},{text:"Ot",correct:false},{text:"It",correct:false}]},
  { title:"🐾 Hayvonlar", question:"Eng tez hayvon?", hint:"💡 Gepard!", answers:[{text:"Gepard",correct:true},{text:"Ayiq",correct:false},{text:"Sigir",correct:false},{text:"Ilon",correct:false}]},
  { title:"🐾 Hayvonlar", question:"Uy hayvoni?", hint:"💡 It!", answers:[{text:"It",correct:true},{text:"Sher",correct:false},{text:"Ayiq",correct:false},{text:"Ilon",correct:false}]},
  { title:"🐾 Hayvonlar", question:"Mushuk nima yeydi?", hint:"💡 Go‘sht!", answers:[{text:"Go‘sht",correct:true},{text:"O‘t",correct:false},{text:"Non",correct:false},{text:"Suv",correct:false}]},
  { title:"🐾 Hayvonlar", question:"Qush nima qiladi?", hint:"💡 Uchadi!", answers:[{text:"Uchadi",correct:true},{text:"Yuradi",correct:false},{text:"Suzadi",correct:false},{text:"Yotadi",correct:false}]},
  { title:"🐾 Hayvonlar", question:"Ilon nima qiladi?", hint:"💡 Sudraladi!", answers:[{text:"Sudraladi",correct:true},{text:"Uchadi",correct:false},{text:"Suzadi",correct:false},{text:"Yuguradi",correct:false}]}
]
};

let currentSection = null;
let currentQuestion = 0;

// Asosiy bo‘limlarni ochish
function openSection(sectionId) {
  document.getElementById("main-sections").classList.add("hidden");
  document.getElementById(sectionId).classList.remove("hidden");
}

// Orqaga qaytish
function goBack() {
  document.getElementById("bilish").classList.add("hidden");
  document.getElementById("bilimlar").classList.add("hidden");
  document.getElementById("main-sections").classList.remove("hidden");
}

// Quizni ochish
function openQuiz(quizId) {
  currentSection = quizId;
  currentQuestion = 0;

  document.getElementById("bilish").classList.add("hidden");
  document.getElementById("bilimlar").classList.add("hidden");
  document.getElementById("quiz").classList.remove("hidden");

  loadQuestion();
}

// Savolni yuklash
function loadQuestion() {
  const data = quizData[currentSection];
  const q = data[currentQuestion];

  document.getElementById("quiz-title").textContent = q.title;
  document.getElementById("question-text").textContent = q.question;
  document.getElementById("question-hint").textContent = q.hint;

  const answersDiv = document.getElementById("answers");
  answersDiv.innerHTML = "";
  q.answers.forEach(ans => {
    const btn = document.createElement("button");
    btn.className = "answer";
    btn.textContent = ans.text;
    btn.onclick = () => checkAnswer(ans.correct);
    answersDiv.appendChild(btn);
  });
}

// Javobni tekshirish
function checkAnswer(correct) {
  const popupCorrect = document.getElementById('popup-correct');
  const popupWrong = document.getElementById('popup-wrong');

  if (correct) {
    popupCorrect.classList.add('show');
    launchConfetti();
    setTimeout(() => {
      popupCorrect.classList.remove('show');
      nextQuestion();
    }, 2000);
  } else {
    popupWrong.classList.add('show');
    setTimeout(() => popupWrong.classList.remove('show'), 1500);
  }
}

// Keyingi savol
function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < quizData[currentSection].length) {
    loadQuestion();
  } else {
    alert("🎉 " + currentSection + " bo‘limi tugadi!");
    closeQuiz();
  }
}

// Quizni yopish
function closeQuiz() {
  document.getElementById("quiz").classList.add("hidden");
  document.getElementById("main-sections").classList.remove("hidden");
}

// Mushakbozlik
function launchConfetti() {
  const confettiCanvas = document.getElementById('confetti');
  const ctx = confettiCanvas.getContext('2d');
  confettiCanvas.width = window.innerWidth;
  confettiCanvas.height = window.innerHeight;

  let particles = [];
  for (let i = 0; i < 100; i++) {
    particles.push({
      x: Math.random() * confettiCanvas.width,
      y: Math.random() * confettiCanvas.height,
      r: Math.random() * 6 + 2,
      d: Math.random() * 100,
      color: `hsl(${Math.random() * 360},100%,50%)`
    });
  }

  function draw() {
    ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
    particles.forEach(p => {
      ctx.beginPath();
      ctx.fillStyle = p.color;
      ctx.arc(p.x, p.y, p.r, 0, Math.PI*2, true);
      ctx.fill();
    });
    update();
  }

  function update() {
    particles.forEach(p => {
      p.y += Math.cos(p.d) + 1 + p.r/2;
      p.x += Math.sin(p.d);
      if (p.y > confettiCanvas.height) {
        p.x = Math.random() * confettiCanvas.width;
        p.y = -10;
      }
    });
  }

  setInterval(draw, 20);
}

