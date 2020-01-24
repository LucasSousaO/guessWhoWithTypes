let temas =
[
  {Tema:'animais', Quant:0},
  {Tema:'profissoes', Quant:0},
  {Tema:'teste', Quant:0},
]//["animais", "profissoes", "teste"];

const elementos = [
              {Desafio:'abelha', Tema:'animais'}, {Desafio:'beija-flor', Tema:'animais'},        //1, 2
              {Desafio:'vaca', Tema:'animais'}, {Desafio:'cachorro', Tema:'animais'},        //3, 4
              {Desafio:'cavalo', Tema:'animais'}, {Desafio:'rato', Tema:'animais'},        //5, 6
              {Desafio:'carrapato', Tema:'animais'}, {Desafio:'coelho', Tema:'animais'},        //7, 8
              {Desafio:'elefante', Tema:'animais'}, {Desafio:'galinha', Tema:'animais'},        //9, 10
              {Desafio:'gato', Tema:'animais'}, {Desafio:'girafa', Tema:'animais'},        //11, 12
              {Desafio:'hipopotamo', Tema:'animais'}, {Desafio:'leão', Tema:'animais'},        //13, 14
              {Desafio:'lagartixa', Tema:'animais'}, {Desafio:'lesma', Tema:'animais'},        //15, 16
              {Desafio:'macaco', Tema:'animais'}, {Desafio:'minhoca', Tema:'animais'},        //17, 18
              {Desafio:'papagaio', Tema:'animais'}, {Desafio:'peixe', Tema:'animais'},        //19, 20
              {Desafio:'pombo', Tema:'animais'}, {Desafio:'pavão', Tema:'animais'},        //21, 22
              {Desafio:'pica-pau', Tema:'animais'}, {Desafio:'bicho preguiça', Tema:'animais'},        //23, 24
              {Desafio:'tartaruga', Tema:'animais'}, {Desafio:'tamanduá', Tema:'animais'},        //25, 26
              {Desafio:'lobo', Tema:'animais'}, {Desafio:'porco', Tema:'animais'},        //27, 28
              {Desafio:'pinguim', Tema:'animais'}, {Desafio:'veado', Tema:'animais'},        //29, 30
              {Desafio:'barata', Tema:'animais'}, {Desafio:'baleia', Tema:'animais'},        //31, 32
              {Desafio:'Tubarão', Tema:'animais'}, {Desafio:'sapo', Tema:'animais'},        //33, 34

              {Desafio:'médico', Tema:'profissoes'}, {Desafio:'professor', Tema:'profissoes'},        //35, 36
              {Desafio:'jogador de futebol', Tema:'profissoes'}, {Desafio:'dentista', Tema:'profissoes'},        //37, 38
              {Desafio:'faxineira', Tema:'profissoes'}, {Desafio:'cozinheira', Tema:'profissoes'},        //39, 40
              {Desafio:'costureira', Tema:'profissoes'}, {Desafio:'pedreiro', Tema:'profissoes'},        //41, 42
              {Desafio:'motorista', Tema:'profissoes'}, {Desafio:'cobrador', Tema:'profissoes'},        //43, 44
              {Desafio:'político', Tema:'profissoes'}, {Desafio:'cantor', Tema:'profissoes'},        //45, 46
              {Desafio:'ator', Tema:'profissoes'}, {Desafio:'apresentador', Tema:'profissoes'},        //47, 48
              {Desafio:'veterinário', Tema:'profissoes'}, {Desafio:'advogado', Tema:'profissoes'},        //49, 50
              {Desafio:'psicólogo', Tema:'profissoes'}, {Desafio:'nutricionista', Tema:'profissoes'},        //51, 52
              {Desafio:'secretária1', Tema:'profissoes'}, {Desafio:'mecânico', Tema:'profissoes'},        //53, 54
              {Desafio:'frentista', Tema:'profissoes'}, {Desafio:'fisioterapeuta', Tema:'profissoes'},        //55, 56
              {Desafio:'farmacêutico', Tema:'profissoes'}, {Desafio:'vendedor', Tema:'profissoes'},        //57, 58
              {Desafio:'policial', Tema:'profissoes'}, {Desafio:'bombeiro', Tema:'profissoes'},        //59, 60
              {Desafio:'carteiro', Tema:'profissoes'}, {Desafio:'coreógrafo', Tema:'profissoes'},        //61, 62
              {Desafio:'maquiador', Tema:'profissoes'}, {Desafio:'blogueira', Tema:'profissoes'},        //63, 64
              {Desafio:'juiz', Tema:'profissoes'}, {Desafio:'agricultor', Tema:'profissoes'},        //65, 66
              {Desafio:'babá', Tema:'bibliotecário'}, {Desafio:'fotográfo', Tema:'profissoes'},        //67, 68
              {Desafio:'garçom', Tema:'profissoes'}, {Desafio:'pintor', Tema:'profissoes'},        //69, 70

              {Desafio:'teste', Tema:'teste'}, {Desafio:'teste', Tema:'teste'},        //1, 2
              {Desafio:'teste', Tema:'teste'}, {Desafio:'teste', Tema:'teste'},        //3, 4
              {Desafio:'teste', Tema:'teste'}, {Desafio:'teste', Tema:'teste'},        //5, 6

              ];

              /*
const tema1 = [
              {Desafio:'teste', Tema:'teste'}, {Desafio:'teste', Tema:'teste'},        //1, 2
              {Desafio:'teste', Tema:'teste'}, {Desafio:'teste', Tema:'teste'},        //3, 4
              {Desafio:'teste', Tema:'teste'}, {Desafio:'teste', Tema:'teste'},        //5, 6
              {Desafio:'teste', Tema:'teste'}, {Desafio:'teste', Tema:'teste'},        //7, 8
              {Desafio:'teste', Tema:'teste'}, {Desafio:'teste', Tema:'teste'},        //9, 10
              {Desafio:'teste', Tema:'teste'}, {Desafio:'teste', Tema:'teste'},        //11, 12
              {Desafio:'teste', Tema:'teste'}, {Desafio:'teste', Tema:'teste'},        //13, 14
              {Desafio:'teste', Tema:'teste'}, {Desafio:'teste', Tema:'teste'},        //15, 16
              {Desafio:'teste', Tema:'teste'}, {Desafio:'teste', Tema:'teste'},        //17, 18
              {Desafio:'teste', Tema:'teste'}, {Desafio:'teste', Tema:'teste'},        //19, 20
              {Desafio:'teste', Tema:'teste'}, {Desafio:'teste', Tema:'teste'},        //21, 22
              {Desafio:'teste', Tema:'teste'}, {Desafio:'teste', Tema:'teste'},        //23, 24
              {Desafio:'teste', Tema:'teste'}, {Desafio:'teste', Tema:'teste'},        //25, 26
              {Desafio:'teste', Tema:'teste'}, {Desafio:'teste', Tema:'teste'},        //27, 28
              {Desafio:'teste', Tema:'teste'}, {Desafio:'teste', Tema:'teste'},        //29, 30
              {Desafio:'teste', Tema:'teste'}, {Desafio:'teste', Tema:'teste'},        //31, 32
              {Desafio:'teste', Tema:'teste'}, {Desafio:'teste', Tema:'teste'}        //33, 34
              ];


*/
//let elementos = "";

