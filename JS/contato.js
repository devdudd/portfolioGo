
function validar() {
    validar.preventDefault()

    const nome = document.getElementById("#nome").value
    const email = document.getElementById("#email").value
    const Telefone = document.getElementById("#Telefone").value
    const link = document.getElementById("#linkedin").value
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    const regexnum =  /^(?:\+)[0-9]{2}\s?(?:\()[0-9]{2}(?:\))\s?[0-9]{4,5}(?:-)[0-9]{4}$/
    
    if (nome  === "") {
      alert("Nome não informado");
      nome.focus();
      return false
    
    }
    
    if (regex.text(email)) {
      alert("E-mail não informado");
      email.focus();
      return;
    }
    if (regexnum.text(Telefone)) {
      alert("Telefone não informado");
      Telefone.focus();
      return false;
    }
    if(link.value == "") {
        alert("Linkedin não informado");
        linkedin.focus();
        return false;
      }

  
  }
