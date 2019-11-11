import React, { useState } from "react";

export default function FieldArray({ register, errors }) {
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
            <label className="direction">Dirección #{index + 1}:</label>
            <input
              type="text"
              name={`${fieldName}`}
              className="direction"
              ref={register({
                required: true
              })}
            />
            <button
              className="direction-button"
              type="button"
              onClick={removeDirection(index)}
            >
              X
            </button>
            {errors[fieldName] && errors[fieldName].type === "required" && (
              <span>Este campo es requerido</span>
            )}
          </div>
        );
      })}
      <div className="direction-add-delete">
        <button className="direction-add" type="button" onClick={addDirection}>
          Agregar dirección
        </button>
        <button
          className="direction-delete"
          type="button"
          onClick={clearDirections}
        >
          Eliminar direcciones
        </button>
      </div>
    </div>
  );
}
