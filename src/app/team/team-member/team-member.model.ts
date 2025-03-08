export interface Member {
  id: string;
  name: string;
  email: string;
  role: Role;
  image: string;
  isManaging?: Member[];
  haveManager: boolean;
  manager?: Member;
}

export type Role = 'member' | 'admin' | 'manager';
