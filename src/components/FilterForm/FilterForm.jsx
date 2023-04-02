import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { filterContacts } from '../redux/filterSlice';

export const FilterForm = ({ onFilter }) => {
   const [filterText, setFilterText] = useState('');

   const dispatch = useDispatch();

   // redux
   // const dispatch = useDispatch();
   // const filteredList = useSelector(state => state.contacts);

   useEffect(() => {
      onFilter(filterText);
   }, [filterText, onFilter]);

   function onFilterInput(event) {
      dispatch(filterContacts(event.target.value));
      setFilterText(event.target.value);
   }

   return (
      <div>
         <label>
            Filter:{' '}
            <input type="text" name="filterForm" onChange={onFilterInput} value={filterText} />
         </label>
      </div>
   );
};

// export class FilterForm extends Component {
//    state = {
//       filterText: '',
//    };

// onFilterInput = event => {
//    //   console.log(this.state.filterText);
//    this.setState({ filterText: event.target.value });

//    this.props.onFilter(event.target.value);
// };

//    render() {
// return (
//    <div>
//       <label>
//          Filter:{' '}
//          <input
//             type="text"
//             name="filterForm"
//             onChange={this.onFilterInput}
//             value={this.state.filterText}
//          />
//       </label>
//    </div>
// );
//    }
// }

FilterForm.propTypes = {
   props: PropTypes.objectOf(PropTypes.function),
};
