import axios from "axios";

export const getQueryHistory = () => {
  console.log("localStorage.queryHistory", localStorage.queryHistory);
  return localStorage?.queryHistory
    ? JSON.parse(localStorage.queryHistory)
    : {0: 0};
};
const addElementToLocalStorage = (N, nFibonacciElement) => {
  const queryHistory = getQueryHistory();
  localStorage.setItem(
    "queryHistory",
    JSON.stringify({...queryHistory, [N]: nFibonacciElement})
  );
};
export const getN_elementFibonacciAndStoreInLocalStorage = async (N) => {
  try {
    const queryHistory = getQueryHistory();

    if (N in queryHistory) {
      return queryHistory[N];
    }

    const N_elementFibonacciQuery = await axios.get(
      `https://us-central1-get-n-element-fibonacci.cloudfunctions.net/fibonacci?N=${N}`
    );
    const N_elementFibonacci = N_elementFibonacciQuery.data.result;
    addElementToLocalStorage(N, N_elementFibonacci);

    return N_elementFibonacci;
  } catch {
    console.log("error");
  }
};
export const clearQueryHistory = () => {
  localStorage.setItem("queryHistory", JSON.stringify({0: 0}));
};
