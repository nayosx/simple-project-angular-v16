// session-storage.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SessionStorageService {
  constructor() {}

  getItem(key: string): any {
    const item = sessionStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  }

  setItem(key: string, value: any): void {
    sessionStorage.setItem(key, JSON.stringify(value));
  }

  editItem(key: string, newValue: any): void {
    const existingItem = this.getItem(key);
    if (existingItem) {
      const updatedItem = { ...existingItem, ...newValue };
      this.setItem(key, updatedItem);
    }
  }

  deleteItem(key: string): void {
    sessionStorage.removeItem(key);
  }

  clearStorage(): void {
    sessionStorage.clear();
  }
}
