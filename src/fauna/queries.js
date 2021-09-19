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

const getSpaceships = async () => {
  var spaceships = await client.query(
    q.Map(
      q.Paginate(q.Documents(q.Collection("Spaceships"))),
      q.Lambda(
        "shipRef",
        q.Let(
          {
            shipDoc: q.Get(q.Var("shipRef")),
          },
          {
            spaceship: q.Var("shipDoc"),
            pilot: q.Let(
              {
                pilotRef: q.Select(["data", "pilot"], q.Var("shipDoc")),
              },
              {
                data: q.If(
                  q.Exists(q.Var("pilotRef")),
                  q.Select(["data", "name"], q.Get(q.Var("pilotRef"))),
                  "hiring pilots!"
                ),
              }
            ),
          }
        )
      )
    )
  );
  return spaceships;
};

const addSpaceship = async (name, pilot) => {
  const spaceship = await client.query(
    q.Let(
      {
        pilotRef: q.Select(
          ["ref"],
          q.Get(q.Match(q.Index("all_Pilots_by_name"), pilot))
        ),
      },
      q.Create(q.Collection("Spaceships"), {
        data: { name: name, pilot: q.Var("pilotRef") },
      })
    )
  );
  return spaceship;
};

const deleteSpaceship = async (ref) => {
  const spaceship = await client.query(
    q.Delete(q.Ref(q.Collection("Spaceships"), ref.value.id))
  );
  return spaceship;
};

export {
  getPilots,
  addPilot,
  deletePilot,
  getSpaceships,
  addSpaceship,
  deleteSpaceship,
};
