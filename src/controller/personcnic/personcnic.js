import cnicmodel from "../../Model/personcnic/cnic.js";
import personmodel from "../../Model/personcnic/person.js";

const personcnicController = {
  create: async (req, res) => {
    // await cnicmodel.create({
    //   cnicNo: "rr",
    //   cnicId: 1,
    // });
    // res.json(" cnic create");

    await personmodel.create({
      name: "shoaib",
      cnic1Id: 1,
    });
    res.json(" cnic create");
  },
};
export default personcnicController;
