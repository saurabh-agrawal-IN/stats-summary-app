const { UserRepository } = require("../database");
const {
    formatData,
    generatePassword,
    generateSalt,
    generateSignature,
    validatePassword
} = require('../common/utils');

class UserService {
    constructor() {
        this.repository = new UserRepository();
    }

    async signIn (userInputs) {
        const { email, password } = userInputs;
        const existingUser = await this.repository.findUser({ email});

        if (existingUser) {
            const validPassword = await validatePassword(password, existingUser.password, existingUser.salt);
            if(validPassword){
                const token = await generateSignature({ email: existingUser.email, _id: existingUser._id});
                return formatData({id: existingUser._id, token });
            }
        }

        return formatData(null);
    }

    async signUp (userInputs) {
        const { email, password, name } = userInputs;
        // create salt
        let salt = await generateSalt();
        let userPassword = await generatePassword(password, salt);
        const existingUser = await this.repository.createUser({
            email,
            password: userPassword,
            salt,
            name,
        });
        const token = await generateSignature({ email: email, _id: existingUser._id});
        return formatData({id: existingUser._id, token });
    }
}

module.exports = UserService;
