const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const venom = require('venom-bot');

venom
  .create()
  .then((client) => start(client))
  .catch((error) => {
    console.log(error);
  });

function start(client) {
  client.onMessage((message) => {
    const msg = message.body.toLowerCase();

    if (message.isGroupMsg === false) {
      if (msg === 'halo' || msg === 'hi') {
        client.sendText(message.from, 'Hai! Selamat datang di layanan otomatis kami. Ketik *menu* untuk info.');
      }

      if (msg === 'menu') {
        client.sendText(message.from, '📋 *Menu:*\n1. Cek saldo\n2. Tambah transaksi');
      }
    }
  });
}

app.get('/', (req, res) => {
  res.send('WhatsApp Bot is running!');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
