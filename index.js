const express = require("express");
const app = express();

const pizzas = require("./database/pizzas.json")

  const listarTodasAsPizzas = () => {
      let conteudo = "";

      pizzas.forEach(pizza => {
       conteudo += `
        Sabor: ${pizza.sabor}
        Categoria: ${pizza.categoria}
        Preço: ${pizza.preco}
        `
      });

      return conteudo
  }

const procurarPizzaPeloSabor = function (saborPizza) {
  const pizzaEncontrada = pizzas.find((pizza) => pizza.sabor === saborPizza)
  if(!pizzaEncontrada){
    return `A pizza de sabor ${saborPizza} não foi encontrada`
  }
  return pizzaEncontrada
} 


  const adicionarPizza = function(sabor, categoria, preco){
      const pizzaNova = {
          id: pizzas[pizzas.length -1].id + 1,
          sabor,
          categoria,
          preco
      }

      pizzas.push(pizzaNova);
      console.log(`A pizza de ${sabor} foi adicionada com sucesso!`);
  }

  adicionarPizza("Presunto", "Salgada", 25);

  console.log(listarTodasAsPizzas())

app.listen(3000,() => {
  console.log("O Servidor está on")
});

