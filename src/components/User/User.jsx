import css from './User.module.css';
import logo from '../../img/Logo.svg'

export const User = ({ user, tweets, followers, avatar, isFollow, onToggleProp }) => {
  const followersUI = isFollow ? 100501 : followers;

  const correctFollowers =
    String(followersUI).slice(0, 3) + ',' + String(followersUI).slice(3);
  return (
    <li className={css.Card}>
      <div className={css.Logo}>
        <img src={logo} alt="GoIt academy logo" />
      </div>
      <div className={css.User}>
        <span className={css.Line}></span>
        <div className={css.Userpic}>
          <img src={avatar} alt={user} className={css.Avatar} />
        </div>
        <p className={css.Text}>{user}</p>
        <p className={css.Text}>{tweets} tweets</p>
        <p className={css.Text}>{correctFollowers} followers</p>
        <button
          className={isFollow ? css.Following : css.Button}
          type="button"
          aria-label="following button"
          onClick={onToggleProp}
          data-follow='isFollow'
        >
          {isFollow ? 'Following' : 'Follow'}
        </button>
      </div>
    </li>
  );
};