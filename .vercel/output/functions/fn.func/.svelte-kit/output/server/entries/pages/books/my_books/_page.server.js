async function load({ fetch, url }) {
  const userfront_id = url.searchParams.get("user");
  console.log("userfront is=====>", userfront_id);
  try {
    const response = await fetch(`/api/users?userfront_id=${userfront_id}`);
    if (!response.ok) {
      return {
        status: response.status,
        error: `Failed to fetch user: ${response.statusText}`
      };
    }
    const userData = await response.json();
    console.log(userData);
    const eBookRes = await fetch(`/api/accessEBook?user_id=${userData.user._id}`);
    const eBooks = await eBookRes.json();
    return {
      props: {
        eBooks
      }
    };
  } catch (error) {
    console.error("Error fetching user:", error);
    return {
      status: 500,
      error: "Internal Server Error"
    };
  }
}
export {
  load
};
