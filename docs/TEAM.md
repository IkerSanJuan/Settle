# Acuerdos del equipo

Los cuatro pueden desarrollar funcionalidades completas. Los roles de coordinación son rotativos y no implican especialidades asignadas.

| Persona | Usuario GitHub | Funcionalidad actual | Revisor propuesto |
| --- | --- | --- | --- |
| Iker | IkerSanJuan (cuenta conectada; confirmar correspondencia) | Por definir | Augustin |
| Augustin | Pendiente | Por definir | Sandrine |
| Sandrine | Pendiente | Por definir | JoJo |
| JoJo | Pendiente | Por definir | Iker |

La rotación de revisión es una propuesta inicial: cambiarla según disponibilidad y conocimiento. Cada issue conserva las asignaciones actuales, evitando mantener esta tabla como segundo backlog.

## Coordinación

- Una tarea activa por persona como objetivo; máximo cuatro tareas en desarrollo. Resolver bloqueos y revisiones antes de empezar más trabajo.
- Registrar en la issue al final de la jornada el avance útil, siguiente paso y bloqueos. No se exige una reunión diaria.
- Revisión semanal breve: prioridades, demo integrada, bloqueos y una mejora del proceso.
- Elegir cada semana una persona que revise la salud de `main` y coordine la integración; no tiene que aprobar todas las PR.
- Decisiones que cambian contratos o arquitectura: registrar una decisión breve y revisarla antes de implementar dependencias.
- Si hay desacuerdo, comparar opciones con criterios de usuario, coste y riesgo; registrar la resolución y pedir una tercera opinión cuando haga falta.

## Tablero propuesto

Backlog → Ready → In progress → In review → Done.

Ready requiere objetivo claro, criterios verificables, dependencias identificadas y responsable. In review requiere PR lista. Done exige la definición de terminado de [QUALITY.md](QUALITY.md). Un bloqueo se marca con `blocked` y su dependencia, sin ocultar el estado actual.

Campos: responsable, prioridad (P0/P1/P2), tamaño (S/M/L), dependencia y área. Dividir las tareas L antes de desarrollarlas. P0 se reserva para incidentes críticos; P1 para el objetivo próximo; P2 para mejoras posteriores.
