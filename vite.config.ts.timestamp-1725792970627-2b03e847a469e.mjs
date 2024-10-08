// vite.config.ts
import { fileURLToPath } from "node:url";
import { extname, relative, resolve } from "path";
import react from "file:///home/imjeevesh/fluidity/node_modules/@vitejs/plugin-react/dist/index.mjs";
import glob from "file:///home/imjeevesh/fluidity/node_modules/glob/glob.js";
import { defineConfig } from "file:///home/imjeevesh/fluidity/node_modules/vite/dist/node/index.js";
import dts from "file:///home/imjeevesh/fluidity/node_modules/vite-plugin-dts/dist/index.mjs";
import { libInjectCss } from "file:///home/imjeevesh/fluidity/node_modules/vite-plugin-lib-inject-css/dist/index.js";

// package.json
var peerDependencies = {
  "@bem-react/classname": ">=1.6.0",
  react: ">=18.2.0",
  "react-dom": ">=18.2.0"
};

// vite.config.ts
var __vite_injected_original_dirname = "/home/imjeevesh/fluidity";
var __vite_injected_original_import_meta_url = "file:///home/imjeevesh/fluidity/vite.config.ts";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    libInjectCss(),
    dts({ include: "lib/**/!(*d|*.stories|*.test).{ts,tsx}" })
  ],
  build: {
    copyPublicDir: false,
    lib: {
      entry: resolve(__vite_injected_original_dirname, "lib/main.ts"),
      formats: ["es"]
    },
    rollupOptions: {
      external: ["react/jsx-runtime"].concat(Object.keys(peerDependencies)),
      input: Object.fromEntries(
        glob.sync("lib/**/!(*d|*.stories|*.test).{ts,tsx}").map((file) => [
          // The name of the entry point
          // lib/nested/foo.ts becomes nested/foo
          relative("lib", file.slice(0, file.length - extname(file).length)),
          // The absolute path to the entry file
          // lib/nested/foo.ts becomes /project/lib/nested/foo.ts
          fileURLToPath(new URL(file, __vite_injected_original_import_meta_url))
        ])
      ),
      output: {
        assetFileNames: "assets/[name][extname]",
        entryFileNames: "[name].js"
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiLCAicGFja2FnZS5qc29uIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL2hvbWUvaW1qZWV2ZXNoL2ZsdWlkaXR5XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvaG9tZS9pbWplZXZlc2gvZmx1aWRpdHkvdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL2hvbWUvaW1qZWV2ZXNoL2ZsdWlkaXR5L3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZmlsZVVSTFRvUGF0aCB9IGZyb20gJ25vZGU6dXJsJztcbmltcG9ydCB7IGV4dG5hbWUsIHJlbGF0aXZlLCByZXNvbHZlIH0gZnJvbSAncGF0aCc7XG5pbXBvcnQgcmVhY3QgZnJvbSAnQHZpdGVqcy9wbHVnaW4tcmVhY3QnO1xuaW1wb3J0IGdsb2IgZnJvbSAnZ2xvYic7XG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcbmltcG9ydCBkdHMgZnJvbSAndml0ZS1wbHVnaW4tZHRzJztcbmltcG9ydCB7IGxpYkluamVjdENzcyB9IGZyb20gJ3ZpdGUtcGx1Z2luLWxpYi1pbmplY3QtY3NzJztcbmltcG9ydCB7IHBlZXJEZXBlbmRlbmNpZXMgfSBmcm9tICcuL3BhY2thZ2UuanNvbic7XG5cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBwbHVnaW5zOiBbXG4gICAgcmVhY3QoKSxcbiAgICBsaWJJbmplY3RDc3MoKSxcbiAgICBkdHMoeyBpbmNsdWRlOiAnbGliLyoqLyEoKmR8Ki5zdG9yaWVzfCoudGVzdCkue3RzLHRzeH0nIH0pLFxuICBdLFxuICBidWlsZDoge1xuICAgIGNvcHlQdWJsaWNEaXI6IGZhbHNlLFxuICAgIGxpYjoge1xuICAgICAgZW50cnk6IHJlc29sdmUoX19kaXJuYW1lLCAnbGliL21haW4udHMnKSxcbiAgICAgIGZvcm1hdHM6IFsnZXMnXSxcbiAgICB9LFxuICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgIGV4dGVybmFsOiBbJ3JlYWN0L2pzeC1ydW50aW1lJ10uY29uY2F0KE9iamVjdC5rZXlzKHBlZXJEZXBlbmRlbmNpZXMpKSxcbiAgICAgIGlucHV0OiBPYmplY3QuZnJvbUVudHJpZXMoXG4gICAgICAgIGdsb2Iuc3luYygnbGliLyoqLyEoKmR8Ki5zdG9yaWVzfCoudGVzdCkue3RzLHRzeH0nKS5tYXAoKGZpbGUpID0+IFtcbiAgICAgICAgICAvLyBUaGUgbmFtZSBvZiB0aGUgZW50cnkgcG9pbnRcbiAgICAgICAgICAvLyBsaWIvbmVzdGVkL2Zvby50cyBiZWNvbWVzIG5lc3RlZC9mb29cbiAgICAgICAgICByZWxhdGl2ZSgnbGliJywgZmlsZS5zbGljZSgwLCBmaWxlLmxlbmd0aCAtIGV4dG5hbWUoZmlsZSkubGVuZ3RoKSksXG4gICAgICAgICAgLy8gVGhlIGFic29sdXRlIHBhdGggdG8gdGhlIGVudHJ5IGZpbGVcbiAgICAgICAgICAvLyBsaWIvbmVzdGVkL2Zvby50cyBiZWNvbWVzIC9wcm9qZWN0L2xpYi9uZXN0ZWQvZm9vLnRzXG4gICAgICAgICAgZmlsZVVSTFRvUGF0aChuZXcgVVJMKGZpbGUsIGltcG9ydC5tZXRhLnVybCkpLFxuICAgICAgICBdKSxcbiAgICAgICksXG4gICAgICBvdXRwdXQ6IHtcbiAgICAgICAgYXNzZXRGaWxlTmFtZXM6ICdhc3NldHMvW25hbWVdW2V4dG5hbWVdJyxcbiAgICAgICAgZW50cnlGaWxlTmFtZXM6ICdbbmFtZV0uanMnLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxufSk7XG4iLCAie1xuICBcIm5hbWVcIjogXCJmbHVpZGl0eS1yZWFjdFwiLFxuICBcInZlcnNpb25cIjogXCIwLjAuMVwiLFxuICBcInByaXZhdGVcIjogZmFsc2UsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJmbHVpZGl0eSAtIGEgcmVhY3QgY29tcG9uZW50cyBsaWJyYXJ5XCIsXG4gIFwia2V5d29yZHNcIjogW1xuICAgIFwiZmx1aWRpdHlcIixcbiAgICBcInJlYWN0XCIsXG4gICAgXCJjb21wb25lbnRzXCIsXG4gICAgXCJsaWJyYXJ5XCJcbiAgXSxcbiAgXCJ0eXBlXCI6IFwibW9kdWxlXCIsXG4gIFwibWFpblwiOiBcImRpc3QvbWFpbi5qc1wiLFxuICBcInR5cGVzXCI6IFwiZGlzdC9tYWluLmQudHNcIixcbiAgXCJmaWxlc1wiOiBbXG4gICAgXCJkaXN0XCJcbiAgXSxcbiAgXCJzaWRlRWZmZWN0c1wiOiBbXG4gICAgXCIqKi8qLnM/Y3NzXCJcbiAgXSxcbiAgXCJkaXJlY3Rvcmllc1wiOiB7XG4gICAgXCJsaWJcIjogXCJsaWJcIlxuICB9LFxuICBcInNjcmlwdHNcIjoge1xuICAgIFwidGVzdFwiOiBcImJ1biB0ZXN0XCIsXG4gICAgXCJjaGVja1wiOiBcImJpb21lIGNoZWNrIC4vbGliIC0td3JpdGVcIixcbiAgICBcInNiXCI6IFwic3Rvcnlib29rIGRldiAtcCA2MDA2XCIsXG4gICAgXCJwcmVwdWJsaXNoT25seVwiOiBcImJ1biBydW4gYnVpbGRcIixcbiAgICBcImJ1aWxkXCI6IFwidHNjIC0tcCAuL3RzY29uZmlnLmxpYi5qc29uICYmIHZpdGUgYnVpbGRcIixcbiAgICBcImJ1aWxkLWRvY3NcIjogXCJzdG9yeWJvb2sgYnVpbGQgLW8gZG9jc1wiXG4gIH0sXG4gIFwicmVwb3NpdG9yeVwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiZ2l0XCIsXG4gICAgXCJ1cmxcIjogXCJnaXQraHR0cHM6Ly9naXRodWIuY29tL0ltSmVldmVzaC9mbHVpZGl0eS5naXRcIlxuICB9LFxuICBcImVuZ2luZXNcIjoge1xuICAgIFwiYnVuXCI6IFwiPj0xLjEuMTBcIixcbiAgICBcInlhcm5cIjogXCJ1c2VfYnVuX2luc3RlYWRcIlxuICB9LFxuICBcImF1dGhvclwiOiBcIkplZXZlc2hcIixcbiAgXCJsaWNlbnNlXCI6IFwiTUlUXCIsXG4gIFwiYnVnc1wiOiB7XG4gICAgXCJ1cmxcIjogXCJodHRwczovL2dpdGh1Yi5jb20vSW1KZWV2ZXNoL2ZsdWlkaXR5L2lzc3Vlc1wiXG4gIH0sXG4gIFwiaG9tZXBhZ2VcIjogXCJodHRwczovL2dpdGh1Yi5jb20vSW1KZWV2ZXNoL2ZsdWlkaXR5I3JlYWRtZVwiLFxuICBcInBlZXJEZXBlbmRlbmNpZXNcIjoge1xuICAgIFwiQGJlbS1yZWFjdC9jbGFzc25hbWVcIjogXCI+PTEuNi4wXCIsXG4gICAgXCJyZWFjdFwiOiBcIj49MTguMi4wXCIsXG4gICAgXCJyZWFjdC1kb21cIjogXCI+PTE4LjIuMFwiXG4gIH0sXG4gIFwiZGV2RGVwZW5kZW5jaWVzXCI6IHtcbiAgICBcIkBiaW9tZWpzL2Jpb21lXCI6IFwiXjEuOC4zXCIsXG4gICAgXCJAY2hyb21hdGljLWNvbS9zdG9yeWJvb2tcIjogXCJeMS45LjBcIixcbiAgICBcIkBoYXBweS1kb20vZ2xvYmFsLXJlZ2lzdHJhdG9yXCI6IFwiXjE1LjcuM1wiLFxuICAgIFwiQHN0b3J5Ym9vay9hZGRvbi1lc3NlbnRpYWxzXCI6IFwiXjguMi45XCIsXG4gICAgXCJAc3Rvcnlib29rL2FkZG9uLWludGVyYWN0aW9uc1wiOiBcIl44LjIuOVwiLFxuICAgIFwiQHN0b3J5Ym9vay9hZGRvbi1saW5rc1wiOiBcIl44LjIuOVwiLFxuICAgIFwiQHN0b3J5Ym9vay9hZGRvbi1vbmJvYXJkaW5nXCI6IFwiXjguMi45XCIsXG4gICAgXCJAc3Rvcnlib29rL2Jsb2Nrc1wiOiBcIl44LjIuOVwiLFxuICAgIFwiQHN0b3J5Ym9vay9yZWFjdFwiOiBcIl44LjIuOVwiLFxuICAgIFwiQHN0b3J5Ym9vay9yZWFjdC12aXRlXCI6IFwiXjguMi45XCIsXG4gICAgXCJAc3Rvcnlib29rL3Rlc3RcIjogXCJeOC4yLjlcIixcbiAgICBcIkB0ZXN0aW5nLWxpYnJhcnkvamVzdC1kb21cIjogXCJeNi41LjBcIixcbiAgICBcIkB0ZXN0aW5nLWxpYnJhcnkvcmVhY3RcIjogXCJeMTYuMC4xXCIsXG4gICAgXCJAdHlwZXMvYnVuXCI6IFwiXjEuMS44XCIsXG4gICAgXCJAdHlwZXMvcmVhY3RcIjogXCJeMTguMy41XCIsXG4gICAgXCJAdHlwZXMvcmVhY3QtZG9tXCI6IFwiXjE4LjMuMFwiLFxuICAgIFwiQHZpdGVqcy9wbHVnaW4tcmVhY3RcIjogXCJeNC4zLjFcIixcbiAgICBcInJlYWN0LXRlc3QtcmVuZGVyZXJcIjogXCJeMTguMy4xXCIsXG4gICAgXCJzYXNzXCI6IFwiXjEuNzguMFwiLFxuICAgIFwic3Rvcnlib29rXCI6IFwiXjguMi45XCIsXG4gICAgXCJ0eXBlc2NyaXB0XCI6IFwiXjUuNC41XCIsXG4gICAgXCJ2aXRlXCI6IFwiXjUuNC4zXCIsXG4gICAgXCJ2aXRlLXBsdWdpbi1kdHNcIjogXCJeNC4xLjFcIixcbiAgICBcInZpdGUtcGx1Z2luLWxpYi1pbmplY3QtY3NzXCI6IFwiXjIuMS4xXCJcbiAgfSxcbiAgXCJ0cnVzdGVkRGVwZW5kZW5jaWVzXCI6IFtcbiAgICBcIkBiaW9tZWpzL2Jpb21lXCJcbiAgXVxufVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUEwUCxTQUFTLHFCQUFxQjtBQUN4UixTQUFTLFNBQVMsVUFBVSxlQUFlO0FBQzNDLE9BQU8sV0FBVztBQUNsQixPQUFPLFVBQVU7QUFDakIsU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxTQUFTO0FBQ2hCLFNBQVMsb0JBQW9COzs7QUN1QzNCLHVCQUFvQjtBQUFBLEVBQ2xCLHdCQUF3QjtBQUFBLEVBQ3hCLE9BQVM7QUFBQSxFQUNULGFBQWE7QUFDZjs7O0FEakRGLElBQU0sbUNBQW1DO0FBQStHLElBQU0sMkNBQTJDO0FBVXpNLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVM7QUFBQSxJQUNQLE1BQU07QUFBQSxJQUNOLGFBQWE7QUFBQSxJQUNiLElBQUksRUFBRSxTQUFTLHlDQUF5QyxDQUFDO0FBQUEsRUFDM0Q7QUFBQSxFQUNBLE9BQU87QUFBQSxJQUNMLGVBQWU7QUFBQSxJQUNmLEtBQUs7QUFBQSxNQUNILE9BQU8sUUFBUSxrQ0FBVyxhQUFhO0FBQUEsTUFDdkMsU0FBUyxDQUFDLElBQUk7QUFBQSxJQUNoQjtBQUFBLElBQ0EsZUFBZTtBQUFBLE1BQ2IsVUFBVSxDQUFDLG1CQUFtQixFQUFFLE9BQU8sT0FBTyxLQUFLLGdCQUFnQixDQUFDO0FBQUEsTUFDcEUsT0FBTyxPQUFPO0FBQUEsUUFDWixLQUFLLEtBQUssd0NBQXdDLEVBQUUsSUFBSSxDQUFDLFNBQVM7QUFBQTtBQUFBO0FBQUEsVUFHaEUsU0FBUyxPQUFPLEtBQUssTUFBTSxHQUFHLEtBQUssU0FBUyxRQUFRLElBQUksRUFBRSxNQUFNLENBQUM7QUFBQTtBQUFBO0FBQUEsVUFHakUsY0FBYyxJQUFJLElBQUksTUFBTSx3Q0FBZSxDQUFDO0FBQUEsUUFDOUMsQ0FBQztBQUFBLE1BQ0g7QUFBQSxNQUNBLFFBQVE7QUFBQSxRQUNOLGdCQUFnQjtBQUFBLFFBQ2hCLGdCQUFnQjtBQUFBLE1BQ2xCO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
