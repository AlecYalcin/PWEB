const createTableHeader = (headers) => {
  let headerRow = document.getElementById("table-head");
  headers.forEach((headerText) => {
    let th = document.createElement("th");
    th.textContent = headerText;
    headerRow.appendChild(th);
  });
};

const populateTableBody = (elements) => {
  const body = document.querySelector("#body");
  elements.forEach(({ name, alcohol, ibu }) => {
    const row = document.createElement("tr");

    [name, alcohol, ibu].forEach((data) => {
      let td = document.createElement("td");
      td.textContent = data;
      row.appendChild(td);
    });

    body.appendChild(row);
  });
};

const loadTable = (elements) => {
  createTableHeader(["Nome", "Álcool", "IBU"]);
  populateTableBody(elements);
};

const carregarCervejas = () => {
  const message = document.getElementById("message");
  message.innerHTML = "Fazendo requisição...";

  fetch("https://random-data-api.com/api/v2/beers?size=3")
    .then((res) => res.json())
    .then((res) => {
      loadTable(res);
      message.innerHTML = "";
    });
};

document.getElementById("botaoCarregar").addEventListener("click", carregarCervejas);
