import commentModel from "../model/comments/comment.js";
import followerModel from "../model/follower/follower.js";
import likeModel from "../model/like/like.js";
import postModel from "../model/post/post.js";
import userModel from "../model/user/user.js";
import userFollowerModel from "../model/userfollower/userfollower.js";
import UserLoginModel from "../model/userlogin/user.js";

const initDB = async () => {
  await userModel.sync({
    alter: true,
    force: false,
  });
  await followerModel.sync({
    alter: true,
    force: false,
  });

  await postModel.sync({
    alter: true,
    force: false,
  });
  await likeModel.sync({
    alter: true,
    force: false,
  });
  await commentModel.sync({
    alter: true,
    force: false,
  });

  await userFollowerModel.sync({
    alter: true,
    force: false,
  });
  await UserLoginModel.sync({
    alter: true,
    force: false,
  });
};
export default initDB;
