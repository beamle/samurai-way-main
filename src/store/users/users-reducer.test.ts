import {
    follow,
    setCurrentPage, setFollowingInProgress,
    setIsFetching,
    setUsers,
    setUsersCount,
    unFollow,
    usersReducer,
    UserType
} from "./users-reducer";

const Users: UserType[] = [
    {
        id: "1",
        followed: true,
        name: "bob",
        status: '',
        uniqueUrlName: '',
        photos: {
            small: '',
            large: ''
        }},
    {
        id: "2",
        followed: false,
        name: "Mihkel",
        status: '',
        uniqueUrlName: '',
        photos: {
            small: '',
            large: ''
        }
    }
]

const startState = {
    users: Users,
    pageSize: 10,  // how many items will be returned in response
    usersCount: 11,
    currentPage: 1,
    isFetching: false,
    followingInProgress: ['']
}

test("follow should be changed to true for specific user", () => {
    const action = follow('2')
    const endState = usersReducer(startState, action)

    expect(endState.users[1].followed).toBe(true)
    expect(endState.users[0].followed).toBe(true)
})

test("unfollow should be changed to false for specific user", () => {
    const action = unFollow('1')
    const endState = usersReducer(startState, action)

    expect(endState.users[0].followed).toBeFalsy()
    expect(endState.users[1].followed).toBeFalsy()
})

test("array of old users should be replaced with a new array of users", () => {
    const Users: UserType[] = [
        {
            id: "2",
            followed: true,
            name: "Jaana",
            status: '',
            uniqueUrlName: '',
            photos: {
                small: '',
                large: ''
            }},
        {
            id: "3",
            followed: false,
            name: "Liisa",
            status: '',
            uniqueUrlName: '',
            photos: {
                small: '',
                large: ''
            }
        }
    ]

    const startState = {
        users: Users,
        pageSize: 10,  // how many items will be returned in response
        usersCount: 11,
        currentPage: 1,
        isFetching: false,
        followingInProgress: ['']
    }

    const action = setUsers(Users)
    const endState = usersReducer(startState, action)

    expect(endState.users[0].id).toBe('2')
    expect(endState.users[1].id).toBe('3')
    expect(endState.users.length).toBe(2)
})

test("current page should be changed", () => {
    const action = setCurrentPage(3)
    const endState = usersReducer(startState, action)

    expect(endState.currentPage).toBe(3)
})

test("users count should be changed", () => {
    const action = setUsersCount(25)
    const endState = usersReducer(startState, action)

    expect(endState.usersCount).toBe(25)
})

test("is fetching should be changed", () => {
    const action = setIsFetching(true)
    const endState = usersReducer(startState, action)

    expect(endState.isFetching).toBeTruthy()
})

test("following progress boolean should be changed", () => {
    const action = setFollowingInProgress('1', true)
    const endState = usersReducer(startState, action)

    expect(endState.followingInProgress.length).toBe(2)
    expect(endState.isFetching).toBeFalsy() // we provide isFetching for logic, we don't change it here
    expect(endState.followingInProgress[1]).toBe(startState.users[0].id)
})