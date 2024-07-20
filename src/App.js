import Board from "./component/Board";

function App() {
  return (
    <div className="h-screen flex flex-col p-4 App">
      <div className="grow bg-black p-4 rounded-md">
        <div className="mb-2 lg:mb-4 text-center text-white text-lg">Tic Tac Toe</div>
        <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3">
          <div className="hidden lg:block"></div>
          <div className=""><Board/></div>
        </div>
      </div>
    </div>
  );
}

export default App;
