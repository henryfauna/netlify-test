import { useState, useEffect } from "react";

import Loading from "./common/Loading";
import ListItem from "./common/ListItem";
import ButtonPrimary from "./common/ButtonPrimary";
import AddSpaceship from "./modals/AddSpaceship";

import { deleteSpaceship, getSpaceships } from "../fauna/queries";

const Spaceships = () => {
  const [spaceships, setSpaceships] = useState();
  const [addingSpaceship, setAddingSpaceship] = useState(false);

  const _getSpaceships = async () => {
    const { data } = await getSpaceships();
    setSpaceships(data);
  };

  useEffect(() => {
    _getSpaceships();
  }, []);

  useEffect(() => {
    if (addingSpaceship === false) _getSpaceships();
  }, [addingSpaceship]);

  const SpaceshipWrapper = () => {
    if (!spaceships) {
      return <Loading />;
    } else if (spaceships) {
      return (
        <div>
          {spaceships.map((s, i) => {
            return (
              <ListItem
                key={i}
                text={s.spaceship.data.name + " (" + s.pilot.data + ")"}
                onDelete={async () => {
                  await deleteSpaceship(s.spaceship.ref);
                  _getSpaceships();
                }}
              />
            );
          })}
        </div>
      );
    }
  };

  return (
    <div class="container p-4 flex flex-col">
      {addingSpaceship && (
        <AddSpaceship onClose={() => setAddingSpaceship(false)} />
      )}
      <div class="flex flex-row items-center justify-between mb-4">
        <div class="mr-2 font-bold text-2xl">Spaceships</div>
        <ButtonPrimary
          text="Add Spaceship"
          onClick={() => {
            setAddingSpaceship(true);
          }}
        />
      </div>
      <SpaceshipWrapper />
    </div>
  );
};

export default Spaceships;
