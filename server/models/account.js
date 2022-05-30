const prisma = require('../Prisma');

async function createAccount(
  first_name,
  last_name,
  username,
  birth_date,
  level,
  about,
  password,
  account_type,
  gender,
  email,
  phone,
  //status,
  profile_url,
  background_url,
  left_at
) {

  const date = new Date(birth_date);
  

  try {
    const user = await prisma.user.create({
      data: {
        first_name: first_name,
        last_name: last_name,
        username: username,
        birth_date: date,
        level: level,
        about: about,
        password: password,
        account_type: account_type,
        gender: gender,
        email: email,
        phone: phone,
        profile_url: profile_url,
        background_url: background_url,
      },
    });
    return { ok: true, user };
  } catch (error) {
    const errors = [];

    if (typeof(error.meta) !== 'undefined') {
      if (error.meta.target === "username_UNIQUE")
        errors.push("this username is already taken");

      if (error.meta.target === "email_UNIQUE")
        errors.push("this email already exists");
    }

    console.log(error);
    return { ok: false, errors: errors };
  }
}


const selectByUsernameOrEmail = async (value) => {
    try {
        const user = await prisma.user.findFirst({
            where: {
                OR: [
                    {
                        username: value,
                    },
                    {
                        email: value,
                    },
                ],
            }
        }); 
        return {ok: true, user: user}
    } catch (error) {
        return {ok: false, user: error}
    }
}

const selectByUsername = async (value) => {
  try {
      const user = await prisma.user.findFirst({
        where: {
          username: value,
        },
        select: {
          user_id: true,
          first_name: true,
          last_name: true, 
          username: true,
          level: true, 
          about: true,
          account_type: true, 
          profile_url: true,
          background_url: true,
        },
      }); 
      return {ok: true, user: user}
  } catch (error) {
      return {ok: false, user: error}
  }
}




module.exports = {
  createAccount,
  selectByUsernameOrEmail, 
  selectByUsername
};

/*
first_name: first_name,
      last_name: last_name,
      username: username,
      birth_date: birthday,
      level: level,
      about: about,
      password: password,
      account_type: account_type,
      gender: gender,
      email: email,
      phone: phone,
      status: status,
      profile_url: profile_url,
      background_url: background_url,
      left_at: null,*/
