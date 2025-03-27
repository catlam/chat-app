import { config } from "dotenv";
import { connectDB } from "../lib/db.js";
import User from "../models/user.model.js";

config();

const seedUsers = [
    // Female Users
    {
        email: "emma.thompson@example.com",
        fullName: "Emma Thompson",
        password: "123456",
        profilePic: "https://i.pinimg.com/736x/66/09/da/6609da9ce2f30496520a6ad6d4cadba4.jpg",
    },
    {
        email: "olivia.miller@example.com",
        fullName: "Olivia Miller",
        password: "123456",
        profilePic: "https://i.pinimg.com/736x/56/d6/5f/56d65f27ec9f2c3fa6dc13e1d59f9a26.jpg",
    },
    {
        email: "sophia.davis@example.com",
        fullName: "Sophia Davis",
        password: "123456",
        profilePic: "https://i.pinimg.com/736x/b7/9d/c9/b79dc9e6696b8501a8a07d87c0d24e53.jpg",
    },
    {
        email: "ava.wilson@example.com",
        fullName: "Ava Wilson",
        password: "123456",
        profilePic: "https://i.pinimg.com/736x/50/a5/c5/50a5c5d2c8633d02d457575b3c82faec.jpg",
    },
    {
        email: "isabella.brown@example.com",
        fullName: "Isabella Brown",
        password: "123456",
        profilePic: "https://i.pinimg.com/236x/f9/b6/3d/f9b63da48a7844aa48e294bc5b05478e.jpg",
    },
    {
        email: "mia.johnson@example.com",
        fullName: "Mia Johnson",
        password: "123456",
        profilePic: "https://i.pinimg.com/736x/77/e8/79/77e87974010bcfd75d7bde2b93113f51.jpg",
    },
    {
        email: "charlotte.williams@example.com",
        fullName: "Charlotte Williams",
        password: "123456",
        profilePic: "https://i.pinimg.com/236x/50/d8/c6/50d8c6456591ba67c134ec5315616ab4.jpg",
    },
    {
        email: "amelia.garcia@example.com",
        fullName: "Amelia Garcia",
        password: "123456",
        profilePic: "https://i.pinimg.com/474x/1c/d2/96/1cd296f1b8043b2e6bcbd3037fdea48f.jpg",
    },

    // Male Users
    {
        email: "james.anderson@example.com",
        fullName: "James Anderson",
        password: "123456",
        profilePic: "https://i.pinimg.com/474x/56/ab/1b/56ab1bb3397ea2745467f70f04d7e5ee.jpg",
    },
    {
        email: "william.clark@example.com",
        fullName: "William Clark",
        password: "123456",
        profilePic: "https://i.pinimg.com/474x/dc/5f/79/dc5f79478029fe4df62edb4e4460d7b9.jpg",
    },
    {
        email: "benjamin.taylor@example.com",
        fullName: "Benjamin Taylor",
        password: "123456",
        profilePic: "https://i.pinimg.com/236x/46/cb/ee/46cbee0706e513f7027918439246ddbf.jpg",
    },
    {
        email: "lucas.moore@example.com",
        fullName: "Lucas Moore",
        password: "123456",
        profilePic: "https://i.pinimg.com/736x/0b/c4/c6/0bc4c6997b0753012f9d025c0e777ab5.jpg",
    },
    {
        email: "henry.jackson@example.com",
        fullName: "Henry Jackson",
        password: "123456",
        profilePic: "https://i.pinimg.com/474x/a5/3c/e9/a53ce9f0fffea3e5697b00f87d443c3d.jpg",
    },
    {
        email: "alexander.martin@example.com",
        fullName: "Alexander Martin",
        password: "123456",
        profilePic: "https://i.pinimg.com/474x/26/f5/52/26f552c34fa4d8eb9c1b6597d3507e8c.jpg",
    },
    {
        email: "daniel.rodriguez@example.com",
        fullName: "Daniel Rodriguez",
        password: "123456",
        profilePic: "https://i.pinimg.com/236x/b5/d0/f0/b5d0f0d72d08d7f3297f645e9f157dbf.jpg",
    },
];

const seedDatabase = async () => {
    try {
        await connectDB();

        await User.insertMany(seedUsers);
        console.log("Database seeded successfully");
    } catch (error) {
        console.error("Error seeding database:", error);
    }
};

// Call the function
seedDatabase();