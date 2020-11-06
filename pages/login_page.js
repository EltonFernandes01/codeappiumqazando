const { I } = inject();

module.exports = {
  fields:{
    email: '~email',
    senha: '~senha',
  },
  buttons: {
    enter: '~entrar'
  },

messages:{
  LoginError:'~loginFail'

},
  
  doLogin (email,senha) {
     I.fillField(this.fields.email,email)
     I.fillField (this.fields.senha,senha)
     I.tap(this.buttons.enter)
  },

  checkLoginInErro(){
    I.waitForElement(this.messages.LoginError,5) 
    I.seeElement(this.messages.LoginError)
  },
}
