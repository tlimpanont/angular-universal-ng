import { AngularUniversalNgPage } from './app.po';

describe('angular-universal-ng App', () => {
  let page: AngularUniversalNgPage;

  beforeEach(() => {
    page = new AngularUniversalNgPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
