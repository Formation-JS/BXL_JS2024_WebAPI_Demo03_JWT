import { decodeJWT } from "../helpers/jwt.helper.js";

export function authentificationMiddleware() {

    return function (req, res, next) {

        //! Donnée d'authentification de la requete (Bearer eyJhbGciOiJ...)
        const authData = req.headers['authorization'];

        //! Extraction du JWT
        const token = authData && authData.split(' ')[1];

        //! Si aucun token -> Fin du middleware (Utilisateur non authentifier)
        if (!token) {
            req.token = null;
            next();
            return;
        }

        //! Validation du token et injection des données dans "req"
        decodeJWT(token)
            .then(data => {
                req.token = data;
            })
            .catch(error => {
                req.token = null;
            })
            .finally(() => {
                next();
            });
    };
}