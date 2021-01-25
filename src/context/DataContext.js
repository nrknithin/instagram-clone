import React, {createContext, useContext, useState} from 'react';
export const DataContext = createContext();

export function DataContextProvider({children}) {
  const [bookmark, setBookmark] = useState([
    {
      channelname: 'Teela Cunningham',
      'high thumbnail': 'https://i.ytimg.com/vi/GYxGEHCcl98/maxresdefault.jpg',
      id: 'GYxGEHCcl98',
      'low thumbnail': 'https://i.ytimg.com/vi/GYxGEHCcl98/default.jpg',
      'medium thumbnail': 'https://i.ytimg.com/vi/GYxGEHCcl98/hqdefault.jpg',
      tags: [],
      title: '3 Simple Tricks for Unique Acrylic Textures',
    },
  ]);
  const addBookmark = (item) => {
    console.log('add');
    setBookmark([...bookmark, item]);
  };
  const removeBookmark = (id) => {
    console.log('remove');
    setBookmark(bookmark.filter((item) => item.id !== id));
  };
  return (
    <DataContext.Provider value={{bookmark, addBookmark, removeBookmark}}>
      {children}
    </DataContext.Provider>
  );
}
