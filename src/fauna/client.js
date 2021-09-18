var faunadb = require("faunadb");

var client = new faunadb.Client({
  secret: process.env.REACT_APP_FAUNA_SECRET,
  domain: "db.fauna.com",
  port: 443,
  scheme: "https",
});

export default client;
