import React ,{useState} from "react";
import store from "../../redux/store/store"
import ItemList from "../List/index";

const Container = () => {
  const [subject, setSubject] = useState("");
  const [ready, setReady] = useState(store.getState().itemsReady);
  const [complete, setComplete] = useState(store.getState().itemsDone);


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
        <ItemList items={ready} done={false} />
        <hr className="seprateLine" />
        <ItemList items={complete} done={true} />
      </div>
    </div>
  );
};
export default Container;
