  
// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

var app = new Framework7({
    // App root element
    root: '#app',
    // App Name
    name: 'My App',
    // App id
    id: 'com.myapp.test',
    // Enable swipe panel
    panel: {
      swipe: 'left',
    },
    // Add default routes
    routes: [
      {
        path: '/anotador/',
        url: 'anotador.html',
      },
      {
        path: '/index/',
        url: 'index.html',
      },
    ]
    // ... other parameters
  });

var mainView = app.views.create('.view-main');

// Handle Cordova Device Ready Event
$$(document).on('deviceready', function() {
    console.log("Aca yo no hice nada");
});

// Option 1. Using one 'page:init' handler for all pages
$$(document).on('page:init', function (e) {
    // Do something here when page loaded and initialized
    console.log(e);
})

// Option 2. Uso de controladores de eventos 'page: init' en vivo para cada página
$$(document).on('page:init', '.page[data-name="index"]', function (e) {
    // Haga algo aquí cuando la página con el atributo data-name = "about" se cargue e inicialice
    console.log("Iniciando Generala");
    $$('#Jugar').on('click', fnJugar);
    $$('#Jugador1').html(jug1);
    $$('#Jugador2').html(jug2);
    console.log('Reinicio Exitoso');
})
$$(document).on('page:init', '.page[data-name="anotador"]', function (e) {
    $$('#Jgdor1').html(jug1);
    $$('#Jgdor2').html(jug2);
    $$("#Limpiar").on("click", fnLimpiar);
    $$('#finaliza').on('click', fnFinaliza);
    $$('.abreTuDado').on('click', function() {
        pepito= this.id
        j= pepito[1]
        d= pepito[2]
        //console.log(d);
            $$('.dado').on('click', function() {
                dado= this.id
                t= dado[1]
                p= dado[2]
                //console.log(p)
                Puntaje= d*p;
                $$('#j'+j+d).html(Puntaje);
                fnTotales1();
                fnTotales2();
            })
            $$('.tachar1').on('click', function(){
                console.log("tachar1")
                tacho= this.id
                q= tacho[1]
                w= tacho[2]
                console.log("tachar1 "+w);
                $$('#j'+j+d).html(w);
                fnTotales1();
                fnTotales2();
                $$("#j"+j+d).removeClass("JugadoresdeGeneralablack").addClass("JugadoresdeGeneralared");
            })
    })
    $$('.abreTuJuego').on('click', function() {
        jugada= this.id
        g= jugada[1]
        h= jugada[2]
        //console.log(h);
            $$('.armada').on('click', function(){
                armada= this.id
                a= armada[1]
                b= armada[2]
                menos1= h-1;
                //console.log(b);
                arma= menos1*b;
                //console.log(arma);
                $$('#g'+g+h).html(arma);
                fnTotales1();
                fnTotales2();
            })
            $$('.servida').on('click', function(){
                servida= this.id
                c= servida[1]
                e= servida[2]
                //console.log(e);
                serv= h*e;
                //console.log(serv);
                $$('#g'+g+h).html(serv);
                fnTotales1();
                fnTotales2();
            })
            $$('.tachar2').on('click', function(){
                console.log("tachar2")
                tacho= this.id
                q= tacho[1]
                w= tacho[2]
                console.log("tachar2 "+w);
                $$('#g'+g+h).html(w);
                fnTotales1();
                fnTotales2();
                $$("#g"+g+h).removeClass("JugadoresdeGeneralablack").addClass("JugadoresdeGeneralared");
            })
    })
    $$('.abreTuGener').on('click', function() {
        generala= this.id
        u= generala[1]
        i= generala[2]
        //console.log(i);
            $$('.garmada').on('click', function(){
                valor= this.id
                t= valor[1]
                y= valor[2]
                //console.log(y);
                pc= t*y;// 10
                //console.log('Valor de pc'+pc);
                multi= i*y; //5 o 10
                //console.log('Valor de multi'+multi);
                computo= pc*multi;
                //console.log('Valor de Multi x pc '+computo);
                $$('#x'+u+i).html(computo);
                fnTotales1();
                fnTotales2();
            })
            $$('.tachar3').on('click', function(){
                console.log("tachar3")
                tacho= this.id
                q= tacho[1]
                w= tacho[2]
                console.log("tachar3 "+w);
                $$('#x'+u+i).html(w);
                fnTotales1();
                fnTotales2();
                $$("#x"+u+i).removeClass("JugadoresdeGeneralablack").addClass("JugadoresdeGeneralared");
            })
    })
})
var jug1="";
var jug2="";
var d="";
function fnJugar() {
    jug1 = $$('#Jugador1').val();
    console.log(jug1);
    jug2 = $$('#Jugador2').val();
    console.log(jug2);
    mainView.router.navigate('/anotador/');
}
function fnLimpiar() {
    console.log("Limpiar Jug1");
    d1= parseInt($$('#j11').text(0).removeClass("JugadoresdeGeneralared").addClass("JugadoresdeGeneralablack"));
    d2= parseInt($$('#j12').text(0).removeClass("JugadoresdeGeneralared").addClass("JugadoresdeGeneralablack"));
    d3= parseInt($$('#j13').text(0).removeClass("JugadoresdeGeneralared").addClass("JugadoresdeGeneralablack"));
    d4= parseInt($$('#j14').text(0).removeClass("JugadoresdeGeneralared").addClass("JugadoresdeGeneralablack"));
    d5= parseInt($$('#j15').text(0).removeClass("JugadoresdeGeneralared").addClass("JugadoresdeGeneralablack"));
    d6= parseInt($$('#j16').text(0).removeClass("JugadoresdeGeneralared").addClass("JugadoresdeGeneralablack"));
    esc= parseInt($$('#g15').text(0).removeClass("JugadoresdeGeneralared").addClass("JugadoresdeGeneralablack"));
    full= parseInt($$('#g17').text(0).removeClass("JugadoresdeGeneralared").addClass("JugadoresdeGeneralablack"));
    poker= parseInt($$('#g19').text(0).removeClass("JugadoresdeGeneralared").addClass("JugadoresdeGeneralablack"));
    gen= parseInt($$('#x11').text(0).removeClass("JugadoresdeGeneralared").addClass("JugadoresdeGeneralablack"));
    genDob= parseInt($$('#x12').text(0).removeClass("JugadoresdeGeneralared").addClass("JugadoresdeGeneralablack"));
    $$('#tot1').text(0);
    console.log("Limpiar Jug2")
    d1= parseInt($$('#j21').text(0).removeClass("JugadoresdeGeneralared").addClass("JugadoresdeGeneralablack"));
    d2= parseInt($$('#j22').text(0).removeClass("JugadoresdeGeneralared").addClass("JugadoresdeGeneralablack"));
    d3= parseInt($$('#j23').text(0).removeClass("JugadoresdeGeneralared").addClass("JugadoresdeGeneralablack"));
    d4= parseInt($$('#j24').text(0).removeClass("JugadoresdeGeneralared").addClass("JugadoresdeGeneralablack"));
    d5= parseInt($$('#j25').text(0).removeClass("JugadoresdeGeneralared").addClass("JugadoresdeGeneralablack"));
    d6= parseInt($$('#j26').text(0).removeClass("JugadoresdeGeneralared").addClass("JugadoresdeGeneralablack"));
    esc= parseInt($$('#g25').text(0).removeClass("JugadoresdeGeneralared").addClass("JugadoresdeGeneralablack"));
    full= parseInt($$('#g27').text(0).removeClass("JugadoresdeGeneralared").addClass("JugadoresdeGeneralablack"));
    poker= parseInt($$('#g29').text(0).removeClass("JugadoresdeGeneralared").addClass("JugadoresdeGeneralablack"));
    gen= parseInt($$('#x21').text(0).removeClass("JugadoresdeGeneralared").addClass("JugadoresdeGeneralablack"));
    genDob= parseInt($$('#x22').text(0).removeClass("JugadoresdeGeneralared").addClass("JugadoresdeGeneralablack"));
    $$('#tot2').text(0);
}
function fnFinaliza() {
    jug1="";
    console.log(jug1)
    jug2="";
    console.log(jug2)
    console.log('Reiniciando Todo');
    mainView.router.navigate('/index/');
}
function fnTotales1() {
    console.log("Tot1")
    d1= parseInt($$('#j11').text());
    d2= parseInt($$('#j12').text());
    d3= parseInt($$('#j13').text());
    d4= parseInt($$('#j14').text());
    d5= parseInt($$('#j15').text());
    d6= parseInt($$('#j16').text());
    esc= parseInt($$('#g15').text());
    full= parseInt($$('#g17').text());
    poker= parseInt($$('#g19').text());
    gen= parseInt($$('#x11').text());
    genDob= parseInt($$('#x12').text());
    console.log('Los dados'+d1+d2+d3+d4+d5+d6);
    console.log('lo demas'+esc+full+poker+gen+genDob);
    Totales1= d1+d2+d3+d4+d5+d6+esc+full+poker+gen+genDob;
    $$('#tot1').text(Totales1);
    console.log(Totales1);
}
function fnTotales2() {
    console.log("Tot2")
    d1= parseInt($$('#j21').text());
    d2= parseInt($$('#j22').text());
    d3= parseInt($$('#j23').text());
    d4= parseInt($$('#j24').text());
    d5= parseInt($$('#j25').text());
    d6= parseInt($$('#j26').text());
    esc= parseInt($$('#g25').text());
    full= parseInt($$('#g27').text());
    poker= parseInt($$('#g29').text());
    gen= parseInt($$('#x21').text());
    genDob= parseInt($$('#x22').text());
    console.log('Los dados'+d1+d2+d3+d4+d5+d6);
    console.log('lo demas'+esc+full+poker+gen+genDob);
    Totales2= d1+d2+d3+d4+d5+d6+esc+full+poker+gen+genDob;
    $$('#tot2').text(Totales2);
    console.log(Totales2);
}