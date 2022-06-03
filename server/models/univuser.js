const prisma = require("../instance");

const createUnivuser = async (
  userId,
  universityId,
  degree,
  specialityId,
  year
) => {
  try {
    const univuser = await prisma.university_user.create({
      data: {
        user_id: parseInt(userId),
        university_id: parseInt(universityId),
        degree_optained: degree || null,
        speciality_id: parseInt(specialityId),
        year: parseInt(year) || null,
      },
    });
    return { ok: true, univuser };
  } catch (error) {
    console.log(error);
    return { ok: false, error };
  }
};

const findUniversityByUserId = async (userId) => {
  try {
    const univuser = await prisma.university_user.findFirst({
      where: {
        user_id: parseInt(userId),
      },
      include: {
        university: {
          select: {
            name: true,
          },
        },
        speciality: {
          select: {
            name: true,
          },
        },
      },
    });
    if (univuser == null) return { ok: true, univuser: null };
    return { ok: true, univuser };
  } catch (error) {
    return { ok: false, error };
  }
};

const findManyUsersByUniversityId = async (universityId) => {
  try {
    const users = await prisma.university_user.findMany({
      where: {
        university_id: parseInt(universityId),
      },
      include: {
        user: {
          select: {
            username: true,
            first_name: true,
            last_name: true,
            profile_url: true,
          },
        },
      },
    });
    return { ok: true, users };
  } catch (error) {
    console.log(error);
    return { ok: false, error };
  }
};

const deleteUnivuser = async (userId, universityId, specialityId) => {
  try {
    const deleteUnivuser = await prisma.university_user.delete({
      where: {
        user_id_university_id_speciality_id: {
          user_id: parseInt(userId), 
          university_id: parseInt(universityId), 
          speciality_id: parseInt(specialityId),
        }
      }
    }); 
    return { ok: true, deleteUnivuser }
  } catch (error) {
    console.log(error);
    return { ok: false, error }
  }
}

module.exports = {
  createUnivuser,
  findUniversityByUserId,
  findManyUsersByUniversityId,
  deleteUnivuser
};
