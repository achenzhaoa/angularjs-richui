'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('my app', function() {

  beforeEach(function() {
    browser().navigateTo('index.html');
  });


  it('should automatically redirect to /mail when location hash/fragment is empty', function() {
    expect(browser().location().url()).toBe("/mail");
  });


  describe('mailApp', function() {

    beforeEach(function() {
      browser().navigateTo('#/mail');
    });


    it('should render mailApp when user navigates to /mail', function() {
      expect(element('[ng-view]').text()).
        toMatch(/inbox/);
    });

  });


  describe('contactApp', function() {

    beforeEach(function() {
      browser().navigateTo('#/contact');
    });


    it('should render contactApp when user navigates to /contact', function() {
      expect(element('[ng-view]').text()).
        toMatch(/This is Contact App/);
    });

  });
});