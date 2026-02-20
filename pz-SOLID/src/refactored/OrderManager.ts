import { IRepository } from "../interfaces/IRepository";
import { INotification } from "../interfaces/INotification";
import { Order } from "./Order";

export class OrderManager {
  // Dependency Injection: передаємо залежності через конструктор
  constructor(
    private repo: IRepository,
    private notifier: INotification
  ) {}

  process(order: Order): void {
    if (order.items.length === 0) {
      throw new Error("Неможливо обробити порожнє замовлення");
    }

    this.repo.save(order);
    this.notifier.send(`Замовлення #${order.id} успішно оброблено.`);
  }
}