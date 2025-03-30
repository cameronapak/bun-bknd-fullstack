import { type ServeFunctionOptions } from "bun";
// @ts-ignore somehow causes types:build issues on app
import { type BunBkndConfig, serve } from "bknd/adapter/bun";
import indexHtml from "./index.html";

// this is optional, if omitted, it uses an in-memory database
const config: ServeFunctionOptions<any, any> & BunBkndConfig = {
   adminOptions: {
      basepath: "/admin",
   },
   connection: {
      url: "file:data.db"
   },
   routes: {
      "/": indexHtml,
   },
};

serve(config);
