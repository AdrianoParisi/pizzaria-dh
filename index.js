const pizzas = [
    {
      id: 1,
      sabor: "Quatro queijos",
      categoria: "Salgada",
      preco: 15.89
    },
    {
      id: 2,
      sabor: "Morango com Nutella",
      categoria: "Doce",
      preco: 30
    },
    {
      id: 3,
      sabor: "Brócolis",
      categoria: "Vegetariana",
      preco: 35
    },
    {
      id: 4,
      sabor: "Lombo canadense",
      categoria: "Salgada",
      preco: 25
    },
  ];

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

  //usar metodo find
  //Criar uma função que recebe o nome da pizza e retorna o objeto dessa pizza.

