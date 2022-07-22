function loadData() {
  let studs = JSON.parse(localStorage.getItem("localStudents"));
  if (studs) {
    let table = document.getElementById("table");
    var dynamic = `
      <div class="fullName heading"><span>Full Name</span></div>
      <div class="age heading"><span>Age</span> </div>
      <div class="mobile heading"><span>Mobile</span> </div>
      <div class="email heading"><span>Email</span> </div>
      <div class="city heading"><span>City</span> </div>`;
    for (var i = 0; i < studs.length; i++) {
      if (i % 2 == 0) {
        dynamic += ` <div class="fullName even"><span>${
          studs[i].firstName + "  " + studs[i].lastName
        }</span></div>
                <div class="age even"><span>${studs[i].age}</span> </div>
                <div class="mobile even"><span>${studs[i].mobile}</span> </div>
                <div class="email even"><span>${studs[i].email}</span> </div>
                <div class="city even"><span>${studs[i].city}</span> </div>`;
      } else {
        dynamic += ` <div class="fullName"><span>${
          studs[i].firstName + "  " + studs[i].lastName
        }</span></div>
                    <div class="age"><span>${studs[i].age}</span> </div>
                    <div class="mobile"><span>${studs[i].mobile}</span> </div>
                    <div class="email"><span>${studs[i].email}</span> </div>
                    <div class="city"><span>${studs[i].city}</span> </div>`;
      }
    }
    table.innerHTML = dynamic;
  } else {
    const students = [
      {
        firstName: "Trixie",
        lastName: "Burkart",
        email: "tburkart0@digg.com",
        age: 23,
        mobile: "9772468414",
        city: "Rudnichnyy",
      },
      {
        firstName: "Tony",
        lastName: "Jutson",
        email: "tjutson1@webs.com",
        age: 25,
        mobile: "6709116722",
        city: "Llazicë",
      },
      {
        firstName: "Elsie",
        lastName: "Henze",
        email: "ehenze2@amazon.co.jp",
        age: 23,
        mobile: "5631851546",
        city: "Kungsbacka",
      },
      {
        firstName: "Gracie",
        lastName: "Jamme",
        email: "gjamme3@ftc.gov",
        age: 21,
        mobile: "8613199879",
        city: "As Sayyānī",
      },
      {
        firstName: "Judye",
        lastName: "Hovert",
        email: "jhovert4@intel.com",
        age: 25,
        mobile: "7293280484",
        city: "Kristinestad",
      },
      {
        firstName: "Ashil",
        lastName: "Franciottoi",
        email: "afranciottoi5@si.edu",
        age: 21,
        mobile: "8261672301",
        city: "Solânea",
      },
      {
        firstName: "Otis",
        lastName: "Nelligan",
        email: "onelligan6@last.fm",
        age: 20,
        mobile: "4709136457",
        city: "Zaslawye",
      },
      {
        firstName: "Christoffer",
        lastName: "Kedward",
        email: "ckedward7@oracle.com",
        age: 21,
        mobile: "4957283009",
        city: "Gostimë",
      },
      {
        firstName: "Aurilia",
        lastName: "Euesden",
        email: "aeuesden8@nbcnews.com",
        age: 25,
        mobile: "4142933015",
        city: "Laç",
      },
      {
        firstName: "Kiri",
        lastName: "Flew",
        email: "kflew9@elegantthemes.com",
        age: 21,
        mobile: "2266745096",
        city: "Sa Kaeo",
      },
      {
        firstName: "Leelah",
        lastName: "Jaqueminet",
        email: "ljaquemineta@fema.gov",
        age: 24,
        mobile: "5975166366",
        city: "Bato",
      },
      {
        firstName: "Cyndie",
        lastName: "Guillerman",
        email: "cguillermanb@chronoengine.com",
        age: 23,
        mobile: "8859429129",
        city: "Savran’",
      },
      {
        firstName: "Jarrett",
        lastName: "Spiby",
        email: "jspibyc@imgur.com",
        age: 24,
        mobile: "3507621575",
        city: "Krapina",
      },
      {
        firstName: "Lucie",
        lastName: "Hollyar",
        email: "lhollyard@wiley.com",
        age: 21,
        mobile: "9845409598",
        city: "Ereencav",
      },
      {
        firstName: "Fanchette",
        lastName: "Duckett",
        email: "fduckette@acquirethisname.com",
        age: 25,
        mobile: "6908477445",
        city: "Dolní Rychnov",
      },
      {
        firstName: "Randi",
        lastName: "Vina",
        email: "rvinaf@ow.ly",
        age: 20,
        mobile: "1337844801",
        city: "Nanae",
      },
      {
        firstName: "Caresse",
        lastName: "Tours",
        email: "ctoursg@wunderground.com",
        age: 20,
        mobile: "8316749137",
        city: "Tennō",
      },
      {
        firstName: "Grace",
        lastName: "Klimushev",
        email: "gklimushevh@ow.ly",
        age: 23,
        mobile: "2236000515",
        city: "Aras-asan",
      },
      {
        firstName: "Lorrin",
        lastName: "Withey",
        email: "lwitheyi@nps.gov",
        age: 20,
        mobile: "5862290216",
        city: "Tualangcut",
      },
      {
        firstName: "Laney",
        lastName: "Tathacott",
        email: "ltathacottj@dion.ne.jp",
        age: 21,
        mobile: "7331189191",
        city: "Ngromo",
      },
      {
        firstName: "Reggy",
        lastName: "Djuricic",
        email: "rdjuricick@mit.edu",
        age: 23,
        mobile: "1662505505",
        city: "Barengkok",
      },
      {
        firstName: "Glyn",
        lastName: "Erskine Sandys",
        email: "gerskinesandysl@xinhuanet.com",
        age: 23,
        mobile: "7847098183",
        city: "Bangkok",
      },
      {
        firstName: "Ossie",
        lastName: "Haslum",
        email: "ohaslumm@ask.com",
        age: 21,
        mobile: "9362211044",
        city: "Mykolayiv",
      },
      {
        firstName: "Faber",
        lastName: "Goldis",
        email: "fgoldisn@e-recht24.de",
        age: 25,
        mobile: "3508647186",
        city: "Higashimurayama-shi",
      },
      {
        firstName: "Megan",
        lastName: "Raoux",
        email: "mraouxo@ucsd.edu",
        age: 22,
        mobile: "5838354558",
        city: "Waitenepang",
      },
      {
        firstName: "Reeta",
        lastName: "Etches",
        email: "retchesp@cpanel.net",
        age: 22,
        mobile: "8723793402",
        city: "Sasnovy Bor",
      },
      {
        firstName: "Maryrose",
        lastName: "Jilliss",
        email: "mjillissq@rakuten.co.jp",
        age: 24,
        mobile: "9717665850",
        city: "Kashima-shi",
      },
      {
        firstName: "Reggi",
        lastName: "Cesconi",
        email: "rcesconir@va.gov",
        age: 23,
        mobile: "4315502655",
        city: "Ranambeling",
      },
      {
        firstName: "Mabelle",
        lastName: "Dallan",
        email: "mdallans@meetup.com",
        age: 20,
        mobile: "1268923368",
        city: "Turka",
      },
      {
        firstName: "Lucky",
        lastName: "Losseljong",
        email: "llosseljongt@tripadvisor.com",
        age: 23,
        mobile: "6031783598",
        city: "Shangdongjie",
      },
      {
        firstName: "Tom",
        lastName: "Jozwik",
        email: "tjozwiku@wisc.edu",
        age: 22,
        mobile: "8095652011",
        city: "Guachucal",
      },
      {
        firstName: "Barr",
        lastName: "Schimon",
        email: "bschimonv@dailymail.co.uk",
        age: 24,
        mobile: "9087850122",
        city: "Metz",
      },
      {
        firstName: "Adelind",
        lastName: "Gumby",
        email: "agumbyw@dell.com",
        age: 24,
        mobile: "9694426387",
        city: "Tengrela",
      },
      {
        firstName: "Christabella",
        lastName: "Mathys",
        email: "cmathysx@spotify.com",
        age: 25,
        mobile: "2838246131",
        city: "Magang",
      },
      {
        firstName: "Zak",
        lastName: "Circuitt",
        email: "zcircuitty@yellowpages.com",
        age: 21,
        mobile: "1281409106",
        city: "Carapo",
      },
      {
        firstName: "Balduin",
        lastName: "Claypool",
        email: "bclaypoolz@un.org",
        age: 24,
        mobile: "8511714683",
        city: "Tianzishan",
      },
      {
        firstName: "Winnah",
        lastName: "McAne",
        email: "wmcane10@studiopress.com",
        age: 23,
        mobile: "2226967534",
        city: "Linglong",
      },
      {
        firstName: "Simonette",
        lastName: "Gonsalvez",
        email: "sgonsalvez11@nih.gov",
        age: 21,
        mobile: "5816765907",
        city: "Thị Trấn Tam Điệp",
      },
      {
        firstName: "Margalo",
        lastName: "Wysome",
        email: "mwysome12@mediafire.com",
        age: 20,
        mobile: "4248356424",
        city: "Dīvāndarreh",
      },
      {
        firstName: "Gordan",
        lastName: "Murtimer",
        email: "gmurtimer13@hud.gov",
        age: 24,
        mobile: "4016703377",
        city: "Orillia",
      },
      {
        firstName: "Gabi",
        lastName: "Strother",
        email: "gstrother14@mozilla.com",
        age: 22,
        mobile: "7892902814",
        city: "Makoba",
      },
      {
        firstName: "Krissie",
        lastName: "Astman",
        email: "kastman15@google.cn",
        age: 23,
        mobile: "6619515525",
        city: "Néa Sánta",
      },
      {
        firstName: "Kellia",
        lastName: "Roseveare",
        email: "kroseveare16@harvard.edu",
        age: 22,
        mobile: "6163426514",
        city: "Porirua",
      },
      {
        firstName: "Lay",
        lastName: "Tomczykowski",
        email: "ltomczykowski17@google.com",
        age: 21,
        mobile: "8405519267",
        city: "Bicesse",
      },
      {
        firstName: "Chantal",
        lastName: "Cramond",
        email: "ccramond18@bandcamp.com",
        age: 24,
        mobile: "6225027181",
        city: "Winong",
      },
      {
        firstName: "Carling",
        lastName: "Selwin",
        email: "cselwin19@msu.edu",
        age: 22,
        mobile: "1243391929",
        city: "Campoverde",
      },
      {
        firstName: "Gertruda",
        lastName: "Cranna",
        email: "gcranna1a@msu.edu",
        age: 20,
        mobile: "6769114350",
        city: "Livramento do Brumado",
      },
      {
        firstName: "Lavinia",
        lastName: "Olivazzi",
        email: "lolivazzi1b@wisc.edu",
        age: 23,
        mobile: "3053113781",
        city: "Fernandópolis",
      },
      {
        firstName: "Tripp",
        lastName: "Large",
        email: "tlarge1c@hubpages.com",
        age: 21,
        mobile: "1625711677",
        city: "Béziers",
      },
      {
        firstName: "Jessie",
        lastName: "Kearton",
        email: "jkearton1d@hibu.com",
        age: 23,
        mobile: "4196704092",
        city: "Hamilton",
      },
      {
        firstName: "Albertine",
        lastName: "Eastabrook",
        email: "aeastabrook1e@bbb.org",
        age: 25,
        mobile: "2196636901",
        city: "Padre Paraíso",
      },
      {
        firstName: "Osbourn",
        lastName: "Laviste",
        email: "olaviste1f@cyberchimps.com",
        age: 23,
        mobile: "1591552875",
        city: "Mont-de-Marsan",
      },
      {
        firstName: "Dollie",
        lastName: "de Quesne",
        email: "ddequesne1g@multiply.com",
        age: 23,
        mobile: "8525662034",
        city: "Markópoulo Oropoú",
      },
      {
        firstName: "Ingeborg",
        lastName: "Adamini",
        email: "iadamini1h@wired.com",
        age: 23,
        mobile: "5614892259",
        city: "Osório",
      },
      {
        firstName: "Erika",
        lastName: "Blessed",
        email: "eblessed1i@feedburner.com",
        age: 22,
        mobile: "5938520730",
        city: "Bojongnangka",
      },
      {
        firstName: "Henderson",
        lastName: "Kiffin",
        email: "hkiffin1j@ucoz.ru",
        age: 22,
        mobile: "8471631488",
        city: "Bom Jesus do Itabapoana",
      },
      {
        firstName: "Ethelin",
        lastName: "Roughey",
        email: "eroughey1k@gravatar.com",
        age: 24,
        mobile: "4672016581",
        city: "Fare",
      },
      {
        firstName: "Jackie",
        lastName: "Seeman",
        email: "jseeman1l@bbc.co.uk",
        age: 21,
        mobile: "5982991749",
        city: "Oviedo",
      },
      {
        firstName: "Euell",
        lastName: "Storry",
        email: "estorry1m@1688.com",
        age: 23,
        mobile: "2159201838",
        city: "Östersund",
      },
      {
        firstName: "Elyn",
        lastName: "Sorsby",
        email: "esorsby1n@uiuc.edu",
        age: 22,
        mobile: "7206681377",
        city: "Tiling",
      },
      {
        firstName: "Shirlene",
        lastName: "Borthwick",
        email: "sborthwick1o@unesco.org",
        age: 25,
        mobile: "5214547470",
        city: "Sumilao",
      },
      {
        firstName: "Neda",
        lastName: "McCheyne",
        email: "nmccheyne1p@chron.com",
        age: 25,
        mobile: "7439120329",
        city: "Colima",
      },
      {
        firstName: "Tammi",
        lastName: "Davidovits",
        email: "tdavidovits1q@noaa.gov",
        age: 23,
        mobile: "8117065400",
        city: "Miramar",
      },
      {
        firstName: "Cordula",
        lastName: "Collomosse",
        email: "ccollomosse1r@amazon.de",
        age: 20,
        mobile: "8436727601",
        city: "Jaguariaíva",
      },
      {
        firstName: "Patrizio",
        lastName: "Matthaus",
        email: "pmatthaus1s@skype.com",
        age: 25,
        mobile: "6201719430",
        city: "Terney",
      },
      {
        firstName: "Stevena",
        lastName: "MacCartair",
        email: "smaccartair1t@cmu.edu",
        age: 22,
        mobile: "9245348468",
        city: "Wuku",
      },
      {
        firstName: "Clementina",
        lastName: "Poulson",
        email: "cpoulson1u@sogou.com",
        age: 25,
        mobile: "2549382953",
        city: "Rumphi",
      },
      {
        firstName: "Addie",
        lastName: "Traviss",
        email: "atraviss1v@tinypic.com",
        age: 23,
        mobile: "1852206402",
        city: "Rennes",
      },
      {
        firstName: "Letitia",
        lastName: "Beamont",
        email: "lbeamont1w@tinyurl.com",
        age: 24,
        mobile: "6084021851",
        city: "Tabivere",
      },
      {
        firstName: "Thorpe",
        lastName: "Sheraton",
        email: "tsheraton1x@prlog.org",
        age: 25,
        mobile: "7188780443",
        city: "New York City",
      },
      {
        firstName: "Marisa",
        lastName: "Mitchell",
        email: "mmitchell1y@bizjournals.com",
        age: 23,
        mobile: "3693656194",
        city: "Maqbanah",
      },
      {
        firstName: "Ezra",
        lastName: "Moyne",
        email: "emoyne1z@mozilla.org",
        age: 25,
        mobile: "5208465727",
        city: "Chafé",
      },
      {
        firstName: "Floria",
        lastName: "Jenking",
        email: "fjenking20@jiathis.com",
        age: 20,
        mobile: "1983856308",
        city: "Fuan",
      },
      {
        firstName: "Breanne",
        lastName: "Reye",
        email: "breye21@sbwire.com",
        age: 23,
        mobile: "4006107665",
        city: "Challhuahuacho",
      },
      {
        firstName: "Terence",
        lastName: "Marlor",
        email: "tmarlor22@slideshare.net",
        age: 22,
        mobile: "1778497018",
        city: "Puszczykowo",
      },
      {
        firstName: "Ethyl",
        lastName: "Forcade",
        email: "eforcade23@ebay.com",
        age: 23,
        mobile: "6077071333",
        city: "Prey Veng",
      },
      {
        firstName: "Devlin",
        lastName: "Stonehewer",
        email: "dstonehewer24@sbwire.com",
        age: 24,
        mobile: "6409991920",
        city: "Bibrka",
      },
      {
        firstName: "Ellwood",
        lastName: "Hould",
        email: "ehould25@squarespace.com",
        age: 22,
        mobile: "5081451639",
        city: "Fresnes",
      },
      {
        firstName: "Doris",
        lastName: "Nuccitelli",
        email: "dnuccitelli26@drupal.org",
        age: 24,
        mobile: "1139246260",
        city: "Jianba",
      },
      {
        firstName: "Helyn",
        lastName: "Orr",
        email: "horr27@clickbank.net",
        age: 21,
        mobile: "7798823293",
        city: "Escada",
      },
      {
        firstName: "Simona",
        lastName: "Chafney",
        email: "schafney28@t-online.de",
        age: 20,
        mobile: "7785835775",
        city: "Višnjevac",
      },
      {
        firstName: "Gayleen",
        lastName: "Dobson",
        email: "gdobson29@cnet.com",
        age: 21,
        mobile: "9446027338",
        city: "Leigao",
      },
      {
        firstName: "Salvador",
        lastName: "Freak",
        email: "sfreak2a@amazon.co.uk",
        age: 25,
        mobile: "6622938453",
        city: "Schroeder",
      },
      {
        firstName: "Erek",
        lastName: "Kleinhandler",
        email: "ekleinhandler2b@geocities.jp",
        age: 20,
        mobile: "2834774050",
        city: "Trindade",
      },
      {
        firstName: "Stacey",
        lastName: "Binge",
        email: "sbinge2c@addthis.com",
        age: 20,
        mobile: "3556351244",
        city: "Roblin",
      },
      {
        firstName: "Anderson",
        lastName: "Worviell",
        email: "aworviell2d@marketwatch.com",
        age: 20,
        mobile: "7974078693",
        city: "Mahaica Village",
      },
      {
        firstName: "Tamas",
        lastName: "Turtle",
        email: "tturtle2e@deliciousdays.com",
        age: 20,
        mobile: "2596767151",
        city: "Sundsvall",
      },
      {
        firstName: "Shantee",
        lastName: "Awcock",
        email: "sawcock2f@list-manage.com",
        age: 20,
        mobile: "8732904182",
        city: "Qufu",
      },
      {
        firstName: "Zebadiah",
        lastName: "Castellan",
        email: "zcastellan2g@squarespace.com",
        age: 22,
        mobile: "7275099062",
        city: "Куклиш",
      },
      {
        firstName: "Aurelie",
        lastName: "Whillock",
        email: "awhillock2h@wsj.com",
        age: 25,
        mobile: "3132678511",
        city: "Detroit",
      },
      {
        firstName: "Ronda",
        lastName: "Weyman",
        email: "rweyman2i@hexun.com",
        age: 21,
        mobile: "9211130405",
        city: "Las Flores",
      },
      {
        firstName: "Ashlin",
        lastName: "Horsey",
        email: "ahorsey2j@diigo.com",
        age: 20,
        mobile: "4781779593",
        city: "Florencia",
      },
      {
        firstName: "Arabelle",
        lastName: "Houlton",
        email: "ahoulton2k@com.com",
        age: 23,
        mobile: "9712019613",
        city: "Ruse",
      },
      {
        firstName: "Baldwin",
        lastName: "Blagburn",
        email: "bblagburn2l@prlog.org",
        age: 23,
        mobile: "2171483011",
        city: "Nice",
      },
      {
        firstName: "Alfie",
        lastName: "Van der Spohr",
        email: "avanderspohr2m@taobao.com",
        age: 20,
        mobile: "9748319600",
        city: "Miłosław",
      },
      {
        firstName: "Bendix",
        lastName: "Bernon",
        email: "bbernon2n@zdnet.com",
        age: 22,
        mobile: "9927403478",
        city: "Budapest",
      },
      {
        firstName: "Antonius",
        lastName: "Wynn",
        email: "awynn2o@archive.org",
        age: 21,
        mobile: "5081674536",
        city: "Pitogo",
      },
      {
        firstName: "Paige",
        lastName: "McRoberts",
        email: "pmcroberts2p@posterous.com",
        age: 21,
        mobile: "4566497665",
        city: "Casal das Figueiras",
      },
      {
        firstName: "Gustavo",
        lastName: "Warcop",
        email: "gwarcop2q@liveinternet.ru",
        age: 20,
        mobile: "8501378829",
        city: "Gangjia",
      },
      {
        firstName: "Natassia",
        lastName: "Omond",
        email: "nomond2r@purevolume.com",
        age: 25,
        mobile: "9703196652",
        city: "Yuhuazhai",
      },
    ];
    localStorage.setItem("localStudents", JSON.stringify(students));
    console.log(localStorage.getItem("localStudents"));
    loadData();
    return;
  }
}