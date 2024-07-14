async function getCombinedData() {
    try {
      const [todoResponse, postResponse] = await Promise.all([
        fetch("https://jsonplaceholder.typicode.com/todos/1").then(response => response.json()),
        fetch("https://jsonplaceholder.typicode.com/posts/1").then(response => response.json())
      ]);
  
      const combinedData = {
        todo: todoResponse,
        post: postResponse
      };
  
      return combinedData;
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error; // Optionally rethrow the error for handling elsewhere
    }
  }
  
  getCombinedData()
    .then(data => console.log(data))
    .catch(error => console.error("Error in getCombinedData:", error));
  