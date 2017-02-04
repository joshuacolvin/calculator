function two () {

}

function one () {

}

function three () {

}

function four () {

}

function five () {

}

function six () {

}

function seven () {

}

function eight () {

}

function nine () {

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
