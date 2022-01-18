import { useEffect, useState } from 'react';
// key: localStorage에 저장될 키 이름
// initialValue : 키의 초기값

function useLocalStorage(key, initialValue) {
  const [data, setData] = useState(() => {
    const jsonString = window.localStorage.getItem(key);
    try {
      return jsonString ? JSON.parse(jsonString) : initialValue;
    } catch (e) {
      console.error(e);
      return initialValue;
    }
  });

  useEffect(() => {
    const jsonString = JSON.stringify(data);
    window.localStorage.setItem(key, jsonString);
  }, [key, data]);

  //   // ToDo: data에 대한 useEffect로서 구현해보기
  //   const setDataToLocalStorage = (value) => {
  //     // FixMe: value가 함수일 때 외부 data 참조하기
  //     const valueToStore = value instanceof Function ? value(data) : value;
  //     setData(valueToStore);
  //     window.localStorage.setItem(key, JSON.stringify(valueToStore));
  //   };

  return [data, setData];
}

export default useLocalStorage;
