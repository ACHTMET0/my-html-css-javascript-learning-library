const getTodos = async () => {

  let response = await fetch('example/can.json');//endpoint bura ve yanlış girilirse error vericek

  if (response.status !== 200) {
    throw new Error('Doğru endpointe istek atmadınız!');
  }

  const data = await response.json();
  return data;
}


getTodos().then(response => {
  console.log(response);
}).catch(err => console.log(err.message));