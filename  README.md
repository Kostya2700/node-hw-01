# Отримуємо і виводимо весь список контактів у вигляді таблиці (console.table)

node index.js --action="list"
https://monosnap.com/file/XJERFIHRH8HCCitquGNhK0Fg0Cr0PQ

# Отримуємо контакт по id

node index.js --action="get" --id=5
https://monosnap.com/file/VFZjReRs1pYXveqmHDRiG5RJxqh11w

# Додаємо контакт

node index.js --action="add" --name="Mango" --email="mango@gmail.com" --phone="322-22-22"
https://monosnap.com/file/Bb48zGsI70PUdju5TDBYkqbYaWa5nQ

# Видаляємо контакт

node index.js --action="remove" --id=3
https://monosnap.com/file/Z7UTTk7ZPtB8uSCAjyoHlYt7l4Iet2
