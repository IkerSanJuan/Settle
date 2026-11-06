# Instrucciones para asistentes de desarrollo

Settle ayuda a estudiantes recién llegados a UC Berkeley a encontrar los productos que necesitan.

- Leer README.md, CONTRIBUTING.md y la issue antes de cambiar código.
- Trabajar en una rama `codex/<issue>-<descripcion>` y limitarse al objetivo acordado.
- El prototipo editable está en `web/`. No asumir que `web/` es una salida generada.
- Coordinar cambios en `app.js`, `style.css`, `index.html` y contratos antes de modificar archivos compartidos.
- No inventar precios, existencias, integraciones, resultados de pruebas o garantías de autenticación.
- Conservar créditos, licencias de fuentes y límites documentados del prototipo.
- No añadir secretos, datos personales, servicios de pago ni desplegar sin autorización.
- Ejecutar `python3 scripts/check_docs.py` y `node --check` sobre los JavaScript modificados. Añadir validación funcional proporcional al cambio.
- Actualizar documentación afectada. Explicar qué cambió, cómo se comprobó y qué queda pendiente en la PR.
- No realizar force push, sobrescribir trabajo ajeno ni integrar cambios sin revisión del equipo.
