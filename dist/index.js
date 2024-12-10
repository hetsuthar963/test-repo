"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
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
function getUser(email) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield prisma.user.findFirst({
            where: {
                email: email
            }
        });
        console.log(user);
    });
}
getUser("harrypotter12@gmail.com");
