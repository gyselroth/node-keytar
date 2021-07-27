function checkRequired(val, name) {
  if (!val || val.length <= 0) {
    throw new Error(name + ' is required.');
  }
}

var path = '../build/Release/keytar.node'
var keytar

function getKeytar() {
  if(!keytar) {
    keytar = require(path)
  }

  return keytar
}

module.exports = {
  setPath: function(keytar) {
    path = keytar;
  },

  getPassword: function (service, account) {
    checkRequired(service, 'Service')
    checkRequired(account, 'Account')

    return getKeytar.getPassword(service, account)
  },

  setPassword: function (service, account, password) {
    checkRequired(service, 'Service')
    checkRequired(account, 'Account')
    checkRequired(password, 'Password')

    return getKeytar.setPassword(service, account, password)
  },

  deletePassword: function (service, account) {
    checkRequired(service, 'Service')
    checkRequired(account, 'Account')

    return getKeytar.deletePassword(service, account)
  },

  findPassword: function (service) {
    checkRequired(service, 'Service')

    return getKeytar.findPassword(service)
  },

  findCredentials: function (service) {
    checkRequired(service, 'Service')

    return getKeytar.findCredentials(service)
  }
}
