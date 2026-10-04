# HOLO VIP Admin — Outcome Items

- [ ] El alta de cuenta debe pedir únicamente la duración en días; username, password, fechas y campos de compatibilidad se generan automáticamente.
- [ ] Después del alta, el panel debe mostrar username, password y fecha de expiración para introducirlos en el login del APK.
- [ ] Cada cuenta automática debe escribirse en `/userinfo/{username}` con `username`, `password`, `rgtime`, `validity` en formato `dd-MM-yyyy HH:mm`, `status: active`, `access: "1"`, `device: "null"` y `deviceCount: 0`.
- [ ] El panel debe conservar edición, activación, revocación y liberación de dispositivo para cuentas existentes.
- [ ] El APK debe consultar la nueva URL Firebase y el mismo contrato `/userinfo/{username}` sin conservar referencias al proyecto antiguo.
- [ ] La compilación final debe pasar build web, verificación de firma APK y auditoría estática de rutas/campos.
