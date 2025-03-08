export interface Member {
  id: string;
  name: string;
  email: string;
  role: Role;
  image: string;
  haveManager: boolean;
  manager?: Member;
}

export type Role = 'member' | 'admin' | 'manager';
