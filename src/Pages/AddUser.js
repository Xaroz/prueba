import React from "react";
import useForm from "react-hook-form";


export const AddUser = () => {
  const {register, handleSubmit, errors} = useForm();

  const onSubmit = data => {
    console.log(data);
  }

  return (
    <div className="content">
      <h1>Agregar un usuario</h1>
      <hr />
    <form onSubmit={handleSubmit(onSubmit)}>

      <input name="name" placeholder = "Nombres" ref={register({ required: true, pattern:  /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/  })} />
      {errors.name &&  errors.name.type === "required" && "Este campo es necesario"}
      {errors.name &&  errors.name.type === "pattern" && "Solo se permiten letras sin tildes"}
     
      <input name="firstLastName" placeholder="Primer apellido" ref={register({ required: true, pattern: /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/ })} />
      {errors.firstLastName &&  errors.firstLastName.type === "required" && "Este campo es necesario"}
      {errors.firstLastName &&  errors.firstLastName.type === "pattern" && "Solo se permiten letras sin tildes"}

      <input name="secondLastName" placeholder="Segundo apellido" ref={register({pattern: /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/ })} />
      {errors.secondLastName &&  errors.secondLastName.type === "pattern" && "Solo se permiten letras sin tildes"}
      
      
      <input type="submit" />
      
      </ form> 
    </div>
  );
};
