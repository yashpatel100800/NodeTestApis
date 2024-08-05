const { Router } = require("express");
const router = Router();

router.get('/api1', (req, res) => {
    const homeNotifications = Math.floor(Math.random() * 10);
    const networkNotifications = Math.floor(Math.random() * 10);
    const messageNotifications = Math.floor(Math.random() * 10);
    const profileNotifications = Math.floor(Math.random() * 10);

    

    res.status(200).send({
        home: homeNotifications,
        network: networkNotifications,
        message: messageNotifications,
        profile: profileNotifications
    });

});

module.exports = router;
