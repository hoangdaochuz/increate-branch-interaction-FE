import GameItem from "./components/GameItem";

const ListGameCampain = () => {
  return (
    <div className="grid grid-cols-3 gap-3">
      {Array(6)
        .fill(null)
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        .map((_item) => (
          <GameItem />
        ))}
    </div>
  );
};

export default ListGameCampain;
