# Ejemplo de una tarea lista para empezar

Ejemplo didáctico; no es una issue creada ni una funcionalidad comprometida.

## Título

`[Funcionalidad] Conservar los productos guardados al recargar`

## Problema y alcance

Un estudiante quiere recuperar su selección de productos después de cerrar y volver a abrir Settle en el mismo navegador. Revisar el comportamiento existente y corregirlo solo si no cumple los criterios.

## Responsable y coordinación

- Responsable: elegir una persona.
- Revisor: otra persona con acceso de escritura aceptado.
- Archivos previstos: `web/app.js` y, si hace falta, sus pruebas.
- Dependencias: acordar si cambia el formato guardado en el navegador.
- Fuera de alcance: cuentas, sincronización entre dispositivos y compras.

## Criterios de aceptación

- [ ] Un producto guardado sigue en la selección tras recargar en el mismo navegador y origen.
- [ ] Un producto eliminado no reaparece tras recargar.
- [ ] Un fallo de almacenamiento no se presenta como un guardado correcto.

## Cómo demostrarlo

Usar la demo con datos ficticios. Guardar un producto, recargar, comprobarlo, eliminarlo y recargar de nuevo. Registrar navegador, resultado y límites de la prueba en la PR. Si se corrige un bug, incluir una comprobación de regresión proporcional al cambio.

## Cómo usar este ejemplo

1. Crear una issue desde la plantilla correspondiente y sustituir el ejemplo por la necesidad real.
2. Añadirla manualmente al tablero privado, acordar responsable y revisor, y pasarla a Ready.
3. Usar su número real en la rama, por ejemplo `fix/NUMERO-guardados`.
4. En la PR, escribir `Closes #NUMERO` solo si el cambio resuelve toda la issue. Si es parcial, usar `Refs #NUMERO` y dejar pendientes explícitos.

No copiar los campos sin completarlos ni convertir el ejemplo en un segundo backlog.
