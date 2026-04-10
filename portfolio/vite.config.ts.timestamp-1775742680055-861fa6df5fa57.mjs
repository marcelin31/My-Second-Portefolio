// vite.config.ts
import { defineConfig } from "file:///C:/Users/HP/My_Second_Portefolio/portfolio/node_modules/.pnpm/vite@5.4.21_@types+node@20.19.39_lightningcss@1.32.0/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/HP/My_Second_Portefolio/portfolio/node_modules/.pnpm/@vitejs+plugin-react@4.7.0__f203754255674b07683680701dbc9caa/node_modules/@vitejs/plugin-react/dist/index.js";
import tailwindcss from "file:///C:/Users/HP/My_Second_Portefolio/portfolio/node_modules/.pnpm/@tailwindcss+vite@4.2.2_vit_b221619a26d2ca934956e4e81ee2d414/node_modules/@tailwindcss/vite/dist/index.mjs";
import path from "path";
import runtimeErrorOverlay from "file:///C:/Users/HP/My_Second_Portefolio/portfolio/node_modules/.pnpm/@replit+vite-plugin-runtime-error-modal@0.0.6/node_modules/@replit/vite-plugin-runtime-error-modal/dist/index.mjs";
var __vite_injected_original_dirname = "C:\\Users\\HP\\My_Second_Portefolio\\portfolio";
var rawPort = process.env.PORT || "5173";
var port = Number(rawPort);
if (Number.isNaN(port) || port <= 0) {
  throw new Error(`Invalid PORT value: "${rawPort}"`);
}
var basePath = process.env.BASE_PATH || "/";
var vite_config_default = defineConfig({
  base: basePath,
  plugins: [
    react(),
    tailwindcss(),
    runtimeErrorOverlay(),
    ...process.env.NODE_ENV !== "production" && process.env.REPL_ID !== void 0 ? [
      await import("file:///C:/Users/HP/My_Second_Portefolio/portfolio/node_modules/.pnpm/@replit+vite-plugin-cartographer@0.0.12/node_modules/@replit/vite-plugin-cartographer/dist/index.mjs").then(
        (m) => m.cartographer({
          root: path.resolve(__vite_injected_original_dirname, "..")
        })
      ),
      await import("file:///C:/Users/HP/My_Second_Portefolio/portfolio/node_modules/.pnpm/@replit+vite-plugin-dev-banner@0.1.2/node_modules/@replit/vite-plugin-dev-banner/dist/index.mjs").then(
        (m) => m.devBanner()
      )
    ] : []
  ],
  resolve: {
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "src"),
      "@assets": path.resolve(__vite_injected_original_dirname, "..", "..", "attached_assets")
    },
    dedupe: ["react", "react-dom"]
  },
  root: path.resolve(__vite_injected_original_dirname),
  build: {
    outDir: path.resolve(__vite_injected_original_dirname, "dist"),
    emptyOutDir: true
  },
  server: {
    port,
    host: "0.0.0.0",
    allowedHosts: true,
    fs: {
      strict: true,
      deny: ["**/.*"]
    }
  },
  preview: {
    port,
    host: "0.0.0.0",
    allowedHosts: true
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxIUFxcXFxNeV9TZWNvbmRfUG9ydGVmb2xpb1xcXFxwb3J0Zm9saW9cIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXEhQXFxcXE15X1NlY29uZF9Qb3J0ZWZvbGlvXFxcXHBvcnRmb2xpb1xcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvSFAvTXlfU2Vjb25kX1BvcnRlZm9saW8vcG9ydGZvbGlvL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcbmltcG9ydCByZWFjdCBmcm9tIFwiQHZpdGVqcy9wbHVnaW4tcmVhY3RcIjtcbmltcG9ydCB0YWlsd2luZGNzcyBmcm9tIFwiQHRhaWx3aW5kY3NzL3ZpdGVcIjtcbmltcG9ydCBwYXRoIGZyb20gXCJwYXRoXCI7XG5pbXBvcnQgcnVudGltZUVycm9yT3ZlcmxheSBmcm9tIFwiQHJlcGxpdC92aXRlLXBsdWdpbi1ydW50aW1lLWVycm9yLW1vZGFsXCI7XG5cbmNvbnN0IHJhd1BvcnQgPSBwcm9jZXNzLmVudi5QT1JUIHx8IFwiNTE3M1wiO1xuY29uc3QgcG9ydCA9IE51bWJlcihyYXdQb3J0KTtcblxuaWYgKE51bWJlci5pc05hTihwb3J0KSB8fCBwb3J0IDw9IDApIHtcbiAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIFBPUlQgdmFsdWU6IFwiJHtyYXdQb3J0fVwiYCk7XG59XG5cbmNvbnN0IGJhc2VQYXRoID0gcHJvY2Vzcy5lbnYuQkFTRV9QQVRIIHx8IFwiL1wiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBiYXNlOiBiYXNlUGF0aCxcbiAgcGx1Z2luczogW1xuICAgIHJlYWN0KCksXG4gICAgdGFpbHdpbmRjc3MoKSxcbiAgICBydW50aW1lRXJyb3JPdmVybGF5KCksXG4gICAgLi4uKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJlxuICAgIHByb2Nlc3MuZW52LlJFUExfSUQgIT09IHVuZGVmaW5lZFxuICAgICAgPyBbXG4gICAgICAgICAgYXdhaXQgaW1wb3J0KFwiQHJlcGxpdC92aXRlLXBsdWdpbi1jYXJ0b2dyYXBoZXJcIikudGhlbigobSkgPT5cbiAgICAgICAgICAgIG0uY2FydG9ncmFwaGVyKHtcbiAgICAgICAgICAgICAgcm9vdDogcGF0aC5yZXNvbHZlKGltcG9ydC5tZXRhLmRpcm5hbWUsIFwiLi5cIiksXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICApLFxuICAgICAgICAgIGF3YWl0IGltcG9ydChcIkByZXBsaXQvdml0ZS1wbHVnaW4tZGV2LWJhbm5lclwiKS50aGVuKChtKSA9PlxuICAgICAgICAgICAgbS5kZXZCYW5uZXIoKSxcbiAgICAgICAgICApLFxuICAgICAgICBdXG4gICAgICA6IFtdKSxcbiAgXSxcbiAgcmVzb2x2ZToge1xuICAgIGFsaWFzOiB7XG4gICAgICBcIkBcIjogcGF0aC5yZXNvbHZlKGltcG9ydC5tZXRhLmRpcm5hbWUsIFwic3JjXCIpLFxuICAgICAgXCJAYXNzZXRzXCI6IHBhdGgucmVzb2x2ZShpbXBvcnQubWV0YS5kaXJuYW1lLCBcIi4uXCIsIFwiLi5cIiwgXCJhdHRhY2hlZF9hc3NldHNcIiksXG4gICAgfSxcbiAgICBkZWR1cGU6IFtcInJlYWN0XCIsIFwicmVhY3QtZG9tXCJdLFxuICB9LFxuICByb290OiBwYXRoLnJlc29sdmUoaW1wb3J0Lm1ldGEuZGlybmFtZSksXG4gIGJ1aWxkOiB7XG4gICAgb3V0RGlyOiBwYXRoLnJlc29sdmUoaW1wb3J0Lm1ldGEuZGlybmFtZSwgXCJkaXN0XCIpLFxuICAgIGVtcHR5T3V0RGlyOiB0cnVlLFxuICB9LFxuICBzZXJ2ZXI6IHtcbiAgICBwb3J0LFxuICAgIGhvc3Q6IFwiMC4wLjAuMFwiLFxuICAgIGFsbG93ZWRIb3N0czogdHJ1ZSxcbiAgICBmczoge1xuICAgICAgc3RyaWN0OiB0cnVlLFxuICAgICAgZGVueTogW1wiKiovLipcIl0sXG4gICAgfSxcbiAgfSxcbiAgcHJldmlldzoge1xuICAgIHBvcnQsXG4gICAgaG9zdDogXCIwLjAuMC4wXCIsXG4gICAgYWxsb3dlZEhvc3RzOiB0cnVlLFxuICB9LFxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQTBULFNBQVMsb0JBQW9CO0FBQ3ZWLE9BQU8sV0FBVztBQUNsQixPQUFPLGlCQUFpQjtBQUN4QixPQUFPLFVBQVU7QUFDakIsT0FBTyx5QkFBeUI7QUFKaEMsSUFBTSxtQ0FBbUM7QUFNekMsSUFBTSxVQUFVLFFBQVEsSUFBSSxRQUFRO0FBQ3BDLElBQU0sT0FBTyxPQUFPLE9BQU87QUFFM0IsSUFBSSxPQUFPLE1BQU0sSUFBSSxLQUFLLFFBQVEsR0FBRztBQUNuQyxRQUFNLElBQUksTUFBTSx3QkFBd0IsT0FBTyxHQUFHO0FBQ3BEO0FBRUEsSUFBTSxXQUFXLFFBQVEsSUFBSSxhQUFhO0FBRTFDLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLE1BQU07QUFBQSxFQUNOLFNBQVM7QUFBQSxJQUNQLE1BQU07QUFBQSxJQUNOLFlBQVk7QUFBQSxJQUNaLG9CQUFvQjtBQUFBLElBQ3BCLEdBQUksUUFBUSxJQUFJLGFBQWEsZ0JBQzdCLFFBQVEsSUFBSSxZQUFZLFNBQ3BCO0FBQUEsTUFDRSxNQUFNLE9BQU8sNEtBQWtDLEVBQUU7QUFBQSxRQUFLLENBQUMsTUFDckQsRUFBRSxhQUFhO0FBQUEsVUFDYixNQUFNLEtBQUssUUFBUSxrQ0FBcUIsSUFBSTtBQUFBLFFBQzlDLENBQUM7QUFBQSxNQUNIO0FBQUEsTUFDQSxNQUFNLE9BQU8sdUtBQWdDLEVBQUU7QUFBQSxRQUFLLENBQUMsTUFDbkQsRUFBRSxVQUFVO0FBQUEsTUFDZDtBQUFBLElBQ0YsSUFDQSxDQUFDO0FBQUEsRUFDUDtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wsS0FBSyxLQUFLLFFBQVEsa0NBQXFCLEtBQUs7QUFBQSxNQUM1QyxXQUFXLEtBQUssUUFBUSxrQ0FBcUIsTUFBTSxNQUFNLGlCQUFpQjtBQUFBLElBQzVFO0FBQUEsSUFDQSxRQUFRLENBQUMsU0FBUyxXQUFXO0FBQUEsRUFDL0I7QUFBQSxFQUNBLE1BQU0sS0FBSyxRQUFRLGdDQUFtQjtBQUFBLEVBQ3RDLE9BQU87QUFBQSxJQUNMLFFBQVEsS0FBSyxRQUFRLGtDQUFxQixNQUFNO0FBQUEsSUFDaEQsYUFBYTtBQUFBLEVBQ2Y7QUFBQSxFQUNBLFFBQVE7QUFBQSxJQUNOO0FBQUEsSUFDQSxNQUFNO0FBQUEsSUFDTixjQUFjO0FBQUEsSUFDZCxJQUFJO0FBQUEsTUFDRixRQUFRO0FBQUEsTUFDUixNQUFNLENBQUMsT0FBTztBQUFBLElBQ2hCO0FBQUEsRUFDRjtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1A7QUFBQSxJQUNBLE1BQU07QUFBQSxJQUNOLGNBQWM7QUFBQSxFQUNoQjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
