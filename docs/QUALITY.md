# Calidad y definición de terminado

## Una tarea está terminada cuando

- Cumple los criterios de aceptación de su issue.
- Contempla errores, estados vacíos y permisos aplicables.
- Incluye pruebas proporcionales al riesgo: regresión para bugs; integración para contratos; recorrido crítico cuando corresponda.
- Pasa formato, análisis, pruebas y compilación configurados para el producto.
- Tiene una aprobación independiente y conversaciones resueltas.
- Actualiza la documentación afectada y no añade secretos ni datos personales.
- Está integrada en `main`; la issue enlaza la evidencia. Publicada/desplegada es un estado adicional, no implícito.

Si hay interfaz, verificar teclado, etiquetas, contraste y tamaños de pantalla pertinentes. Si hay migraciones, probar actualización y recuperación con datos de prueba.

## Automatización actual

`Quality / docs`: comprueba documentos requeridos y destinos de enlaces relativos sencillos. No valida formato exhaustivo, anclas, URLs externas, seguridad ni comportamiento del producto.

Cuando se elija la tecnología, añadir controles de formato, análisis, pruebas y compilación. Activarlos como obligatorios en GitHub después de su primera ejecución correcta. No sustituir pruebas reales por un control documental verde.

`Quality / javascript` comprueba la sintaxis de los tres archivos JavaScript actuales con Node.js. No ejecuta recorridos del usuario.

## Fallos en main

Priorizar restablecer una versión funcional. Revertir mediante PR si es necesario; nunca ocultar el fallo desactivando controles. Registrar causa, impacto y acción preventiva proporcionada.
