/*File: App.jsx located in RootFolder/src/      */
import { useState } from "react";

function App() {
  //initialize states for all input fields
  const [InputData, setInputData] = useState({
    txtField1: "",
    numField1: 0
  });
  //function to update values of states when user types
  const onChangeInputData = (event) => {
    setInputData({ ...InputData, [event.target.name]: event.target.value });
  };

  //When form is submitted
  const handleForm = (event)=>{
    event.preventDefault(); //avoid page loading when form is submitted
    console.log("button submitted")
    
    let txtField1_get = InputData.txtField1;
    console.log("txtField1 entered value: ",txtField1_get);

    let numField1_get = InputData.numField1;
    console.log("numField1 entered value: ",numField1_get);
  }
  
  return <div>
    <form onSubmit={handleForm}>
      <input type="text" name="txtField1" id="txtField1" value={InputData.txtField1} onChange={onChangeInputData} placeholder="Name here" />
      <br />
      <input type="number" name="numField1" id="numField1" value={InputData.numField1} onChange={onChangeInputData} placeholder="0" />
      <br />
      <button type="submit">Submit</button>
    </form>
  </div>
}
export default App;
