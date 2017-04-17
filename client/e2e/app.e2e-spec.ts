import { WwsPage } from './app.po';

describe('wws App', () => {
  let page: WwsPage;

  beforeEach(() => {
    page = new WwsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
