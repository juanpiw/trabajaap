import { Injectable } from "@angular/core";


@Injectable()
export class LocalStorageService {

  clear(): void {
      localStorage.clear();
  }

  getItem(key: string): string {
    return localStorage.getItem(key);
}

  getObject<T>(key: string): T {
    const element = this.getItem(key);
    return JSON.parse(element);
  }

  removeItem(key: string): void {
    localStorage.removeItem(key);
  }

  setItem(key: any, object: any) {
      console.log("entra");
    localStorage.setItem(key, object);
  }

}