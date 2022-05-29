const universityModel = require("../models/university");

const createUniversityController = async (req, res, next) => {
  const { createUniversity } = universityModel;
  const { body } = req;

  await createUniversity(body.name, body.description).then((data) => {
    if (data.ok) res.status(200).json(data);
    else res.status(400).json(data);
  });
};

const selectUniversitiesController = async (req, res, next) => {
  const { findAllUniveristies } = universityModel;

  await findAllUniveristies().then((data) => {
    if (data.ok) {
      data.universities.forEach(univ => {
        univ['value'] = univ['university_id'];
        delete univ['university_id'];
        univ['label'] = univ['name'];
        delete univ['name'];
      })
      
      res.status(200).json(data);
    }
    else res.status(400).json(data);
  });
};

module.exports = {
  createUniversityController,
  selectUniversitiesController,
};
