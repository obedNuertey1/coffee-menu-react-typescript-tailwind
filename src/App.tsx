import './App.css'
import coffeCup from "./assets/image.png";
import dessert from "./assets/image2.png";

// How the foodstuffs object should be
interface Ifoodstuff<T>{
  name: String;
  price: T;
}
// Array of Coffee flavors
const firstSection:Ifoodstuff<string>[] = [{name: "French Vanilla", price: "3.00"}, {name: "Caramel Macchiato", price: "3.75"}, {name: "Pumpkin Spice", price: "3.75"}, {name: "Hazelnut", price: "4.00"}, {name: "Mocha", price: "4.50"}]

// Array of desserts
const secondSection:Ifoodstuff<string>[] = [{name: "Donut", price: "1.50"}, {name: "Cherry Pie", price: "2.75"}, {name: "Cheesecake", price:"3.00"}, {name: "Cinnamon Roll", price: "2.50"}];

// Generate foodStuffs and their prices in jsx article format
function generateFoods(itemList:Ifoodstuff<string>[]):JSX.Element[]{
  return itemList.map((elem:Ifoodstuff<string>)=>{
    return (
      <article className="block">
        <p className="mt-1 mb-1 text-left inline-block w-1/2">{elem.name}</p><p className="mt-1 mb-1 text-right inline-block w-1/2">{elem.price}</p>
      </article>
    );
  }); 
}


const App = ():JSX.Element => {

  const coffee:JSX.Element[] = generateFoods(firstSection);
  const myDessert:JSX.Element[] = generateFoods(secondSection);

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
