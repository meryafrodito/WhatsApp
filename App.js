import "../src/Styles/Style.css";
import Chat from "./Components/ChartCard";
const infos = [
  { name: "Rajae", message: "hey" },
  { name: "Meryam", message: "hello" },
  { name: "Fahd", message: "how are you" },
  { name: "Bouthaina", message: "hey" },
];
function App() {
  return (
    <>
      <div className="App">
        <div>
          <header>
            <div className="Head">
              <h1>WhatsApp</h1>
              <h1>...</h1>
            </div>
            <div className="Nav">
              <ul>
                <li>Chats</li>
                <li>Status</li>
                <li>Calls</li>
              </ul>
            </div>
          </header>
        </div>
        <div className="Card">
          {infos.map((info, key) => (
            <Chat name={info.name} message={info.message} key={key} />
          ))}
        </div>
      </div>
    </>
  );
}
export default App;
