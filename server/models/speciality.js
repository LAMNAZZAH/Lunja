const prisma = require("../prisma");

const findAllSpecialitiesByUniversityId = async (university) => {
  try {
    const specialities = await prisma.university_speciality.findMany({
      where: {
        university_id: parseInt(university),
      },
      include: {
        speciality: {
          select: {
            name: true,
          }
        }
      }
    });
    return { ok: true, specialities };
  } catch (error) {
      console.log(error);
    return { ok: false, errors: error };
  }
};

module.exports = {
    findAllSpecialitiesByUniversityId, 
};
