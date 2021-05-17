export function manageFriends(state = {friends: []}, action){
    switch(action.type){
        case 'ADD_FRIEND': 
            return {friends: [...state.friends, action.friend]}
        case 'REMOVE_FRIEND':
            let remove = state.friends.findIndex(friend => friend.id === action.id)
            return {friends: [...state.friends.slice(0, remove), ...state.friends.slice(remove + 1)]}
        default: 
            return state;
    }
}
