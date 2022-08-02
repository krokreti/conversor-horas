import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      sass: {
        additionalData: 
        `
        @import "/sass/styles.sass"
        @import "/sass/_variables.sass"
        @import "/sass/_mixins.sass"
        @import "/sass/layout/appHeader.sass"
        @import "/sass/layout/home.sass"
        @import "../node_modules/bootstrap/scss/bootstrap"
        `
      } 
    }
  }
})
