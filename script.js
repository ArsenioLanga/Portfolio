// var hamburguer = document.querySelector(".hamburguer");

// hamburguer.addEventListener("click", function(){
//   document.querySelector(".container ").classList.toggle("show-menu")
// }); 

 document.querySelector(".hamburguer").addEventListener("click", () =>
  document.querySelector(".container ").classList.toggle("show-menu")
); 


document.querySelector("#qtd").addEventListener("change", ver);
document.querySelector("#js").addEventListener("change", ver);
document.querySelector("#layout-sim").addEventListener("change", ver);
document.querySelector("#layout-nao").addEventListener("change", ver);
document.querySelector("#prazo").addEventListener("change", function(){

  const prazo = document.querySelector("#prazo").value
  document.querySelector("label[for=prazo]").innerHTML = `Prazo: ${prazo} semanas`
  ver()
});




 function ver(){
  const qtd = document.querySelector("#qtd").value
  const comJs = document.querySelector("#js").checked
  const comTemplate = document.querySelector("#layout-sim").checked
  const prazo = document.querySelector("#prazo").value
  let preco = qtd * 1500
  if(comJs) preco *= 1.1
  if(comTemplate) preco += 5000
  let urgencia = 1 - prazo*0.1
  preco *= 1 + urgencia
  document.querySelector("#preco").innerHTML= `${preco.toFixed(2)} MZN`; // preco + " MZN";
}