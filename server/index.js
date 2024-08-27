import app from "./app.js";
// import { PORT } from "./src/config/envs.js";
import sequelize from "./db.js";

const PORT = 3000

app.listen(PORT,async  () => {
  const data = await sequelize.query('select now()')
  const time = (data[0][0].now)
  await sequelize.sync({ force: true });
  console.log(`Server running on port ${PORT}`, 'connected bbdd', time)

}
);
