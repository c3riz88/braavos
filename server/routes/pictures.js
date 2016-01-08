var express = require('express');
var router = express.Router();

/**
 * Routes relative to pictures
 *
 * get / get a picture
 * post / crate a picture (upload a file)
 */

/**
 * Create a picture
 */
router.post('/', function(req, res, next) {
    req.file('face').upload(function (err, uploadedFiles) {
        if (err) return res.send(500, err);
        return res.json({
            message: uploadedFiles.length + ' file(s) uploaded successfully!',
            files: uploadedFiles
        });
    });
});

module.exports = router;
