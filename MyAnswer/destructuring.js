const pizza = {
    toppings: ["cheese", "sauce", "pepperoni"],
    crust: "deep dish",
    serves: 2,
};

const [ x, y, ...z ] = pizza.toppings;

console.log(y,x);