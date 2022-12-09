import {AiOutlineUser} from 'react-icons/ai'


export const ContactItem = ({name,number}) => {
return(
<>
<p><AiOutlineUser/>{name}: {number}</p>
</>)
}