const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const compression = require("compression");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");

const authRoutes = require("./routes/auth.routes");
const userRoutes = require("./routes/user.routes");
const courseRoutes = require("./routes/course.routes");
const enrollmentRoutes = require("./routes/enrollment.routes");
const dashboardRoutes = require("./routes/dashboard.routes");
const errorMiddleware = require("./middlewares/error.middleware");

const app = express();

/**
 * Security Middleware
 */
app.use(helmet());

/**
 * CORS
 */
app.use(cors());

/**
 * Body Parser
 */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/**
 * Cookie Parser
 */
app.use(cookieParser());

/**
 * Compression
 */
app.use(compression());

/**
 * Logger
 */
app.use(morgan("dev"));

/**
 * Health Check Route
 */
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Training Management API Running"
  });
});

/**
 * API Routes
 */
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/courses", courseRoutes);
app.use("/api/enrollments", enrollmentRoutes);
app.use("/api/dashboard", dashboardRoutes);
/**
 * 404 Route
 */
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route Not Found"
  });
});

/**
 * Global Error Handler
 */
app.use(errorMiddleware);

module.exports = app;