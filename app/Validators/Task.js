'use strict'

const Antl = use('Antl')

class Task {
  get validateAll () {
    return true
    
  }
  get rules () {
    return {
      title: 'required',
      dueDate: 'date'
    }
  }
  get messages () {
    return Antl.list('validation')
  }
}

module.exports = Task
