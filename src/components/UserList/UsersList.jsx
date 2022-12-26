import css from './UsersList.module.css';
import { User } from "components/User/User"
export const UserList = ({ users, onToggleProp }) => {
  const elements = users.map(user => {
    const { id, ...userprops } = user;
    return (
      <User
        key={id}
        {...userprops}
        onToggleProp={(e) =>
          onToggleProp(id, e.currentTarget.getAttribute("data-follow"))
        }
      />
    )
  });
  return <ul className={css.UserList}>{elements}</ul>
}
