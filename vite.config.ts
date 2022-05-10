import { defineConfig } from "vite";
import fs from "fs";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  if (mode !== "production") {
    return {
      plugins: [react()],
      server: {
        https: {
          key: fs.readFileSync("./localhost-key.pem"),
          cert: fs.readFileSync("./localhost.pem"),
        },
      },
      test: {
        environment: "jsdom",
      },
    };
  }
  return {
    plugins: [react()],
  };
});
