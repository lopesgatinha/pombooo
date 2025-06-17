const catalogo = [
    { nome: "Mel Orgânico", produtor: "Sítio Doce Vida", preco: "R$ 25,00" },
    { nome: "Artesanato em madeira", produtor: "Artesãos da Serra", preco: "R$ 50,00" },
    { nome: "Queijo Minas", produtor: "Fazenda Boa Esperança", preco: "R$ 35,00" }
  ];
  
  const divCatalogo = document.getElementById("catalogo");
  
  catalogo.forEach(item => {
    const div = document.createElement("div");
    div.innerHTML = `<h3>${item.nome}</h3><p><strong>Produtor:</strong> ${item.produtor}</p><p><strong>Preço:</strong> ${item.preco}</p>`;
    div.style.border = "1px solid #ccc";
    div.style.margin = "10px 0";
    div.style.padding = "10px";
    divCatalogo.appendChild(div);
  });
  