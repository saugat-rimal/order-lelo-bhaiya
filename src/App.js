import Order from "./components/order";
import mobile from "./images/pattern-background-mobile.svg";
import desktop from "./images/pattern-background-desktop.svg";

function App() {
  return (
    <div className="relative flex h-screen bg-[#E0E8FF] orderfont">
      <img
        src={mobile}
        alt=""
        className="absolute w-full object-cover sm:hidden"
      />
      <img
        src={desktop}
        alt=""
        className="absolute w-full hidden sm:block object-cover"
      />
      <Order />
    </div>
  );
}

export default App;
