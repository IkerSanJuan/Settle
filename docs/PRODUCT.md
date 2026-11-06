# Settle — definición del producto

## Objetivo confirmado

Ayudar a newcomers a encontrar los productos que necesitan para instalarse. El primer público son estudiantes nuevos en UC Berkeley.

## Primera versión propuesta

Cuestionario breve sobre alojamiento, presupuesto y cosas que ya tienen; recomendaciones de esenciales; catálogo con enlaces a tiendas; lista personal para organizar compras. El prototipo existente sirve para validar este recorrido.

No se incluyen inicialmente pagos, logística, inventario en tiempo real ni cobertura de otras universidades. El equipo debe confirmar estos límites antes de comprometer entregas.

## Medición propuesta

Observar si un estudiante completa el cuestionario, encuentra productos adecuados y termina una lista útil. Medir tiempo de preparación y utilidad percibida en pruebas consentidas; acordar objetivos tras obtener una línea base. No hay analítica implementada.

## Reparto inicial propuesto

| Incremento | Responsable propuesto | Revisor | Criterio verificable |
| --- | --- | --- | --- |
| Cuestionario y perfil de llegada | Iker | Augustin | Se pueden revisar y corregir alojamiento, presupuesto y productos propios |
| Catálogo y calidad de datos | Augustin | Sandrine | Cada producto tiene categoría, fuente y precio explícitamente orientativo o verificado |
| Recomendaciones y presupuesto | Sandrine | JoJo | No recomienda productos ya disponibles y explica qué queda fuera del presupuesto |
| Lista personal y seguimiento | JoJo | Iker | Se pueden guardar, marcar y recuperar productos al recargar el navegador |

Son propuestas, no asignaciones aceptadas. Crear una issue por incremento al acordarlas. El prototipo concentra comportamiento en `app.js`: extraer módulos en una PR coordinada antes de que varias personas lo modifiquen simultáneamente.
