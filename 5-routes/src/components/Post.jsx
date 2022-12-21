import { useParams } from 'react-router-dom';
import { Card } from '@nextui-org/react';

const Post = () => {
  const params = useParams();
  console.log(params);

  return (
    <Card>
      <Card.Body>Post id: {params.id}</Card.Body>
    </Card>
  );
};

export default Post;
