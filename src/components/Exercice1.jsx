import { useState } from "react";
import Exercice from "./container/Exercice";

export default function Exercice1() {

  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);

  const decrement = () => setCount(count - 1);

  return (
    <Exercice>
      <h2>Exercice 1 : Compteur simple</h2>
      <p className="instructions">
        Modifie le composant Exercice1 pour faire fonctionner le compteur et ses
        deux boutons.
      </p>
      <div className="solution">
        <div>
          <button type= "button" onClick={decrement}>-</button>
          <button type= "button" onClick={increment}>+</button>
          <p>Compteur : {count}</p>
        </div>
      </div>
    </Exercice>
  );
}
