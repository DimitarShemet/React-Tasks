import { Fragment } from "react";
import { useState } from "react";

export const Controls = (prop) => {
  const [value, setValue] = useState("");
  const [sort, setSort] = useState("");
  const cbFilter = (EO) => {
    prop.changeString(EO.target.value);
    setValue(EO.target.value);
  };
  const cbSort = (EO) => {
    prop.cbCheck(EO.target.checked);
    setSort(EO.target.checked);
  };
  const cbReset = () => {
    prop.cbResetValue(true);
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
