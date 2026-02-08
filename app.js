document.getElementById('designForm').addEventListener('submit', e => {
  e.preventDefault();
  const data = {
    title: document.getElementById('title').value,
    genre: document.getElementById('genre').value,
    mechanic: document.getElementById('mechanic').value,
    mda: document.getElementById('mda').value
  };
  const doc = `# ${data.title}\nGenre: ${data.genre}\n\n## Mechanics\n${data.mechanic}\n\n## MDA\n${data.mda}`;
  document.getElementById('output').textContent = doc;
});
