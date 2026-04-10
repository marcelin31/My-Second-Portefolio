// vite.config.ts
import { defineConfig } from "file:///C:/Users/HP/My_Second_Portefolio/portfolio/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/HP/My_Second_Portefolio/portfolio/node_modules/@vitejs/plugin-react/dist/index.js";
import tailwindcss from "file:///C:/Users/HP/My_Second_Portefolio/portfolio/node_modules/@tailwindcss/vite/dist/index.mjs";
import path from "path";
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
    tailwindcss()
  ],
  resolve: {
    alias: {
      "@": path.resolve(process.cwd(), "src")
    },
    dedupe: ["react", "react-dom"]
  },
  root: process.cwd(),
  build: {
    outDir: path.resolve(process.cwd(), "dist"),
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxIUFxcXFxNeV9TZWNvbmRfUG9ydGVmb2xpb1xcXFxwb3J0Zm9saW9cIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXEhQXFxcXE15X1NlY29uZF9Qb3J0ZWZvbGlvXFxcXHBvcnRmb2xpb1xcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvSFAvTXlfU2Vjb25kX1BvcnRlZm9saW8vcG9ydGZvbGlvL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcclxuaW1wb3J0IHJlYWN0IGZyb20gXCJAdml0ZWpzL3BsdWdpbi1yZWFjdFwiO1xyXG5pbXBvcnQgdGFpbHdpbmRjc3MgZnJvbSBcIkB0YWlsd2luZGNzcy92aXRlXCI7XHJcbmltcG9ydCBwYXRoIGZyb20gXCJwYXRoXCI7XHJcbmltcG9ydCB7IGZpbGVVUkxUb1BhdGggfSBmcm9tIFwidXJsXCI7XHJcblxyXG5jb25zdCByYXdQb3J0ID0gcHJvY2Vzcy5lbnYuUE9SVCB8fCBcIjUxNzNcIjtcclxuY29uc3QgcG9ydCA9IE51bWJlcihyYXdQb3J0KTtcclxuXHJcbmlmIChOdW1iZXIuaXNOYU4ocG9ydCkgfHwgcG9ydCA8PSAwKSB7XHJcbiAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIFBPUlQgdmFsdWU6IFwiJHtyYXdQb3J0fVwiYCk7XHJcbn1cclxuXHJcbmNvbnN0IGJhc2VQYXRoID0gcHJvY2Vzcy5lbnYuQkFTRV9QQVRIIHx8IFwiL1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcclxuICBiYXNlOiBiYXNlUGF0aCxcclxuICBwbHVnaW5zOiBbXHJcbiAgICByZWFjdCgpLFxyXG4gICAgdGFpbHdpbmRjc3MoKSxcclxuICBdLFxyXG4gIHJlc29sdmU6IHtcclxuICAgIGFsaWFzOiB7XHJcbiAgICAgIFwiQFwiOiBwYXRoLnJlc29sdmUocHJvY2Vzcy5jd2QoKSwgXCJzcmNcIiksXHJcbiAgICB9LFxyXG4gICAgZGVkdXBlOiBbXCJyZWFjdFwiLCBcInJlYWN0LWRvbVwiXSxcclxuICB9LFxyXG4gIHJvb3Q6IHByb2Nlc3MuY3dkKCksXHJcbiAgYnVpbGQ6IHtcclxuICAgIG91dERpcjogcGF0aC5yZXNvbHZlKHByb2Nlc3MuY3dkKCksIFwiZGlzdFwiKSxcclxuICAgIGVtcHR5T3V0RGlyOiB0cnVlLFxyXG4gIH0sXHJcbiAgc2VydmVyOiB7XHJcbiAgICBwb3J0LFxyXG4gICAgaG9zdDogXCIwLjAuMC4wXCIsXHJcbiAgICBhbGxvd2VkSG9zdHM6IHRydWUsXHJcbiAgICBmczoge1xyXG4gICAgICBzdHJpY3Q6IHRydWUsXHJcbiAgICAgIGRlbnk6IFtcIioqLy4qXCJdLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHByZXZpZXc6IHtcclxuICAgIHBvcnQsXHJcbiAgICBob3N0OiBcIjAuMC4wLjBcIixcclxuICAgIGFsbG93ZWRIb3N0czogdHJ1ZSxcclxuICB9LFxyXG59KTtcclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUEwVCxTQUFTLG9CQUFvQjtBQUN2VixPQUFPLFdBQVc7QUFDbEIsT0FBTyxpQkFBaUI7QUFDeEIsT0FBTyxVQUFVO0FBR2pCLElBQU0sVUFBVSxRQUFRLElBQUksUUFBUTtBQUNwQyxJQUFNLE9BQU8sT0FBTyxPQUFPO0FBRTNCLElBQUksT0FBTyxNQUFNLElBQUksS0FBSyxRQUFRLEdBQUc7QUFDbkMsUUFBTSxJQUFJLE1BQU0sd0JBQXdCLE9BQU8sR0FBRztBQUNwRDtBQUVBLElBQU0sV0FBVyxRQUFRLElBQUksYUFBYTtBQUUxQyxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixNQUFNO0FBQUEsRUFDTixTQUFTO0FBQUEsSUFDUCxNQUFNO0FBQUEsSUFDTixZQUFZO0FBQUEsRUFDZDtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wsS0FBSyxLQUFLLFFBQVEsUUFBUSxJQUFJLEdBQUcsS0FBSztBQUFBLElBQ3hDO0FBQUEsSUFDQSxRQUFRLENBQUMsU0FBUyxXQUFXO0FBQUEsRUFDL0I7QUFBQSxFQUNBLE1BQU0sUUFBUSxJQUFJO0FBQUEsRUFDbEIsT0FBTztBQUFBLElBQ0wsUUFBUSxLQUFLLFFBQVEsUUFBUSxJQUFJLEdBQUcsTUFBTTtBQUFBLElBQzFDLGFBQWE7QUFBQSxFQUNmO0FBQUEsRUFDQSxRQUFRO0FBQUEsSUFDTjtBQUFBLElBQ0EsTUFBTTtBQUFBLElBQ04sY0FBYztBQUFBLElBQ2QsSUFBSTtBQUFBLE1BQ0YsUUFBUTtBQUFBLE1BQ1IsTUFBTSxDQUFDLE9BQU87QUFBQSxJQUNoQjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQO0FBQUEsSUFDQSxNQUFNO0FBQUEsSUFDTixjQUFjO0FBQUEsRUFDaEI7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
