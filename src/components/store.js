'use strict';

const sources = require('json!../../contents/index.json');
const { UPDATE_PATH } = require('redux-simple-router');

function store(state, action) {
  if (!state) {
    state = { sources: sources, text: '', section: null, sections: [] };
  }
  switch (action.type) {
  case "@@router/INIT_PATH":
  case UPDATE_PATH:
    return Object.assign({}, state, {text: '', section: null, sections: []});
  case 'TEXT':
    return Object.assign({}, state, {text: action.text || ''});
  case 'NEW_SECTION':
    return Object.assign({}, state, {section: action.section});
  case 'NEW_SECTIONS':
    return Object.assign({}, state, {sections: action.sections});
  default:
    return state;
  }
}

module.exports = store;
