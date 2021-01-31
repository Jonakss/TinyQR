var qrController = require('../controllers/qrController.js');

module.exports = router => {
    router.route("/")
    .get((req, res) => {
        res.render('index');
    });

    router.route('/qr/:text')
    .get((req, res) => {
        var qrValue = req.params.text || 'QR de prueba';
        qrController.getQrData(qrValue).then(qrData => {
            res.render('qr', {
                "qrData": qrData,
                "qrValue": qrValue
            });
        });
    });

    return router;
};