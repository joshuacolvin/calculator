function zero () {
  if (typeof arguments[0] === 'function') {
    return arguments[0].call(null, 0);
  }
  return 0;
}

function one () {
  if (typeof arguments[0] === 'function') {
    return arguments[0].call(null, 1);
  }
  return 1;
}

function two () {
  if (typeof arguments[0] === 'function') {
    return arguments[0].call(null, 2);
  }
  return 2;
}

function three () {
  if (typeof arguments[0] === 'function') {
    return arguments[0].call(null, 3);
  }
  return 3;
}

function four () {
  if (typeof arguments[0] === 'function') {
    return arguments[0].call(null, 4);
  }
  return 4;
}

function five () {
  if (typeof arguments[0] === 'function') {
    return arguments[0].call(null, 5);
  }
  return 5;
}

function six () {
  if (typeof arguments[0] === 'function') {
    return arguments[0].call(null, 6);
  }
  return 6;
}

function seven () {
  if (typeof arguments[0] === 'function') {
    return arguments[0].call(null, 7);
  }
  return 7;
}

function eight () {
  if (typeof arguments[0] === 'function') {
    return arguments[0].call(null, 8);
  }
  return 8;
}

function nine () {
  if (typeof arguments[0] === 'function') {
    return arguments[0].call(null, 9);
  }
  return 9;
}

function plus (num) {
  return function () {
    return arguments[0] + num;
  };
}

function minus (num) {
  return function () {
    return arguments[0] - num;
  };
}

function times (num) {
  return function () {
    return arguments[0] * num;
  };
}

function dividedBy (num) {
  return function () {
    return arguments[0] / num;
  };
}
