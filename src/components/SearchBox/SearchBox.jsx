import { changeFilter } from '../../redux/filters/filtersSlice';
import s from './SearchBox.module.css';
import { useDispatch } from 'react-redux';


const SearchBox = () => {
    const dispatch = useDispatch();
    return (
        <div>
            <input
                onChange={e => dispatch(changeFilter(e.target.value))}
                type="text"
                className={s.search}
                placeholder="Search contacts..." />
        </div>
    );
}

export default SearchBox;