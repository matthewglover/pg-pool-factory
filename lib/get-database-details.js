const RE = /^(?:postgres:\/\/)([^:]+):([^@]+)@([^:]+):(\d+)\/(.+)$/;

const getDatabaseDetails = (url) => {
  const fragments = RE.exec(url);
  if (fragments === null) throw new TypeError('Invalid database url');

  const [username, password, host, port, database] = fragments.slice(1);
  return { username, password, host, port, database };
};

module.exports = getDatabaseDetails;
