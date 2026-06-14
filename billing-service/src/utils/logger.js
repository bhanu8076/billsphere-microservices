const PREFIX = '[BillSphere][Billing]';

const log = (...args) => {
  console.log(PREFIX, ...args);
};

const warn = (...args) => {
  console.warn(PREFIX, ...args);
};

const error = (...args) => {
  console.error(PREFIX, ...args);
};

module.exports = {
  log,
  warn,
  error,
};
