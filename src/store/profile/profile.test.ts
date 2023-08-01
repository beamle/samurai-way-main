import {addPostAC, profileReducer} from "./profile.reducer";


test('the array of posts should be increased', () => {
    let startState = {
            postData: [
                {id: "1", message: 'hi, how are you?', like: 23},
                {id: "2", message: 'It"s my first post?', like: 3},
                {id: "3", message: 'I like bananas!?', like: 2},
                {id: "4", message: 'Wooo, that"s nice!?', like: 211},],
                newPostText: 'abc'
    }
    const message = "testing"
    const action = addPostAC(message)

    let endState = profileReducer(startState, action);

    expect(endState.postData.length).toBe(5)
    expect(endState.postData[4].message).toBe(message)
    expect(endState.postData[4]).toBeDefined()
    expect(endState.postData[4].id).toBeTruthy()

})