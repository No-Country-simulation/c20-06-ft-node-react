import app from "./app.js";
import { PORT } from "./src/config/envs.js";
import sequelize from "./db.js";

app.listen(PORT, () =>
  console.log(`Server running on port ${PORT}`, sequelize.sync({ alter: true }))
);
