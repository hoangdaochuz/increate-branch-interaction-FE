import { Button } from "antd";

const GameItem = () => {
  return (
    <div className="rounded-lg border-1 border-slate-500 p-4 cursor-pointer hover:shadow-md hover:shadow-slate-600">
      <div>
        <a href="https://facebook.com" target="_blank">
          <img src="https://media.gq-magazine.co.uk/photos/645b5c3c8223a5c3801b8b26/16:9/w_1280,c_limit/100-best-games-hp-b.jpg" />
        </a>
      </div>
      <div>
        <h2>Ten game</h2>
        <p>Mo ta</p>
        <div>
          <Button>Button</Button>
          <Button>Button</Button>
          <Button>Button</Button>
          <Button>Button</Button>
        </div>
      </div>
    </div>
  );
};

export default GameItem;
