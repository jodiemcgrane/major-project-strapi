module.exports = {
  settings: {
    cors: {
      enabled: true,
      //headers: "*",
      origin: [
        "http://localhost:8000",
        "http://localhost:1337",
        "https://internport-api.herokuapp.com",
      ],
    },
  },
};
