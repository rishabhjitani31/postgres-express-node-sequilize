const finalResults = require('../controllers').finalresults;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Method not allowed',
  }));

  /**Final Results crud api*/
  app.post('/api/finalresults', finalResults.create);
  app.get('/api/finalresults', finalResults.list);
  app.get('/api/regiondomain', finalResults.regionDomain);
  app.delete('/api/finalresults/:resultId', finalResults.destroy);

};
