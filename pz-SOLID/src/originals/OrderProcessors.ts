export class OrderProcessor {
  processOrder(order: { id: string; items: string[] }) {
    // Порушення SRP: валідація, збереження та сповіщення в одному місці
    if (order.items.length === 0) {
      throw new Error("Замовлення порожнє");
    }

    // Порушення DIP: жорстка прив'язка до консолі (імітація БД)
    console.log(`Збереження замовлення ${order.id} у MySQL...`);

    // Порушення OCP: якщо захочемо SMS, доведеться переписувати цей метод
    console.log(`Відправка Email сповіщення для замовлення ${order.id}`);
  }
}