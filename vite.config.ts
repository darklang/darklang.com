import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: true, // ← allows access from external IPs (important for tunnels)
    allowedHosts: ['.ngrok-free.app'], // ← allow all ngrok subdomains
  }
})
