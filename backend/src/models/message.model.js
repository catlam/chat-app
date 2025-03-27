import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
    {
        senderId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },
        receiverId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },
        // messageId: {
        //     type: mongoose.Schema.Types.ObjectId,
        //     ref: "Message",
        //     required: false,
        // },
        text: {
            type: String,
        }  ,
        image: {
            type: String,
        }  
    },
    { timestamps: true }
)

const Message = mongoose.model("Message", messageSchema);

export default Message;