window.onload = () => {
//window loaded
setTimeout(() => {
// set time setTimeout
texto = document.activeElement.ownerDocument.location.search;
time1 = texto.substring((texto.search("time1")+6), texto.search("time2")-1);
time2 = texto.substring((texto.search("time2")+6), texto.search("tempo")-1);
let tempao = texto.substring((texto.search("tempo")+6), texto.search("tempo")+8);

escolhidoTema = texto.substring((texto.search("tema")+5), texto.length);

$ti1.text(time1);
$ti2.text(time2);

//FOOOOOOR  AO ACRESCENTAR UM NOVO TEMA, ALTERE AQUI
for(let a = 0; a <= elementos.length-1; a++)       //VERIFICA DESAFIOS JÁ FEITOS
{
if(elementos[a].Tema == temas[0].Tema)                   //mapeia temas
{
  temas[0].Quant++;
}
if(elementos[a].Tema == temas[1].Tema)                   //mapeia temas
{
  temas[1].Quant++;
}
if(elementos[a].Tema == temas[2].Tema)                   //mapeia temas
{
  temas[2].Quant++;
}
}
time1.toString;
for(let x = 0 ; x <= time1.length-1; x++){
if((time1[x] == '%')){
console.log("achou a letra");
time1.replace(time1[x],' ');
time1.split('sdafsdfasd');
}
}
console.log(time1);

time2.toString;
for(let y = 0 ; y <= time2.length-1; y++){

if((time2[y] == '%')){
console.log("achou a letra");
time2.replace(time2[y],' ');
}
}
console.log(time2);


// DOS TEMAS
valor = 0;
for(let i = 0; i <= temas.length-1; i++)
if(escolhidoTema.includes(temas[i].Tema))
{
  console.log(escolhidoTema);
  console.log(temas[i].Quant);
  valor = temas[i].Quant;

}

//end'
}, 100)
}

