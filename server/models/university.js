const prisma = require('../instance');

const createUniversity = async (name, description) => {
    try {
        const university = await prisma.university.create({
            data: {
                name: name,
                description: description
            }
        });
        return { ok: true, university };
    } catch (error) {
        return { ok: false, errors: error }
    }
}


const findAllUniveristies = async () => {
    try {
        const universities = await prisma.university.findMany({
            select: {
                university_id: true,
                name: true,
            }
        }); 
        return { ok: true, universities };
    } catch (error) {
        console.log(error);
        return { ok: false, errors: error };
    }
}



module.exports = {
    createUniversity,
    findAllUniveristies
}