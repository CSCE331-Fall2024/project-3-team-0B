/**
 * API endpoint for managing orders in the database.
 * 
 * @param {NextApiRequest} req - The request object.
 * @param {NextApiResponse} res - The response object.
 * @returns {Promise<void>}
 */
import { NextApiRequest, NextApiResponse } from 'next';
import { Pool } from 'pg';

/**
 * PostgreSQL connection pool.
 */
const pool = new Pool({
  user: process.env.PSQL_USER,
  host: process.env.PSQL_HOST,
  database: process.env.PSQL_DATABASE,
  password: process.env.PSQL_PASSWORD,
  port: Number(process.env.PSQL_PORT),
  ssl: { rejectUnauthorized: false },
});

/**
 * API route handler for managing orders in the database.
 * 
 * @param req - The request object from Next.js API.
 * @param res - The response object from Next.js API.
 */
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { total, staffId, paymentId } = req.body;

    try {
      const result = await pool.query(
        `INSERT INTO orders (total, time, staff_id, payment_id) VALUES ($1, CURRENT_DATE, $2, $3) RETURNING order_id`,
        [total, staffId, paymentId]
      );

      const orderId = result.rows[0].order_id;
      res.status(201).json({ success: true, orderId });
    } catch (error) {
      console.error('Error inserting order:', error);
      res.status(500).json({ success: false, message: 'Failed to create order' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}