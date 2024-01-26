// import { query } from '../../../Backend/server';

// export default async function handler(req, res) {
//   if (req.method !== 'POST') {
//     return res.status(405).json({ message: 'Method Not Allowed' });
//   }

//   const { email } = req.body;

//   if (!email) {
//     return res.status(400).json({ success: false, message: 'Email is required in the request body' });
//   }

//   // Validate email format
//   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   if (!emailRegex.test(email)) {
//     return res.status(400).json({ success: false, message: 'Invalid email format' });
//   }

//   try {
//     const results = await query('SELECT * FROM sign_in WHERE email = ?', [email]);

//     if (results.length > 0) {
//       const user = results[0];
//       return res.status(200).json({ success: true, user });
//     } else {
//       return res.status(404).json({ success: false, message: 'User not found' });
//     }
//   } catch (error) {
//     console.error('Error fetching user data:', error);
//     return res.status(500).json({ success: false, message: 'Internal Server Error' });
//   }
// }
