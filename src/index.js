const { of } = require('rxjs');

const observable = of(1, 2, 3);

const observer = {
  next: x => {
    console.log(x);
  }
};

observable.subscribe(observer);
