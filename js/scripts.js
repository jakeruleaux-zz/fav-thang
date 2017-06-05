$ document.ready(function() {
  var quest1 = $("input#fav1").val();
  var quest2 = $("input#fav2").val();
  var quest3 = $("input#fav3").val();
  var quest4 = $("input#fav4").val();
  var quest5 = $("input#fav5").val();

 $("#formOne").submit(function() {

  var questions = [quest1, quest2, quest3, quest4, quest5];

  questions.push(quest2[1], quest1[0], quest3[2]);

 var newarray = [quest2, quest1, quest3];

 $(".quest2").text(quest2);
 $(".quest1").text(quest1);
 $(".quest3").text(quest3);




  $("#you").show();
}
