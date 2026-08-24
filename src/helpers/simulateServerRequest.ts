export const simulateServerRequest = <T>(
  data: T,
  delay: number = 2000,
): Promise<T> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, delay);
  });
};
