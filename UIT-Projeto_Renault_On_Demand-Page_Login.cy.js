// Bem vindo ao script de automação do cypress
// Este script contém um Teste de UI da página de Login do site Renault On demand (https://ondemand.renault.com.br/)
// Neste script realizamos as validações de css de cada campo da página de Login
// Cenários executados em viewport de notebook em 1366x768
// CRIADO POR: MURILLO MIRANDA

describe('Projeto Teste End to End - Renault On Demand', () => {

  beforeEach(function(){ //Antes de cada cenário de teste executar o comando abaixo
    
    //Definição de qual viewport será para o teste
    cy.viewport(1366, 768)
    
    //Antes de todos os cenários visitar a página abaixo
    cy.visit('https://ondemand.renault.com.br/conta/login')
  
    //Aceitar os cookies
    cy.get('#onetrust-accept-btn-handler')
      .click() // Click no botão Aceitar de Cookies  

  })

  it('Cenário 1: Validar css do campo block-title', () => {
   
   //Validação da exibição da Label SEJA BEM VINDO
   cy.contains('seja bem-vindo,', ' faça o seu login ')
     .should('be.visible')

   //Validações css do campo block-title
   cy.get('.block-title')
     .should('be.visible') //Validação da exibição do botão LOGIN
     .and('have.css', 'font-family', 'NouvelRbold') 
     .and('have.css', 'font-size', '40px')
     .and('have.css', 'line-height', '20px')
     .and('have.css', 'text-align', 'center')
     .and('have.css', 'letter-spacing', '-0.8px')
     .and('have.css', 'text-transform', 'uppercase')
     .and('have.css', 'color', 'rgb(62, 63, 64)')
     .and('have.css', 'font-weight', '500')   
     
   //LOG CENÁRIO 1  
   cy.log('Cenário 10 - OK: Validação de css')      

 })

  it.only('Cenário 2: Validar css do campo .login-cover > img', () => {
    
    //Validações css do campo .login-cover > img
    cy.get('.login-cover > img')
      .should('be.visible') //Validação da exibição do botão LOGIN
      .and('have.attr', 'src', '/assets/images/webp/login.webp')
      .and('have.css', 'color', 'rgb(33, 37, 41)')
      .and('have.css', 'font-family', 'NouvelRRegular') 
      .and('have.css', 'font-size', '16px')
      .and('have.css', 'font-weight', '400') 
      .and('have.css', 'height', '372px')
      .and('have.css', 'text-align', 'start')
      .and('have.css', 'vertical-align', 'middle')
      
      
    //LOG CENÁRIO 1  
    cy.log('Cenário 10 - OK: Validação de css')      

  })

})