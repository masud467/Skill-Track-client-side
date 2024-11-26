import CollaboratorBox from "./CollaboratorBox";
import { collaborators } from "./CollaboratorData";

const Collaborators = () => {
  return (
    <div>
      <h1 className="text-center mb-5 font-bold uppercase">
        TRUSTED BY +20 BRANDS and million of student around the world.
      </h1>
      <div className="flex items-center justify-between overflow-x-auto">
        {collaborators.map((item) => (
          <CollaboratorBox
            key={item.label}
            label={item.label}
            icon={item.icon}
          ></CollaboratorBox>
        ))}
      </div>
    </div>
  );
};

export default Collaborators;
