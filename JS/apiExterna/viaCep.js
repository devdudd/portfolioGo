class ViaCep {
  consultarPorCep(cep) {
    const url = "https://viacep.com.br/ws/" + cep + "/json";

    fetch(url, {
      method: "GET",
      mode: "cors"
    })
      .then((response) => response.text())
      .then((data) => console.log(data));

  }
}
const preencherFormulario = (endereco) => {
  document.querySelector('#rua').value = endereco.logradouro
  document.querySelector('#bairro').value = endereco.bairro
  document.querySelector('#cidade').value = endereco.localidade
  document.querySelector('#estado').value = endereco.uf

}
const cepValido = (cep) => cep.length == 8 
const pesquisaCep = async () => {
  const cep = document.querySelector('#cep').value
  const url = "https://viacep.com.br/ws/" + cep + "/json"
  const dados = await fetch(url)
  const endereco = await dados.json()
  if (cepValido(cep)) {
    if (endereco.hasOwnProperty('erro')) {
      alert('Cep inválido');
    } else {
      preencherFormulario(endereco)
    }
  } else {
    alert ('CEP incorreto!')
  }
}
document.querySelector('#cep').addEventListener('focusout', pesquisaCep)