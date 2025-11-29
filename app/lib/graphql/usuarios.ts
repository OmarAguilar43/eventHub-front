import { gql } from "@apollo/client";

export const GET_USUARIOS = gql`
  query GetUsuarios {
    usuarios {
      id
      nombre
      correo
      rol
    }
  }
`;
