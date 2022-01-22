import { Component } from "react";
import PropTypes from "prop-types";

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
      <div>
        <label>
          Find contacts by Name
          <input type="text" value={filter} onChange={this.handleChange} />
        </label>
      </div>
    );
  }
}
export default Filter;
