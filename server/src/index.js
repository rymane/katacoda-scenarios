const { listen } = require('./api');

// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 3030;

listen(PORT, () => console.log(`Server started on port ${PORT})`));
