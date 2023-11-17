const OPTIONS = {
  method: (fetchMethod) => ({ method: `${fetchMethod}` }),
  headers: (contentType) => ({
    headers: {
      'Content-Type': `${contentType}`,
    },
  }),
  body: (value) => ({
    body: JSON.stringify(value),
  }),
};

export default OPTIONS;
