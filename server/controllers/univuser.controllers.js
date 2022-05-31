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
    else res.status(400).json(data);
  });
};

const selectUniversityByUserId = async (req, res) => {
  const { findUniversityByUserId } = univuserModel;
  const userId = req.query.userId;

  await findUniversityByUserId(userId).then((data) => {
    //? I am filtring data here because I can't use select and include on the same level in prisma
    if (data?.ok && data?.univuser) {
      const univuser = data.univuser;

      univuser["university"] = univuser?.university["name"];
      univuser["speciality"] = univuser?.speciality["name"];

      const toExclude = [
        "university_user_id",
        "user_id",
        //"university_id",
        "left_at",
        "status",
        "univ",
        "spec",
      ];
      toExclude.forEach((field) => delete univuser[`${field}`]);

      res.status(200).json(data);
    } else if (!data?.univuser) res.status(204).json(data);
    else res.status(400).json(data);
  });
};

const selectUsersByUniversityId = async (req, res) => {
  const { findManyUsersByUniversityId } = univuserModel;
  const { query } = req.query;

  await findManyUsersByUniversityId(query).then((data) => {
    if (data.ok) {
      const toExclude = [
        "university_user_id",
        "university_id",
        "joined_at",
        "left_at",
        "degree_optained",
        "status",
        "speciality_id",
      ];
      data.users.forEach(user => {
        toExclude.forEach(field => {
          delete user[field]
        });
        user['username'] = user.user['username'];
        user['fname'] = user.user['first_name'];
        user['lname'] = user.user['last_name'];
        user['profile_url'] = user.user['profile_url'];
        delete user.user;    
      });

      res.status(200).json(data);
    } else res.status(400).json(data);
  });
};

module.exports = {
  createUnivuserController,
  selectUniversityByUserId,
  selectUsersByUniversityId,
};
