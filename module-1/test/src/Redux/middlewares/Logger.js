const logger = (store) => (next) => (action) => {
    const currentState = store.getState()
    console.log("current State=>", currentState);
    console.log("Action dispatch=>", action);
    next(action);
    console.log("updated State=>", store.getState());
}
export default logger;