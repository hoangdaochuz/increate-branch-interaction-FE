import ConfigGameForm from "./ConfigGameForm";
import Preview from "./Preview";

const ConfigGame = () => {
  return (
    <div className="flex items-start gap-x-4">
      <ConfigGameForm />
      <Preview />
    </div>
  );
};

export default ConfigGame;
