$("#submit").click(function () {
  let senha = $("#senha").val();
  let confirmaSenha = $("#confirmaSenha").val();

  const nomeDosCampos = ["nome", "sobrenome", "senha", "confirmaSenha"];
  const regex = new RegExp(/^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%*()_+^&}{:;?.])(?:([0-9a-zA-Z!@#$%;*(){}_+^&])(?!\1)){6,}$/);
  
  for (let i = 0; i < nomeDosCampos.length; i++) {
    if ($("#" + nomeDosCampos[i]).val() == "") {
      alert(`O campo ${nomeDosCampos[i]} precisa ser preenchido!`);
    }
  }

  if (senha != confirmaSenha) {
    alert("As senhas precisam ser iguais!");
    return false;
  }

  if (senha.length < 6) {
    alert("Senha precisa ter mais do que 6 caracteres!");
  }

  if (!regex.test(senha)) {
    alert("Senha tem que conter letras maiúsculas, minusculas e símbolos!");
    return false;
  }
});
