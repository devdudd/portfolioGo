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
