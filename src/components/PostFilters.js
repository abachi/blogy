import React, { useState } from 'react';
import { connect } from 'react-redux';
import { setText } from '../actions/filters';

export const PostFilters = ({ setTextFilter }) => {
  const [searchText, setTextSearch] = useState('');
  const onTextChange = (e) => {
    const text = e.target.value;
    setTextSearch(text);
    setTextFilter(text);
  };
  return (
    <div className="filters-list">
      <input
        className="input"
        type="text"
        placeholder="Search by title"
        value={searchText}
        onChange={onTextChange}
      />
    </div>
  );
};
const mapDispatchToProps = (dispatch) => ({
  setTextFilter: (text) => dispatch(setText(text)),
});
export default connect(null, mapDispatchToProps)(PostFilters);
