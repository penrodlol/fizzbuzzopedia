<div align="center">
  <h1>Fizzbuzzopedia</h1>
  <strong>An encyclopedia of fizzbuzzes</strong>
  <br />
  <br />

  [![Netlify Status][netlify-image]][netlify-url]

</div>

## Developing Locally

- 1: Install Deps: `yarn`
- 2: Create File: `.env`

<br />

## Want to add a language?

You will need to create 2 files (:warning: alphabetic characters only):
- `/content/<LANGUAGE>.mdx`
- `/public/logos/<LANGUAGE>.svg`

Your `mdx` file should follow this format:
```mdx
---
name: <LANGUAGE>
logo: /logos/<LANGUAGE>.svg
released: <YYYY>
---

<FIZZBUZZ>

```

[netlify-image]: https://api.netlify.com/api/v1/badges/f5778169-3b6b-4b80-9374-738001260e6a/deploy-status
[netlify-url]: https://app.netlify.com/sites/bespoke-croquembouche-1063eb/deploys
