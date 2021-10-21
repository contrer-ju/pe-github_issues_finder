export default function showResponseMessage(
  code,
  setAResponseCode,
  setAResponseMessage
) {
  switch (code) {
    case 200:
      setAResponseCode("200 OK");
      setAResponseMessage("The request was succeeded.");
      break;
    case 202:
      setAResponseCode("202 Accepted");
      setAResponseMessage(
        "The request has been accepted, but the processing has not been completed."
      );
      break;
    case 400:
      setAResponseCode("400 Bad Request");
      setAResponseMessage(
        "The server cannot process the request due to client error."
      );
      break;
    case 401:
      setAResponseCode("401 Unauthorized / 403 Forbidden");
      setAResponseMessage(
        "The request has not been applied because it lacks valid authentication credentials."
      );
      break;
    case 403:
      setAResponseCode("401 Unauthorized / 403 Forbidden");
      setAResponseMessage(
        "The request has not been applied because it lacks valid authentication credentials."
      );
      break;
    case 404:
      setAResponseCode("404 Not Found");
      setAResponseMessage("The server can't find the requested resource.");
      break;
    case 500:
      setAResponseCode("500 Internal Server Error");
      setAResponseMessage(
        "The server encountered a condition that prevented it from fulfilling the request."
      );
      break;
    case 503:
      setAResponseCode("503 Service Unavailable");
      setAResponseMessage("The server is not ready to handle the request.");
      break;
    case 504:
      setAResponseCode("504 Gateway Timeout");
      setAResponseMessage(
        "The server did not get a response in time, that it needed in order to complete the request."
      );
      break;
    default:
      setAResponseCode(code);
      setAResponseMessage(
        "Please visit: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status for more information about it."
      );
  }
}
