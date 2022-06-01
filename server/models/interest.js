const prisma = require("../instance");

const findManyInterestsByUserId = async (userId) => {
  try {
    const interests = await prisma.user_has_interest.findMany({
      where: {
        user_id: userId,
      },
      include: {
        interest: {
          select: {
            interest_id: true,
            name: true,
          },
        },
      },
    });
    return { ok: true, interests };
  } catch (error) {
    console.log(error);
    return { ok: false, error };
  }
};

const createUserInterest = async (interestId, userId) => {
  try {
    const userInterest = await prisma.user_has_interest.create({
      data: {
        interest_id: parseInt(interestId), 
        user_id: parseInt(userId),
      }
    });
    return { ok: true, userInterest }
  } catch (error) {
    console.log(error);
    return { ok: false, error }
  }
}

const deleteUserInterest = async (interestId, userId) => {
  try {
    const deleteInterest = await prisma.user_has_interest.delete({
      where: {
        user_id_interest_id: {
          user_id: parseInt(userId),
          interest_id: parseInt(interestId),
        },
      },
    });
    return { ok: true, deleteInterest };
  } catch (error) {
    console.log(error);
    return { ok: false, error };
  }
};


const findManyInterestsByInput = async (Input) => {
  try {
    const searchInterest = await prisma.interest.findMany({
      take: 4,
      where: {
        name: {
          startsWith: Input
        }
      }, 
    }); 
    return { ok: true, searchInterest };
  } catch (error) {
    console.log(error);
    return { ok: false, error };
  }
}

module.exports = {
  findManyInterestsByUserId,
  deleteUserInterest,
  findManyInterestsByInput,
  createUserInterest
};
