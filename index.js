const express = require("express");
const app = express();

app.use(express.json());

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

app.get("./pizzas",(req, res) => {
  return res.json(pizzas)
});


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

  

  

app.listen(3000,() => {
  console.log("O Servidor está on")
});

//criar rota para criar nova pizza, nova pizza precisa ter id, usar metodo http