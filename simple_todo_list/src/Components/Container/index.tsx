import React, { useState, useCallback } from "react";
import store from "../../redux/store/store";
import { todoItem } from "../../types/types";
import ItemList from "../List/index";
import { addItem, completeItem, deleteItem } from "../../redux/actions";
import _ from "lodash";
import HeaderTitle from "../HeaderTitle";
import * as Globlas from "../Globals/index";

const Container = () => {
  const [subject, setSubject] = useState("");
  const [ready, setReady] = useState(store.getState().itemsReady);
  const [complete, setComplete] = useState(store.getState().itemsDone);
  const [todoSortType, setTodoSortType] = useState(Globlas.defaultSort);
  const [completeSortType, setCompleteSortType] = useState(Globlas.defaultSort);

  const deleteItemList = useCallback(
    (item: todoItem) => {
      store.dispatch(deleteItem(item));
      if (todoSortType !== Globlas.defaultSort) {
        setReady(sorting(false, todoSortType));
      } else {
        setReady(store.getState().itemsReady);
      }
    },
    [todoSortType]
  );

  const addNewItem = () => {
    store.dispatch(
      addItem({
        title: subject,
        compeleted: false,
      })
    );
    setSubject("");

    if (todoSortType !== Globlas.defaultSort) {
      setReady(sorting(false, todoSortType));
    } else {
      setReady(store.getState().itemsReady);
    }
  };

  const makeItemComplete = useCallback(
    (item: todoItem) => {
      store.dispatch(completeItem(item));

      if (todoSortType !== Globlas.defaultSort) {
        setReady(sorting(false, todoSortType));
      } else {
        setReady(store.getState().itemsReady);
        
      }

      if(completeSortType !== Globlas.defaultSort){
        setComplete(sorting(true, completeSortType));
      }else {
        setComplete(store.getState().itemsDone);
      }
    },
    [todoSortType, completeSortType]
  );

  const sorting = (done: boolean, sortType: string) => {
    if (done) {
      if (sortType === Globlas.zaSort) {
        return _.sortBy(store.getState().itemsDone, function (item: todoItem) {
          return item.title.toLowerCase();
        }).reverse();
      } else {
        return _.sortBy(store.getState().itemsDone, function (item: todoItem) {
          return item.title.toLowerCase();
        });
      }
    } else {
      if (sortType === Globlas.zaSort) {
        return _.sortBy(store.getState().itemsReady, function (item: todoItem) {
          return item.title.toLowerCase();
        }).reverse();
      } else {
        return _.sortBy(store.getState().itemsReady, function (item: todoItem) {
          return item.title.toLowerCase();
        });
      }
    }
  };
  const sortList = useCallback(
    (done: boolean) => {
      if (done) {
        switch (completeSortType) {
          case Globlas.azSort:
            setCompleteSortType(Globlas.zaSort);
            setComplete(sorting(done, Globlas.zaSort));
            break;
          case Globlas.zaSort:
            setCompleteSortType(Globlas.azSort);
            setComplete(sorting(done, Globlas.azSort));
            break;

          default:
            setCompleteSortType(Globlas.azSort);
            setComplete(sorting(done, Globlas.defaultSort));
            break;
        }
      } else {
        switch (todoSortType) {
          case Globlas.azSort:
            setTodoSortType(Globlas.zaSort);
            setReady(sorting(done, Globlas.zaSort));
            break;
          case Globlas.zaSort:
            setTodoSortType(Globlas.azSort);
            setReady(sorting(done, Globlas.azSort));
            break;

          default:
            setTodoSortType(Globlas.azSort);
            setReady(sorting(done, Globlas.defaultSort));
            break;
        }
      }
    },
    [todoSortType, completeSortType]
  );

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
        <HeaderTitle sorting={sortList} done={false} sortType={todoSortType} />
        <ItemList
          items={ready}
          deleteItems={deleteItemList}
          makeCompelete={makeItemComplete}
          done={false}
        />
        <hr className="seprateLine" />
        <HeaderTitle
          sorting={sortList}
          done={true}
          sortType={completeSortType}
        />
        <ItemList items={complete} done={true} />
      </div>
    </div>
  );
};
export default Container;
