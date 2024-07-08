import { useState } from "react";
import Dice from "./container/Dice";
import Exercice from "./container/Exercice";

export default function Exercice4() {
  // 1. Crée un state qui garde en mémoire une valeur numérique.
  const [diceValue, setDiceValue] = useState(1);

  const rollThatDice = () => {
    // 2. Génère une nouvelle valeur aléatoire entre 1 et 6 et met à jour le state avec cette valeur.
    const newValue = Math.floor(Math.random() * 6) + 1;
    setDiceValue(newValue);
  };

  return (
    <Exercice>
      <h2>Exercice 4 : Jeu de dés</h2>
      <p className="instructions">
        Modifie le composant Exercice4 pour faire fonctionner le lancer de dé
      </p>
      <div className="solution">
        <div>
          {/* 3. Passe le State au composant Dice pour l'affichage. */}
          <Dice value={diceValue} />
          <button type="button" onClick={rollThatDice}>Roll !!!</button>
        </div>
      </div>
    </Exercice>
  );
}