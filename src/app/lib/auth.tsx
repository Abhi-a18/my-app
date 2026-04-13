export const getUserFromLocalStorage = () => {
  if (typeof window === "undefined") return null;

  try {
    const user = localStorage.getItem("user");
    const impersonateUser = localStorage.getItem("impersonateUser");

    const parsedUser = user ? JSON.parse(user) : null;
    const parsedImpersonate = impersonateUser
      ? JSON.parse(impersonateUser)
      : null;

    if (parsedUser?.role === "admin" && parsedImpersonate) {
      return parsedImpersonate;
    }

    return parsedUser;
  } catch {
    return null;
  }
};