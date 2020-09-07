const express = require('express');
const router = express.Router();



router.get('/', (req, res)=> res.send('Our auth endpoint  is up and running'));

module.exports = router;