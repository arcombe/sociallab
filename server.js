const express = require('express');

const app = express();

// TODO - implement backend if wanted

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
