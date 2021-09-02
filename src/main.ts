import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import express from "express";
import { createServer } from "http";

const app = express();
const server = createServer(app);

const { PORT, DATABASE_URL, DEV } = process.env;

if (!PORT) {
  console.error('PORT enviroment var must be provided')
  process.exit()
} else if (!DATABASE_URL) {
  console.error('DATABASE_URL enviroment var must be provided')
  process.exit()
}

app.use(morgan('dev'), cors(), helmet());


server.listen(PORT, async () => {
  try {
    // await connect(DATABASE_URL)
    // console.log('🪣 connected to database')
    console.log(`🚀 server started at \x1b[34m%s\x1b[0m`, `${DEV ? 'http://localhost:' : 'PORT '}${PORT}`)
  }
  catch (err) {
    console.log('❌ database connection error')
    console.log(err)
    process.exit()
  }
})
