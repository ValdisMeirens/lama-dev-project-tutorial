// temp data

import { Post, User } from "./models";
import { connectToDb } from "./util";

// const users = [
//   { id: 1, username: "John" },
//   { id: 2, username: "jane" },
//   { id: 3, username: "Jaa" },
// ];

// const posts = [
//   { id: 1, title: "post1", body: "post1post1post1", userId: "1" },
//   { id: 2, title: "post2", body: "post2post2post2", userId: "2" },
//   { id: 3, title: "post3", body: "post3post3post3", userId: "3" },
// ];

export const getPosts = async () => {
  try {
    connectToDb();
    const posts = await Post.find();
    return posts;
  } catch (err) {
    console.log(err);
    throw new Error(err);
  }
};

export const getPost = async (slug) => {
  try {
    connectToDb();
    const post = await Post.findOne({ slug: slug });
    return post;
  } catch (err) {
    console.log(err);
    throw new Error(err);
  }
};

export const getUsers = async () => {
  try {
    connectToDb();
    const users = await User.find();
    return users;
  } catch (err) {
    console.log(err);
    throw new Error(err);
  }
};

export const getUser = async (id) => {
  try {
    connectToDb();
    const user = await User.findById({ id: parseInt(id) });
    return user;
  } catch (err) {
    console.log(err);
    throw new Error(err);
  }
};
