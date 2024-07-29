function takeMedication() {
  const status = document.getElementById('status');
  const history = document.getElementById('history');

  const now = new Date();
  const dateString = now.toLocaleDateString();
  const timeString = now.toLocaleTimeString();

  status.textContent = `最後に薬を飲んだ時間: ${dateString} ${timeString}`;
  
  const historyItem = document.createElement('div');
  historyItem.className = 'history-item';
  historyItem.textContent = `薬を飲んだ時間: ${dateString} ${timeString}`;
  history.appendChild(historyItem);
}
