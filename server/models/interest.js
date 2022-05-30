const prisma = require('../Prisma'); 


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
                    }
                }
            }
        }); 
        return { ok: true, interests }
    } catch (error) {
        console.log(error);
        return { ok: false, error }
    }
}

const deleteUserInterest = async (interestId, userId) => {
    try {
        const deleteInterest = await prisma.user_has_interest.delete({
            where: {
                user_id: userId, 
                interest_id: interestId,
            }
        });
        return { ok: true, deleteInterest }
    } catch (error) {
        console.log(error);
        return { ok: false, error }
    } 
}


module.exports = {
    findManyInterestsByUserId,
    deleteUserInterest
}