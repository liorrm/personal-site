$(document).ready(function() {

  var polyglot = [ "Hola, gracias por visitar mi sitio!", "!أهلاً وسهلاً! شكراً جزيلاً لزيارة موقعي", "!שלום! תודה רבה על ביקורכם באתר שלי", "Hi there, thanks for visiting my site!", "Olá! Obrigado por visitar o meu site!"
  ]

  var geoquestions = [

    { "What is the largest subnational governing body in the world, by area?": "Sakha Republic, a federal subject of Russia in Siberia" },

    { "What is the only African country in which Spanish is an official language?": "Equatorial Guinea" },

    { "What are the only two doubly-landlocked countries in the world?": "Liechtenstein and Uzbekistan" },

    { "What city is commonly regarded as the southernmost city in the world?": "Ushuaia, Argentina" },

    { "What is the most commonly practiced religion in Kazakhstan?": "Islam" },

    { "How many countries lie between Norway and North Korea?": "One — Russia!" },

    { "What states lie between Texas and Colorado?": "Oklahoma & New Mexico"
    },

    { "What language do most people speak in Chennai, India?": "Tamil, a Dravidian language"
    },

    { "True or false: There are more Muslims in China than there are in Syria": "True!"
    },

    { "What is the second most Mormon state in the United States?": "Idaho, at 26,000 Mormons per 100,000 people"
    },

    { "If you were to drive from Los Angeles to Chicago, what large city would lie roughly half-way along your route?": "Denver, Colorado" },

    { "Do Nebraska and Missouri share a border?": "Yes they do, abeit a small one" },

    { "What is the only EU country with an official language that is Semitic?": "Malta" },

    { "In what country is the mouth of the Danube River?": "Romania" },

    { "Which country has the higher per capita gross domestic product — Yemen or Oman?": "Oman, and it's about 16 times that of Yemen!" },

    { "If you were to look at a population density map of Egypt, what shape would the heavily populated areas make, and why?": "It roughly resembles a flower because of the importance of the Nile River and its delta: <br> <img class='nile' src='/img/nile-delta.jpg' />" }

  ]

  var tripleSeven = $('.airplane-img')
  var a380 = $('.a380-airplane-img')
  var airplanes = [tripleSeven, a380]

  $('.quirk').on('click', function(event) {
    event.preventDefault();
  });

  $('.polyglot').on('click', function() {
    $('.answer').text("")
    $('.tell-me').addClass("hidden")
    $('.hidden-stuff').text(polyglot[Math.floor(Math.random() * polyglot.length)])
  });

  $('.geography').on('click', function() {
    $('.answer').text("")
    var selection = geoquestions[Math.floor(Math.random() * geoquestions.length)]

    $('.hidden-stuff').text(Object.keys(selection)[0])
    $('.tell-me').removeClass("hidden")
    $('.tell-me').on('click', function(){
      $('.answer').html(selection[Object.keys(selection)[0]])
    })
  })

  $('.airplane').on("click", function() {
    $('.nile').hide();
    var airplane = airplanes[Math.floor(Math.random() * airplanes.length)]

    if (airplane == tripleSeven) {
      $('.airplane-img').removeClass("hidden")
      $('.airplane-img').animate({
        right: "108%"
        }, 3000, function(){
          var plane = document.getElementsByClassName("airplane-img")[0]
          plane.style.right = "-50%";
          plane.style.top = (Math.floor(Math.random() * (90 - 8 + 1)) + 8) + "%"
        $('.airplane-img').addClass("hidden")
      })
    } else {
      $('.a380-airplane-img').removeClass("hidden")
      $('.a380-airplane-img').animate({
          bottom: "100%"
        }, 2500, function() {
          var plane = document.getElementsByClassName("a380-airplane-img")[0]
          plane.style.bottom = "-40%";
          plane.style.left = (Math.floor(Math.random() * (70 - 15 + 1)) + 15) + "%"
        $('.a380-airplane-img').addClass("hidden")
        }
      )
    }
  })
});