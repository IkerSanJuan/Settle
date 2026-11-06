# Arquitectura y contratos

Base actual: HTML, CSS y JavaScript sin compilación en `web/`.

| Archivo | Función |
| --- | --- |
| `web/index.html` | Estructura de la página |
| `web/style.css` | Estilos |
| `web/data.js` | Catálogo y datos del prototipo |
| `web/art.js` | Ilustraciones |
| `web/app.js` | Estado, interacción y recomendaciones |
| `web/assets/` | Imagen, fuentes y licencias |

`app.js`, `index.html` y `style.css` son puntos de conflicto. Coordinar cualquier edición compartida en la issue. Antes de cuatro cambios simultáneos, acordar una extracción incremental de módulos por funcionalidad; esta tarea no ha refactorizado la aplicación.

Organizar el código por funcionalidades cuando encaje con el framework. Compartir componentes o utilidades solo cuando exista una necesidad real. Los módulos no deben depender de detalles internos de otros módulos.

## Contrato entre funcionalidades

Antes de trabajar en paralelo sobre partes conectadas, acordar:

- Productor y consumidores.
- Operación o evento y propósito.
- Entradas y salidas, con tipos y ejemplo.
- Validación, errores y permisos.
- Compatibilidad, versionado y estrategia de migración.
- Responsable del cambio y dependencias entre issues.

Guardar el contrato junto a su código o en un formato ejecutable propio de la tecnología. Enlazarlo desde la issue. Los cambios incompatibles requieren coordinación con consumidores y una decisión registrada.

## Archivos compartidos

Designar en cada issue quién cambia configuración global, dependencias, esquema de datos o componentes compartidos. Mantener esas PR pequeñas e integrarlas antes de las funcionalidades dependientes.

Registrar decisiones significativas con la [plantilla ADR](decisions/TEMPLATE.md).
