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


module.exports = {
    findManyInterestsByUserId,
}