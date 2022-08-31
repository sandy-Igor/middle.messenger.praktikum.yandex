import store from "./Store"


export const getUserState = () => {
    const state = store.getState();
    return state.user ?? {}
}