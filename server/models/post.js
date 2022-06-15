const prisma = require("../instance");


const createPost = async (userId, classId, imageName, byTeacher,  content) => {
    try {
        const createPost = await prisma.post.create({
            data: {
                user_id: parseInt(userId), 
                class_id: parseInt(classId), 
                by_teacher: byTeacher,
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

const findManyPostsByGroupId = async (groupId) => {
    try {
        const groupPosts = await prisma.post.findMany({
            take: 10,
            orderBy: {
                created_at: 'desc'
            },
            where: {
                class_id: parseInt(groupId), 
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
        return { ok: true, groupPosts }
    } catch (error) {
        return { ok: false, error }
    }
}

const findManyPostsByGroupsIds = async (groups) => {
    console.log("groups: " + groups);
    try {
        const myGroupsPosts = prisma.post.findMany({
            where: {
                class_id: {
                    hasEvery: groups,
                }
            }
        });
        return { ok: true, myGroupsPosts }
    } catch (error) {
        return { ok: false, error }
        
    }
}

const findTagsByPostId = async (postId) => {
    try {
        const tags = await prisma.post_has_tag.findMany({
            where: {
                post_id: parseInt(postId), 
            },
            include: {
                tag: {
                    select: {
                        name: true,
                    }
                }
            }
        }); 
        return { ok: true, tags }
    } catch (error) {
        console.log(error);
        return { ok: false, error }
    }
}

const FindFirstPostByUserId = async (userId) => {
    
    try {
        const post = await prisma.post.findFirst({
            orderBy: {
                created_at: 'desc'
            },
            where: {
                user_id: parseInt(userId),
            }
        }); 
        return { ok: true, post }
    } catch (error) {
        console.log(error);
        return { ok: false, error }
    }
}

module.exports = {
    createPost,
    findManyPosts,
    findTagsByPostId,
    FindFirstPostByUserId,
    findManyPostsByGroupId,
    findManyPostsByGroupsIds
}