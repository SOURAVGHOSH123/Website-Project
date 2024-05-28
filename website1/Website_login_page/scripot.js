$().ready(function () {

    $("#register-link").click(function () {
  
      $("#login-box").hide();
  
      $("#register-box").show();
  
    });
  
    $("#login-link").click(function () {
  
      $("#login-box").show();
  
      $("#register-box").hide();
  
    });

    $("#login-btn").click(function () {
  
      $("#login-box").show();
  
      $("#register-box").hide();
  
    });
  
    $("#forgot-link").click(function () {
  
      $("#login-box").hide();
  
      $("#forgot-box").show();

      $("#register-box").hide();
  
    });
  
    $("#back-link").click(function () {
  
      $("#login-box").show();
  
      $("#forgot-box").hide();
  
    });
  
  });
