const router = require("express").Router();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

router.get("/", async (req, res, next) => {
  res.send({ message: "Ok api is working 🚀" });
});

router.post("/location", async (req, res, next) => {
  const { region, city } = req.body;
  try {
    const createUser = await prisma.location.create({
      data: { region, city },
    });
    res.json(createUser);
  } catch (error) {
    next(error);
  }
});

router.post("/register", async (req, res, next) => {
  const user = {
        first_name: "mohammed",
        last_name: "lamnazzah",
        birth_date: null,
        level: "bac+2",
        about: null,
        password: "weakpass",
        account_type: "student",
        gender: null,
        email: "med@gmail.com",
        phone: null,
        status: "active",
        profile_url: null,
        background_url: null,
        left_at: null
  }
  try {
    const createUser = await prisma.user.create({
      data: user,
    });
    res.json(createUser);
  } catch (error) {
    throw error;
  }
});

router.post("/university", async (req, res, next) => {
  const university = {
        name: "moulay ismail faculte des sciences",
        description: "this is a great univ for scientists",
  }
  try {
    const createUniv = await prisma.university.create({
      data: university,
    });
    res.json(createUniv);
  } catch (error) {
    throw error;
  }
});

router.post("/joinuniv", async (req, res, next) => {
  const User = await prisma.user.findUnique({
    where: {
      user_id: 1, 
    }
  })
  console.log(User);
  const Univ = await prisma.university.findUnique({
    where: {
      university_id: 1,
    }
  })
  console.log(Univ);
  const speciality = await prisma.speciality.findFirst({
    where: {
      name: "administration des systemes et reseaux",
    }
  })
  console.log(speciality);
  const univ_user = {
        user_id: User.user_id,
        university_id: Univ.university_id,
        //joined_at: null,
        left_at: null,
        degree_optained: null,
        status: "active",
        speciality_id: speciality.speciality_id, 
        speciality: speciality.id, 
  }
  if (User.user_id != null && Univ.university_id != null && speciality.speciality_id != null) {
    try {
      const joinuniv = await prisma.university_user.create({
        data: univ_user
      });
      console.log(joinuniv);
      }
      catch (error) {
      throw error;
    }
  }
});

module.exports = router;
