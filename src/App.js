import Board from "./component/Board";

function App() {
  return (
    <div className="h-screen flex flex-col p-4 App">
      <div className="grow bg-blue-200 p-4 rounded-md">
        <div className="mb-2 text-center">Tic Tac Toe</div>
        <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3">
          <Board/>
        </div>
      </div>
    </div>
  );
}

export default App;
