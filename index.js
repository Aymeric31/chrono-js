var seconds = 0, minutes = 0, hours = 0;
var Chrono = function(currentTime){
  this.time = currentTime;
  this.start = function() {
    pendule();
  };
  this.pause = function() {
    pause();
  };
  this.fin = function(){
    stop();
  };
};
var monChrono = new Chrono(-1);

/* ---- bouttons ----- */
$("#start").click(function(){
  pondul = setInterval(pendule, 1000);
  monChrono.start();
})
$("#pause").click(function(){
  monChrono.pause();
})
$("#stop").click(function(){
  monChrono.fin();
})



/* ----- pendule ------ */
function pendule() {
  monChrono.time = monChrono.time+1
    $(".affiche").html(monChrono.time)

  console.log(monChrono.time)
}



/* ----- pause ----- */
function pause() {
  clearInterval(pondul)

}



/* ------ stop ------ */
function stop() {
    clearInterval(pondul);
    $("p").html("00:00:00");
    monChrono.time=-1


}



// var monChrono5mn = new Chrono("0");
// monChrono5mn.currentTime;
// monChrono5mn.start();
// Chrono = window.setTimeout(function(){
//   alert("ca fait 5 min")},300000);
// Chrono = window.setTimeout(function(){
//   alert("ca fait 10 min")},600000);
// monChrono5mn.pause();
// monChrono5mn.fin();
