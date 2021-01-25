import React, {createContext, useEffect, useState} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
export const DataContext = createContext();

export function DataContextProvider({children}) {
  const [bookmark, setBookmark] = useState([]);
  useEffect(() => {
    console.log('danger');
    AsyncStorage.getItem('APP::BOOKMARK').then((value) => {
      if (value) {
        setBookmark(JSON.parse(value));
      }
    });
  }, []);
  useEffect(() => {
    if (bookmark !== null) {
      AsyncStorage.setItem('APP::BOOKMARK', JSON.stringify(bookmark));
    }
  }, [bookmark]);
  const addBookmark = (item) => {
    setBookmark([...bookmark, item]);
    console.log(bookmark);
  };
  const removeBookmark = (id) => {
    setBookmark(
      bookmark.filter((bk) => {
        return bk.id !== id;
      }),
    );
    console.log(bookmark);
  };

  return (
    <DataContext.Provider value={{bookmark, addBookmark, removeBookmark}}>
      {children}
    </DataContext.Provider>
  );
}
