import React from "react";
import { Fragment } from "react";
import "./List.scss";

type ListProps = {
  arr: string[];
  filterString: string;
  checked: boolean;
};
export const List = ({ arr, filterString, checked }: ListProps) => {
  let filterArr=arr.filter((elem: string) => elem.includes(filterString));
  if (checked) {
    filterArr.sort()
  }
    return (
      <Fragment>
        <select size={arr.length / 2}>
          {filterArr.map((elem: string, index: number) => {
            return <option key={index}>{elem}</option>;
          })}
        </select>
      </Fragment>
    );
};
