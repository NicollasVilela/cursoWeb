import React from "react";

const Events = () => {
  const handleClick = (e) => {
    console.log(e);
    console.log("Executou");
  };

  const renderSomething = (x) => {
    if (x) {
      return <h1>Renderizando isso!</h1>;
    } else {
      return <h1>Renderizando outra coisa!</h1>;
    }
  };

  // return 10 > 2 && <p>Carregando...</p>;

  return (
    <div>
      <div>
        <button onClick={() => console.log("testando um evento")}>
          Clique aqui
        </button>
      </div>

      <div>
        <button onClick={handleClick}>Clique aqui - com função</button>
      </div>

      <div>
        {renderSomething(true)}
        {renderSomething(false)}
      </div>
    </div>
  );
};

export default Events;
