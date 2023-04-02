import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../redux/contactSlice';

import PropTypes from 'prop-types';
import { DeleteButton, ContactElement, ContactListMarkup } from './ContactList.styled';

export const ContactList = () => {
   // redux
   const dispatch = useDispatch();
   const contactList = useSelector(state => state.contacts);
   const filteredQuery = useSelector(state => state.filters);

   const filteredList = contactList?.filter(element =>
      element.name?.toLowerCase().includes(filteredQuery)
   );
   console.log(filteredList);

   // redux

   return (
      <>
         <p>Contacts</p>
         <ContactListMarkup>
            {(filteredList.length > 0 ? filteredList : contactList).map((element, index) => {
               return (
                  <ContactElement key={index}>
                     {element.name}: {element.number}
                     <DeleteButton
                        type="button"
                        onClick={() => dispatch(deleteContact(element.name))}
                     >
                        Delete
                     </DeleteButton>
                  </ContactElement>
               );
            })}
         </ContactListMarkup>
      </>
   );
};

// export class ContactList extends Component {
// onDeleteContact = event => {
//    console.log(event.currentTarget.name);
//    this.props.deleteHandler(event);
// };
//    render() {
// return (
//    <>
//       <p>Contacts</p>
//       <ContactListMarkup>
//          {this.props.contactList.map((element, index) => {
//             return (
//                <ContactElement key={index}>
//                   {element.name}: {element.number}
//                   <DeleteButton
//                      type="button"
//                      onClick={() => this.props.deleteHandler(element.name)}
//                   >
//                      Delete
//                   </DeleteButton>
//                </ContactElement>
//             );
//          })}
//       </ContactListMarkup>
//    </>
// );
//    }
// }

ContactList.propTypes = {
   props: PropTypes.objectOf(PropTypes.function),
};
