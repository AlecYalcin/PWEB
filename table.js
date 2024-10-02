const loadTable = (elements) => {
  // Adicionar cabeçalho (atributos dos elementos)
  const header = document.querySelector("#header");
  let th_name = document.createElement("th");
  th_name.innerHTML = "Nome";
  header.appendChild(th_name);
  let th_alcohol = document.createElement("th");
  th_alcohol.innerHTML = "Alcool";
  header.appendChild(th_alcohol);
  let th_ibu = document.createElement("th");
  th_ibu.innerHTML = "ibu";
  header.appendChild(th_ibu);

  //   Adicionar elementos do body
  const body = document.querySelector("#body");

  let td_name = document.createElement("td");
  let td_alcohol = document.createElement("td");
  let td_ibu = document.createElement("td");

  const htmlItens = elements.map(({ name, alcohol, ibu }) => {
    let tr_1 = document.createElement("tr");
    tr_1.innerHTML = name;
    td_name.appendChild(tr_1);
    let tr_2 = document.createElement("tr");
    tr_2.innerHTML = alcohol;
    td_alcohol.appendChild(tr_2);
    let tr_3 = document.createElement("tr");
    tr_3.innerHTML = ibu;
    td_ibu.appendChild(tr_3);
  });

  body.appendChild(td_name);
  body.appendChild(td_alcohol);
  body.appendChild(td_ibu);
};
