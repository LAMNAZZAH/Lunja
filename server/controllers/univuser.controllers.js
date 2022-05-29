const univuserModel = require("../models/univuser");

const createUnivuserController = async (req, res) => {
  const { createUnivuser } = univuserModel;
  const { body } = req;

  await createUnivuser(
    body.userId,
    body.university_id,
    body.specialityId,
    body.joinedAt
  ).then((data) => {

    if (data.ok) res.status(200).json(data);
    else res.status(200).json(data);

  });
};


module.exports = {
    
}