# 🧪 Playwright API Demo

Proyecto de automatización de pruebas API desarrollado con **Playwright + TypeScript**.

El objetivo del proyecto es validar endpoints REST utilizando buenas prácticas de automatización, separación de datos, configuración por ambientes y ejecución mediante suites de Smoke y Regression.

---

## 🌐 API utilizada

Este proyecto utiliza la API pública:

https://jsonplaceholder.typicode.com

Endpoints automatizados:

- `GET /posts`
- `GET /posts/{id}`
- `POST /posts`
- `PUT /posts/{id}`
- `PATCH /posts/{id}`
- `DELETE /posts/{id}`

> Nota: JSONPlaceholder es una API fake para pruebas. Las operaciones POST, PUT, PATCH y DELETE responden correctamente, pero no persisten cambios reales.

---

## 🚀 Stack

- Playwright
- TypeScript
- Node.js
- Dotenv
- Cross-env
- GitHub Actions

---

## 📁 Estructura del proyecto

```bash
playwright-api-demo/
├── .github/workflows/
│   └── playwright.yml
├── env/
│   ├── .env.example
│   ├── qa.env
│   └── staging.env
├── fixtures/
│   └── posts.ts
├── tests/
│   └── posts/
│       ├── getPosts.spec.ts
│       ├── createPost.spec.ts
│       ├── updatePost.spec.ts
│       └── deletePost.spec.ts
├── utils/
├── playwright.config.ts
├── package.json
└── README.md