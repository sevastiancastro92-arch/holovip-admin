# Plan — SociosXIT Admin

## Alcance
Panel de administración web en español, sin pantalla de login, conectado directamente a Firebase Realtime Database del proyecto `sociosxit-fa932`. La aplicación administra el contrato real del APK: `/userinfo/{username}` para login/licencias y `/userdata/*` para el listener de actividad. Los nodos `apps`, `keys`, `licenses` y `users` de la nueva base pertenecen a otro esquema y no se presentan como administración de HOLO VIP.

## Decisiones de implementación
- SPA estática con Vite y JavaScript modular, servida en el puerto 3000.
- Firebase Web SDK cargado como módulos ESM desde el CDN oficial; la configuración está en `src/firebase.js` para que el panel apunte al mismo proyecto usado por el APK migrado.
- Un listener `onValue` sobre la raíz mantiene el estado sincronizado en tiempo real.
- CRUD específico para cuentas HOLO VIP: formularios de username, password, validity, status, access, device, rgtime, createdBy y deviceCount; además de activar/revocar, liberar dispositivo, borrar y exportar.
- `app-config` se trata como registro singleton; `proxy_tnt_v10` admite edición del objeto completo y sus subnodos; los demás nodos se muestran como colecciones clave/valor.
- Sin login, conforme a la solicitud. El UI muestra una advertencia persistente para recordar que las reglas de Firebase deben proteger el acceso en producción.

## Estructura
- `index.html`: shell del documento, fuentes y punto de entrada.
- `src/main.js`: configuración Firebase, estado, renderizado, eventos y operaciones CRUD.
- `src/styles.css`: sistema visual oscuro de consola operativa, responsive y estados de modal/toast.
- `public/manus-routes.json`: declaración de rutas para Preview.
- `app.config.ts`: metadatos del proyecto Webdev.

## Diseño
- **Movimiento:** consola editorial “control room”, con contraste de paneles oscuros, numerales grandes y acentos tipo terminal.
- **Principios:** jerarquía operativa, densidad legible, feedback inmediato y navegación persistente.
- **Color:** carbón profundo para el lienzo; marfil frío para lectura; verde lima como firma de conectividad y acción; ámbar para advertencias y rosa coral para operaciones destructivas.
- **Layout:** rail lateral estrecho + cabecera contextual + lienzo de contenido amplio; no se centra todo en una tarjeta única.
- **Firma visual:** marca SX monoespaciada, píldoras de estado con punto vivo y tarjetas con esquinas asimétricas.
- **Interacción:** cada escritura confirma su resultado mediante toast; las acciones peligrosas requieren confirmación; el editor JSON muestra errores antes de tocar Firebase.
- **Animación:** entradas suaves de paneles, pulso mínimo del estado online, hover de filas y modal con escala corta; sin animaciones decorativas que ralenticen la operación.
- **Tipografía:** Space Grotesk para títulos y UI, IBM Plex Mono para claves, valores técnicos y métricas.
- **Esencia:** “la sala de control clara para operar SociosXIT sin perder el pulso de los datos”; precisa, directa, auditable.
- **Voz:** “Todo el sistema, a la vista.” / “Los cambios se reflejan en Firebase en tiempo real.”
- **Wordmark:** monograma SX dentro de una cápsula cuadrada, seguido de SOCIOSXIT en mayúsculas espaciadas.
- **Color de marca:** verde lima `#b7f34a`, reservado para estado conectado y acciones primarias.

## Nota de seguridad
El acceso sin autenticación se implementa porque forma parte del alcance solicitado. Firebase Realtime Database debe tener reglas de seguridad restrictivas antes de publicar el panel en una URL pública.
