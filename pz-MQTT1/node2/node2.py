import paho.mqtt.client as mqtt
import time

BROKER = "broker"  # назва контейнера брокера
PORT = 1883
TOPIC = "nodes/chat"

def on_connect(client, userdata, flags, rc):
    print(f"[Вузол 2] Підключився до брокера!")

client = mqtt.Client(client_id="node2")
client.on_connect = on_connect

# Чекаємо поки брокер запуститься
time.sleep(3)

client.connect(BROKER, PORT)
client.loop_start()  # запускаємо в фоні

# Відправляємо повідомлення кожні 5 секунд
counter = 1
while True:
    message = f"Привіт від Вузла 2! Повідомлення #{counter}"
    client.publish(TOPIC, message)
    print(f"[Вузол 2] Відправив: {message}")
    counter += 1
    time.sleep(5)
