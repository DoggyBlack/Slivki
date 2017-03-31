$(document).ready(function(){
  $("#content").hide();
    $("#menu").click(function(){
      if ($("#content").is(":hidden")) {

        $("#content").show("slow");

      } else {

        $("#content").hide("slow");

                     }
    return false;
  });
});
$(document).ready(function(){
  $("#calculation-content").hide();
    $("#calculation").click(function () {
        $("#calculation-content").show("slow");
    });
    $("#close").click(function(){
        $("#calculation-content").hide("slow");
  });
});
