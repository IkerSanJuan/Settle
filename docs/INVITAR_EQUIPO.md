# Invitar a Augustin, Sandrine y JoJo

## Iker: enviar invitaciones

1. Abrir el repositorio `IkerSanJuan/Settle` en GitHub.
2. Ir a Settings → Collaborators (puede aparecer como Collaborators and teams).
3. Pulsar Add people y buscar el usuario de GitHub o correo de cada compañero. Confirmar que es la persona correcta.
4. Enviar una invitación individual a Augustin, Sandrine y JoJo. Mantener el repositorio privado. No compartir tu cuenta ni tu llave SSH.
5. Comprobar que los tres aceptan. Si una invitación caduca, reenviarla desde esa pantalla.

En un repositorio personal los colaboradores pueden escribir; la administración sigue en la cuenta propietaria. Para permisos más detallados y propiedad compartida, considerar después una organización.

## Cada compañero: incorporarse

Aceptar la invitación con la cuenta correcta y seguir [ONBOARDING.md](ONBOARDING.md). Si no aparece el repositorio, comprobar cuenta e invitación antes de pedir que se haga público.

## Después de aceptar

Actualizar los usuarios en [TEAM.md](TEAM.md) y activar `.github/CODEOWNERS` con los usuarios reales. Una regla global con los cuatro permite solicitar revisión al equipo; asignar después responsables por módulo si resulta útil. Verificar permisos de escritura y disponibilidad de CODEOWNERS según el plan.

Hacer una prueba: cada persona abre una PR pequeña desde su rama, otra revisa y el autor integra con squash. Comprobar también que GitHub rechaza cambios directos a `main` cuando las protecciones estén activas.
