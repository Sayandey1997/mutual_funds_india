// api/funds.js
const axios = require('axios');

module.exports = async (req, res) => {
  try {
    const response = await axios.get('https://www.amfiindia.com/spages/NAVAll.txt');
    const rawData = response.data;
    const lines = rawData.split('\n');
    const funds = [];

    for (let i = 1; i < lines.length; i++) {
      const cols = lines[i].split(';');
      if (cols.length >= 6 && cols[0] && cols[3]) {
        funds.push({
          schemeCode: cols[0],
          schemeName: cols[3],
          nav: cols[4],
          date: cols[5]
        });
      }
    }

    res.status(200).json(funds);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data' });
  }
};
