export const getAuthConfig = (getState, extraHeaders = {}) => {
  const {
    userLogin: { userInfo },
  } = getState();

  return {
    headers: {
      Authorization: `Bearer ${userInfo.token}`,
      ...extraHeaders,
    },
  };
};

export const extractErrorMessage = (err) => {
  const body = err.response && err.response.data;

  if (body && body.exception) {
    return body.exception;
  }

  if (body && Array.isArray(body.messages) && body.messages.length > 0) {
    return body.messages[0];
  }

  return err.message;
};
