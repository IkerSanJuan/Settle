# Publicación de versiones

Durante el desarrollo inicial utilizar `0.x.y`. Antes de `1.0.0`, definir qué API o comportamiento público se considera estable. A partir de ahí usar SemVer: MAJOR para incompatibilidades, MINOR para funciones compatibles y PATCH para correcciones compatibles.

1. Elegir un commit de `main` con controles correctos y revisión completada.
2. Revisar compatibilidad, configuración, migraciones y recuperación.
3. Actualizar CHANGELOG y crear una etiqueta `vX.Y.Z` y una GitHub Release.
4. Validar en el entorno de prueba; la publicación de código no implica despliegue automático.
5. Registrar versión desplegada, responsable y evidencia de comprobación.

No modificar etiquetas de versiones ya publicadas. Si falla un despliegue, recuperar el artefacto anterior cuando sea compatible; las migraciones de datos requieren un plan específico. Automatización de despliegue pendiente de definir el producto y su alojamiento.
