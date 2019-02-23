const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const greet = async () => {
  console.log('おやすみ');

  try {
    await sleep(2000);
    console.log('起きた');
    console.log('おはよう！');
  } catch (err) {
     console.error('睡眠例外です: ', err);
  }
}

greet();

