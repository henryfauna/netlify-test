import client from "./client";

var faunadb = require("faunadb"),
  q = faunadb.query;

const getSpaceships = async () => {
  var spaceships = await client.query(
    q.Map(
      q.Paginate(q.Documents(q.Collection("Spaceships"))),
      q.Lambda((x) => q.Get(x))
    )
  );
  return spaceships;
};

export { getSpaceships };
