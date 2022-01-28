import { useState } from "react";
import PropTypes from "prop-types";
import s from "./Filter.module.css";

function Filter({ handleFilter }) {
  const [filter, setFilter] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setFilter(value);
    handleFilter(value);
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
Filter.propTypes = {
  handleFilter: PropTypes.func.isRequired,
};

export default Filter;
