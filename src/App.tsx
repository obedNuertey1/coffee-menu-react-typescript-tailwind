import './App.css'
import coffeCup from "./assets/image.png";
import dessert from "./assets/image2.png";

const App = ():JSX.Element => {
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
            <article className="block">
              <p className="mt-1 mb-1 text-left inline-block w-1/2">French Vanilla</p><p className="mt-1 mb-1 text-right inline-block w-1/2">3.00</p>
            </article>
            <article className="block">
              <p className="mt-1 mb-1 text-left inline-block w-1/2">Caramel Macchiato</p><p className="mt-1 mb-1 text-right inline-block w-1/2">3.75</p>
            </article>
            <article className="block">
              <p className="mt-1 mb-1 text-left inline-block w-1/2">Pumpkin Spice</p><p className="mt-1 mb-1 text-right inline-block w-1/2">3.75</p>
            </article>
            <article className="block">
              <p className="mt-1 mb-1 text-left inline-block w-1/2">Hazelnut</p><p className="mt-1 mb-1 text-right inline-block w-1/2">4.00</p>
            </article>
            <article className="block">
              <p className="mt-1 mb-1 text-left inline-block w-1/2">Mocha</p><p className="mt-1 mb-1 text-right inline-block w-1/2">4.50</p>
            </article>
          </section>
          <section>
            <h2 className="text-3xl font-impact font-bold text-center">Desserts</h2>
            <img src={dessert} alt="pie icon" className="block ml-auto mr-auto" />
            <article className="item block">
              <p className="mt-1 mb-1 dessert text-left inline-block w-1/2">Donut</p><p className="mt-1 mb-1 price text-right inline-block w-1/2">1.50</p>
            </article>
            <article className="item block" >
              <p className="mt-1 mb-1 dessert text-left inline-block w-1/2">Cherry Pie</p><p className="mt-1 mb-1 price text-right inline-block w-1/2">2.75</p>
            </article>
            <article className="item block">
              <p className="mt-1 mb-1 dessert text-left inline-block w-1/2">Cheesecake</p><p className="mt-1 mb-1 dessert text-right inline-block w-1/2">3.00</p>
            </article>
            <article className="item block">
              <p className="mt-1 mb-1 dessert text-left inline-block w-1/2">Cinnamon Roll</p>
              <p className="mt-1 mb-1 dessert text-right inline-block w-1/2">2.50</p>
            </article>
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
