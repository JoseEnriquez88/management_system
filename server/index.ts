import "dotenv/config";
import server from "./src/app.js";
import { sequelize } from "./src/db.js";

const PORT = process.env.PORT || 3001;

sequelize
  .sync({ force: true })
  .then(() => {
    server.listen(Number(PORT), () => {
      console.log(`Port listening at ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("DB init error:", err);
    process.exit(1);
  });
