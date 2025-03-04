import jwt from 'jsonwebtoken';

export function generateJWT({ id, username, isAdmin }) {
    return new Promise((resolve, reject) => {

        //? Donnée à stocker dans le token (Attention, elle seront accessible !)
        const data = {
            id,
            name: username, 
            role: isAdmin ? 'admin' : 'member',
        };

        //? Clef pour signer le token
        const secret = process.env.JWT_SECRET;

        //? Les options du token
        const options = {
            algorithm: 'HS512',
            expiresIn: '10h',
            issuer: process.env.JWT_ISSUER,
            audience: process.env.JWT_AUDIENCE
        }

        //? Générer le token
        jwt.sign(data, secret, options, (error, token) => {
            // Si la génération échoue
            if(error) {
                reject(error);
                return;
            }

            // Envoi du token
            resolve(token);
        });
    });
}