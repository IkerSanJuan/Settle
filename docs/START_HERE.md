# Empieza aquí — Settle

Guía de trabajo para Iker, Augustin, Sandrine y JoJo. Léela antes de tu primera tarea.

## Las seis reglas del equipo

1. **Una tarea, una persona responsable.** Antes de editar, crear o elegir una issue: qué se cambia, cómo se comprobará y quién lo revisará.
2. **Una rama por tarea.** `main` contiene la versión compartida; cada persona trabaja en su copia local y en su rama.
3. **Un objetivo por pull request (PR).** Una PR es una propuesta para integrar cambios. Separar arreglos, funcionalidades y reorganizaciones que no dependan entre sí.
4. **Avisar antes de tocar archivos compartidos.** En Settle, `app.js`, `index.html` y `style.css` concentran buena parte de los cambios. Una rama no evita que dos personas editen las mismas líneas.
5. **Comprobar y pedir una revisión.** Otra persona revisa el resultado; el autor corrige observaciones y usa Squash and merge cuando esté listo.
6. **Mantener el tablero actualizado.** Una tarea activa por persona y hasta cuatro en desarrollo. Si te bloqueas, registra la dependencia y avisa en la issue.

Estas son reglas del equipo. No asumir que GitHub impide incumplirlas: consultar el estado real de [las protecciones](GITHUB_SETUP.md).

## Primer día

- Aceptar la invitación de escritura al repositorio y comprobar el acceso al tablero privado. Son permisos distintos.
- Seguir [ONBOARDING.md](ONBOARDING.md) para descargar y abrir el prototipo en tu ordenador.
- Elegir una tarea pequeña, escribir su criterio de aceptación y acordar revisor.
- Completar el recorrido de demostración antes de editar para conocer el comportamiento inicial.
- Crear la rama, hacer el cambio y abrir una PR en borrador. Cuando esté comprobado, marcarla lista para revisar.

## Una jornada normal

| Momento | Acción |
| --- | --- |
| Antes de empezar | Revisar el tablero, actualizar `main` y comprobar dependencias |
| Mientras trabajas | Mantener un objetivo; comunicar cambios en archivos compartidos |
| Antes de pedir revisión | Actualizar la rama con `main`, ejecutar controles y probar el recorrido afectado |
| Al terminar | Registrar avance, siguiente paso y bloqueos en la issue |
| Después de integrar | Eliminar la rama integrada y cerrar la issue si cumple sus criterios |

Las instrucciones y comandos completos están en [CONTRIBUTING.md](../CONTRIBUTING.md).

## Cómo repartir el trabajo sin pisarnos

Ejemplo: Augustin cambia el catálogo en `web/data.js` mientras Sandrine mejora las recomendaciones. Ambos necesitan acordar primero los campos de producto, sus valores y los archivos que van a editar. Si coinciden en `data.js`, integrar primero el cambio de estructura y actualizar después la rama dependiente.

Antes de cuatro cambios simultáneos en `app.js`, elegir una persona para una extracción pequeña de módulos y revisarla juntos. Mientras tanto, repartir trabajo por archivos o secuenciar los cambios que se solapen. No es necesario cambiar de framework para empezar.

El reparto de [PRODUCT.md](PRODUCT.md) es una propuesta: confirmarlo en las issues antes de darlo por asignado.

## Dónde se guarda cada cosa

- Tareas, responsables y bloqueos: issues; el [tablero](https://github.com/users/IkerSanJuan/projects/1) muestra su estado.
- Cambios y evidencia de prueba: PR.
- Decisiones que afectan a varios módulos: [registro de decisiones](decisions/README.md).
- Contraseñas y datos reales de estudiantes: nunca en issues, código, capturas o documentos públicos.

## Si algo sale mal

Detener la integración si falla una comprobación. Resolver conflictos con quien conoce el archivo; no elegir todo un lado automáticamente. Si se rompe `main`, priorizar una corrección o una PR de reversión. Si se publica una clave, revocarla y seguir [SECURITY.md](../SECURITY.md).

Para una tarea sencilla basta la issue y la PR. La plantilla de funcionalidad y un registro de decisión solo hacen falta si aportan información útil.
