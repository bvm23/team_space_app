export interface Member {
  id: string;
  name: string;
  email: string;
  role: Role;
  image: string;
}

export type Role = 'member' | 'admin' | 'manager';
