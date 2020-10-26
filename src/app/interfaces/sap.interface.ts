
export interface UsuariosInterface {
  picture: string;
  name: string;
  fathersLastName: string;
  mothersLastName: string;
  email: string;
  roleId: number;
  active: boolean;
}

export interface RoleInterface {
  id: number;
  position: string;
}
