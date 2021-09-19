import client from "./client";

var faunadb = require("faunadb"),
  q = faunadb.query;

const getPilots = async () => {
  var pilots = await client.query(
    q.Map(
      q.Paginate(q.Documents(q.Collection("Pilots"))),
      q.Lambda((x) => q.Get(x))
    )
  );
  return pilots;
};

const getSpaceships = async () => {
  var spaceships = await client.query(
    q.Map(
      q.Paginate(q.Documents(q.Collection("Spaceships"))),
      q.Lambda((x) => q.Get(x))
    )
  );
  return spaceships;
};

const addPilot = async (name) => {
  const pilot = await client.query(
    q.Create(q.Collection("Pilots"), {
      data: {
        name: name,
      },
    })
  );
  return pilot;
};

const deletePilot = async (ref) => {
  const pilot = await client.query(
    q.Delete(q.Ref(q.Collection("Pilots"), ref.value.id))
  );
  return pilot;
};

export { getPilots, getSpaceships, addPilot, deletePilot };
