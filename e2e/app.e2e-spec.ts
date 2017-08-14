import { RoutingLecture2Page } from './app.po';

describe('routing-lecture2 App', () => {
  let page: RoutingLecture2Page;

  beforeEach(() => {
    page = new RoutingLecture2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
