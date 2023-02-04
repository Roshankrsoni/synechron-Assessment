// Read user from the localStorage
export function readUserFromLocalStorage() {
  try {
    const serialized = localStorage.getItem("user");
    if (serialized === null) {
      return undefined;
    }
    return JSON.parse(serialized);
  } catch (err) {
    return undefined;
  }
}

// Helpers
export const timeoutPromise = (ms) => {
  let ctr, rej;
  const res = new Promise(function (resolve, reject) {
    ctr = setTimeout(resolve, ms);
    rej = reject;
  });
  res.cancel = () => {
    clearTimeout(ctr);
    rej(Error("Cancelled"));
  };
  return res;
};
