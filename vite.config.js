import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite"; // Importing Tailwind CSS plugin

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(), // Tailwind CSS plugin for styling
    react(),
  ],
  server: {
    port: 3000, // Set the development server port to 3000
  },
});
