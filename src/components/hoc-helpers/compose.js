const compose = (...func) => (comp) => {
  return func.reduceRight(
    (prevResult, f) => f(prevResult), comp);
};

export default compose;