import studentmodel from "../../Model/student/student.js";
const StudentController = {
  //create student data
  create: async (req, res) => {
    try {
      const { firstName, lastName, rollNo, phone } = req.body;
      const student = await studentmodel.create({
        firstName,
        lastName,
        rollNo,
        phone,
      });
      return res.status(201).json({ message: "student created", student });
    } catch (err) {
      return res.status(201).json({ message: "something bad happening", err });
    }
  },
  getall: async (req, res) => {
    const student = await studentmodel.findAll({
      where: { rollNo: "1055" },
    });
    res.json({ student });
  },
  getone: async (req, res) => {
    try {
      const { id } = req.params;
      const student = await studentmodel.findOne({
        where: { id },
      });
      if (!student) {
        return res.status(404).json({ message: "student not found" });
      }
      res.json({ student });
    } catch (err) {
      return res.status(404).json({ message: "something bad happening", err });
    }
  },
  search: async (req, res) => {
    try {
      const { id } = req.body;
      const student = await studentmodel.findOne({ where: { id } });
      if (!student) {
        return res.status(404).json({ message: "student not searches" });
      }
      res.json({ student });
    } catch (err) {
      return res.status(200).json({ message: "something bad happening", err });
    }
  },
  delete: async (req, res) => {
    try {
      const { id } = req.params;
      const student = await studentmodel.findOne({
        where: { id },
      });
      if (!student) {
        return res
          .status(404)
          .json({ message: "student not found for deleted" });
      }
      await student.destroy();
      res.json({ message: "student deleted successfuly" });
      // res.json({ student });
    } catch (err) {
      return res.status(500).json({ message: "something bad happening", err });
    }
  },
  update: async (req, res) => {
    try {
      const { id } = req.params;
      const { firstName, lastName, rollNo, phone } = req.body;

      const student = await studentmodel.findOne({
        where: { id },
      });
      if (!student) {
        return res
          .status(404)
          .json({ message: "student not found for update" });
      }
      student.firstName = firstName;
      student.lastName = lastName;
      student.rollNo = rollNo;
      student.phone = phone;
      await student.save();
      res.json({ message: "student updated", student });
    } catch (err) {
      return res.status(500).json({ message: "something bad happening", err });
    }
  },
};
// const studentjson = [
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

// const StudentController = {
//   alluser: (req, res) => {
//     res.json(studentjson);
//   },
//   create: (req, res) => {

//     const { cnic } = req.params;
//     res.json({
//       cnic,
//       message: "create student",
//     });
//   },
//   getall: (req, res) => {
//     res.json({
//       message: "all student",
//     });
//   },
//   getone: (req, res) => {
//     res.json({
//       message: "one student",
//     });
//   },
//   update: (req, res) => {
//     res.json({
//       message: "update student",
//     });
//   },
//   delete: (req, res) => {
//     res.json({
//       message: "delete student",
//     });
//   },
// };
export default StudentController;
