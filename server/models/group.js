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

module.exports = {
    findManyGroupsByAdminId,
}