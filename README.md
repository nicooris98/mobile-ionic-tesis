# 📱 Proyecto Ionic de Monitoreo con Detección de Personas
Este proyecto está desarrollado con Ionic Framework y Angular, y permite visualizar imágenes con detección de personas, paginación y otras funcionalidades útiles para sistemas de monitoreo.

## 🚀 Requisitos previos
Antes de ejecutar este proyecto, asegurate de tener instalado:

### 1. Node.js y npm
Descargalo desde https://nodejs.org

### 2. Ionic CLI
Instalá Ionic globalmente con:

```bash
npm install -g @ionic/cli
```

### 3. Instalá las dependencias:

```bash
npm install
```

### 4. Ejecutá la aplicación en el navegador:

```bash
ionic serve
```

## 📁 Estructura del proyecto
El proyecto está organizado en carpetas que separan claramente las responsabilidades:

```bash
src/
│
├── app/
│   ├── guards/               # 🚧 Guardias de rutas (auth, permisos, etc.)
│   ├── models/               # 📦 Interfaces y modelos de datos del proyecto
│   ├── pages/                # 📄 Vistas principales de la aplicación
│   ├── services/             # 🔌 Servicios para manejar APIs y lógica de negocio
│   └── settings/
│       └── components/       # 🧩 Componentes reutilizables (botones, listas, etc.)
│
├── assets/                   # 🎨 Recursos estáticos (imágenes, íconos, etc.)
├── environments/             # ⚙️ Configuraciones de entornos (dev, prod)
└── theme/                    # 🎨 Variables y estilos globales de Ionic
```

## 🛠️ Funcionalidades principales
✅ Paginación de imágenes

✅ Detección visual de personas (borde rojo/verde)

✅ Visualización de fecha y hora debajo de cada imagen

✅ Componentes reutilizables personalizados
