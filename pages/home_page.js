const { I } = inject();

module.exports = {

  buttom:{
    save: '~salvar',

  },

  checkLoginInSucess(){
    I.waitForElement(this.buttom.save,5) 
    I.seeElement(this.buttom.save)
  }

}
