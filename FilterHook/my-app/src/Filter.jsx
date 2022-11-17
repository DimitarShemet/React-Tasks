import { Fragment } from "react";
import { Controls } from "./Controls";
import { List } from "./List";
import { useState } from "react";

export const Filter = (prop) => {
  const [string, setString] = useState("");
  const [checked, setChecked] = useState(false);
  const [resetValue, setResetValue] = useState(false);
  const changeString = (value) => {
    setString(value);
  };
  const changeCheckbox = (value) => {
    setChecked(value);
  };
  const reset = (value) => {
    setResetValue(value);
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
      <List
        arr={prop.arr}
        filterString={string}
        checked={checked}
        resetValue={resetValue}
        cbReset={reset}
      />
    </Fragment>
  );
};
