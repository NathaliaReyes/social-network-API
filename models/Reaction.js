const { Schema, Types } = require('mongoose');
const dayjs = require('dayjs');

// Schema to validate the reaction data
const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },
        reactionBody: {
            type: String,
            required: true,
            maxLength: 280,
        },
        username: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: (timestamp) => dayjs(timestamp).format(`MMM DD[st], YYYY [at] h:mma`)        },
    },
    {
        toJSON: {
            getters: true,
        },
        id: false,
    }

    

);



module.exports = reactionSchema;