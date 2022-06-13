const prisma = require("../instance");


const findManyGroupsByAdminId = async (adminId) => {
    try {
        const myGroups = await prisma.theclass.findMany({
            where: {
                admin_id: adminId
            },
            include: {
                university: {
                    select: {
                        name: true,
                    }
                }
            }
        });
        return { ok: true, myGroups }
    } catch (error) {
        return { ok: false, error }
    }
}

const createGroup = async (adminId, name, universityId, secret) => {
    try {
        const Secret = await prisma.theclass.create({
            data: {
                admin_id: parseInt(adminId), 
                name: name, 
                university_id: parseInt(universityId), 
                secret: secret,
            }, 
            select: {
                secret: true,
            }
        }); 
        return { ok: true, Secret }
    } catch (error) {
        console.log(error);
        return { ok: false, error }
    }
}

module.exports = {
    findManyGroupsByAdminId,
    createGroup, 
}