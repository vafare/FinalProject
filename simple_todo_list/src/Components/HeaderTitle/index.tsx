import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { memo } from "react";
import { faSortAlphaDown, faSortAlphaDownAlt } from "@fortawesome/free-solid-svg-icons";

const HeaderTitle = (props: {
  sorting: any;
  done : boolean;
  sortType : string;
}) =>{
  
  return (
    <div className="headerTitle">
      <button onClick={()=>{
        props.sorting(props.done)
      }}>
        <FontAwesomeIcon icon={props.sortType === 'z-a' ? faSortAlphaDownAlt : faSortAlphaDown} />
      </button>
    </div>
  );
}
export default memo(HeaderTitle);