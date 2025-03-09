import { Injectable } from '@angular/core';
import { Member, Role } from './team-member/team-member.model';

@Injectable({
  providedIn: 'root',
})
export class TeamService {
  private members: Member[] = [
    {
      id: '0.5131572595293172',
      name: 'Polly Norman',
      email: 'polly.norman@example.com',
      role: 'admin',
      image: 'm-avatar.svg',
      haveManager: false,
    },
    {
      id: '0.5131572592293172',
      name: 'Eunice Stevenson',
      email: 'eunice.stevenson@example.com',
      role: 'member',
      image: 'f-avatar.svg',
      haveManager: false,
    },
    {
      id: '0.5131572595293175',
      name: 'Ethan Gibbs',
      email: 'ethan.gibbs@example.com',
      role: 'member',
      image: 'm-avatar.svg',
      haveManager: false,
    },
    {
      id: '0.5131572595293171',
      name: 'Johnny Allison',
      email: 'johnny.allison@example.com',
      role: 'member',
      image: 'm-avatar.svg',
      haveManager: false,
    },
    {
      id: '0.5131572595293178',
      name: 'Kyle Watts',
      email: 'kyle.watts@example.com',
      role: 'member',
      image: 'm-avatar.svg',
      haveManager: false,
    },
    {
      id: '0.5131572595293122',
      name: 'Rosa Armstrong',
      email: 'rosa.armstrong@example.com',
      role: 'member',
      image: 'f-avatar.svg',
      haveManager: false,
    },
  ];
  constructor() {}

  getMembers() {
    return this.members;
  }

  getMember(id: string) {
    return this.members.find((member) => member.id === id);
  }

  addMember(newMember: Member) {
    this.members.push(newMember);
  }

  removeMember(id: string) {
    this.members = this.members.filter((member) => member.id !== id);
  }

  changeRole(id: string, givenRole: Role) {
    this.members.find((member) => {
      if (member.id === id) {
        member.role = givenRole;
      }
    });
  }
}
