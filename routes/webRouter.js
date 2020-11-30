qr = require('qrcode');

module.exports = router => {
    router.route("/")
    .get((req, res) => {
        res.render('index');
    });

    router.route('/qr/:text')
    .get((req, res) => {
        var qrValue ='QR de prueba';
        qr.toDataURL(req.params.text, function (err, qrData) {
          res.render('qr', {
              "qrData":qrData,
              "qrValue": req.params.text
            });
        });
    });

    return router;
};