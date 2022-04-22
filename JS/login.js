$("#logar").click(function () {
  let email = $("#email").val();
  let senha = $("#senha").val();
  let login = new Login(email, senha);
  let alerta = $("#alerta-login-invalido")
  let mensagem =  $("#msg-login-invalido")

  if (login.validaEmail()) {
    if (login.validaEmailESenha()) {
      alerta.hide()
    } else {
      alerta.show()
      mensagem.text("E-mail ou senha inválida")
    }
  } else {
    alerta.show()
    mensagem.text("Formato de email inválido");
  }
});

class Login {
  constructor(email, senha) {
    this.email = email;
    this.senha = senha;
    this.contas = [
      {
        email: "teste@teste.com",
        senha: "123123",
      },
      {
        email: "diuhsousa@gmail.com",
        senha: "123123",
      },
      {
        email: "usuarionovo@gmail.com",
        senha: "minhasenha",
      },
    ];
  }

  validaEmail() {
    const regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
    return regex.test(this.email);
  }

  validaEmailESenha() {
    if (this.contas.find((login) => 
    login.email == this.email && login.senha == this.senha)) {
      return true
    }else{
      return false
    }
  }
}
