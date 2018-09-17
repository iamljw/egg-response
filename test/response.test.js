'use strict';

const mock = require('egg-mock');

describe('test/response.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/response-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, response')
      .expect(200);
  });
});
