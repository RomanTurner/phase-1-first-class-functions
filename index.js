function receivesAFunction(callback) {
  callback();
}

const namedFun = () => {
  console.log("Named Function");
};

function returnsANamedFunction() {
  return namedFun;
}

function returnsAnAnonymousFunction() {
  return () => {
    console.log("Anonymous Function");
  };
}
