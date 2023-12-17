import CategoryConfig from "./CategoryConfig";
import Preview from "./Preview";

const ConfigGame = () => {
  return (
    <div className="flex items-start gap-x-4 mt-5">
      {/* <ConfigGameForm /> */}
      <CategoryConfig />
      <Preview />
    </div>
  );
};

export default ConfigGame;
