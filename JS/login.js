$("#logar").click(function () {
  let email = $("#email").val();
  let senha = $("#senha").val();

  if (validaFormatoDeEmail(email)) {
    if (email == "teste@teste.com" && senha == "123123") {
      console.log("secesso no login");
    } else {
      console.log("email senha invalida");
    }
  }else{
    console.log("Formato de email inválido");
  }
});

function validaFormatoDeEmail(email) {
  let regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
  regex.test(email);
}
    