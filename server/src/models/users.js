const {Schema, model, Types} = require('mongoose')
const {ROLES, DEFAULT_ROLE, DEFAULT_USER_SETTINGS} = require('../config/defaultConsts')
const passwordHelper = require('../utils/passwordHelper')

const userSchema = new Schema({
    name: String,
    domains: [
        {
            ref: 'Domain',
            type: Types.ObjectId
        }
    ],
    username: {
        type: String,
        lowercase: true,
        trim: true,
        required: [true, '{PATH} is required.'],
        match: [
            new RegExp('^[a-z0-9_.-]+$', 'i'),
            '{PATH} \'{VALUE}\' is not valid. Use only letters, numbers, underscore or dot.'
        ],
        minlength: 5,
        maxlength: 30,
        index: {
            unique: true,
            collation: {locale: 'en', strength: 2}
        },
    },
    password: {
        type: String,
        private: true,
        required: true,
        maxlength: 100,
    },
    role: {
        type: String,
        enum: ROLES,
        default: DEFAULT_ROLE
    },
    address: {
        type: String,
        private: true,
    },
    email: {
        type: String,
        unique: true,
        match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
    },
    isEmailVerify: {
        type: Boolean,
        private: true,
        default: false
    },
    whatsApp: {
        type: String,
        private: true,
    },
    phoneNumber: {
        type: String,
        private: true,
    },
    mobile: {
        type: String,
        private: true,
    },
    isMobileVerify: {
        type: Boolean,
        private: true,
        default: false
    },
    settings: {
        type: Object,
        default: DEFAULT_USER_SETTINGS
    },
}, {
    timestamps: true,
    toJSON: {virtuals: true}
})

userSchema.pre('save', function (next) {
    if (this.isModified('password')) // If the pw has been modified, then encrypt it again
        this.password = this.encryptPassword(this.password);

    if (this.isModified('settings'))
        this.settings = {...DEFAULT_USER_SETTINGS, ...this.settings || {}}

    next();
});

userSchema.methods = {
    // Hash the password
    encryptPassword: function (plainTextPassword) {
        if (!plainTextPassword) {
            return ''
        } else {
            passwordHelper.cryptPassword(plainTextPassword, (error, pass)=>{
                if(error) return ''
                return pass
            });
        }
    }
};

userSchema.virtual('isAccountVerified').get(function () {
    return this.isEmailVerify && this.isMobileVerify
})

module.exports = model('User', userSchema, 'users')
