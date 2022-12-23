export const user_logged_in = (data) => ({
    type: "LOGGED_IN",
    payload: {
        data,
    },
});

export const user_logged_out = () => ({
    type: "LOGGED_OUT",
});
