import { useNavigate, useSearchParams } from 'react-router-dom';
import { Text, Button } from '@nextui-org/react';

const Profile = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  console.log(searchParams.get('profile'));

  return (
    <>
      <Text size='$2xl'>Profile</Text>
      <Button onClick={() => navigate('/')} shadow>
        Back home
      </Button>
    </>
  );
};

export default Profile;
