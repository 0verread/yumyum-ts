import { Hono } from 'hono';
import { drizzle } from 'drizzle-orm/neon-http';
import { reservations } from './db/schema';
import { neon } from '@neondatabase/serverless';


export type Env = {
  DB_URL: string;
};

const app = new Hono<{Bindings: Env}>();

type User = {
  id: string,
  name: string,
  email: string,
  mobile: string
}

type details = {
  date: Date,
  time: string,
  numSeats: number,
  special?: string
}

app.get('/', (c) => {
  return c.text('Welcome to yumyum API!')
})

app.get('/v1/reservations', async (c) => {
  const sql = neon(c.env.DB_URL);
  const db = drizzle(sql);
  const result = await db.select().from(reservations);
  return c.json({ result });
})

export default app;
