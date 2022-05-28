const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const createUniversity = async (_name, description) => {
    try {
        const university = await prisma.university.create({
            data: {
                name: _name,
                description: description
            }
        });
        return { ok: true, university };
    } catch (error) {
        return { ok: false, errors: error }
    }
}


const fetchAllUniveristies = async () => {
    try {
        const universities = await prisma.university.findMany({
            select: {
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
    fetchAllUniveristies
}