import { DarvinXPage } from './app.po';

describe('darvin-x App', () => {
  let page: DarvinXPage;

  beforeEach(() => {
    page = new DarvinXPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
