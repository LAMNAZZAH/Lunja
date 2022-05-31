const prisma = require("../instance");

const createUnivuser = async (
  userId,
  university_id,
  specialityId,
  joinedAt
) => {
  try {
    const univuser = await prisma.university_user.create({
      data: {
        user_id: userId,
        university_id: university_id,
        speciality_id: specialityId,
        joined_at: joinedAt,
      },
    });
    return { ok: true, univuser };
  } catch (error) {
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
              }
          },
          speciality: {
              select: {
                  name: true,
              }
          }
      }
    });
    if (univuser == null) return {ok: true, univuser: null}
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
          }
        }
      }
    });
    return { ok: true, users }
  } catch (error) {
    console.log(error);
    return { ok: false, error }
  }
}

module.exports = {
  createUnivuser,
  findUniversityByUserId,
  findManyUsersByUniversityId
};
