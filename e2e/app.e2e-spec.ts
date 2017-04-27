import { GrcMusicFrontendPage } from './app.po';

describe('grc-music-frontend App', () => {
  let page: GrcMusicFrontendPage;

  beforeEach(() => {
    page = new GrcMusicFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
