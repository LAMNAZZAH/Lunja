const univuserModel = require("../models/univuser");



const addUnivuser = async (req, res) => {
  const { createUnivuser } = univuserModel;
  const { body } = req;

  await createUnivuser(
    body.userId,
    body.universityId,
    body.degree,
    body.specialityId,
    body.year
  ).then( data => {

    if (!data.ok) return res.status(400).json(data);

    return res.status(200).json(data);
  });
};






const selectUniversityByUserId = async (req, res) => {
  const { findUniversityByUserId } = univuserModel;
  const userId = req.query.userId;

  await findUniversityByUserId(userId).then((data) => {
    //? I am filtring data here because I can't use select and include on the same level in prisma

    if (!data?.univuser) return res.status(204).json(data);

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

      return res.status(200).json(data);
    }

    return res.status(400).json(data);
  });
};




const selectUsersByUniversityId = async (req, res) => {
  const { findManyUsersByUniversityId } = univuserModel;
  const { query } = req.query;

  await findManyUsersByUniversityId(query).then((data) => {

    if (!data.ok) return res.status(400).json(data);

    const toExclude = [
      "university_user_id",
      "university_id",
      "joined_at",
      "left_at",
      "degree_optained",
      "status",
      "speciality_id",
    ];

    data.users.forEach((user) => {
      toExclude.forEach((field) => {
        delete user[field];
      });
      user["username"] = user.user["username"];
      user["fname"] = user.user["first_name"];
      user["lname"] = user.user["last_name"];
      user["profile_url"] = user.user["profile_url"];
      delete user.user;
    });

    return res.status(200).json(data);
  });
};


const removeUnivuser = async (req, res) => {
  const { deleteUnivuser } = univuserModel;
  const { userId, universityId, specialityId } = req.query;
  console.log("userId: : : " + userId);

  await deleteUnivuser(userId, universityId, specialityId).then(data => {

    if (!data.ok) return res.status(400).json(data); 
    
    return res.status(200).json(data);
  })
}



module.exports = {
  addUnivuser,
  selectUniversityByUserId,
  selectUsersByUniversityId,
  removeUnivuser,
};
