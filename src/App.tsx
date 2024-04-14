// import Message from "./message";
// import ListGroup from "./components/listGroup";
import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
function App() {
  //   const items = ["Mavoor", "Kozhikode", "Kochi", "Mukkam", 'Makkha'];
  //  const handleSelect = (items: string) => {
  //   console.log(items);

  // return <div><ListGroup items={items} heading="Cites" onSelect={handleSelect}/></div>
  // }
  const  [alertVisible, SetAlertViability] = useState(false)
  return (
    <div>
      { alertVisible && <Alert onClick={() => SetAlertViability(false)}>
        <p className=" fs-1  bg-warning p-2 rounded m-1 text-success">
          Hello Fahiz K <span className="text-danger fs-3">Karothingal</span>
        </p>
      </Alert>}
      <Button onclick={() => SetAlertViability(true)}>Click The Btn</Button>
      
    </div>
  );
}

export default App;
