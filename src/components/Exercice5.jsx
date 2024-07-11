import { useState } from "react";
import Exercice from "./container/Exercice";

export default function Exercice5() {
  // 1. Crée un state pour avoir en mémoire la liste d'éléments.
  const [list, setList] = useState([
    "Se laver",
    "Sortir les poubelles",
    "Avoir un élevage de poules",
  ]);

  // 2. Crée un state pour gérer la valeur de l'input.
  const [inputValue, setInputValue] = useState("");

  // 3. Ajoute un nouvel élément à la liste en utilisant la valeur de l'input.
  const addItem = () => {
    if (inputValue.trim()) {
      setList([...list, inputValue]);
      setInputValue("");
    }
  };

  return (
    <Exercice>
      <h2>Exercice 5 : Liste dynamique</h2>
      <p className="instructions">
        Modifie le composant Exercice5 pour ajouter des éléments à une liste en
        utilisant un champ de texte et un bouton.
      </p>
      <div className="solution">
        <div>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button onClick={addItem}>Ajouter</button>
          <table>
            <thead>
              <tr>
                <th>A faire</th>
              </tr>
            </thead>
            <tbody>
              {list.map((item, index) => (
                <tr key={index}>
                  <td>{item}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Exercice>
  );
}