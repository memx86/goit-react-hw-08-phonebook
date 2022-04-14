import { useState } from "react";
import { useDispatch } from "react-redux";
import { changeFilter } from "redux/filter";
import s from "./Filter.module.css";

function Filter() {
  const [filter, setFilter] = useState("");
  const dispatch = useDispatch();
  const handleChange = (e) => {
    const value = e.target.value;
    setFilter(value);
    dispatch(changeFilter(value));
  };

  return (
    <div className={s.filter}>
      <label className={s.label}>
        Find contacts by Name
        <input
          className={s.input}
          type="text"
          placeholder=" "
          value={filter}
          onChange={handleChange}
        />
      </label>
    </div>
  );
}

export default Filter;
