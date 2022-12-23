export default function reducer(state = {}, action) {
    const type = action.type;
    let user_data = state;

    switch (type) {
        case "LOGGED_IN":
            user_data = {
                is_authenticated: true,
                token: action.payload.data.token,
            };
            break;

        case "LOGGED_OUT":
            user_data = {
                is_authenticated: false,
                token: null,
            };
            break;
    }
    return user_data;
}
