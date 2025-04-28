// const express = require('express');
// const cors = require('cors');
// const connectToDb = require('./db/db');
// const userRoutes = require('./routes/user.routes');
// const errorHandler = require('./middleware/errorHandler');
// const securityMiddleware = require('./middleware/security');
// const logger = require('./config/logger');
// const swaggerDocs = require('./docs/swagger');

// const app = express();

// // Connect to database
// connectToDb();

// // Security middleware
// securityMiddleware(app);

// // Middleware

// app.use(cors({
//   origin: "http://localhost:5173", // React dev server
//   methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
//   credentials: true,
// }));
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // Logger
// app.use((req, res, next) => {
//   logger.info(`${req.method} ${req.url}`);
//   next();
// });

// // Routes
// app.get('/', (req, res) => {
//   res.send('Connected to Database successfully.');
// });

// app.use("/api/users", userRoutes); 


// // API Documentation
// swaggerDocs(app);

// // Error handler (should be last middleware)
// app.use(errorHandler);


// module.exports = app;



const express = require('express');
const cors = require('cors');
const connectToDb = require('./db/db');
const userRoutes = require('./routes/user.routes');
const errorHandler = require('./middleware/errorHandler');
const securityMiddleware = require('./middleware/security');
const logger = require('./config/logger');
const swaggerDocs = require('./docs/swagger');

const app = express();

// Connect to database
connectToDb();

// Security middleware
securityMiddleware(app);

// Middleware
app.use(cors({
  origin: "http://localhost:5173", // React dev server
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Logger
app.use((req, res, next) => {
  logger.info(`${req.method} ${req.url}`);
  next();
});

// Routes
app.get('/', (req, res) => {
  res.send('Connected to Database successfully.');
});
app.use("/api/users", userRoutes);

// API Documentation
swaggerDocs(app);

// Error handler (should be last middleware)
app.use(errorHandler);

module.exports = app;
