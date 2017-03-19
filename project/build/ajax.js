$.ajax({
  url: "ajax.html",
  cache: false,
  type: "GET",
  dataType: "html",
  success: function(html){
    $(".information").append(html);
  }
});
