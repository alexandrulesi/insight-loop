const db = require('../db');

// getInsight function with dummy response.
const getInsight = async (req, res, next) => {
  const { description, source } = await db.getInsight();
  res.json({ description, source });
};

// Export all controller functions for use through app
module.exports = {
  getInsight,
};
