# Cómo contribuir

## Flujo diario

1. Elegir una issue en Ready, comprobar dependencias y asignar un responsable y un revisor distinto.
2. Actualizar `main` y crear una rama por tarea. Cada persona trabaja en su propia copia local.
3. Abrir pronto una PR en borrador y enlazar la issue. Mantener un cambio pequeño y coherente.
4. Actualizar la rama con `main`, ejecutar las comprobaciones y pedir revisión.
5. Corregir observaciones; integrar con **Squash and merge** cuando la revisión y los controles estén aprobados. Eliminar la rama remota integrada.

No trabajar directamente sobre `main`. No mantener ramas permanentes por persona ni una rama `develop` sin necesidad real.

## Comandos de ejemplo

Tras clonar el repositorio y entrar en su carpeta:

```sh
git switch main
git pull --ff-only origin main
git switch -c feat/12-descripcion
# Editar y revisar los cambios; sustituir ruta-del-archivo por un archivo real.
git add ruta-del-archivo
git commit -m "feat(modulo): describe el cambio"
git push -u origin HEAD
```

Ramas: `feat/12-descripcion`, `fix/24-descripcion`, `docs/31-descripcion`, `chore/40-descripcion`. Los agentes automáticos usarán `codex/12-descripcion`.

## Commits y títulos de PR

Usar Conventional Commits: `tipo(ambito): descripción`. El ámbito es opcional.
Tipos habituales: `feat`, `fix`, `docs`, `test`, `refactor`, `chore`, `ci`.
El título de PR se usará como mensaje del commit integrado. Ejemplo: `feat(perfil): permite editar el nombre`.
Un cambio incompatible se indica con `!` y se explica en el cuerpo con `BREAKING CHANGE:`.

## Evitar conflictos mientras trabajamos en paralelo

- Antes de programar, indicar módulos y archivos compartidos afectados en la issue.
- Acordar primero los contratos entre módulos: entradas, salidas, errores y ejemplos.
- Integrar cambios de contratos o configuración en una PR pequeña previa cuando otros dependan de ellos.
- Reservar un único responsable por cambio en dependencias, migraciones, configuración y archivos de bloqueo; avisar a los demás en la issue.
- Sincronizar con `main` al empezar y antes de pedir revisión. Si una tarea se alarga, dividirla en incrementos funcionales.
- Para funcionalidades dependientes, usar contratos acordados y simulaciones temporales claramente identificadas. Integrar primero la dependencia.

## Resolver un conflicto

Con el trabajo guardado en commits, desde la rama de la tarea:

```sh
git fetch origin
git merge origin/main
# Resolver cada archivo con la persona responsable; revisar el resultado.
git add ruta-resuelta
git commit
git push
```

Para cancelar una resolución que no se entiende: `git merge --abort`.
No aceptar automáticamente todo un lado del conflicto. Volver a ejecutar pruebas. Regenerar archivos de bloqueo con el gestor del proyecto. No reescribir una rama compartida ni usar force push.

## Revisión

Una aprobación de otra persona con acceso de escritura es el mínimo. El autor no aprueba su propia PR. Explicar los comentarios como bloqueo, sugerencia o pregunta. Revisar comportamiento, claridad, seguridad, pruebas y documentación. Para autenticación, datos o migraciones, solicitar además la revisión de quien conoce ese ámbito.

Objetivo del equipo: responder a revisiones en un día laborable, avisando de ausencias. Este plazo es un acuerdo propuesto, no una exigencia de GitHub.
