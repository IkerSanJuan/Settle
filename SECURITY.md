# Seguridad

No guardar contraseñas, tokens, claves, datos de clientes ni archivos `.env` reales en Git. Usar secretos del entorno o de GitHub y permisos mínimos. Cada persona utiliza su propia cuenta con doble factor.

## Comunicar una vulnerabilidad

No abrir una issue con detalles explotables ni credenciales. Usar el canal privado del equipo o Private vulnerability reporting si está habilitado. Antes de invitar colaboradores, registrar un contacto privado y una persona suplente; ambos están pendientes de designar.

Incluir componente, impacto, pasos seguros de reproducción y versiones afectadas. Confirmar recepción lo antes posible y acordar responsable y seguimiento privado.

## Si se publica un secreto

Revocarlo o rotarlo inmediatamente, revisar accesos y avisar al equipo. Borrar la línea en un commit no elimina el secreto del historial. Coordinar cualquier limpieza del historial y recuperación de copias.

## Dependencias y automatización

Revisar dependencias y conservar sus archivos de bloqueo. Dependabot está configurado para GitHub Actions; añadir el ecosistema del producto al definirlo. Fijar acciones a commits completos y revisar actualizaciones. No ejecutar código de PR no confiables con secretos ni usar `pull_request_target` para ejecutar su contenido.

Versiones del producto con soporte: pendientes de la primera publicación. No se promete todavía un plazo de parcheo.
