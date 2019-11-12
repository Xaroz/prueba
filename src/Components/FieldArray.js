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
      <div className="direction-add-delete">
        <p className="direction-title">Direcciones:</p>
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
      {directions.map(index => {
        const fieldName = `direction[${index}]`;
        return (
          <div name={fieldName} key={fieldName}>
            <label className="direction">Dirección #{index + 1}:</label>
            <input
              type="text"
              name={`${fieldName}`}
              className={
                errors[fieldName] ? "direction has-error" : "direction"
              }
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
              <p className="error-alert">Este campo es requerido</p>
            )}
          </div>
        );
      })}
    </div>
  );
}
