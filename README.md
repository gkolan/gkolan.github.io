# Gautam Kolan’s portfolio

A static portfolio for Salesforce frameworks, TypeScript developer tools, and web apps. Hosted on GitHub Pages with no build step or runtime GitHub API dependency.

## Preview locally

Run `python3 -m http.server 4173` from this directory, then open `http://localhost:4173`.

## Keep the showcase current

- **One project list:** each public project appears once as a `.project-row` in `index.html`, excluding this portfolio’s own repository. Keep a useful paragraph about the problem it solves and how it works, along with its technologies, availability, and website, demo, or source links.
- **Priority:** HTML order is display order, including within filters. Use this order: Record Health Check, Record Health Check Extensions, Prompt Context Builder, PickNext, Apex Log Insights, Quote Document Totals, Bulk Record Upload, and FocusGrid. Reorder rows when priorities change; do not duplicate projects in a separate featured section.
- **Filters:** use space-separated `data-categories` values from `salesforce`, `typescript`, and `web`; a project can belong to more than one. The filter count is calculated automatically. All projects remain visible without JavaScript.
- **Project metadata:** keep the `SoftwareSourceCode` entries in the JSON-LD block aligned with the directory. Update the page description when the portfolio’s focus changes.
- **Availability:** verify labels and product links against the repository’s README. Distinguish released packages, hosted apps, local demos, and work in development. A public repository does not necessarily have an open-source license.

The directory lists eight projects from the nine public repositories at [github.com/gkolan](https://github.com/gkolan?tab=repositories), checked on September 29, 2026. The portfolio itself is intentionally excluded. Add future projects here deliberately; nothing syncs automatically.

## Check changes

Run `node --check script.js` and `git diff --check`. Preview at desktop and mobile widths, check both themes and the category filters, and verify the destination of any new project link. Update the CSS or JavaScript version query in `index.html` when those assets change.
