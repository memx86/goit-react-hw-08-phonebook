import { Component } from "react";
import PropTypes from "prop-types";
import s from "./Filter.module.css";

class Filter extends Component {
  static propTypes = {
    setFilter: PropTypes.func.isRequired,
  };

  state = {
    filter: "",
  };
  handleChange = (e) => {
    const { setFilter } = this.props;
    console.log(setFilter);
    const value = e.target.value;
    this.setState(() => ({
      filter: value,
    }));
    setFilter(value);
  };
  render() {
    const filter = this.state.filter;
    return (
      <div className={s.filter}>
        <label className={s.label}>
          Find contacts by Name
          <input
            className={s.input}
            type="text"
            value={filter}
            onChange={this.handleChange}
          />
        </label>
      </div>
    );
  }
}
export default Filter;
