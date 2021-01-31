let qrController = require('../controllers/qrController.js')

module.exports = router => {
    router.get('/', (req, res) => {
        res.send("Hello API");
    })
    .get('/qr/:text', (req, res) => {
        var qrValue = req.params.text || 'QR de prueba';
        qrController.getQrData(qrValue).then(qrData => {
            res.send(JSON.stringify({
                "qrValue": qrValue,
                "qrData": qrData
            }));
        });
    });

    return router;
};