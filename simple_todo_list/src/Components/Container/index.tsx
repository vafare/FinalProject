import React, { useState, useCallback } from "react";
import store from "../../redux/store/store";
import { todoItem } from "../../types/types";
import ItemList from "../List/index";
import { addItem, completeItem, deleteItem } from "../../redux/actions";
import _ from "lodash";
import HeaderTitle from "../HeaderTitle";

const Container = () => {
  const [subject, setSubject] = useState("");
  const [ready, setReady] = useState(store.getState().itemsReady);
  const [complete, setComplete] = useState(store.getState().itemsDone);

  const deleteItemList = useCallback((item: todoItem) => {
    store.dispatch(deleteItem(item));
    setReady(store.getState().itemsReady);
  }, []);

  const addNewItem = () => {
    store.dispatch(
      addItem({
        title: subject,
        compeleted: false,
      })
    );
    setSubject("");
    setReady(store.getState().itemsReady);
  };

  const makeItemComplete = useCallback((item: todoItem) => {
    store.dispatch(completeItem(item));
    setComplete(store.getState().itemsDone);
    setReady(store.getState().itemsReady);
  }, []);

  const sorting = (done: boolean) => {
    if (done) {
      return _.sortBy(store.getState().itemsDone, function (item: todoItem) {
        return item.title.toLowerCase();
      });
    } else {
      return _.sortBy(store.getState().itemsReady, function (item: todoItem) {
        return item.title.toLowerCase();
      });
    }
  };
  const sortList = useCallback((done: boolean) => {
    if (done) {
      setComplete(sorting(done));
    } else {
      setReady(sorting(done));
    }
  }, []);

  return (
    <div className="rootContainer">
      <div className="topSection">
        <h1>ToDo List:</h1>
        <div className="addView">
          <input
            className="inputFields"
            placeholder="Title"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
          <button
            className="btn"
            onClick={() => {
              if (subject.length > 0) {
                addNewItem();
              }
            }}
          >
            {" "}
            +
          </button>
        </div>
      </div>
      <div className="parrentView">
        <HeaderTitle sorting={sortList} done={false} />
        <ItemList
          items={ready}
          deleteItems={deleteItemList}
          makeCompelete={makeItemComplete}
          done={false}
        />
        <hr className="seprateLine" />
        <HeaderTitle sorting={sortList} done={true} />
        <ItemList items={complete} done={true} />
      </div>
    </div>
  );
};
export default Container;
