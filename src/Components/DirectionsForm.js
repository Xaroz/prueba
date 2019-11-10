import React, { useState } from "react";

export default function DirectionsForm({ register, errors }) {
  const [directions, setDirections] = useState([]);
  const [counter, setCounter] = useState(0);

  const addDirection = () => {
    setDirections(prevIndexes => [...prevIndexes, counter]);
    setCounter(prevCounter => prevCounter + 1);
  };

  const removeDirection = index => () => {
    setDirections(prevIndexes => [
      ...prevIndexes.filter(item => item !== index)
    ]);
  };

  const clearDirections = () => {
    setDirections([]);
    setCounter(0);
  };

  return (
    <div>
      {directions.map(index => {
        const fieldName = `direction[${index}]`;
        return (
          <div name={fieldName} key={fieldName}>
            <label>
              Dirección #{index + 1}:
              <input
                type="text"
                name={`${fieldName}`}
                ref={register({
                  required: true
                })}
              />
            </label>

            <button type="button" onClick={removeDirection(index)}>
              X
            </button>
            {errors[fieldName] &&
              errors[fieldName].type === "required" &&
              "Este campo es requerido"}
          </div>
        );
      })}

      <button type="button" onClick={addDirection}>
        Agregar dirección
      </button>
      <button type="button" onClick={clearDirections}>
        Eliminar direcciones
      </button>
    </div>
  );
}
