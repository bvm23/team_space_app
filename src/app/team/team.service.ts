import { Injectable } from '@angular/core';
import { Member, Role } from './team-member/team-member.model';

@Injectable({
  providedIn: 'root',
})
export class TeamService {
  private storageId = 'people';
  private members!: Member[];
  sampleData: Member[] = [
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

  constructor() {
    const existingData = localStorage.getItem(this.storageId);
    if (existingData) {
      this.members = JSON.parse(existingData);
    } else {
      this.members = [];
    }
    this.save();
  }

  getMembers() {
    return this.members;
  }

  getSampleData() {
    this.members = this.sampleData;
    this.save();
    return this.members;
  }

  getMember(id: string) {
    return this.members.find((member) => member.id === id);
  }

  addMember(newMember: Member) {
    this.members.push(newMember);
    this.save();
  }

  // on removing a member, first will reset their role for removing
  // any manager or admin details assigned.
  removeMember(id: string) {
    this.resetRole(id);
    this.members = this.members.filter((member) => member.id !== id);
    this.save();
  }

  changeRole(id: string, givenRole: Role) {
    this.members.find((member) => {
      if (member.id === id) {
        member.role = givenRole;
      }
    });
    this.save();
  }

  // for resetting the roles from 'admin' and 'manager' to 'member'.
  // the manager details assigned to employees will be removed also.
  resetRole(id: string) {
    let user = this.getMember(id);
    if (!user) {
      return;
    }
    const currentRole = user.role;
    if (currentRole === 'manager') {
      this.members
        .filter((m) => m.manager?.id === user.id)
        .map((m) => {
          m.manager = undefined;
          m.haveManager = false;
        });
    }
    user.role = 'member';
    this.save();
  }

  save() {
    localStorage.setItem(this.storageId, JSON.stringify(this.members));
  }
}
