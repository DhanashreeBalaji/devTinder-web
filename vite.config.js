import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
 define: {
  //  This define object helps load environment varaibles from .env file
  'process.env.SOME_ENV': `"${process.env.SOME_ENV}"`
}
});
