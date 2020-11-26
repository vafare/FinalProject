import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { memo } from "react";
import { faSortAlphaDown } from "@fortawesome/free-solid-svg-icons";

const HeaderTitle = (props: {
  sorting: any;
  done : boolean;
}) =>{
  
  return (
    <div className="headerTitle">
      <button onClick={()=>{
        props.sorting(props.done)
      }}>
        <FontAwesomeIcon className="headerIcon" icon={faSortAlphaDown} />
      </button>
    </div>
  );
}
export default memo(HeaderTitle);