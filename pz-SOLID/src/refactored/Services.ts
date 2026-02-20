import { IRepository } from "../interfaces/IRepository";
import { INotification } from "../interfaces/INotification";

export class DatabaseRepo implements IRepository {
  save(data: any): void {
    console.log(`[Успішно] Збережено в базу даних: ${JSON.stringify(data)}`);
  }
}

export class EmailService implements INotification {
  send(message: string): void {
    console.log(`[Email] Надсилаємо листа: ${message}`);
  }
}