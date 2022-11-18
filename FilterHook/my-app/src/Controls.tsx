import React from "react";
import { Fragment } from "react";
import { useState } from "react";

type ControlsProps = {
  changeString: (value: string) => void;
  cbCheck: (value: boolean) => void;
  cbResetValue: (value: true) => void;
};
export const Controls = ({
  changeString,
  cbCheck,
  cbResetValue,
}: ControlsProps) => {
  const [value, setValue] = useState("");
  const [sort, setSort] = useState(false);
  const cbFilter = (EO: React.ChangeEvent<HTMLInputElement>) => {
    changeString(EO.target.value);
    setValue(EO.target.value);
  };
  const cbSort = (EO: React.ChangeEvent<HTMLInputElement>) => {
    cbCheck(EO.target.checked);
    setSort(EO.target.checked);
  };
  const cbReset = () => {
    cbResetValue(true);
    setValue("");
    setSort(false);
  };

  return (
    <Fragment>
      <input type="checkbox" onChange={cbSort} checked={sort} />
      <input type="text" onChange={cbFilter} value={value} />
      <input type="reset" onClick={cbReset} />
    </Fragment>
  );
};
