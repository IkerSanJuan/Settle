# Fuentes y criterios adoptados

Consulta: 6 de noviembre de 2026. Estas son especificaciones abiertas y prácticas reconocidas; no equivalen a una certificación ISO ni garantizan conformidad regulatoria.

| Referencia primaria | Aplicación en Settle |
| --- | --- |
| [Google Engineering Practices: cambios pequeños](https://google.github.io/eng-practices/review/developer/small-cls.html) | Un objetivo coherente por PR, fácil de revisar y revertir |
| [Buenas prácticas de Projects](https://docs.github.com/en/issues/planning-and-tracking-with-projects/learning-about-projects/best-practices-for-projects) | Issues pequeñas, dependencias explícitas y una sola fuente del estado |
| [GitHub Flow](https://docs.github.com/en/get-started/using-github/github-flow) | Rama corta por tarea, PR, revisión e integración |
| [Buenas prácticas de repositorios](https://docs.github.com/en/repositories/creating-and-managing-repositories/best-practices-for-repositories) | Documentación de entrada, colaboración y seguridad |
| [Protección de ramas](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches) | Configuración prevista de controles y revisión obligatoria |
| [CODEOWNERS](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-code-owners) | Plantilla pendiente de usuarios con permiso de escritura |
| [Conventional Commits 1.0.0](https://www.conventionalcommits.org/en/v1.0.0/) | Títulos de PR y commits integrados |
| [SemVer 2.0.0](https://semver.org/) | Política de versiones y compatibilidad |
| [Seguridad de Actions](https://docs.github.com/en/actions/reference/security/secure-use) | Permisos mínimos, acciones fijadas por commit, ausencia de secretos en PR |
| [GitHub Projects](https://docs.github.com/en/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects) | Tablero existente; añadir las issues manualmente |

Adaptaciones propias: una tarea activa por persona, rotación de revisores, respuesta orientativa en un día laborable y decisiones de arquitectura breves. Son acuerdos operativos propuestos para cuatro personas, no estándares universales.

La configuración remota realmente activada se registra en GITHUB_SETUP. Las comprobaciones de documentación y sintaxis no aseguran calidad funcional, accesibilidad o seguridad del producto.

## Lectura aplicada a esta guía

- GitHub Flow fundamenta el recorrido rama → propuesta de cambios → revisión → integración.
- Google recomienda cambios con un propósito comprensible; no se impone un número universal de líneas por PR.
- Projects recomienda concentrar el seguimiento del trabajo en un lugar y hacer visibles las dependencias.
- Conventional Commits define la estructura de los mensajes; nuestros nombres de ramas y límites de trabajo son elecciones del equipo.
- La documentación de ramas protegidas confirma que un repositorio público admite estas protecciones en GitHub Free. Su activación sigue pendiente en Settle.

La guía de inicio combina estas referencias con el código y el tamaño real del equipo. No se añade un proceso de certificación ni una metodología completa para cuatro personas.
