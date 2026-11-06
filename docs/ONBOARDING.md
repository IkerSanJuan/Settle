# Incorporación

## Antes de empezar

1. Aceptar acceso al repositorio con la cuenta individual de GitHub y activar autenticación de dos factores.
2. Instalar Git y configurar nombre y correo de autor (puede ser el correo privado de GitHub).
3. Clonar el repositorio; no compartir una misma carpeta de trabajo entre personas.
4. Leer CONTRIBUTING, TEAM, SECURITY y la issue asignada.
5. Ejecutar `python3 scripts/check_docs.py` desde la raíz para comprobar esta base.

## Unirse al repositorio

1. Aceptar la invitación recibida en GitHub con la cuenta invitada.
2. En GitHub Desktop: File → Clone repository → elegir `IkerSanJuan/Settle`. Alternativa por terminal con SSH configurado:

```sh
git clone git@github.com:IkerSanJuan/Settle.git
cd Settle
python3 -m http.server 4177 --bind 127.0.0.1 --directory web
```

3. Abrir http://127.0.0.1:4177 y entrar en la demostración.
4. En GitHub Desktop, actualizar `main`, crear una rama para la issue, guardar cambios, publicar la rama y abrir una PR. Otra persona revisará antes de integrar.
5. No compartir llaves SSH. Cada colaborador configura la suya o utiliza la autenticación de GitHub Desktop.

## Tecnologías actuales

HTML, CSS y JavaScript sin compilación. Python 3 sirve los archivos localmente. Node.js 22 permite comprobar sintaxis con `node --check web/app.js`, `node --check web/data.js` y `node --check web/art.js`. No hay gestor de dependencias de aplicación ni backend. No hacen falta secretos para la demostración.

## Completar si evolucionan las tecnologías

El responsable de la primera integración documentará en una PR:

- Versiones del lenguaje, herramientas y gestor de dependencias.
- Comandos exactos de instalación, desarrollo, formato, análisis, pruebas y compilación.
- Variables requeridas en `.env.example`, solo con valores ficticios.
- Datos de prueba y servicios locales; nunca copiar datos personales de producción.
- URL local y pasos para verificar que el arranque funciona.

Una segunda persona debe seguir las instrucciones desde una copia limpia antes de dar el arranque por terminado. Mantener los comandos anteriores actualizados si cambia la arquitectura.
