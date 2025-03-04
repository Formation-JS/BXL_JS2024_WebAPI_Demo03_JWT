import { generateJWT } from "../helpers/jwt.helper.js";

// Fake data pour la démo
const members = [
    {
        id: 1,
        username: 'della',
        password: 'Test1234=',
        isAdmin: true
    },
    {
        id: 2,
        username: 'donald',
        password: 'Test1234=',
        isAdmin: false
    }
];


const authController = {

    login: async (req, res) => {
        const { username, password } = req.body;

        //! Validation des données 
        if (!username?.trim() || !password?.trim()) {
            //TODO Utiliser des schemas de validations : Zod, Yup, Joi, ...
            res.status(422).json({ error: 'Username and password is required !' });
            return;
        }

        //! Vérification des credentials
        const member = members.find(m => m.username === username);
        if (!member || member.password !== password) {
            res.status(400).json({ error: 'Invalid credentials !' });
            return;
        }

        //TODO Générer le JWT
        const token = await generateJWT(member);

        //! Réponse à l'utilisateur
        res.status(200).json({ token });
    },

    register: (req, res) => {
        res.sendStatus(501);
    }
}

export default authController;