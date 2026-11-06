# Configuración de GitHub

Destino previsto: repositorio privado `IkerSanJuan/Settle`.

## Estado de activación

Los archivos de esta carpeta no activan por sí solos las protecciones, invitaciones ni un tablero. Registrar aquí los ajustes efectivamente comprobados al publicar. CODEOWNERS está pendiente de usuarios; contiene solo comentarios.

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

Las protecciones de ramas y CODEOWNERS en repositorios privados dependen del plan: comprobar GitHub Pro para cuentas personales o Team para organizaciones. Si el plan no las permite, las reglas documentadas son acuerdos manuales, **no controles exigidos por GitHub**. No hacer público el proyecto ni contratar un plan sin decisión de Iker.

## GitHub Projects

Crear un Project privado, enlazar el repositorio y compartir su acceso por separado si hace falta. Columnas: Backlog, Ready, In progress, In review, Done. Añadir campos Priority, Size y Area; utilizar Assignees para responsables. Crear issues desde el reparto de PRODUCT después de acordarlo. No hay tablero creado por estos archivos.

## Seguridad

Activar alertas de Dependabot y las funciones de análisis de secretos disponibles en el plan. GitHub Actions tendrá permisos de lectura por defecto. No hay despliegue automático.

## Verificación de cierre

- [ ] Repositorio privado creado y archivos publicados.
- [ ] Workflow ejecutado correctamente en GitHub.
- [ ] Protecciones activas y probadas con PR de ejemplo.
- [ ] Tres invitaciones aceptadas y CODEOWNERS actualizado.
- [ ] Tablero creado y compartido.

No marcar pasos solo porque estén documentados.
