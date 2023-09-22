import './App.css'

const App = ():JSX.Element => {
  return (
    <>
      <div className="menu bg-burlywood w-80 ml-auto mr-auto pl-5 pr-5">
        <main>
          <h1 className="text-center font-bold">CAMPER CAFE</h1>
          <p className="text-center">Est. 2020</p>
          <section>
            <h2 className="text-center font-bold">Coffee</h2>
            <article className="block">
              <p className="text-left inline-block w-1/2">French Vanilla</p><p className="text-right inline-block w-1/2">3.00</p>
            </article>
            <article className="block">
              <p className="text-left inline-block w-1/2">Caramel Macchiato</p><p className="text-right inline-block w-1/2">3.75</p>
            </article>
            <article className="block">
              <p className="text-left inline-block w-1/2">Pumpkin Spice</p><p className="text-right inline-block w-1/2">3.75</p>
            </article>
            <article className="block">
              <p className="text-left inline-block w-1/2">Hazelnut</p><p className="text-right inline-block w-1/2">4.00</p>
            </article>
            <article className="block">
              <p className="text-left inline-block w-1/2">Mocha</p><p className="text-right inline-block w-1/2">4.50</p>
            </article>
          </section>
          <section>
            <h2 className="font-bold text-center">Desserts</h2>
            <article className="item block">
              <p className="dessert text-left inline-block w-1/2">Donut</p><p className="price text-right inline-block w-1/2">1.50</p>
            </article>
            <article className="item block" >
              <p className="dessert text-left inline-block w-1/2">Cherry Pie</p><p className="price text-right inline-block w-1/2">2.75</p>
            </article>
            <article className="item block">
              <p className="dessert text-left inline-block w-1/2">Cheesecake</p><p className="dessert text-right inline-block w-1/2">3.00</p>
            </article>
            <article className="item block">
              <p className="dessert text-left inline-block w-1/2">Cinnamon Roll</p>
              <p className="dessert text-right inline-block w-1/2">2.50</p>
            </article>
          </section>
        </main>
      </div>
    </>
  );
};

export default App;
