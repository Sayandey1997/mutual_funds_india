
// const express = require('express');
// const axios = require('axios');
// const cors = require('cors');
// const path = require('path');

// const app = express();
// app.use(cors());
// app.use(express.static(path.join(__dirname, '/')));

// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, 'index.html'));
// });

// app.get('/api/funds', async (req, res) => {
//   try {
//     const response = await axios.get('https://www.amfiindia.com/spages/NAVAll.txt');
//     const rawData = response.data;

//     // Parse text data to array of fund objects
//     const lines = rawData.split('\n');
//     const funds = [];

//     for (let i = 1; i < lines.length; i++) {
//       const cols = lines[i].split(';');
//       if (cols.length >= 6 && cols[0] && cols[3]) {
//         funds.push({
//           schemeCode: cols[0],
//           isinDivPayout: cols[1],
//           isinDivReinvestment: cols[2],
//           schemeName: cols[3],
//           nav: cols[4],
//           date: cols[5],
//         });
//       }
//     }

//     res.json(funds);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('Failed to fetch data from AMFI');
//   }
// });

// app.listen(3000, () => {
//   console.log('✅ Server running on http://localhost:3000');
// });
