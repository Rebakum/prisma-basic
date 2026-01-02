import { prisma } from "./lib/prisma";

//create a new user
// async function run() {
//   const createdUser = await prisma.user.create({
//     data: {
//       name: "jhankar mahbub",
//       email: "jhankar@gmail.com",
//     },
//   });
//   console.log("Create User:", createdUser);
// }
// run();

//create a new post for user id 1
// async function runPost() {
//   const CreatedPost = await prisma.post.create({
//     data: {
//       title: "this is my second post",
//       content: "this is the content of my second post",
//       authorId: 1,
//     },
//   });
//   console.log("CreatedPost:", CreatedPost);
// }
// runPost();

// async function runProfile() {
//   const createProfile = await prisma.profile.create({
//     data: {
//       Bio: "I am a web developer",
//       userId: 1,
//     },
//   });
//   console.log(createProfile);
// }

// runProfile();

// async function runFindUsers() {
// find all users with their posts and profile
//   const allUsers = await prisma.user.findMany({
//     include: {
//       posts: true,
//       profile: true,
//     },
// or
// select: {
//   id: true,
//   name: true,
//   email: true,
//   role: true,
//   posts: true,
//   profile: true,
// },
//   });
//   console.dir(allUsers, { depth: Infinity });
// }
// runFindUsers();

async function run() {
  // update user profile where userId is 1
  //   const updateUser = await prisma.profile.update({
  //     where: {
  //       userId: 1,
  //     },
  //     data: {
  //       Bio: "I am a full stack developer",
  //       dateOfBirth: new Date("2025-12-31T10:35:23.032Z"),
  //     },
  //     select: {
  //       id: true,
  //       Bio: true,
  //       dateOfBirth: true,
  //       user: {
  //         select: {
  //           name: true,
  //           email: true,
  //         },
  //       },
  //     },
  //   });
  //   console.log("Updated User:", updateUser);
  // delete us;er with id 1
  // const deletedUser = await prisma.user.delete({
  //   where: {
  //     id: 2,
  //   },
  // });
  // console.log({ deletedUser });
  //upsert profile for user id 1

  const upsertUser = await prisma.user.upsert({
    where: {
      email: "jhunkar@gmail.com",
    },
    update: {
      name: "Jhunkar Mahbub 2",
    },
    create: {
      name: "Jhunkar Mahbub 5",
      email: "jhunkar@gmail.com",
    },
  });
  console.log(upsertUser);
  //get single user with id
  //   const getUserDataById = await prisma.user.findUnique({
  //     where: {
  //       id: 1,
  //     },
  //     include: {
  //       profile: true,
  //     },
  //   });
  //   console.log(getUserDataById);
}

run();
