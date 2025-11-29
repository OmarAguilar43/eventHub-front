export interface Usuario {
  id: string;
  nombre: string;
  correo: string;
  rol: string;
}

export interface GetUsuariosData {
  usuarios: Usuario[];
}
