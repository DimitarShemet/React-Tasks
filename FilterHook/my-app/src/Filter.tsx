import React from "react";
import { Fragment } from "react";
import { Controls } from "./Controls";
import { List } from "./List";
import { useState } from "react";

type FilterProp = {
  arr: string[];
};
export const Filter = ({ arr }: FilterProp) => {
  const [string, setString] = useState("");
  const [checked, setChecked] = useState(false);
  const changeString = (value: string) => {
    setString(value);
  };
  const changeCheckbox = (value: boolean) => {
    setChecked(value);
  };
  const reset = () => {
    setString("");
    setChecked(false);
  };
  return (
    <Fragment>
      <Controls
        changeString={changeString}
        cbCheck={changeCheckbox}
        cbResetValue={reset}
      />
      <List arr={arr} filterString={string} checked={checked} />
    </Fragment>
  );
};
