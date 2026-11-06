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

El prototipo actual usa HTML, CSS y JavaScript sin compilación. Añadir controles de formato y pruebas funcionales cuando se implemente el comportamiento correspondiente; añadir compilación solo si la tecnología lo requiere. Activarlos como obligatorios en GitHub después de su primera ejecución correcta. No sustituir pruebas reales por un control documental verde.

`Quality / javascript` comprueba la sintaxis de los tres archivos JavaScript actuales con Node.js. No ejecuta recorridos del usuario.

## Fallos en main

Priorizar restablecer una versión funcional. Revertir mediante PR si es necesario; nunca ocultar el fallo desactivando controles. Registrar causa, impacto y acción preventiva proporcionada.

## Comprobaciones básicas antes de una PR

Desde la raíz del repositorio:

```sh
python3 scripts/check_docs.py
node --check web/app.js
node --check web/data.js
node --check web/art.js
```

Si solo cambia documentación, basta el control documental. Si cambia el comportamiento, además de la sintaxis ejecutar las pruebas pertinentes y comprobar manualmente el recorrido afectado.

## Prueba manual breve del prototipo

Utilizar un perfil de prueba y datos ficticios. Registrar lo ejecutado, no marcar esta lista sin probarla.

| Recorrido | Qué comprobar |
| --- | --- |
| Entrada | La demo se abre sin depender del inicio de sesión alojado |
| Cuestionario | Alojamiento, presupuesto y productos propios se reflejan en la selección |
| Catálogo | Buscar y filtrar muestra resultados coherentes y un estado útil cuando no hay coincidencias |
| Guardados | Guardar, recargar, eliminar y recargar conserva el estado esperado en el mismo navegador |
| Interfaz modificada | Se puede usar con teclado y en pantalla estrecha; no aparecen errores nuevos en la consola |

En la PR anotar navegador, pasos, resultado esperado, resultado observado y lo que no se pudo verificar. Capturas solo cuando ayuden a revisar y siempre sin datos personales. Esta lista es una guía; no afirma que esos recorridos hayan sido probados en esta actualización documental.
