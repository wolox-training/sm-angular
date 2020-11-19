import { browser, by, element, ElementFinder } from 'protractor';

export class AppPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  getEmailLabel(): Promise<unknown> {
    return element(by.id('email-label')).getText() as Promise<unknown>;
  }

  getPasswordLabel(): Promise<unknown> {
    return element(by.id('password-label')).getText() as Promise<unknown>;
  }

  getEmailInput(): ElementFinder {
    return element(by.name('email'));
  }

  getPasswordInput(): ElementFinder {
    return element(by.name('password'));
  }

  getForm(): ElementFinder {
    return element(by.id('login-form'));
  }

  getSubmitButton(): ElementFinder {
      return element(by.id('btnSubmit'));
  }
}
