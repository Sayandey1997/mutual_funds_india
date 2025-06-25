

const searchInput = document.getElementById('searchInput');
const resultsDiv = document.getElementById('results');

searchInput.addEventListener('input', () => {
  const query = searchInput.value.toLowerCase();
  fetch('/api/funds')

    .then(res => res.json())
    .then(data => {
      const filtered = data.filter(fund =>
        fund.schemeName.toLowerCase().includes(query)
      );
      displayResults(filtered);
    });
});

function displayResults(funds) {
  resultsDiv.innerHTML = '';
  funds.forEach(fund => {
    const div = document.createElement('div');
    div.innerHTML = `<strong>${fund.schemeName}</strong> - NAV: ₹${fund.nav}`;
    resultsDiv.appendChild(div);
  });
}
