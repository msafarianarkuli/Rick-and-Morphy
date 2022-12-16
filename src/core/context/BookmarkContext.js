import { createContext, useEffect, useState } from 'react';

export const bookmarkContext = createContext();

const BookmarkContext = ({ children }) => {
  let favorites = JSON.parse(localStorage.getItem('bookmarks')) || [];
  const [bookmarks, setBookmarks] = useState(favorites);

  useEffect(() => {
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  }, [bookmarks]);

  const addAndRemoveToFavorites = (character) => {
    const exist = bookmarks.some(
      (bookmark) => bookmark.id === character.id
    );
    exist
      ? setBookmarks(
          bookmarks.filter((bookmark) => bookmark.id !== character.id)
        )
      : setBookmarks([...bookmarks, character]);
  };

  const resetBookmark = () => {
    setBookmarks([]);
  };

  return (
    <bookmarkContext.Provider
      value={{ bookmarks, addAndRemoveToFavorites, resetBookmark }}
    >
      {children}
    </bookmarkContext.Provider>
  );
};

export default BookmarkContext;
