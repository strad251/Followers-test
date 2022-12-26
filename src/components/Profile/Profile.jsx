import PropTypes from 'prop-types';
import { Card, CarPicture, CardBody, Tag, Username, Location, CardFooter, CardLi, SpanLabel, SpanText  } from './Profile.styled';

export const Profile = ({ avatar, username, tag, location, stats }) => {
  return (
    <Card>
      <CardBody>
        <CarPicture
          src={avatar}
          alt="User avatar"
          
        />
        <Username>{username}</Username>
        <Tag>{tag}</Tag>
        <Location>{location}</Location>
      </CardBody>

      <CardFooter>
        <CardLi>
          <SpanLabel>Followers</SpanLabel>
          <SpanText>{stats.followers}</SpanText>
        </CardLi>
        <CardLi>
          <SpanLabel>Views</SpanLabel>
          <SpanText>{stats.views}</SpanText>
        </CardLi>
        <CardLi>
          <SpanLabel>Likes</SpanLabel>
          <SpanText>{stats.likes}</SpanText>
        </CardLi>
      </CardFooter>
    </Card>
  )
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};