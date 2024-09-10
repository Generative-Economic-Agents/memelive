System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd;

  /**
   * Set cookies
   * @param {string} kies - cookies name and value,e.g: key=value
   * @param {object} options - cookies options
   * @param {number} options.time - cookies expires time,default is one day
   * @return void
   */

  /*
  * Get cookies
  * @param {string} kies - cookies name
  * @return {string} cookies value
  */

  /*
  * delete cookies
  * */

  /**
  * 设置cookie，可以自定义config
  *
  * @export
  * @param {string} kies - cookie k=v pattern, e.g: key=value
  * @param {object} [options={}]
  * @param {number} options.time - expire time (day)
  * @param {string} options.path - path
  * @param {string} options.domain - domain
  * @return {void}
  */
  function setCookiesFrom(kies) {// if (!/.+=.+/.test(kies)) {
    //     throw new Error('setCookies function accept a "key=value" string');
    // }
    // if (kies) {
    //     // let expiredTime = (options.time || 1) * 24 * 60 * 60 * 1000;
    //     // expiredTime += +new Date();
    //     document.cookie = `${kies};path=/;domain=.baidu.com`;
    // }
  }

  function setCookie(kies) {// if (!/.+=.+/.test(kies)) {
    //     throw new Error('setCookies function accept a "key=value" string');
    // }
    // if (kies) {
    //     // let expiredTime = (options.time || 1) * 24 * 60 * 60 * 1000;
    //     // expiredTime += +new Date();
    //     document.cookie = `${kies}`;
    // }
  }

  function setCookies(kies, options) {// if (!/.+=.+/.test(kies)) {
    //     throw new Error('setCookies function accept a "key=value" string');
    // }
    // if (kies) {
    //     let expiredTime = (options.time || 1) * 24 * 60 * 60 * 1000;
    //     // let expiredTime = (options.time || 1) * 60 * 1000;
    //     expiredTime += +new Date();
    //     document.cookie = `${kies};expires=${new Date(expiredTime).toGMTString()}`;
    // }

    if (options === void 0) {
      options = {};
    }
  }

  function setLockSeatsCookies(kies, options) {// if (!/.+=.+/.test(kies)) {
    //     throw new Error('setCookies function accept a "key=value" string');
    // }
    // if (kies) {
    //     let expiredTime = (options.time || 1) * 60 * 1000; //n分钟失效
    //     expiredTime += +new Date();
    //     document.cookie = `${kies};expires=${new Date(expiredTime).toGMTString()}`;
    // }

    if (options === void 0) {
      options = {};
    }
  }

  function getCookies(kies) {// const reg = new RegExp(`(?:(?:^|.*;\\s*)${kies}\\s*=\\s*([^;]*).*$)|^.*$`);
    // return document.cookie.replace(reg, '$1');
  }

  function getVisitedCookie() {// return +document.cookie.replace(/(?:(?:^|.*;\s*)visited\s*=\s*([^;]*).*$)|^.*$/, '$1');
  }

  function deleteCookie(name) {// let exp = new Date();
    // exp.setTime(exp.getTime() - 1);
    // let cval = getCookies(name);
    // if (cval != null)
    //     document.cookie = name + '=' + cval + ';expires=' + exp.toGMTString();
  }

  function setDomainCookie(kies, options) {// if (!/.+=.+/.test(kies)) {
    //     throw new Error('setCookies function accept a "key=value" string');
    // }
    // if (kies) {
    //     let expiredTime = (options.time || 1) * 60 * 1000; //n分钟失效
    //     expiredTime += +new Date();
    //     document.cookie = `${kies};expires=${new Date(expiredTime).toGMTString()};path=/;domain=baidu.com`;
    // }

    if (options === void 0) {
      options = {};
    }
  }

  function setCookieWithConfig(kies, options) {// if (!/.+=.+/.test(kies)) {
    //     throw new Error('setCookies function accept a "key=value" string');
    // }
    // if (kies) {
    //     let cookieStr = `${kies};`;
    //     if (options.time) {
    //         let expiredTime = (options.time) * 24 * 60 * 60 * 1000;
    //         expiredTime += Date.now();
    //         cookieStr += `expires=${new Date(expiredTime).toGMTString()};`;
    //     }
    //     if (options.path) {
    //         cookieStr += `path=${options.path};`;
    //     }
    //     if (options.domain) {
    //         cookieStr += `domain=${options.domain};`;
    //     }
    //     document.cookie = cookieStr;
    // }

    if (options === void 0) {
      options = {};
    }
  }

  _export({
    setCookiesFrom: setCookiesFrom,
    setCookie: setCookie,
    setCookies: setCookies,
    setLockSeatsCookies: setLockSeatsCookies,
    getCookies: getCookies,
    getVisitedCookie: getVisitedCookie,
    deleteCookie: deleteCookie,
    setDomainCookie: setDomainCookie,
    setCookieWithConfig: setCookieWithConfig
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "52ac5MHgpdFXJbUQCbD0eod", "cookies", undefined);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=17373b05d9a40cbf675ac08a7ef39a68c1170013.js.map