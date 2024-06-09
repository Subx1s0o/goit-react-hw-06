import { changeFilter } from "../../redux/filtersSlice";
import css from "./searchBox.module.css";
import { useDispatch } from "react-redux";

export default function SearchBox() {
  const dispatch = useDispatch();

  const handleChange = (name) => {
    dispatch(changeFilter(name));
  };

  return (
    <div>
      <label className={css.search} htmlFor="search">
        Search Your Contacts
        <input
          onChange={(e) => handleChange(e.target.value)}
          className={css.input}
          type="text"
          id="search"
        />
      </label>
    </div>
  );
}
