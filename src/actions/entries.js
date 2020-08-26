import uuid from 'uuid';

// ADD_ENTRY
export const addEntry = (
  {
    description = '', //these are default values for if nothing is passed in
    note = '',
    tag = "task",
    createdAt = 0
  } = {}
) => ({ //addEntry returns this object
  type: 'ADD_ENTRY',
  entry: { //sets the entry equal to the variables from the inputs
    id: uuid(),
    description,
    note,
    tag,
    createdAt
  }
});

// REMOVE_ENTRY
export const removeEntry = ({ id } = {}) => ({
  type: 'REMOVE_ENTRY',
  id
});

// EDIT_ENTRY
export const editEntry = (id, updates) => ({
  type: 'EDIT_ENTRY',
  id,
  updates
});
