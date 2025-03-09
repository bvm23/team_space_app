import { Member } from '../../team/team-member/team-member.model';

export interface Task {
  id: string;
  title: string;
  status: 'pending' | 'in-progress' | 'completed';
  owner: Member;
}
