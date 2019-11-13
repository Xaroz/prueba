import React, { useContext, useEffect } from "react";
import useForm from "react-hook-form";
import FieldArray from "../Components/FieldArray";
import { UsersContext } from "../Components/UsersContext";
import { useHistory } from "react-router-dom";

export const AddUser = () => {
  const { register, handleSubmit, errors } = useForm();
  const {
    users,
    setUsers,
    lastUsedId,
    setLastUsedId,
    sucess,
    setSucess
  } = useContext(UsersContext);
  let history = useHistory();

  const onSubmit = data => {
    data.age = calculateAge(data.birthDate);
    const newId = lastUsedId + 1;
    setLastUsedId(newId);
    data.id = newId;
    setUsers([...users, data]);
    setSucess(true);
  };

  useEffect(() => {
    if (sucess) {
      setTimeout(() => {
        history.push("/users");
      }, 1500);
      return () => {
        setSucess(false);
      };
    }
  }, [sucess, history, setSucess]);

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
      <div className="form-container">
        <form className="add-container" onSubmit={handleSubmit(onSubmit)}>
          {/* nombre */}
          <div className="row">
            <div className="column">
              <label htmlFor="name"> Nombre Completo</label>
              <input
                className={errors.name ? "has-error" : null}
                name="name"
                placeholder="Nombres"
                ref={register({
                  required: true,
                  pattern: /^[a-zA-ZÁÉÓÚáéíóúñÑ]+(([',. -][a-zA-ZáÁÉÓÚáéíóúñÑ ])?[a-zA-ZÁÉÓÚáéíóúñÑ]*)*$/
                })}
              />
              {errors.name && errors.name.type === "required" && (
                <span>Este campo es necesario</span>
              )}
              {errors.name && errors.name.type === "pattern" && (
                <span>Solo se permiten letras</span>
              )}
            </div>

            <div className="column">
              {/* primer apellido */}
              <label htmlFor="firstLastName">Primer Apellido</label>
              <input
                name="firstLastName"
                placeholder="Primer apellido"
                className={errors.firstLastName ? "has-error" : null}
                ref={register({
                  required: true,
                  pattern: /^[a-zA-ZÁÉÓÚáéíóúñÑ]+(([',. -][a-zA-ZáÁÉÓÚáéíóúñÑ ])?[a-zA-ZÁÉÓÚáéíóúñÑ]*)*$/
                })}
              />
              {errors.firstLastName &&
                errors.firstLastName.type === "required" && (
                  <span>Este campo es requerido</span>
                )}
              {errors.firstLastName &&
                errors.firstLastName.type === "pattern" && (
                  <span>Solo se permiten letras</span>
                )}
            </div>
          </div>

          <div className="row">
            <div className="column">
              <label htmlFor="idCard">Cédula</label>
              <input
                name="idCard"
                className={errors.idCard ? "has-error" : null}
                placeholder="Cédula"
                ref={register({
                  required: true,
                  pattern: /^[0-9]*$/,
                  maxLength: 11,
                  minLength: 11
                })}
              />
              {errors.idCard && errors.idCard.type === "required" && (
                <span>Este campo es requerido</span>
              )}
              {errors.idCard && errors.idCard.type === "pattern" && (
                <span>Solo se permiten números</span>
              )}
              {errors.idCard &&
                (errors.idCard.type === "maxLength" ||
                  errors.idCard.type === "minLength") && (
                  <span>Cédula inválida</span>
                )}
            </div>
            {/* cedula */}

            <div className="column">
              {/* segundo apellido */}
              <label htmlFor="secondLastName">Segundo Apellido</label>
              <input
                className={errors.secondLastName ? "has-error" : null}
                name="secondLastName"
                placeholder="Segundo apellido"
                ref={register({
                  pattern: /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/
                })}
              />
              {errors.secondLastName &&
                errors.secondLastName.type === "pattern" && (
                  <span>Solo se permiten letras</span>
                )}
            </div>
          </div>

          <div className="row">
            <div className="column">
              {/* telefono */}
              <label htmlFor="phone">Número de teléfono</label>
              <input
                className={errors.phone ? "has-error" : null}
                name="phone"
                placeholder="Teléfono"
                ref={register({
                  required: true,
                  pattern: /^[0-9]*$/,
                  maxLength: 10,
                  minLength: 10
                })}
              />
              {errors.phone && errors.phone.type === "required" && (
                <span>Este campo es requerido</span>
              )}
              {errors.phone && errors.phone.type === "pattern" && (
                <span>Solo se permiten números</span>
              )}
              {errors.phone &&
                (errors.phone.type === "maxLength" ||
                  errors.phone.type === "minLength") && (
                  <span>Teléfono inválida</span>
                )}
            </div>

            <div className="column">
              {/* correo */}
              <label htmlFor="email">Correo Electrónico</label>
              <input
                name="email"
                className={errors.email ? "has-error" : null}
                placeholder="Correo electrónico"
                ref={register({
                  required: true,
                  pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                })}
              />
              {errors.email && errors.email.type === "required" && (
                <span>Este campo es requerido</span>
              )}
              {errors.email && errors.email.type === "pattern" && (
                <span>Correo electrónico inválido</span>
              )}
            </div>
          </div>

          <div className="row">
            <div className="column gender">
              {/* genero */}
              <label htmlFor="gender"> Género</label>
              <select name="gender" ref={register}>
                <option value="Hombre">Hombre</option>
                <option value="Mujer">Mujer</option>
              </select>
            </div>
            <div className="column civil-status">
              {/* estado civil */}
              <label htmlFor="civilStatus"> Estado Civil</label>
              <select name="civilStatus" ref={register}>
                <option value="Soltero/a">Soltero/a</option>
                <option value="Casado/a">Casado/a</option>
                <option value="Divorciado/a">Divorciado/a/a</option>
              </select>
            </div>
          </div>

          <div className="row">
            <div className="column has-child">
              {/* hijos */}
              <label htmlFor="hasChild"> ¿Tiene hijos?</label>
              <select name="hasChild" ref={register}>
                <option value="No">No</option>
                <option value="Si">Si</option>
              </select>
            </div>

            <div className="column birth-date">
              {/* fecha de nacimiento */}
              <label htmlFor="birthDate"> Fecha de Nacimiento</label>
              <input
                className={errors.birthDate ? "has-error" : null}
                name="birthDate"
                type="date"
                ref={register({
                  required: true
                })}
              />
              {errors.birthDate && errors.birthDate.type === "required" && (
                <span>Este campo es requerido</span>
              )}
            </div>
          </div>

          {/* direcciones */}
          <div className="row direction-container">
            <div className="column">
              <FieldArray register={register} errors={errors} />
            </div>
          </div>

          <input
            className="submit-button"
            disabled={sucess}
            type="submit"
            value="Agregar usuario"
          />
        </form>
      </div>

      <hr />
      {sucess ? (
        <div className="user-added">
          <p>
            <strong>¡Usuario agregado!</strong> Redirigiendo a la lista de
            usuarios...
          </p>
        </div>
      ) : null}
    </div>
  );
};
