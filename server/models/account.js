const { response } = require("express");

const createAccount = (pool) => {
  return async (user) => {
    const query = await prisma.user.create({
      data: {
        user
      },
    });

    if (res?.rows?.length <= 0) return null;
    
    return res.rows[0];
  };
};

module.exports = (pool) => {
  return {
    createAccount: createAccount(pool),
  };
};
