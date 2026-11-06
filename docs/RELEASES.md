# Releases

Use `0.x.y` during initial development. Before `1.0.0`, define which public API or behavior is considered stable. Then follow SemVer: MAJOR for incompatible changes, MINOR for compatible features, and PATCH for compatible bug fixes.

1. Choose a reviewed commit on `main` with passing checks.
2. Review compatibility, configuration, migrations, and recovery.
3. Update CHANGELOG and create a `vX.Y.Z` tag and a GitHub Release.
4. Validate in a test environment; publishing code does not imply automatic deployment.
5. Record the deployed version, owner, and validation evidence.

Do not modify published release tags. If a deployment fails, restore the previous artifact when compatible; data migrations require a specific plan. Deployment automation awaits product and hosting decisions.
