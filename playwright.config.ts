import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';
import path from 'path';

// Se elije ambiente dinámicamente
const ENV = process.env.TEST_ENV || "qa";

// Se carga el archivo enviroment
const envPath = path.resolve(__dirname, `env/${ENV}.env`);
dotenv.config({ path: envPath });

// Verifica que esté definida la base url
if (!process.env.BASE_URL) {
  throw new Error(`BASE_URL no definida en env/${ENV}.env`);
}

export default defineConfig({
  // Dónde están los tests
  testDir: './tests',

  /* Los tests puedan correr en paralelo */
  fullyParallel: true,

  /* Evita que se suba un test.only. */
  forbidOnly: !!process.env.CI,

  /* Reintentos en CI. */
  retries: process.env.CI ? 2 : 0,

  /* Cantidad de procesos paralelos. */
  workers: process.env.CI ? 1 : undefined,

  // Playwright usa por defecto
  timeout: 30_000,
  expect: {
    timeout: 5_000,
  },

  // Solo HTML
  // reporter: "html",

  // html y list (en terminal)
  reporter: [['html'], ['list']],

  use: {
    baseURL: process.env.BASE_URL, // Segun env definido 
    extraHTTPHeaders: {
      'x-api-key': process.env.REQRES_API_KEY || '',
    }, // Manda la API key en todas las requests, si existe
  },
});
