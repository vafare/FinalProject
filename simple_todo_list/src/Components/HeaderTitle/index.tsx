import React from "react"

export default function HeaderTitle(props : any) {
    const { title } = props;
    return (
      <div className="headerTitle">
        <button>
          sort icon
        </button>
        <label>{title}</label>
      </div>
    );
  }
  