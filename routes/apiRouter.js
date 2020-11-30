module.exports = router => {
    router.route("/api")
    .get((req, res) => {
        res.send("Hello API");
    });

    return router;
};