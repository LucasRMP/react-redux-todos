export const loadState = () => {
  try {
    const rawState = localStorage.getItem("todos");
    if (rawState === null) return undefined;
    return JSON.parse(rawState);
  } catch (err) {
    return undefined;
  }
};

export const saveState = state => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("todos", serializedState);
  } catch {
    // ignore write errors
  }
};
