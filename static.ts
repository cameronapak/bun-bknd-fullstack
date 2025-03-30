// @ts-ignore somehow causes types:build issues on app
import { type BunBkndConfig, serve } from "bknd/adapter/bun";

// Actually, all it takes is the following line:
// serve();

// this is optional, if omitted, it uses an in-memory database
const config: BunBkndConfig = {
   adminOptions: {
      assets_path: "https://cdn.bknd.io/0.9.0-rc.1/",
   },
   connection: {
      url: "file:data.db",
   },
};

serve(config);
