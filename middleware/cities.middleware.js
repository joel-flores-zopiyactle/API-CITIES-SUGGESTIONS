const checkParamQ = (req, res, next) => {
    
    if (req.query.q && req.query.q !== '') {
        next();
    } else {
        res.status(400);
        res.send({error: 'Falta el parámetro \"q\" para realizar la consulta y no puede ser vacía'});
    }
    
}

module.exports = checkParamQ