const { string } = require('joi');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const UserSchema = new Schema ({
    email: {
        type: String,
        unique: true,
        required: true
    },
    confirmpassword: {
        type: String,
        unique: true,
        required: true
    }
});

UserSchema.plugin(passportLocalMongoose);


var User = mongoose.models.User || mongoose.model('User', UserSchema);

module.exports = User;
