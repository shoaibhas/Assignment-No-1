import institutemodel from "../Model/institute/institute.js";
import studentModel from "../Model/student/student.js";
import teachermodel from "../Model/teacher/teacher.js";
import productmodel from "../Model/product/product.js";
import unitmodel from "../Model/product/unit.js";
import coursemodel from "../Model/institute/course.js";
import actormodel from "../Model/actormovie/actor.js";
import moviemodel from "../Model/actormovie/movie.js";
import actormoviemodel from "../Model/actormovie/actormovie.js";
import cnicmodel from "../Model/personcnic/cnic.js";
import personmodel from "../Model/personcnic/person.js";
const initdb = async () => {
  await studentModel.sync({
    alter: true,
    force: false,
  });
  await teachermodel.sync({
    alter: true,
    force: false,
  });
  await institutemodel.sync({
    alter: true,
    force: false,
  });
  await unitmodel.sync({
    alter: true,
    force: false,
  });
  await productmodel.sync({
    alter: true,
    force: false,
  });

  await institutemodel.sync({
    alter: true,
    force: false,
  }),
    await coursemodel.sync({
      alter: true,

      force: false,
    });
  await moviemodel.sync({
    alter: true,
    force: false,
  });
  await actormodel.sync({
    alter: true,
    force: false,
  });

  await actormoviemodel.sync({
    alter: true,
    force: false,
  });
  await cnicmodel.sync({
    alter: true,
    force: false,
  });
};
await personmodel.sync({
  alter: true,
  force: false,
});

export default initdb;
