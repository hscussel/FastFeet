const express = require('express');
const path = require('path');
const adminRoutes = require('./routes/adminRoutes'); 
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, '../../../public')));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/admin', adminRoutes);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../../../FrontEnd/index.html'));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