let $escolhaTema = $('#escolha-tema');
let tempododesafio = 45;
let time1 = "um";
let time2 = "dois";

desafios = [];
let valor = 0;

let p1 = 0;
let p2 = 0;
let i = 0;

let elemento = 0;
let escolhidoTema = "";
let temaDesafio = "";

//let resultado = "dogson";
let url = '';
//const $botaoNext = $('#buttonNext');
//variávei
const $small = $('#small');
const $medium = $('#medium');
const $big = $('#big');
let $resp = $('#resp');
let perguntas = 0;


const $botao = $('#btt');
const $bt1 = $('#bt1').addClass("hide");
const $bt2 = $('#bt2').addClass("hide");
const $bt3 = $('#bt3').addClass("hide");
const $bt4 = $('#bt4').addClass("hide");

const $sorteio = $('#sorteio');
const $desafio = $('#desafio').addClass("hide");

let $resultado = $('#resultado');
let $t1 =  $('#t1');
let $t2 =  $('#t2');

let $ti1 = $('#ti1');
let $ti2 = $('#ti2');
let vez = 0;
let $tp1 = $('#tp1');
let $tp2 = $('#tp2');

$tempo = $("#tempo");

let texto = '';

function sort(elementos, temaDesafio){
  do{
      elemento = Math.round(Math.random()*100); // gera número

      if(elemento <= elementos.length-1)          // confere se está dentro do limite/ CASO SIM
      {
        temaDesafio = elementos[elemento].Tema;

        for(let a = 0; a <= desafios.length; a++)       //VERIFICA DESAFIOS JÁ FEITOS
        {
          if(desafios[a] == elemento)                   //SE DESAFIO JÁ FOI FEITO
          {
            //console.log("Repetiu");
            elemento = 1000;                 //AUMENTA O NÚMERO
          }
        }

        if(temaDesafio != escolhidoTema)
        {
          elemento = 1000;                 //AUMENTA O NÚMERO
          console.log("Tema diferentes!");
          //console.log(temaDesafio);
          //console.log(escolhidoTema);
        }

        if (elemento <= elementos.length)
        {
          desafios.push(elemento);
          console.log(desafios);

          if(elementos.length >= desafios.length)
          {
          alert("Tema:   " + elementos[elemento].Tema + "\n\n\nDesafio:  " + elementos[elemento].Desafio);
          }
        }
      }
  }while(elemento > elementos.length-1)

}


//ativa botão de clique #TELA DE SELEÇÃO DE TIMES
$botao.on("click",() =>
  {
//console.log($escolhaTema[0].selectedIndex);
  let url_atual = window.location.href; // tirar 11 caracteres
  console.log(url_atual.length);

  let url_base  = ""
  for (o = 0 ; o < url_atual.length -11 ; o++){
    url_base = url_base + url_atual[o];
  }
  console.log(url_base);
  if($t1[0].value == "" || $t2[0].value == "" || perguntas == 0)
  {
    alert("preencha os campos.");
  }
    else{
    alert("Times enviados!\n \nTempo de jogo: "+ perguntas +" pontos.\n\nPressione Ok para continuar.");
    time1 = $t1[0].value;
    time2 = $t2[0].value;

      url = url_base+"/game.html?time1="+time1+"&time2="+time2+"&tempo="+perguntas+"&tema="+temas[$escolhaTema[0].selectedIndex].Tema;


      chamapag(url);
    }
  });

  function chamapag()
  { open(url);
  }

//Sorteia qual time começa.
$sorteio.on("click", () =>
  {

  if(Math.random()>0.5)
    {
      vez =1;
      $ti1.addClass("vez").removeClass("time");
      $ti2.removeClass("vez").addClass("time");
    }else
    {
      vez =2;
      $ti2.addClass("vez").removeClass("time");
      $ti1.removeClass("vez").addClass("time");
    }
    $sorteio.addClass("hide");
    $desafio.removeClass("hide");
    $tp1.removeClass("hide");
    $tp2.removeClass("hide");
});

//Seleciona qual é o desafio
$desafio.on("click", () =>
  { //trocavez();

    (vez == 1 ? bttime1() : vez == 2 ? bttime2() : acabou())
    $desafio.addClass("hide");
    $resultado.removeClass("hide");

 temaDesafio = elementos[elemento].Tema;

  /// chama função sorteio

    sort(elementos, temaDesafio);


    i = tempododesafio;


  //time();
});

//Ganhou ponto o time 1
  $bt1.on("click", (vez) =>
  {
    if(valor == desafios.length)
    {
      quemganhou(p1, p2);
    }
    else{
    p1 += 1;
    $tp1.text((p1 > 1 ? p1 + " pontos": p1 + " ponto"));
    quemtaganhando(p1, p2);
    vez = 2;
    $bt1.addClass("hide");
    $bt3.addClass("hide");

    trocavez(vez);}
  });
