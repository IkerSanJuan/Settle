# Configuración de GitHub

Repositorio público: https://github.com/IkerSanJuan/Settle .

## Estado de activación

Verificado el 6 de noviembre de 2026:

- Repositorio creado en IkerSanJuan y publicado por SSH en `main`; posteriormente convertido a público a petición de Iker.
- Workflow Quality correcto en GitHub: https://github.com/IkerSanJuan/Settle/actions/runs/42277636735 .
- Solo squash habilitado; título de PR como mensaje del commit; sugerencia de actualizar ramas y borrado automático tras integrar activados.
- La API de GitHub confirma `main` sin protección. Al ser público ya admite protecciones en GitHub Free, pero todavía hay que configurarlas. La revisión sigue siendo un acuerdo manual; añadir Markdown no activa controles remotos.
- Dependabot activo para Actions; ha generado una PR de actualización, pendiente de revisión.
- Invitaciones enviadas a @augustingoudier-sys y @Noella-cloud; pendientes en la última comprobación. Falta el usuario de JoJo. CODEOWNERS sigue sin reglas activas hasta verificar aceptación y permisos.
- Tablero privado creado, sin importación de tareas: https://github.com/users/IkerSanJuan/projects/1 . Repositorio predeterminado: IkerSanJuan/Settle. Augustin y Sandrine tienen Write en el tablero; falta JoJo.

## Ajustes del repositorio

- Rama predeterminada: `main`.
- Permitir Squash and merge; usar el título de PR para el commit integrado.
- Desactivar merge commits y rebase merge para mantener un único criterio de integración.
- Activar eliminación automática de ramas integradas.
- Activar Issues; usar las plantillas incluidas.
- Configurar invitaciones según [INVITAR_EQUIPO.md](INVITAR_EQUIPO.md).

## Proteger main

En Settings → Rules → Rulesets o Branches, crear una regla para `main`, con estado activo:

- Exigir pull request y al menos una aprobación independiente.
- Invalidar aprobaciones tras nuevos cambios y resolver conversaciones antes de integrar.
- Exigir `docs` y `javascript` tras su primera ejecución; seleccionar los nombres exactos que muestre GitHub Actions.
- Exigir rama actualizada con `main` antes de integrar.
- Bloquear force push y borrado de `main`.
- Aplicar a administradores cuando la opción esté disponible; no crear excepciones rutinarias.

Al completar CODEOWNERS, valorar exigir revisión de propietarios, con suplentes para no bloquear al equipo.

El repositorio es público y las protecciones están disponibles en GitHub Free. Activarlas cuando haya otra persona con acceso de escritura aceptado para poder revisar las PR. No confundir la configuración recomendada con una configuración ya activa.

## GitHub Projects

Tablero privado creado: https://github.com/users/IkerSanJuan/projects/1 . Compartir su acceso por separado desde Settings → Manage access. Columnas: Backlog, Ready, In progress, In review, Done. Añadir campos Priority, Size y Area; utilizar Assignees para responsables. Crear issues desde el reparto de PRODUCT después de acordarlo. El tablero está vacío por decisión de Iker, sin importación automática de tareas. Tiene campos Priority, Size y Estimate; Area queda como ampliación opcional.

## Seguridad

Activar alertas de Dependabot y las funciones de análisis de secretos disponibles en el plan. GitHub Actions tendrá permisos de lectura por defecto. No hay despliegue automático.

## Verificación de cierre

- [x] Repositorio público y archivos publicados.
- [x] Workflow ejecutado correctamente en GitHub.
- [ ] Protecciones activas y probadas con PR de ejemplo.
- [ ] Tres invitaciones aceptadas y CODEOWNERS actualizado.
- [x] Tablero privado creado.
- [ ] Acceso al tablero compartido con los tres compañeros.

No marcar pasos solo porque estén documentados.
