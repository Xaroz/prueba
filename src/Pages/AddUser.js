import React from "react";
import useForm from "react-hook-form";
import FieldArray from "../Components/FieldArray";

export const AddUser = () => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = data => {
    const age = calculateAge(data.date);
    data = { ...data, age };
    console.log(data);
  };

  const calculateAge = dateString => {
    let today = new Date();
    let birthDate = new Date(dateString);
    let age = today.getFullYear() - birthDate.getFullYear();
    let m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  return (
    <div className="content">
      <h1>Agregar un usuario</h1>
      <hr />
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* nombre */}
        <input
          name="name"
          placeholder="Nombres"
          ref={register({
            required: true,
            pattern: /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/
          })}
        />
        {errors.name &&
          errors.name.type === "required" &&
          "Este campo es necesario"}
        {errors.name &&
          errors.name.type === "pattern" &&
          "Solo se permiten letras sin tildes"}

        {/* primer apellido */}
        <input
          name="firstLastName"
          placeholder="Primer apellido"
          ref={register({
            required: true,
            pattern: /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/
          })}
        />
        {errors.firstLastName &&
          errors.firstLastName.type === "required" &&
          "Este campo es necesario"}
        {errors.firstLastName &&
          errors.firstLastName.type === "pattern" &&
          "Solo se permiten letras sin tildes"}

        {/* segundo apellido */}
        <input
          name="secondLastName"
          placeholder="Segundo apellido"
          ref={register({
            pattern: /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/
          })}
        />
        {errors.secondLastName &&
          errors.secondLastName.type === "pattern" &&
          "Solo se permiten letras sin tildes"}

        {/* cedula */}
        <input
          name="idCard"
          placeholder="Cédula"
          ref={register({
            required: true,
            pattern: /^[0-9]*$/,
            maxLength: 11,
            minLength: 11
          })}
        />
        {errors.idCard &&
          errors.idCard.type === "required" &&
          "Este campo es necesario"}
        {errors.idCard &&
          errors.idCard.type === "pattern" &&
          "Solo se permiten números"}
        {errors.idCard &&
          (errors.idCard.type === "maxLength" ||
            errors.idCard.type === "minLength") &&
          "Cédula inválida"}

        {/* genero */}
        <label htmlFor="gender"> Género</label>
        <select name="gender" ref={register}>
          <option value="Hombre">Hombre</option>
          <option value="Mujer">Mujer</option>
        </select>

        {/* direcciones */}
        <FieldArray register={register} errors={errors} />

        {/* telefono */}
        <input
          name="phone"
          placeholder="Teléfono"
          ref={register({
            required: true,
            pattern: /^[0-9]*$/,
            maxLength: 10,
            minLength: 10
          })}
        />
        {errors.phone &&
          errors.phone.type === "required" &&
          "Este campo es necesario"}
        {errors.phone &&
          errors.phone.type === "pattern" &&
          "Solo se permiten números"}
        {errors.phone &&
          (errors.phone.type === "maxLength" ||
            errors.phone.type === "minLength") &&
          "Teléfono inválido"}

        {/* correo */}
        <input
          name="email"
          placeholder="Correo electrónico"
          ref={register({
            pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          })}
        />
        {errors.email &&
          errors.email.type === "pattern" &&
          "Correo electrónico inválido"}

        {/* estado civil */}
        <label htmlFor="civilStatus"> Estado Civil</label>
        <select name="civilStatus" ref={register}>
          <option value="Soltero/a">Soltero/a</option>
          <option value="Casado/a">Casado/a</option>
          <option value="Divorciado/a">Divorciado/a/a</option>
        </select>

        {/* hijos */}
        <label htmlFor="hasChild"> ¿Tiene hijos?</label>
        <select name="hasChild" ref={register}>
          <option value="No">No</option>
          <option value="Si">Si</option>
        </select>

        <input
          name="date"
          type="date"
          ref={register({
            required: true
          })}
        />
        {errors.date &&
          errors.date.type === "required" &&
          "Este campo es requerido"}
        <input type="submit" value="Agregar usuario" />
      </form>
    </div>
  );
};
