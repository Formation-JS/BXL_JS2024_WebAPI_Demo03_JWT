const demoController = {

    public: (req, res) => {
        //? Endpoint /api/demo/public - Pas de restriction
        res.status(200).json({
            message: 'Bienvenue dans la zone public !'
        });
    },

    private: (req, res) => {
        //? Endpoint /api/demo/private - Etre connecté
        res.status(200).json({
            message: 'Bienvenue dans la zone privé !'
        });
    },

    admin: (req, res) => {
        //? Endpoint /api/demo/admin - Etre connecté en tant qu'Admin
        res.status(200).json({
            message: 'Bienvenue dans la zone admin !'
        });
    }
};

export default demoController;