exports.middlewareGlobal = (req, res, next) => {
/*     console.log();
    
    if (req.body.nome) {
        console.log(`Vi que você postou: ${req.body.nome}`);
    }

    console.log(); */
    next();
}

exports.outroMiddleware = (req, res, next) => {
    //console.log('Sou seu outro middleware');
    next();
}