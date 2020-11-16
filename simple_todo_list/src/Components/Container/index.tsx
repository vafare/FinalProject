import React ,{useState , useCallback} from "react";
import store from "../../redux/store/store"
import { todoItem } from "../../types/types";
import ItemList from "../List/index";
import {
  deleteItem,
} from "../../redux/actions";
const Container = () => {
  const [subject, setSubject] = useState("");
  const [ready, setReady] = useState(store.getState().itemsReady);
  const [complete, setComplete] = useState(store.getState().itemsDone);

  const deleteItemList = useCallback((item: todoItem) => {
    store.dispatch(deleteItem(item));
    setReady(store.getState().itemsReady);
  }, []);


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
        <ItemList items={ready} deleteItems={deleteItemList} done={false} />
        <hr className="seprateLine" />
        <ItemList items={complete} done={true} />
      </div>
    </div>
  );
};
export default Container;
