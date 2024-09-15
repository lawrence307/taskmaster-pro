"a simple Express server"
const express = require('express');
const connectDB = require('./config/db');
const app = express();

connectDB();

const taskRoutes = require('./routes/taskRoutes');
app.use('/api', taskRoutes);

app.use(express.json());
app.get('/', (req, res) => res.send('API Running'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

