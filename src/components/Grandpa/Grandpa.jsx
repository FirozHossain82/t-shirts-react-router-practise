import React, { createContext, useState } from "react";
import Father from "../Father/Father.jsx";
import Uncle from "../Uncle/Uncle.jsx";
import Aunty from "../Aunty/Aunty.jsx";
import "./grandpa.css";

export const RingContext = createContext("gold");
export const MoneyContext = createContext(0);

const Grandpa = () => {
  const ring = "diamond";

  const [money, setMoney] = useState(0);

  return (
    <div className="grandpa ">
      <h1 className="text-center text-xl font-bold py-4"> Grandpa </h1>
      <h1 className="text-center text-lg font-bold py-4"> Has Money:{money} </h1>
      <MoneyContext.Provider value={[money, setMoney]}>
        <RingContext.Provider value="golden Ring">
          <section className="text-center flex">
            <Father ring={ring}></Father>
            <Uncle></Uncle>
            <Aunty></Aunty>
          </section>
        </RingContext.Provider>
      </MoneyContext.Provider>
    </div>
  );
};

export default Grandpa;

/**
 * 1. Create Context and export
 * 2. Create a provider and pass a value
 *  3. use useContext to receive the value
 */
