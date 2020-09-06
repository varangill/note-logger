import authReducer from '../../reducers/auth';

test('should set uid when logging in', () => {
    const action = {
        type: 'LOGIN',
        uid: 'abc123'
    }
    const state = authReducer({}, action);
    expect(state.uid).toBe(action.uid);
});


test('should clear uid when logging out',() => {
    const action = {
        type: 'LOGOUT'
    };
    const state = authReducer({uid: 'x'}, action);
    expect(state).toEqual({});
});