import React, {useState} from 'react';
import {Text} from 'react-native';
export const FeedTitle = ({title}) => {
  const [more, setMore] = useState(false);
  if (title.length > 50 && !more)
    return (
      <Text category="p2" style={{flex: 1, flexWrap: 'wrap'}}>
        {title.slice(0, 50)}
        <Text style={{color: 'grey'}} onPress={() => setMore(true)}>
          ...more
        </Text>
      </Text>
    );
  else return <Text style={{flex: 1}}>{title}</Text>;
};
