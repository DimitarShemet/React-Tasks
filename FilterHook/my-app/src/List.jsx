import { Fragment } from "react";
import "./List.scss";

export const List = (prop) => {
  let filterArr = prop.arr.filter((elem) => elem.includes(prop.filterString));
  if (prop.checked ? filterArr.sort() : filterArr)
    return (
      <Fragment>
        <select size={prop.arr.length / 2}>
          {filterArr.map((elem, index) => {
            return <option key={index}>{elem}</option>;
          })}
        </select>
      </Fragment>
    );
};
