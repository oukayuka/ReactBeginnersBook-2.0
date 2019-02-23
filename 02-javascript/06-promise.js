const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const greet = () => {
  console.log('おやすみ');

  sleep(2000)
    .then(() => {
      console.log('起きた');
      console.log('おはよう！');
    })
    .catch(err => {
      console.error('睡眠例外です: ', err);
    })
}

greet();

