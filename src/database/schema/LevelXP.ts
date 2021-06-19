import { Schema, model } from "mongoose";

const userSchema = new Schema({
	user: {
		type: String,
		unique: true,
	},
	xp: Number,
	level: Number,
	minxp: Number,
	maxxp: Number,
});

const xpSchema = new Schema({
	guild: {
		type: String,
		unique: true,
	},
	users: [userSchema],
});

export const LevelXP = model("LevelXP", xpSchema);