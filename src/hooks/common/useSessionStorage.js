import { useCallback, useState } from "react";

const MY_MINI_BLOG_TOKEN = "MY_MINI_BLOG_TOKEN";

const useSessionStorage = () => {
  const [item, setItem] = useState(() => {
    return sessionStorage.getItem(MY_MINI_BLOG_TOKEN)
      ? null
      : sessionStorage.getItem(MY_MINI_BLOG_TOKEN);
  });

  const handleSetSessionStorageItem = useCallback(
    (value) => {
      setItem(() => {
        if (sessionStorage.getItem(MY_MINI_BLOG_TOKEN)) {
          return item;
        }
        return value;
      });
    },
    [item, setItem]
  );

  const handleClearSessionStorageItem = useCallback(() => {
    sessionStorage.clear();
    setItem(null);
  }, [setItem]);

  return {
    item,
    handleSetSessionStorageItem,
    handleClearSessionStorageItem,
  };
};

export default useSessionStorage;
