const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

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
        //status: status,
        profile_url: profile_url,
        background_url: background_url,
        //left_at: ,
      },
    });
    return {ok: true, user}
  } catch (error) { 
      const errors = []

      if (error.meta.target === "username_UNIQUE")  errors.push('this username is already taken')
      if (error.meta.target === "email_UNIQUE") errors.push('this email already exists')

      return { ok: false, errors: errors }
  }
}

module.exports = {
  createAccount,
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
