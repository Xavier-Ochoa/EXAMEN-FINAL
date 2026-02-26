# 🎤 Caso 5 — Sistema de Gestión de Conferencias

Sistema web para la gestión de conferencias. Permite administrar conferencistas, auditorios y reservas con una relación muchos a muchos.

---

## 🗂️ Estructura del Proyecto

```
C5gestion_conferencias/
├── backend/     → API REST con Node.js + Express + MongoDB
└── frontend/    → SPA con React + Vite
```

---

## ⚙️ Backend    https://examen-final-khaki.vercel.app

### Credenciales de acceso

- Correo electrónico: lxoc@gmail.com
- Contraseña: 123456


### Tecnologías
- Node.js + Express 4
- MongoDB Atlas + Mongoose
- JWT para autenticación
- Desplegado en Vercel (Serverless)

### Colecciones MongoDB
| Colección | Descripción |
|---|---|
| `usuarios` | Usuarios del sistema |
| `conferencistas` | Datos de los conferencistas (con campo `empresa`) |
| `auditorios` | Auditorios disponibles |
| `reservas` | Relación muchos a muchos entre conferencistas y auditorios |

### Endpoints

#### Autenticación
| Método | Ruta | Descripción |
|---|---|---|
| POST | `/api/auth/registro` | Registrar nuevo usuario |
| POST | `/api/auth/login` | Iniciar sesión → devuelve JWT |
| GET | `/api/auth/perfil` | Perfil del usuario autenticado |

#### Conferencistas 🔒
| Método | Ruta | Descripción |
|---|---|---|
| GET | `/api/conferencistas` | Listar todos |
| GET | `/api/conferencistas/:id` | Obtener uno |
| POST | `/api/conferencistas` | Crear |
| PUT | `/api/conferencistas/:id` | Actualizar |
| DELETE | `/api/conferencistas/:id` | Eliminar |

#### Auditorios 🔒
| Método | Ruta | Descripción |
|---|---|---|
| GET | `/api/auditorios` | Listar todos |
| GET | `/api/auditorios/:id` | Obtener uno |
| POST | `/api/auditorios` | Crear |
| PUT | `/api/auditorios/:id` | Actualizar |
| DELETE | `/api/auditorios/:id` | Eliminar |

#### Reservas 🔒
| Método | Ruta | Descripción |
|---|---|---|
| GET | `/api/reservas` | Listar todas |
| GET | `/api/reservas/:id` | Obtener una |
| POST | `/api/reservas` | Crear |
| PUT | `/api/reservas/:id` | Actualizar |
| DELETE | `/api/reservas/:id` | Eliminar |

> 🔒 Requieren header: `Authorization: Bearer <token>`

### Variables de Entorno (backend)
```env
MONGODB_URI=mongodb+srv://...
JWT_SECRET=tu_clave_secreta
NODE_ENV=production
```

### Instalación local
```bash
cd backend
npm install
npm run dev
# Corre en http://localhost:3000
```

---

## 🖥️ Frontend  https://galaxyconf.vercel.app

### Credenciales de acceso

-Correo electrónico: ali@gmail.com
-Contraseña: 123456

### Tecnologías
- React 18 + Vite
- React Router DOM
- Axios
- Desplegado en Vercel

### Módulos
- **Login** — autenticación con JWT
- **Conferencistas** — CRUD completo
- **Auditorios** — CRUD completo
- **Reservas** — CRUD con relación conferencista-auditorio

### Variables de Entorno (frontend)
```env
VITE_API_URL=https://tu-backend.vercel.app/api
```

### Instalación local
```bash
cd frontend
npm install
npm run dev
# Corre en http://localhost:5173
```

---

## 🚀 Despliegue en Vercel

### Backend
1. Importar carpeta `backend` en Vercel
2. Agregar variables de entorno: `MONGODB_URI`, `JWT_SECRET`, `NODE_ENV=production`
3. Vercel detecta automáticamente el `vercel.json`

### Frontend
1. Importar carpeta `frontend` en Vercel
2. Agregar variable de entorno: `VITE_API_URL=https://url-del-backend.vercel.app/api`
3. Framework preset: **Vite**
