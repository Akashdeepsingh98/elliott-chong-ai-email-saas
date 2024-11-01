import { db } from "./server/db";

// eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
await db.user.create({
    data: {
        firstName: "Elliott",
        lastName: "Chong",
        emailAddress: "testemail@email.com"
    },
});