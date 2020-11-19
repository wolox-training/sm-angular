import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should render email and password', () => {
    page.navigateTo();
    expect(page.getEmailLabel()).toEqual('Email');
    expect(page.getPasswordLabel()).toEqual('Password');
  });

  it('Login form should be valid', () => {
    page.getEmailInput().sendKeys('seromarin@gmail.com');
    page.getPasswordInput().sendKeys('Sebis1993');
    const form = page.getForm().getAttribute('class');
    expect(form).toContain('ng-valid');
  });

  it('Login form should be invalid', () => {
    page.getEmailInput().sendKeys('seromarin@gmail.com');
    page.getPasswordInput().sendKeys('1993');
    const form = page.getForm().getAttribute('class');
    expect(form).toContain('ng-invalid');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
