const api = require('./api');

const PORT = process.env.PORT || 3030;

api.listen(PORT, () => console.log(`Server started on port ${PORT})`));
