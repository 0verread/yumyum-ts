import { pgTable, text, timestamp } from 'drizzle-orm/pg-core';

export const products = pgTable('reservations', {
  id: text('id').primaryKey().notNull(),
  createdAt: timestamp('created_at').notNull().defaultNow(),
});

