const specialityModel = require('../models/speciality'); 

const selectSpecialitiesByUniversityId = async (req, res) => {
    const { findAllSpecialitiesByUniversityId } = specialityModel;
    const university = req.query.university;
    console.log(university);

    await findAllSpecialitiesByUniversityId(university).then(data => {
        if (data.ok) {
            data.specialities.forEach(spec => {
                delete spec['university_id'];
                delete spec['university_speciality_id'];
                spec['value'] = spec['speciality_id'];
                delete spec['speciality_id'];
                spec['label'] = spec['speciality'].name;
                delete spec['speciality'];
            })
            res.status(200).json(data)
        } else res.status(400).json(data);
    })
}

module.exports = {
    selectSpecialitiesByUniversityId,
}