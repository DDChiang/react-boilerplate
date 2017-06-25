import './style.css';

function sayHello() {
  var elem = document.createElement('div');

  elem.innerHTML = 'hello webpack5 :)';

  return elem;
}

document.body.append(sayHello());
