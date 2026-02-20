import { OrderManager } from '../src/refactored/OrderManager';
import { Order } from '../src/refactored/Order';

describe('Тестування SOLID OrderManager', () => {
  it('має викликати методи збереження та сповіщення при обробці замовлення', () => {
    // Створюємо макети (Mocks) інтерфейсів
    const mockRepo = { save: jest.fn() };
    const mockNotify = { send: jest.fn() };

    const manager = new OrderManager(mockRepo, mockNotify);
    const order = new Order('123', ['Товар 1', 'Товар 2']);

    manager.process(order);

    // Перевіряємо, чи були викликані методи інтерфейсів
    expect(mockRepo.save).toHaveBeenCalledWith(order);
    expect(mockNotify.send).toHaveBeenCalled();
  });

  it('має викидати помилку для порожнього замовлення', () => {
    const mockRepo = { save: jest.fn() };
    const mockNotify = { send: jest.fn() };
    const manager = new OrderManager(mockRepo, mockNotify);
    
    const emptyOrder = new Order('456', []);
    
    expect(() => manager.process(emptyOrder)).toThrow("Неможливо обробити порожнє замовлення");
  });
});