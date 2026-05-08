# 📖 Bible Random Verse API (05/08/2026)

API RESTful simple para obtener versículos bíblicos aleatorios.

## 🚀 Endpoints

### GET `/frases/aleatoria`
Obtiene un versículo bíblico aleatorio en inglés (versión KJV)

**Respuesta:**
```json
{
  "success": true,
  "verse": {
    "reference": "john 3:16",
    "text": "For God so loved the world...",
    "verses": [...]
  },
  "reference": "john 3:16"
}

## 🛠️ Tecnologías

Node.js
Express
Axios
Bible API (wldeh)

## 📦 Instalación

git clone https://github.com/tu-usuario/bible-random-verse-api.git
cd bible-random-verse-api
npm install
npm start
