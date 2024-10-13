export const getUserName = () => {
    const userDivide = process.argv.slice(2);
    const user = userDivide.toString().split("=").pop();

    if (!user) return 'stranger';
    
    return user;
  };
  
  