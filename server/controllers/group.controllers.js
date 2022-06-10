const groupModels = require('../models/group'); 

const selectGroupsByAdminId = async (req, res) => {
    const { findManyGroupsByAdminId } = groupModels;
    const { adminId } = req.query.adminId

    await findManyGroupsByAdminId(adminId).then(data => {

        if (!data.ok) return res.status(500).json(data);
        const toExclude = ['status', 'created_at', 'deleted_at', 'admin_id', 'university_id']; 
        data.myGroups.forEach(group => {
            group['university_name'] = group.university['name']; 
            delete group['university'];
            toExclude.forEach(field => {
                delete group[field]
            })
        });
        return res.status(200).json(data)

    })
}

module.exports = {
    selectGroupsByAdminId,
}