import coursemodel from "../../Model/institute/course.js";
import institutemodel from "../../Model/institute/institute.js";
const InstituteController = {
  //create institute data

  create: async (req, res) => {
    // try {
    // const { instituteName, courses, classes, location } = req.body;
    const course = await coursemodel.create({
      courseName: "database",
      coursesCredit: "4",
      classes: "112",
      instituteId: 3,
    });
    // const institute = await institutemodel.create({
    //   instituteName: "uog",
    //   courses: "cs,bba",
    //   classes: "112",
    //   location: "dsgds6t6e",
    // });
    res.json({ message: "data entered" });
    //   return res.status(201).json({ message: "institute created", institute });
    // } catch (err) {
    //   return res.status(201).json({ message: "something bad happening", err });
    // }
  },
  // create: async (req, res) => {
  //   try {
  //     const { instituteName, courses, classes, location } = req.body;
  //     const institute = await institutemodel.create({
  //       instituteName,
  //       courses,
  //       classes,
  //       location,
  //     });
  //     return res.status(201).json({ message: "institute created", institute });
  //   } catch (err) {
  //     return res.status(201).json({ message: "something bad happening", err });
  //   }
  // },
  // getall: async (req, res) => {
  //   const institute = await institutemodel.findAll();
  //   res.json({ institute });
  // },
  // getone: async (req, res) => {
  //   try {
  //     const { id } = req.params;
  //     const institute = await institutemodel.findOne({
  //       where: { id },
  //     });
  //     if (!institute) {
  //       return res.status(404).json({ message: "institute not found" });
  //     }
  //     res.json({ institute });
  //   } catch (err) {
  //     return res.status(404).json({ message: "something bad happening", err });
  //   }
  // },
  //   search: async (req, res) => {
  //     try {
  //       const instituteName = req.body.instituteName;
  //       const institute = institutemodel.findAll({ instituteName });
  //       if (!institute) {
  //         return res.status(404).json({ message: "institute not searches" });
  //       }
  //       res.json({ institute });
  //     } catch (err) {
  //       return res.status(200).json({ message: "something bad happening", err });
  //     }
  //   },
  delete: async (req, res) => {
    try {
      const { id } = req.params;
      const institute = await institutemodel.findOne({
        where: { id },
      });
      if (!institute) {
        return res
          .status(404)
          .json({ message: "institute not found for deleted" });
      }
      await institute.destroy();
      res.json({ message: "institute deleted successfuly" });
      // res.json({ institute });
    } catch (err) {
      return res.status(500).json({ message: "something bad happening", err });
    }
  },
  update: async (req, res) => {
    try {
      const { id } = req.params;
      const { instituteName, courses, classes, location } = req.body;

      const institute = await institutemodel.findOne({
        where: { id },
      });
      if (!institute) {
        return res
          .status(404)
          .json({ message: "institute not found for update" });
      }
      institute.instituteName = instituteName;
      institute.courses = courses;
      institute.classes = classes;
      institute.location = location;
      await institute.save();
      res.json({ message: "institute updated", institute });
    } catch (err) {
      return res.status(500).json({ message: "something bad happening", err });
    }
  },
};
// const institutejson = [
//   {
//     f_name: "Shoaib",
//     l_name: "Hassan",
//     age: 23,
//     roll_no: "21017119-052",
//   },
//   {
//     f_name: "waqas",
//     l_name: "ahmad",
//     age: 21,
//     roll_no: "21017119-029",
//   },
// ];

// const InstituteController = {
//   alluser: (req, res) => {
//     res.json(institutejson);
//   },
//   create: (req, res) => {

//     const { cnic } = req.params;
//     res.json({
//       cnic,
//       message: "create institute",
//     });
//   },
//   getall: (req, res) => {
//     res.json({
//       message: "all institute",
//     });
//   },
//   getone: (req, res) => {
//     res.json({
//       message: "one institute",
//     });
//   },
//   update: (req, res) => {
//     res.json({
//       message: "update institute",
//     });
//   },
//   delete: (req, res) => {
//     res.json({
//       message: "delete institute",
//     });
//   },
// };
export default InstituteController;
