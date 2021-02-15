import axios from "axios";

const getQueryHistory = () => {
  return JSON.parse(localStorage.queryHistory);
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
    console.log("querying firebase");
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
