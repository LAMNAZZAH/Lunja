const prisma = require('../prisma'); 

const createUnivuser = async (userId, university_id, specialityId, joinedAt) => {
    try {
        const univuser = await prisma.university_user.create({
            data: {
                user_id: userId, 
                university_id: university_id,
                speciality_id: specialityId,
                joined_at: joinedAt,
            }
        }); 
        return { ok: true, univuser };
    } catch (error) {
        return { ok: false, error };
    }
}


module.exports = {
    createUnivuser, 
}