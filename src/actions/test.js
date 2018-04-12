export const fetchTestData = () => {
  return {
    // ["API_CALL"]: {
    //   actionTypes: ["TEST_REQUEST", "TEST_SUCCESS", "TEST_FALIURE"],
    //   endPointURL: '/Test',
    //   requestType: 'GET',
    //   //requestData: reqdata,
    //   contentType: 'application/x-www-form-urlencoded',
    //   authenticationRequired: false
    // }
    type: "TEST_SUCCESS",
    response: { data: "New Data" }
  }
}

