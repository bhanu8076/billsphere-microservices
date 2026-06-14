const PREFIX = '[BillSphere]';

const log = (...args) => {
  console.log(PREFIX, ...args);
};

const warn = (...args) => {
  console.warn(PREFIX, ...args);
};

const error = (...args) => {
  console.error(PREFIX, ...args);
};

export default {
  log,
  warn,
  error,
};
