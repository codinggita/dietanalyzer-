import mongoose from 'mongoose';

const progressSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },
    weight: {
        type: Number,
        required: true,
    },
    caloriesConsumed: {
        type: Number,
        default: 0,
    },
    waterIntake: {
        type: Number, // in liters
        default: 0,
    },
    workoutCompleted: {
        type: Boolean,
        default: false,
    },
    date: {
        type: Date,
        default: Date.now,
    }
}, { timestamps: true });

const Progress = mongoose.model('Progress', progressSchema);
export default Progress;
