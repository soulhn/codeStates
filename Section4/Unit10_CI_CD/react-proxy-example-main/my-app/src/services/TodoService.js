export const getTodos = async () => {
  const response = await fetch("/api2/todos");
  return await response.json();
};

// export const createBook = async (data) => {
//   const response = await fetch("/api/book", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({ book: data }),
//   });
//   return await response.json();
// };
