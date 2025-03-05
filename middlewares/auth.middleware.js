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

export function authorizeMiddleware(onlyAdmin = false) {

    return function (req, res, next) {

        //! Récuperation du token (Créer via "authentificationMiddleware")
        const token = req.token;

        //! Vérification de la présence du token
        //? Si aucun donnée -> 401 Unauthorized
        if (!token) {
            res.sendStatus(401);
            return;
        }

        //! Vérification si on possede le role Admin
        //? Si ce n'est pas le cas -> 403 Forbidden
        if (onlyAdmin && !token.isAdmin) {
            res.sendStatus(403);
            return;
        }

        next();
    };
}