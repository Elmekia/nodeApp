const indexCtrl = {};

const asd = {
    name: 'hola',
    name2: 'mundo'   
};

indexCtrl.defaultRoute = (req, res) => {
    res.json(asd);
};

module.exports = indexCtrl;
