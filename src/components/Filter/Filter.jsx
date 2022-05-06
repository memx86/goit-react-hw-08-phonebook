import { useSelector, useDispatch } from "react-redux";
import { changeFilter, getFilter } from "redux/filter";
import s from "./Filter.module.css";

function Filter() {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    const value = e.target.value;
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