//Ganhou ponto o time 2
  $bt2.on("click", (vez) =>
  {
    if(valor == desafios.length)
    {
      quemganhou(p1, p2);

    }
    else{
    p2 += 1;
    $tp2.text((p2 > 1 ? p2 + " pontos": p2 + " ponto"));
    quemtaganhando(p1, p2);
    vez = 1;
    $bt2.addClass("hide");
    $bt4.addClass("hide");
    trocavez(vez);}
  });
  //Não ganhou ponto o time 1
  $bt3.on("click", (vez) =>
    {
      if(valor == desafios.length)
      {
        quemganhou(p1, p2);
      }
      else
      {quemtaganhando(p1, p2);
      vez = 2;
      $bt1.addClass("hide");
      $bt3.addClass("hide");
      trocavez(vez);}
    });
  //Não ganhou ponto o time 2
  $bt4.on("click", (vez) =>
    {
      if(valor == desafios.length)
      {
        quemganhou(p1, p2);
      }
      else
      {quemtaganhando(p1, p2);
      vez = 1;
      $bt2.addClass("hide");
      $bt4.addClass("hide");
      trocavez(vez);}
    });

  $small.on("click", () =>
    {
      perguntas = 10;
      $resp.text(perguntas +" pontos");
    });

  $medium.on("click", () =>
    {
      perguntas = 15;
      $resp.text(perguntas +" pontos");
    });

  $big.on("click", () =>
    {
      perguntas = 20;
      $resp.text(perguntas +" pontos");
    });
//verifica quem está ganhando
function quemtaganhando(p1, p2){
  elemento = 0;
(p1 > p2 ? $tp1.addClass("winning").removeClass("loosing") : $tp1.addClass("loosing").removeClass("winning"));
(p1 > p2 ? $tp2.addClass("loosing").removeClass("winning") : $tp2.removeClass("loosing").addClass("winning"));
if(p1==p2)
{
$tp1.removeClass("loosing").removeClass("winning");
$tp2.removeClass("loosing").removeClass("winning");
}
};

//quem ganhou?
function quemganhou(p1, p2)
{
  console.log(p1 +" vs " +p2);
  alert("O jogo acabou! \n"+ (p1>p2? time1 + " Venceu!" : p2>p1? time2+" Venceu!":"Empate!"));
  $desafio.addClass("hide");
  $resultado.removeClass("hide").text("O jogo acabou! \n"+ (p1>p2?  time1 + " Venceu!" : p2>p1? time2+" Venceu!":"Empate!"));
  vez = 0;
  acabou();
  $resultado.addClass("hide").removeClass("emtempo");

}
//função do tempo

//other function time
const time = () => {
// do something
//console.log("print " +i);
if(elemento>0)
{
  $resultado.text((i==0?"Acabou!!" : i>1? i+ " segundos": i==1? i+ " segundo": "erro"));
  if($resultado.text() == "Acabou!!")
  {
    $resultado.addClass("acabou").removeClass("emtempo");
  }
  else{
    $resultado.addClass("emtempo").removeClass("acabou")
  }
}
(i>0?i--:"")
setTimeout(time, 1000)
}

setTimeout(() => {
time(i);
clearInterval(time);

}, 10000)


//chama troca a vez
function trocavez(vez){
 (vez == 1 ? vezdotime1() : vez == 2 ? vezdotime2() : acabou())
 $desafio.removeClass("hide");
 $desafio.text("Desafio");
 $resultado.addClass("hide");
};

//troca para vez do time 1
function vezdotime1(){
  vez = 1;
  $ti1.addClass("vez").removeClass("time");
  $ti2.removeClass("vez").addClass("time");

  $bt2.addClass("hide");
  $bt4.addClass("hide");
}

//troca para vez do time 2
function vezdotime2(){
  vez = 2;
  $ti2.addClass("vez").removeClass("time");
  $ti1.removeClass("vez").addClass("time");

  $bt1.addClass("hide");
  $bt3.addClass("hide");
}

function acabou(){
  $bt1.addClass("hide");
  $bt2.addClass("hide");
  $bt3.addClass("hide");
  $bt4.addClass("hide");
  $ti1.removeClass("vez");
  $ti2.removeClass("vez");
}

function bttime1(){
  $bt1.removeClass("hide");
  $bt3.removeClass("hide");
  $resultado.removeClass("hide");
}

function bttime2(){
  $bt2.removeClass("hide");
  $bt4.removeClass("hide");
  $resultado.removeClass("hide");

}
