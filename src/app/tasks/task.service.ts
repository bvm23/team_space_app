import { Injectable } from '@angular/core';
import { Task } from './task/task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private storageId = 'tasks';
  private tasks!: Task[];
  sampleData: Task[] = [
    {
      id: '1712345678001',
      title: 'Fix login bug',
      status: 'pending',
      owner: {
        id: '0.5131572595293172',
        name: 'Polly Norman',
        email: 'polly.norman@example.com',
        role: 'admin',
        image: 'm-avatar.svg',
        haveManager: false,
      },
    },
    {
      id: '1712345678002',
      title: 'Implement dark mode',
      status: 'pending',
      owner: {
        id: '0.5131572595293172',
        name: 'Polly Norman',
        email: 'polly.norman@example.com',
        role: 'admin',
        image: 'm-avatar.svg',
        haveManager: false,
      },
    },
    {
      id: '1712345678003',
      title: 'Optimize database queries',
      status: 'completed',
      owner: {
        id: '0.5131572592293172',
        name: 'Eunice Stevenson',
        email: 'eunice.stevenson@example.com',
        role: 'member',
        image: 'f-avatar.svg',
        haveManager: false,
      },
    },
    {
      id: '1712345678004',
      title: 'Write unit tests',
      status: 'pending',
      owner: {
        id: '0.5131572592293172',
        name: 'Eunice Stevenson',
        email: 'eunice.stevenson@example.com',
        role: 'member',
        image: 'f-avatar.svg',
        haveManager: false,
      },
    },
    {
      id: '1712345678005',
      title: 'Update API documentation',
      status: 'completed',
      owner: {
        id: '0.5131572595293175',
        name: 'Ethan Gibbs',
        email: 'ethan.gibbs@example.com',
        role: 'member',
        image: 'm-avatar.svg',
        haveManager: false,
      },
    },
    {
      id: '1712345678006',
      title: 'Refactor authentication module',
      status: 'in-progress',
      owner: {
        id: '0.5131572595293175',
        name: 'Ethan Gibbs',
        email: 'ethan.gibbs@example.com',
        role: 'member',
        image: 'm-avatar.svg',
        haveManager: false,
      },
    },
    {
      id: '1712345678007',
      title: 'Improve UI responsiveness',
      status: 'pending',
      owner: {
        id: '0.5131572595293171',
        name: 'Johnny Allison',
        email: 'johnny.allison@example.com',
        role: 'member',
        image: 'm-avatar.svg',
        haveManager: false,
      },
    },
    {
      id: '1712345678008',
      title: 'Migrate database to PostgreSQL',
      status: 'in-progress',
      owner: {
        id: '0.5131572595293171',
        name: 'Johnny Allison',
        email: 'johnny.allison@example.com',
        role: 'member',
        image: 'm-avatar.svg',
        haveManager: false,
      },
    },
    {
      id: '1712345678009',
      title: 'Set up CI/CD pipeline',
      status: 'completed',
      owner: {
        id: '0.5131572595293178',
        name: 'Kyle Watts',
        email: 'kyle.watts@example.com',
        role: 'member',
        image: 'm-avatar.svg',
        haveManager: false,
      },
    },
    {
      id: '1712345678010',
      title: 'Enhance security policies',
      status: 'pending',
      owner: {
        id: '0.5131572595293122',
        name: 'Rosa Armstrong',
        email: 'rosa.armstrong@example.com',
        role: 'member',
        image: 'f-avatar.svg',
        haveManager: false,
      },
    },
  ];

  constructor() {
    const existingData = localStorage.getItem(this.storageId);
    if (existingData) {
      this.tasks = JSON.parse(existingData);
    } else {
      this.tasks = [];
    }
    this.save();
  }

  getUserTasks(id: string) {
    return this.tasks.filter((task) => task.owner.id === id);
  }

  loadSampleTasks() {
    this.tasks = this.sampleData;
    this.save();
  }

  addTask(newTask: Task) {
    this.tasks.push(newTask);
    this.save();
  }

  removeUserTasks(id: string) {
    this.tasks = this.tasks.filter((task) => task.owner.id !== id);
    this.save();
  }

  save() {
    localStorage.setItem(this.storageId, JSON.stringify(this.tasks));
  }
}
