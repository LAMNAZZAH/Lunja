const universityModel = require("../models/university");

const createUniversityController = async (req, res, next) => {
  const { createUniversity } = universityModel;
  const { body } = req;

  await createUniversity(body.name, body.description).then((data) => {
    if (data.ok) res.status(200).json(data);
    else res.status(400).json(data);
  });
};

const getUniversitiesController = async (req, res, next) => {
  const { fetchAllUniveristies } = universityModel;

  await fetchAllUniveristies().then((data) => {
    if (data.ok) {
      const univs = [];
      data.universities.forEach(univ => {
        univs.push(univ['name']);
      })
      res.status(200).json({ok: true, universities: univs});
    }
    else res.status(400).json(data);
  });
};

module.exports = {
  createUniversityController,
  getUniversitiesController,
};
