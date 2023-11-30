import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import TournList from '../components/TournList/index';

import { QUERY_USER_TOURNAMENTS, QUERY_ME } from '../utils/queries';

import './profile.css';

const Profile = () => {
  const { username: userParam } = useParams();

  const { loading, data } = useQuery(userParam ? QUERY_USER_TOURNAMENTS : QUERY_ME, {
    variables: { username: userParam },
  });

  const user = data?.me || data?.user || {};

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user?.username) {
    // console.log("no username");
    return (
      <h4>
        You need to be logged in to see this. Use the navigation links above to
        sign up or log in!
      </h4>
    );
  }

  return (
    <div className='root'>
      <div className="flex-row justify-center mb-3">
        <div className="col-12 col-md-10 mb-5">
          <TournList
            hostedTournaments={user.hostedTournaments}
          />
        </div>
      </div>
    </div>
  );
};

export default Profile;
