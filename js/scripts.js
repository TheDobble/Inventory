var sDernierMenu = "";

$(".acceuil").parent().removeClass("liNorm");
    $(".acceuil").parent().addClass("menuActif");
    $(".acceuilNav").parent().show();
    $(sDernierMenu).parent().addClass("liNorm");
    $(sDernierMenu).parent().removeClass("menuActif");
    $('.title').text("Accueil");
    $('.meContacter_contenu').hide();
    $('.aPropos_contenu').hide();
    $('.realisations_contenu').hide();
    $('.acceuil_contenu').show();
    sDernierMenu = ".acceuil";

$(".acceuil").click(function(){
    $(".acceuil").parent().removeClass("liNorm");
    $(".acceuil").parent().addClass("menuActif");
    $(".acceuilNav").parent().show();
    $(sDernierMenu).parent().addClass("liNorm");
    $(sDernierMenu).parent().removeClass("menuActif");
    $('.title').text("Acceuil");
    $('.meContacter_contenu').hide();
    $('.aPropos_contenu').hide();
    $('.realisations_contenu').hide();
    $('.acceuil_contenu').show();
    sDernierMenu = ".acceuil";
});

$(".meContacter").click(function(){
    $(".meContacter").parent().removeClass("liNorm");
    $(".meContacter").parent().addClass("menuActif");
    $(sDernierMenu).parent().addClass("liNorm");
    $(sDernierMenu).parent().removeClass("menuActif");
    $('.title').text("Me Contacter");
    $('.acceuil_contenu').hide();
    $('.aPropos_contenu').hide();
    $('.realisations_contenu').hide();
    $('.meContacter_contenu').show();
    $(".acceuilNav").parent().hide();
    sDernierMenu = ".meContacter";
});

$(".realisations").click(function(){
    $(".realisations").parent().removeClass("liNorm");
    $(".realisations").parent().addClass("menuActif");
    $(sDernierMenu).parent().addClass("liNorm");
    $(sDernierMenu).parent().removeClass("menuActif");
    $('.title').text("Réalisations");
    $('.meContacter_contenu').hide();
    $('.aPropos_contenu').hide();
    $('.acceuil_contenu').hide();
    $('.realisations_contenu').show();
    $(".acceuilNav").parent().hide();
    sDernierMenu = ".realisations";
});

$(".aPropos").click(function(){
    $(".aPropos").parent().removeClass("liNorm");
    $(".aPropos").parent().addClass("menuActif");
    $(sDernierMenu).parent().addClass("liNorm");
    $(sDernierMenu).parent().removeClass("menuActif");
    $('.title').text("À propos");
    $('.meContacter_contenu').hide();
    $('.acceuil_contenu').hide();
    $('.realisations_contenu').hide();
    $('.aPropos_contenu').show();
    $(".acceuilNav").parent().hide();
    sDernierMenu = ".aPropos";
});

var slideIndex = [1,1];
var slideId = ["mySlides1", "mySlides2"]
showSlides(1, 0);
showSlides(1, 1);

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  var i;
  var x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}    
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex[no]-1].style.display = "block";  
}