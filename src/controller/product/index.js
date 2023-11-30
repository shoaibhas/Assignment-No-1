import { json } from "sequelize";
import productmodel from "../../Model/product/product.js";
import unitmodel from "../../Model/product/unit.js";

const ProductController = {
  //create product data

  create: async (req, res) => {
    const { productName, expiryDate, price } = req.body;
    // const { productName, expiryDate, price } = req.body;
    // const unit = await unitmodel.create({
    //   unitName: "litre",
    //   quantity: "30",
    // });
    const product = await productmodel.create({
      productName,
      expiryDate,
      price,
      // productName: "streplis",
      // expiryDate: "2030",
      // price: "100",
      // unitId: 1,
    });
    res.json({
      message: "created",
      product,
    });
    // // const data = await productmodel.findByPk(2);
    // const data = await unitmodel.findByPk(1, {
    //   include: [productmodel],
    //   logging: true,
    // });
    // res.json({ message: "product created", data });
  },

  // create: async (req, res) => {
  //   try {
  //     const { productName, type, expiryDate, price } = req.body;
  //     const product = await productmodel.create({
  //       productName,
  //       type,
  //       expiryDate,
  //       price,
  //     });
  //     return res.status(201).json({ message: "product created", product });
  //   } catch (err) {
  //     return res.status(201).json({ message: "something bad happening", err });
  //   }
  // },
  getall: async (req, res) => {
    const product = await productmodel.findAll({
      where: { expiryDate: "1055" },
    });
    res.json({ product });
  },
  getone: async (req, res) => {
    try {
      const { id } = req.params;
      const product = await productmodel.findOne({
        where: { id },
      });
      if (!product) {
        return res.status(404).json({ message: "product not found" });
      }
      res.json({ product });
    } catch (err) {
      return res.status(404).json({ message: "something bad happening", err });
    }
  },
  //   search: async (req, res) => {
  //     try {
  //       const productName = req.body.productName;
  //       const product = productmodel.findAll({ productName });
  //       if (!product) {
  //         return res.status(404).json({ message: "product not searches" });
  //       }
  //       res.json({ product });
  //     } catch (err) {
  //       return res.status(200).json({ message: "something bad happening", err });
  //     }
  //   },
  delete: async (req, res) => {
    try {
      const { id } = req.params;
      const product = await productmodel.findOne({
        where: { id },
      });
      if (!product) {
        return res
          .status(404)
          .json({ message: "product not found for deleted" });
      }
      await product.destroy();
      res.json({ message: "product deleted successfuly" });
      // res.json({ product });
    } catch (err) {
      return res.status(500).json({ message: "something bad happening", err });
    }
  },
  update: async (req, res) => {
    try {
      const { id } = req.params;
      const { productName, type, expiryDate, price } = req.body;

      const product = await productmodel.findOne({
        where: { id },
      });
      if (!product) {
        return res
          .status(404)
          .json({ message: "product not found for update" });
      }
      product.productName = productName;
      product.type = type;
      product.expiryDate = expiryDate;
      product.price = price;
      await product.save();
      res.json({ message: "product updated", product });
    } catch (err) {
      return res.status(500).json({ message: "something bad happening", err });
    }
  },
};
// const productjson = [
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

// const ProductController = {
//   alluser: (req, res) => {
//     res.json(productjson);
//   },
//   create: (req, res) => {

//     const { cnic } = req.params;
//     res.json({
//       cnic,
//       message: "create product",
//     });
//   },
//   getall: (req, res) => {
//     res.json({
//       message: "all product",
//     });
//   },
//   getone: (req, res) => {
//     res.json({
//       message: "one product",
//     });
//   },
//   update: (req, res) => {
//     res.json({
//       message: "update product",
//     });
//   },
//   delete: (req, res) => {
//     res.json({
//       message: "delete product",
//     });
//   },
// };
export default ProductController;
