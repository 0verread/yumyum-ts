import { Hono } from 'hono';

const app = new Hono()

type User = {
  id: string,
  name: string,
  email: string,
  mobile: string
}

type details = {
  numSeats: number,
  special?: string
}

type reservation = {
  id: number,
  user: User,
  reservedFor: Date, // which date is that reseravation for
  time: string,
  createdAt: Date,
  details: details, 
}

const reservations: reservation[] = [];

app.get('/', (c) => {
  return c.text('Welcome to yumyum API!')
})

app.get('/v1/reservations', (c) => {
  return c.json(reservations)
})

app.get('/v1/reservations/:id', (c) => {
  const { id } = c.req.param()
  const reseravation = reservations.filter(data => data.id === parseInt(id))
  return c.json(reseravation)
})

export default app;
