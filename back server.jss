const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.static(path.join(__dirname, '../frontend')));
app.use(express.json());

// Example endpoint to receive contact form (optional)
app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;
  console.log(`Received contact from ${name} <${email}>: ${message}`);
  res.status(200).json({ message: 'Message received successfully!' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
