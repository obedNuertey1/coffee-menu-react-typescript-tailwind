import './App.css'
import coffeCup from "./assets/image.png";
import dessert from "./assets/image2.png";
import Foods from './components/GenerateFoods';

// Array of Coffee flavors
const firstSection:Foods.Ifoodstuff<string>[] = [{name: "French Vanilla", price: "3.00"}, {name: "Caramel Macchiato", price: "3.75"}, {name: "Pumpkin Spice", price: "3.75"}, {name: "Hazelnut", price: "4.00"}, {name: "Mocha", price: "4.50"}]

// Array of desserts
const secondSection:Foods.Ifoodstuff<string>[] = [{name: "Donut", price: "1.50"}, {name: "Cherry Pie", price: "2.75"}, {name: "Cheesecake", price:"3.00"}, {name: "Cinnamon Roll", price: "2.50"}];

// Call the GenerateFoods object and pass it firstSection and secondSection as list of foods
const generateFirstFoodList = new Foods.GenerateFoods<Foods.Ifoodstuff<String>>(firstSection);
const generateSecondFoodList = new Foods.GenerateFoods<Foods.Ifoodstuff<String>>(secondSection);


const App = ():JSX.Element => {

  const coffee:JSX.Element[] = generateFirstFoodList.generateFoods();
  const myDessert:JSX.Element[] = generateSecondFoodList.generateFoods();

  return (
    <>
      <div className="menu selection:bg-brown selection:text-white bg-burlywood shadow-gray-950 shadow-md w-80 mt-5 mr-auto ml-auto rounded opacity-90 p-5 max-w-lg">
        <main>
          <h1 className="text-5xl mt-0 font-playfair text-center font-bold mb-1">MaxiCoffee</h1>
          <p className="text-center italic mb-1">Est. 2006</p>
          <hr className="h-1 bg-brown border-brown" />
          <section>
            <h2 className="text-3xl font-impact text-center font-bold">Coffee</h2>
            <img src={`${coffeCup}`} alt="coffee Icon" className="block ml-auto mr-auto" />
            {coffee}
          </section>
          <section>
            <h2 className="text-3xl font-impact font-bold text-center">Desserts</h2>
            <img src={dessert} alt="pie icon" className="block ml-auto mr-auto" />
            {myDessert}
          </section>
        </main>
        <hr className="h-1 bg-brown border-brown mt-6" />
        <footer className="text-sm">
          <p className="text-center"><a className="hover:text-brown hover:scale-x-150 active:text-brown visited:text-black" href="https://www.maxicoffee.com/cafe-c-6.html?gclid=EAIaIQobChMIw4iCksrAgQMVVZNoCR0ERAtZEAAYASAAEgI4KfD_BwE" target='_blank'>Visit our website</a></p>
          <p className="text-center mb-1">Subscripe to Our NewsLetter</p>
        </footer>
      </div>
    </>
  );
};

export default App;
