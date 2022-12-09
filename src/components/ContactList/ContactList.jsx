import { ContactItem } from 'components/ContactItem/ContactItem';

export const ContactList = ({ contacts }) => {
 return(
    <ul>
    {contacts.map(({name,number,id})=>{
    return(
        <li key={id}>
        <ContactItem
        name={name}
        number={number}
        id={id}
        />
    </li>
        
        )
  
    })}
    </ul>
    )
};