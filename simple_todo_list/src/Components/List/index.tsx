import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const ItemList = (props: any) => {
  const items = useState(props.items);
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
                  props.deleteItema(item);
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
