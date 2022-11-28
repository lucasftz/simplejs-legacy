// deno-lint-ignore ban-types
type Effect = Function;

function effect(context: Effect[]) {
  return function (fn: Effect) {
    const execute = () => {
      context.push(execute);

      try {
        fn();
      } finally {
        context.pop();
      }
    };

    execute();
  };
}

export { effect };
