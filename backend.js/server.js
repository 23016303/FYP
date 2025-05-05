// inventory-management-system

// Directory structure:
// - backend/
// - frontend/

// ------------------- BACKEND -------------------
// backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const inventoryRoutes = require('./routes/inventory');
const productionRoutes = require('./routes/production');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

app.use('/api/auth', authRoutes);
app.use('/api/inventory', inventoryRoutes);
app.use('/api/production', productionRoutes);

app.listen(5000, () => console.log('Server started on port 5000'));