const prisma = require("../instance");


const createPost = async (userId, classId, imageName,  content) => {
    try {
        const createPost = await prisma.post.create({
            data: {
                user_id: parseInt(userId), 
                class_id: parseInt(classId), 
                content: content,
                image_url: imageName
            }
        });
        return { ok: true, createPost }
    } catch (error) {
        console.log(error);
        return { ok: false, error }
    }
}

const findManyPosts = async () => {
    try {
        const Posts = await prisma.post.findMany({
            take: 10,
            orderBy: {
                created_at: 'desc'
            },
            include: {
                user: {
                    select: {
                        first_name: true, 
                        last_name: true,
                        profile_url: true,
                    }
                },
                theclass: {
                    select: {
                        name: true,
                    }
                },
                
            }
        });
        return { ok: true, Posts }
    } catch (error) {
        return { ok: false, error }
    }
}

module.exports = {
    createPost,
    findManyPosts
}