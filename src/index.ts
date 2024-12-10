import { PrismaClient } from "@prisma/client";

interface UpdateParams {
    firstName: string;
    lastName: string;
}
const prisma = new PrismaClient();

// to INSERT data in table
// async function insertUser(email: string, password: string, firstName: string, lastName: string) {
 
//     const res = await prisma.user.create({
//         data: {
//             email,
//             password,
//             firstName,
//             lastName
//         },
//         select: {
//             id: true,
//             password: true,
//             firstName: true
//         },
//     })
//     console.log(res);   
// }

// insertUser("usersecond22@gmail.com", "password", "user", "second")




// to UPDATE data in table
// async function updateUser(email: string, {
//     firstName,
//     lastName
// }: UpdateParams) {
//     const res = await prisma.user.update({
//         where: {email: email},
//         data: {
//             firstName,
//             lastName
//         }
//     });
//     console.log(res);
// }

// updateUser("usersecond22@gmail.com",{
//     firstName: "new fname",
//     lastName: "new lname"
// })


// to GET data from table

async function getUser(email: string) {
    const user = await prisma.user.findFirst({
        where: {
            email: email
        }
    })
    console.log(user);
}

getUser("harrypotter12@gmail.com");