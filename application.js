$(document).ready(function() {

  var polyglot = [ "Hola, gracias por visitar mi sitio!", "!أهلاً وسهلاً! شكراً جزيلاً لزيارة موقعي", "!שלום! תודה רבה על ביקורכם באתר שלי", "Hi there, thanks for visiting my site!", "Olá! Obrigado por visitar o meu site!"
  ]

  var geoquestions = [

    { "What is the largest subnational governing body in the world, by area?": "Sakha Republic, a federal subject of Russia in Siberia" },

    { "What is the only African nation in which Spanish is an official language?": "Equatorial Guinea" },

    { "What are the only two doubly-landlocked countries in the world?": "Liechtenstein in Central Europe and Uzbekistan in Central Asia" },

    { "What is the southernmost city in the world?": "Ushuaia, Argentina" },

    { "What is the most commonly practiced religion in Kazakhstan?": "Islam" },

    { "How many countries lie between Norway and North Korea?": "One — Russia!" },

    { "What state lies between Texas and Colorado?": "Oklahoma, though you could make an argument for New Mexico — look at a map"
    },

    { "What language do most people speak in Chennai, India?": "Tamil, a Dravidian language"
    },

    { "True or false: There are more Muslims in China than there are in Syria": "True!"
    },

    { "What is the second most Mormon state in the country?": "Idaho, at 26,000 Mormons per 100,000 people"
    },

    { "If you were to drive from Los Angeles to Chicago, what large city would lie roughly half-way on your route?": "Denver, Colorado" }

  ]


  $('.quirk').on('click', function(event) {
    $('.tell-me').addClass("hidden")
    $('.answer').text("")
    event.preventDefault();
  });

  $('.polyglot').on('click', function() {
    $('.hidden-stuff').text(polyglot[Math.floor(Math.random() * polyglot.length)])
  });

  $('.geography').on('click', function() {
    $('.answer').text("")
    var selection = geoquestions[Math.floor(Math.random() * geoquestions.length)]

    $('.hidden-stuff').text(Object.keys(selection)[0])
    $('.tell-me').removeClass("hidden")
    $('.tell-me').on('click', function(){
      $('.answer').text(selection[Object.keys(selection)[0]])
    })
  })

  $('.airplane').on("click", function() {
    $('.airplane-img').removeClass("hidden")
    $('.airplane-img').animate({
      right: "1400px"
    }, 4000, function(){
      document.getElementsByClassName("airplane-img")[0].style.right = "-200px";
    })

  })

});