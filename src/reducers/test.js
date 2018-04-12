const initialState = {
    status: "Initial Status",
    responseData: "Initial Response Data",
    response: null,

}
export default function testReducer(state = { ...initialState }, action) {
    switch (action.type) {
        case "TEST_REQUEST":
            console.log("Test Requested");
            return { ...state, status: "Requested", response: action.response };
        case "TEST_SUCCESS":
            console.log("Test Succeed", action.response);
            return { ...state, response: action.response, responseData: action.response.data, status: "Succeed" };
        case "Test_FAILURE":
            console.log("Test Failed", action.response);
            return { ...state, status: "Failed", response: action.response };
        default:
            return { ...state };
    }
}