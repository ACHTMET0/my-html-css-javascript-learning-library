const getTodos = (resource) => {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    request.addEventListener('readystatechange', () => {
      if (request.readyState === 4 && request.status === 200) {
        const data = JSON.parse(request.responseText);
        resolve(data);
        //callback(undefined, data);
      } else if (request.readyState === 4) {
        reject('Başarılı cevap alamadık!');
        //callback('Başarılı cevap alamadık!', undefined);
      }
    });
    request.open('GET', resource);
    request.send();
  });
};

getTodos('example/can.json')
  .then(data => {
    console.log("Promise 1", data);
    return getTodos('example/osman.json');
  })
  .then(data => {
    console.log("Promise 2", data);
    return getTodos('example/tuba.json');
  })
  .then(data => {
    console.log("Promise 3", data);
  })
  .catch(err => {
    console.log(err);
  });

fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then((response) => response.json())
  .then((json) => console.log(json));