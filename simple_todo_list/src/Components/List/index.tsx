import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { todoItem } from "../../types/types";

const ItemList = (props: {
  items: Array<todoItem>;
  makeCompelete?: any;
  done: boolean;
  deleteItems?: any;
}) => {
  const items: todoItem[] = props.items;
  return (
    <ul className="rootItemViews">
      {items.map((item: any) => (
        <li key={item.title} className="listItems">
          {!props.done ? (
            <input
              type="checkbox"
              onClick={() => props.makeCompelete(item)}
              className="doneCheck"
            />
          ) : (
            <hr className="lineOver" />
          )}

          <h1 className="itemTitle">{item.title}</h1>
          {!props.done ? (
            <div>
              <button
                className="deleteBtn"
                onClick={() => {
                  props.deleteItems(item);
                }}
              >
                <FontAwesomeIcon icon={faTimes} size={"sm"} color={"red"} />
              </button>
            </div>
          ) : null}
        </li>
      ))}
    </ul>
  );
};
export default ItemList;
