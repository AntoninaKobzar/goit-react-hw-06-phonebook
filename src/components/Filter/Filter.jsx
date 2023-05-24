import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { getFilterValue } from 'redux/selectors';
import css from './Filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilterValue);

  const handleFilter = filter => {
    dispatch(setFilter(filter));
  };
  const changeFilter = e => {
    handleFilter(e.currentTarget.value);
    console.log(filter);
  };
  return (
    <label>
      <p className={css.form__label}>Find contacts by name</p>
      <input
        className={css.form__input}
        type="text"
        name="filter"
        onChange={changeFilter}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      ></input>
    </label>
  );
};
export default Filter;
