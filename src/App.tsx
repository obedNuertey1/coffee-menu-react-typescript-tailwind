import './App.css'

const App = ():JSX.Element => {
  return (
    <>
      <div className="menu bg-burlywood w-80 ml-auto mr-auto">
        <main>
          <h1 className="text-center">CAMPER CAFE</h1>
          <p className="text-center">Est. 2020</p>
          <section>
            <h2 className="text-center font-bold">Coffee</h2>
            <article className="block pl-3 pr-3">
              <p className="text-left inline-block w-1/2">French Vanilla</p><p className="text-right inline-block w-1/2">3.00</p>
            </article>
            <article className="block pl-3 pr-3">
              <p className="text-left inline-block w-1/2">Caramel Macchiato</p><p className="text-right inline-block w-1/2">3.75</p>
            </article>
            <article className="block pl-3 pr-3">
              <p className="text-left inline-block w-1/2">Pumpkin Spice</p><p className="text-right inline-block w-1/2">3.75</p>
            </article>
            <article className="block pl-3 pr-3">
              <p className="text-left inline-block w-1/2">Hazelnut</p><p className="text-right inline-block w-1/2">4.00</p>
            </article>
            <article className="block pl-3 pr-3">
              <p className="text-left inline-block w-1/2">Mocha</p><p className="text-right inline-block w-1/2">4.50</p>
            </article>
          </section>
        </main>
      </div>
    </>
  );
};

export default App;
