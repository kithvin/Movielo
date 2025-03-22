import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// Vite configuration file
export default defineConfig({
  // Registering Tailwind CSS and React plugins
  plugins: [tailwindcss(), react()],

  server: {
    port: 3000, // Setting the development server port to 3000
  },
});
