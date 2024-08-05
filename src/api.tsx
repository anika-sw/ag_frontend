export const apiCall1 = async () => {
  const response = await fetch('http://flask-env.eba-np4xpmaq.us-east-2.elasticbeanstalk.com/create_song');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

export const apiCall2 = async () => {
  const response = await fetch('http://flask-env.eba-np4xpmaq.us-east-2.elasticbeanstalk.com/create_song_name');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};