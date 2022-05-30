const interestModel = require('../models/interest');


const selectInterestByUserId = async (req, res) => {
    const { findManyInterestsByUserId } = interestModel;
    const userId = parseInt(req.query.userId)

    if (!userId) return res.status(400).json({ok: false, errors: ['Something went Wrong']})

    await findManyInterestsByUserId(userId).then(data => {
        if (data?.ok) {
            const interests = []
            data?.interests.forEach(interest => {
                interests.push({id: interest.interest_id,name: interest.interest['name']})
            });
            return res.status(200).json({ok: true, interests});
        }

        else return res.status(400).json(data);
    })
}

const deleteUserInterest = async (req, res) => {
    const { deleteUserInterest } = interestModel;
    const { userId, interestId } = req.query

    await deleteUserInterest(interestId, userId).then(data => {
        if (data?.ok) {
            return res.status(200).json(data);
        } else return res.status(400).json(data);
    })
}


module.exports = {
    selectInterestByUserId,
    deleteUserInterest
}