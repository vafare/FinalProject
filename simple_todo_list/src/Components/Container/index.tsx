import React ,{useState} from "react";
import ItemList from "../List/index";

const Container = () => {
  const [subject, setSubject] = useState("");

  const readyItems = [
    {
      title: "Buy bread",
      compeleted: false,
    },
    {
      title: "Buy pepsi",
      compeleted: false,
    },
    {
      title: "Buy Vegtables",
      compeleted: false,
    },
    {
      title: "Buy Meat",
      compeleted: false,
    },
  ];

  const doneItems = [
    {
      title: "go to the office",
      compeleted: true,
    },
    {
      title: "Pay to friend",
      compeleted: true,
    },
  ];

  return (
    <div className="rootContainer">
      <div className="topSection">
        <h1>ToDo List:</h1>
        <div className="addView">
          <input
            className="inputFields"
            placeholder="Subject"
            onChange={(e) => setSubject(e.target.value)}
          />
          <button
            className="btn"
            
          >
            {" "}
            +
          </button>
        </div>
      </div>
      <div className="parrentView">
        <ItemList items={readyItems} done={false} />
        <hr className="seprateLine" />
        <ItemList items={doneItems} done={true} />
      </div>
    </div>
  );
};
export default Container;
