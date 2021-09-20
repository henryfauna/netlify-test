import { useState, useEffect } from "react";

import Loading from "./common/Loading";
import ListItem from "./common/ListItem";
import AddPilot from "./modals/AddPilot";
import ButtonPrimary from "./common/ButtonPrimary";

import { getPilots, deletePilot } from "../fauna/queries";

const Pilots = () => {
  const [addingPilot, setAddingPilot] = useState(false);
  const [pilots, setPilots] = useState();

  const _getPilots = async () => {
    const { data } = await getPilots();
    setPilots(data);
  };

  useEffect(() => {
    _getPilots();
  }, []);

  useEffect(() => {
    if (addingPilot === false) _getPilots();
  }, [addingPilot]);

  const PilotWrapper = () => {
    if (!pilots) {
      return <Loading />;
    } else if (pilots) {
      return (
        <div>
          {pilots.map((p, i) => {
            return (
              <ListItem
                key={i}
                text={p.data.name}
                onDelete={async () => {
                  await deletePilot(p.ref);
                  _getPilots();
                }}
              />
            );
          })}
        </div>
      );
    }
  };

  return (
    <div id="pilots" class="container p-4 flex flex-col">
      {addingPilot && (
        <AddPilot
          onClose={() => {
            setAddingPilot(false);
          }}
        />
      )}
      <div class="flex flex-row items-center justify-between mb-4">
        <div class="mr-2 font-bold text-2xl">Pilots</div>
        <ButtonPrimary
          text="Add Pilot"
          onClick={() => {
            setAddingPilot(true);
          }}
        />
      </div>
      <PilotWrapper />
    </div>
  );
};

export default Pilots;
