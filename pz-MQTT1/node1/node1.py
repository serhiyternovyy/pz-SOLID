import paho.mqtt.client as mqtt
import time

BROKER = "broker"  # назва контейнера брокера
PORT = 1883
TOPIC = "nodes/chat"

# Ця функція викликається коли вузол підключився до брокера
def on_connect(client, userdata, flags, rc):
    print(f"[Вузол 1] Підключився до брокера!")
    client.subscribe(TOPIC)
    print(f"[Вузол 1] Підписався на топік: {TOPIC}")

# Ця функція викликається коли прийшло нове повідомлення
def on_message(client, userdata, msg):
    print(f"[Вузол 1] Отримав повідомлення: {msg.payload.decode()}")

client = mqtt.Client(client_id="node1")
client.on_connect = on_connect
client.on_message = on_message

# Чекаємо поки брокер запуститься
time.sleep(3)

client.connect(BROKER, PORT)
client.loop_forever()  # слухаємо постійно
