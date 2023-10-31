import React from "react";
import { Button, Paper, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { useAxios } from "../utils";

export default function Register() {
  const { register, handleSubmit } = useForm({
    shouldUseNativeValidation: true,
  });
  const onSubmit = async (dataForm) => {
    console.log(dataForm);
    const { data, status, exists } = await useAxios(
      "/auth/register",
      dataForm,
      "post"
    );
    console.log(data);
    if (status === 200) {
      alert("Usuario creado con exito!!");
      return;
    }
    alert("El usuario no pudo registrarse!!");
    return;
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "80vh",
      }}
    >
      <Paper
        style={{
          width: "20rem",
          padding: "1rem",
          margin: "2rem 1rem 2rem 1rem",
          borderRadius: "2rem",
        }}
      >
        <Typography
          variant="h4"
          fontWeight="bold"
          textAlign="center"
          margin="1rem 0 2rem 0"
        >
          Register
        </Typography>
        <form
          onSubmit={handleSubmit(onSubmit)}
          style={{
            margin: "1.5rem 0 1.5rem 0",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: "1.25rem",
            padding: "0 1rem 0 1rem",
          }}
        >
          <TextField
            fullWidth
            label="Nombres"
            variant="outlined"
            {...register("firstNames", {
              required: "Por favor ingrese sus nombres.",
            })}
          />
          <TextField
            fullWidth
            label="Apellidos"
            variant="outlined"
            {...register("lastNames", {
              required: "Por favor ingrese sus apellidos.",
            })}
          />
          <TextField
            fullWidth
            label="Nombre de usuario"
            variant="outlined"
            {...register("username", {
              required: "Por favor ingrese su nombre de usuario.",
            })}
          />
          <TextField
            fullWidth
            type="email"
            label="Correo"
            variant="outlined"
            {...register("email", {
              required: "Por favor ingrese su correo electronico.",
            })}
          />
          <TextField
            fullWidth
            type="password"
            label="Contraseña"
            variant="outlined"
            {...register("password", {
              required: "Por favor ingrese su contraseña.",
            })}
          />
          <Button type="submit" variant="contained">
            Registrar
          </Button>
        </form>
      </Paper>
    </div>
  );
}
