import axios from 'axios';

export const getFeeds = () => {
  return axios.get(
    'https://hiit.ria.rocks/videos_api/cdn/com.rstream.crafts?versionCode=40&lurl=Canvas%20painting%20ideas',
  );
};

export const getComments = () => {
  return axios.get('http://cookbookrecipes.in/test.php');
};
