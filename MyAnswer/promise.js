/*
fetchData 関数で得られた値を processData 関数で加工し、 console.log
で出力するコードを書いてみましょう。 fetchData 関数の引数には "greeting"
を渡すパターンと "credential"
を渡すパターンを書き、エラーが発生した際はそのエラーを console.error
を使って出力してください。
*/
const fetchData = (key) => {
    return new Promise((resolve, reject) => {
      if (key !== "greeting") {
        reject(new Error(`unknown key: ${key}`));
        return;
      }
  
      setTimeout(() => {
        resolve("Hello");
      }, 1000);
    });
  };
  
  const processData = (data) => `data: ${data}`;
  
  const fetchAndDisplayData = (key) => {
    return fetchData(key)
      .then((data) => processData(data))
      .then((data) => {
        console.log(data);
      })
      .catch((e) => {
        console.error(e);
      });
  };
  
  fetchAndDisplayData("greeting");
  fetchAndDisplayData("credential");
  