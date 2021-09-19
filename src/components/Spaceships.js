import { useState, useEffect } from "react";

import Button from "./common/ButtonPrimary";
import Loading from "./common/Loading";
import ListItem from "./common/ListItem";

import { getSpaceships } from "../fauna/queries";

const Spaceships = () => {
  const [spaceships, setSpaceships] = useState();
  useEffect(() => {
    const asyncWrapper = async () => {
      const { data } = await getSpaceships();
      setSpaceships(data);
    };
    asyncWrapper();
  }, []);

  const SpaceshipWrapper = () => {
    if (!spaceships) {
      return <Loading />;
    } else if (spaceships) {
      return (
        <div>
          {spaceships.map((s, i) => {
            return <ListItem key={i} text={s.data.name} />;
          })}
        </div>
      );
    }
  };

  return (
    <div class="container p-4 flex flex-col">
      <div class="flex flex-row items-center justify-between mb-4">
        <div class="mr-2 font-bold text-2xl">Spaceships</div>
        <Button text="add spaceship" onClick={() => {}} />
      </div>
      <SpaceshipWrapper />
    </div>
  );
};

export default Spaceships;
