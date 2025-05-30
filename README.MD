# Backend API - Sistema de Gestión

API REST desarrollada en Node.js y Express para la gestión de usuarios y productos, utilizando archivos JSON como base de datos local.

## 🚀 Características

- **API REST Completa**: CRUD para usuarios y productos
- **Base de Datos JSON**: Almacenamiento en archivos locales
- **CORS Habilitado**: Permite conexiones desde el frontend
- **Estructura Modular**: Controladores y rutas separadas
- **IDs Autoincrementales**: Generación automática de identificadores únicos

## 📁 Estructura del Proyecto

```
backend/
├── controllers/           # Lógica de negocio
│   ├── users.controller.js    # Controlador de usuarios  
│   └── products.controller.js # Controlador de productos
├── routes/               # Definición de rutas
│   ├── users.routes.js       # Rutas de usuarios
│   └── products.routes.js    # Rutas de productos  
├── db/                   # Base de datos JSON
│   ├── users.json           # Datos de usuarios
│   └── productos.json       # Datos de productos
├── index.js              # Servidor principal
└── package.json          # Dependencias y scripts
```

## 🛠️ Funcionalidades

### API de Usuarios (`/usuarios`)
- `GET /usuarios` - Obtener todos los usuarios
- `GET /usuarios/:id` - Obtener usuario por ID
- `POST /usuarios` - Crear nuevo usuario
- `PUT /usuarios/:id` - Actualizar usuario existente
- `DELETE /usuarios/:id` - Eliminar usuario

**Campos de Usuario:**
- `id` (number): Identificador único autogenerado
- `nombre` (string): Nombre completo del usuario
- `email` (string): Correo electrónico
- `edad` (number): Edad del usuario

### API de Productos (`/productos`)
- `GET /productos` - Obtener todos los productos
- `GET /productos/:id` - Obtener producto por ID
- `POST /productos` - Crear nuevo producto
- `PUT /productos/:id` - Actualizar producto existente
- `DELETE /productos/:id` - Eliminar producto

**Campos de Producto:**
- `id` (number): Identificador único autogenerado
- `nombre` (string): Nombre del producto
- `precio` (number): Precio del producto

## 🔧 Instalación y Uso

```bash
# Clonar el repositorio
git clone git@github.com:avelazquez777/frontProject.git

# Instalar dependencias
npm install

# Iniciar servidor en desarrollo
npm start

# El servidor correrá en http://localhost:5000
```

## 📋 Dependencias

- **express**: Framework web para Node.js
- **cors**: Middleware para habilitar CORS
- **fs**: Módulo nativo para manejo de archivos
- **path**: Módulo nativo para rutas de archivos

## 💾 Base de Datos

### Archivos JSON
- **users.json**: Almacena datos de usuarios
- **productos.json**: Almacena datos de productos

### Funciones de Persistencia
- `leerUsers()` / `leerProductos()`: Lee datos desde archivos JSON
- `escribirUsers()` / `escribirProductos()`: Guarda datos en archivos JSON
- **Auto-creación**: Si no existe el archivo, se crea automáticamente

## 📡 Respuestas API

Todas las respuestas siguen el formato estándar:

```json
{
  "data": [...], 
  "status": 200,
  "message": "Descripción de la operación"
}
```

### Códigos de Estado
- `200`: Operación exitosa
- `201`: Recurso creado exitosamente
- `404`: Recurso no encontrado
- `400`: Error en la solicitud

## 🎯 Características Técnicas

### Generación de IDs
- **Autoincremental**: Encuentra el ID máximo actual y suma 1
- **Único**: Garantiza identificadores únicos para cada registro

### Manejo de Errores
- **Validación de Existencia**: Verifica que el recurso exista antes de operaciones
- **Respuestas Consistentes**: Formato uniforme para todas las respuestas
- **Logs de Depuración**: Console.log para seguimiento de operaciones

### Persistencia de Datos
- **Escritura Inmediata**: Los cambios se guardan instantáneamente
- **Formato Legible**: JSON con indentación para fácil lectura
- **Respaldo Automático**: Los datos persisten entre reinicios del servidor

## 🌐 Configuración del Servidor

- **Puerto**: 5000 (configurable)
- **CORS**: Habilitado para todas las origins
- **JSON Parser**: Middleware para parsing automático de JSON
- **Rutas Modulares**: Separación clara entre usuarios y productos

## 🔄 Flujo de Operaciones

1. **Cliente** envía petición HTTP
2. **Express** dirige a la ruta correspondiente  
3. **Controlador** procesa la lógica de negocio
4. **Archivo JSON** se lee/escribe según la operación
5. **Respuesta** se envía de vuelta al cliente

Este backend proporciona una API completa y funcional para el sistema de gestión, con persistencia de datos simple pero efectiva usando archivos JSON locales.