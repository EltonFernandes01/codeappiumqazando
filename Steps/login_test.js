Feature('login');



const {I,login_page} = inject()
BeforeSuite( () => {
console.log('Finotti cenario')
})


I.runOnAndroid()( =>{
    I.runOnAndroid(() => {
        I.click('io.selendroid.testapp:id/buttonTest');
    });
}

Scenario('test with sucess', (home_page) => {
login_page.doLogin('teste@teste.com','123456')
home_page.checkLogininSucess()

});

Scenario('test with erro', ({}) => {
    login_page.doLogin('xtestex@teste.com','123456')

    login_page.checkLogininErro()

  
});