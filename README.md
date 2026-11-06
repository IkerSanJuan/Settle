# Settle

Base de colaboración para **Iker, Augustin, Sandrine y JoJo**.

Repositorio privado: https://github.com/IkerSanJuan/Settle .
Tablero privado: https://github.com/users/IkerSanJuan/projects/1 .

Settle ayuda a estudiantes recién llegados a UC Berkeley a identificar los productos que necesitan para instalarse.

Incluye el prototipo existente en HTML, CSS y JavaScript, conservado en `web/`, y las reglas de colaboración del equipo. Estado remoto y controles: ver [configuración](docs/GITHUB_SETUP.md).

## Ejecutar el prototipo

```sh
python3 -m http.server 4177 --bind 127.0.0.1 --directory web
```

Abrir http://127.0.0.1:4177 y utilizar la opción de demostración. La autenticación alojada depende de Sites y no funciona en el servidor local. No hay backend ni sincronización entre dispositivos. Precios y recomendaciones son orientativos; no hay inventario, compras ni precios en tiempo real. Ver [límites del prototipo](docs/PROTOTYPE.md).

## Empezar

1. Leer [cómo contribuir](CONTRIBUTING.md) y los [acuerdos del equipo](docs/TEAM.md).
2. Completar la [definición del producto](docs/PRODUCT.md) y el [arranque técnico](docs/ONBOARDING.md).
3. Activar la [configuración de GitHub](docs/GITHUB_SETUP.md).
4. Crear una issue por funcionalidad, asignar responsable y revisor, y abrir una rama desde `main`.
5. Abrir una pull request (PR), pasar las comprobaciones y obtener revisión antes de integrar.

## Documentación

| Archivo | Para qué sirve |
| --- | --- |
| [CONTRIBUTING.md](CONTRIBUTING.md) | Ramas, commits, revisión y conflictos |
| [Invitar al equipo](docs/INVITAR_EQUIPO.md) | Acceso e incorporación de los tres compañeros |
| [TEAM.md](docs/TEAM.md) | Coordinación entre los cuatro |
| [PRODUCT.md](docs/PRODUCT.md) | Objetivo, alcance y prioridades |
| [ONBOARDING.md](docs/ONBOARDING.md) | Incorporación y ejecución local |
| [ARCHITECTURE.md](docs/ARCHITECTURE.md) | Módulos y contratos compartidos |
| [QUALITY.md](docs/QUALITY.md) | Criterios de terminado y validación |
| [GITHUB_SETUP.md](docs/GITHUB_SETUP.md) | Configuración remota pendiente |
| [RELEASES.md](docs/RELEASES.md) | Versiones y recuperación |
| [SECURITY.md](SECURITY.md) | Secretos e incidencias de seguridad |
| [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md) | Convivencia |
| [decisions](docs/decisions/README.md) | Registro de decisiones |
| [features](docs/features/TEMPLATE.md) | Plantilla de funcionalidad |
| [STANDARDS.md](docs/STANDARDS.md) | Fuentes y prácticas adoptadas |

Las issues serán la fuente de verdad del trabajo; GitHub Projects mostrará su estado. Los Markdown conservarán acuerdos y decisiones duraderas. No duplicar un backlog en este README.

## Validación disponible

Con Python 3: `python3 scripts/check_docs.py`. Revisa archivos documentales requeridos y destinos de enlaces Markdown relativos; no prueba el producto ni verifica enlaces externos o anclas.

## Licencia

Pendiente de decidir por los titulares antes de distribuir el proyecto. No se ha asignado una licencia de código abierto.
