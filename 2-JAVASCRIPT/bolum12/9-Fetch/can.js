fetch('example/can.json')
  .then(response => {
    return response.json();
  }).then(data => {
    console.log(data);
  }).catch(err => {
    console.log(err);
  });


fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then((response) => response.json())
  .then((json) => console.log(json));