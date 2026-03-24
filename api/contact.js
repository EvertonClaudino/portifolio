// Vercel Serverless Function for generic POST -> DB
const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ message: 'Missing fields' });
  }

  try {
    const query = `
      INSERT INTO messages (name, email, subject, message)
      VALUES ($1, $2, $3, $4) RETURNING id
    `;
    const values = [name, email, subject, message];

    await pool.query(query, values);
    
    return res.status(200).json({ success: true, message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Database connection or query error:', error);
    return res.status(500).json({ success: false, message: 'Failed to save message', error: error.message });
  }
}
