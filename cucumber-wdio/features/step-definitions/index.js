/* global browser */

const { defineSupportCode } = require('cucumber')
const { expect } = require('chai')

defineSupportCode(({Given, When, Then}) => {
  When(/^I fill with (.*) and (.*)$/, (email, password) => {
    var cajaLogIn = browser.element('.cajaLogIn')

    var mailInput = cajaLogIn.element('input[name="correo"]')
    mailInput.click()
    mailInput.keys(email)

    var passwordInput = cajaLogIn.element('input[name="password"]')
    passwordInput.click()
    passwordInput.keys(password)
  })

  Then('I expect to see {string}', error => {
    if (error !== 'noError') {
      browser.waitForVisible('.aviso.alert.alert-danger', 5000)
      var alertText = browser.element('.aviso.alert.alert-danger').getText()
      expect(alertText).to.include(error)
    }
  })

  Given('I go to losestudiantes home screen', () => {
    browser.url('/')
    if (browser.isVisible('button=Cerrar')) {
      browser.click('button=Cerrar')
    }
  })

  When('I open the login screen', () => {
    browser.waitForVisible('button=Ingresar', 5000)
    browser.click('button=Ingresar')
  })

  When('I fill a wrong email and password', () => {
    var cajaLogIn = browser.element('.cajaLogIn')

    var mailInput = cajaLogIn.element('input[name="correo"]')
    mailInput.click()
    mailInput.keys('wrongemail@example.com')

    var passwordInput = cajaLogIn.element('input[name="password"]')
    passwordInput.click()
    passwordInput.keys('123467891')
  })

  When(/^I register with firstname (.*) and lastname (.*) and email (.*) and programId (.*) and password (.*) and (.*) accepted terms$/, (firstName, lastName, email, programId, password, acceptedTerms) => {
    const cajaSignUp = browser.element('.cajaSignUp')

    const fistNameInput = cajaSignUp.element('input[name="nombre"]')
    fistNameInput.click()
    fistNameInput.keys(firstName)

    const lastNameInput = cajaSignUp.element('input[name="apellido"]')
    lastNameInput.click()
    lastNameInput.keys(lastName)

    const mailInput = cajaSignUp.element('input[name="correo"]')
    mailInput.click()
    mailInput.keys(email)

    const programInput = cajaSignUp.element('select[name="idPrograma"]')
    programInput.selectByValue(String(programId))

    const passwordInput = cajaSignUp.element('input[name="password"]')
    passwordInput.click()
    passwordInput.keys(password)

    if (acceptedTerms === 'did') {
      const acceptTerms = cajaSignUp.element('input[name="acepta"]')
      acceptTerms.click()
    }
  })

  Then('I expect to see first error {string} and second error {string} and third error {string}', (error1, error2, error3) => {
    if (error1 !== 'noError') {
      browser.waitForVisible('.jsx-2777811044.aviso.alert.alert-danger', 5000)
      const alertText = browser.element('.jsx-2777811044.aviso.alert.alert-danger').getText()
      console.log(alertText)
      expect(alertText).to.include(error1)
    }

    if (error2 !== 'noError') {
      browser.waitForVisible('.jsx-2777811044.aviso.alert.alert-danger', 5000)
      const alertText = browser.element('.jsx-2777811044.aviso.alert.alert-danger').getText()
      console.log(alertText)
      expect(alertText).to.include(error2)
    }

    if (error3 !== 'noError') {
      browser.waitForVisible('.jsx-2777811044.aviso.alert.alert-danger', 5000)
      const alertText = browser.element('.jsx-520551651.aviso.alert.alert-danger').getText()
      console.log(alertText)
      expect(alertText).to.include(error3)
    }
  })

  When('I try to signup', () => {
    var cajaLogIn = browser.element('.cajaSignUp')
    cajaLogIn.element('button=Registrarse').click()
  })

  When('I try to login', () => {
    var cajaLogIn = browser.element('.cajaLogIn')
    cajaLogIn.element('button=Ingresar').click()
  })

  Then('I expect to not be able to login', () => {
    browser.waitForVisible('.aviso.alert.alert-danger', 5000)
  })
})
