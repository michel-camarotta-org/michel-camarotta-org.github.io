# Mich Think AI

Official website for **Mich Think AI**, an emerging professional brand and public body of work focused on practical AI systems, solution architecture, agentic workflows, engineering governance, and digital transformation.

Website: [michel-camarotta-org.github.io](https://michel-camarotta-org.github.io)

## Local development

Prerequisites: a current Node.js LTS release and npm.

```bash
npm install
npm run dev
```

The development server prints the local URL. Useful verification commands:

```bash
npm run check
npm run format:check
npm run build
npm run preview
```

## Deployment

The site is a static Astro project deployed to GitHub Pages. A push to `main` triggers [the deployment workflow](.github/workflows/deploy.yml), which installs locked dependencies, checks the Astro project, builds it, uploads the static artifact, and deploys it through GitHub Pages.

The generated `dist/` directory is intentionally not committed.

## Project structure

```text
src/
  components/   Reusable interface components
  layouts/      Document shell and metadata
  pages/        Site routes
  styles/       Global design system and responsive styles
public/         Static metadata and brand assets
.github/        GitHub Actions deployment workflow
```

## Brand and privacy

Mich Think AI explores how organizations can design, adopt, and govern AI-assisted systems through strong architecture, reusable frameworks, human oversight, and disciplined engineering practices.

Private client engagements and non-public organizational initiatives are intentionally excluded from this repository. Public contributions are not currently open; this policy may evolve as public projects mature.

## License

The source code is available under the [MIT License](LICENSE). Brand assets and written content remain associated with Mich Think AI and Michel Camarotta.
