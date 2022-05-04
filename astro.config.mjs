import { defineConfig } from 'astro/config';
import tailwindConfig from './tailwind.config';

// https://astro.build/config
export default defineConfig({});

devOptions: {
    tailwindConfig: './tailwind.config.js';
}