// Bem vindo ao script de automação do cypress
// Este script contém um Teste Funcional da página de Login site Renault On demand (https://ondemand.renault.com.br/)
// Neste script temos todos os cenários possíveis da funcionalidade Autenticar
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

  it('Cenário 1: Realizar autenticação com sucesso', () => {
      
    //Validações e inserção de informações no campo Email          
    cy.contains('E-mail')
      .should('be.visible')//Validação da exibição da Label E-mail        
    cy.get('[data-cy="login-email"]')
      .type('murillopmiranda@gmail.com', {force: true})
      .should('be.visible') //Validação do campo login-email

    //Validações e inserção de informações no campo Senha            
    cy.contains('Senha')
      .should('be.visible')//Validação da exibição da Label Senha        
    cy.get('[data-cy="login-password"]')
      .type('Teste@123', {force: true})
      .should('be.visible') //Validação do campo login-password  
    
    //Validações e click no botão LOGIN  
    cy.get('[data-cy="button-login"]')
      .should('be.visible') //Validação da exibição do botão LOGIN
      .click()
    
    cy.wait(3000)  

    //LOG CENÁRIO 1  
    cy.log('Cenário 1 - OK: Na página /login, realizar autenticação com sucesso') 
  })

  it('Cenário 2: Realizar autenticação com usuário não existente', () => {
      
    //Validações e inserção de informações no campo Email          
    cy.contains('E-mail')
      .should('be.visible')//Validação da exibição da Label E-mail        
    cy.get('[data-cy="login-email"]')
      .type('testeteste@gmail.com', {force: true})
      .should('be.visible') //Validação do campo login-email

    //Validações e inserção de informações no campo Senha            
    cy.contains('Senha')
      .should('be.visible')//Validação da exibição da Label Senha        
    cy.get('[data-cy="login-password"]')
      .type('Teste@123', {force: true})
      .should('be.visible') //Validação do campo login-password  
    
    //Validações e click no botão LOGIN  
    cy.get('[data-cy="button-login"]')
      .should('be.visible') //Validação da exibição do botão LOGIN
      .click()
    
    //Validação do pop up #swal2-html-container  
    cy.get('#swal2-html-container > div')
      .should(($div) => {
        expect($div).to.contain('Usuário ou senha incorretos.') //Validação do texto do popup
      })
        
    cy.get('.swal2-confirm')
     .click({force: true})  

    //LOG CENÁRIO 2  
    cy.log('Cenário 2 - OK: Realizar autenticação com usuário não existente') 

  })

  it('Cenário 3: Realizar autenticação com usuário inválido e senha válido', () => {
   
   //Validações e inserção de informações no campo Email          
   cy.contains('E-mail')
     .should('be.visible')//Validação da exibição da Label E-mail        
   cy.get('[data-cy="login-email"]')
     .type('emailsemarroba', {force: true})
     .should('be.visible') //Validação do campo login-email

   //Validações e inserção de informações no campo Senha            
   cy.contains('Senha')
     .should('be.visible')//Validação da exibição da Label Senha        
   cy.get('[data-cy="login-password"]')
     .type('Teste@123', {force: true})
     .should('be.visible') //Validação do campo login-password  
   
   //Validações e click no botão LOGIN  
   cy.get('[data-cy="button-login"]')
     .should('be.visible') //Validação da exibição do botão LOGIN
     .click()
    
   //Validação do pop up #swal2-html-container  
   cy.get('.p-0 > li')
     .should(($li) => {
        expect($li).to.contain(' E-mail inválido.') //Validação do texto do popup
      })
        
   cy.get('.swal2-confirm')
     .click({force: true})  
  
   //LOG CENÁRIO 3  
   cy.log('Cenário 2 - OK: Realizar autenticação com usuário inválido e senha válido')         
  })

  it('Cenário 4: Realizar autenticação com usuário e senha nulos', () => {
    //Validações e click no botão LOGIN  
    cy.get('[data-cy="button-login"]')
      .should('be.visible') //Validação da exibição do botão LOGIN
      .click()
    
    //Validações da exibição do border vermelho de obrigatoriedade no campo e-mail  
    cy.get('[data-cy="login-email"]')
      .should('have.css', 'border', '1px solid rgb(220, 53, 69)')

    //Validações da exibição do border vermelho de obrigatoriedade no campo senha  
    cy.get('[data-cy="login-password"]')
      .should('have.css', 'border', '1px solid rgb(220, 53, 69)')  

    //LOG CENÁRIO 4  
    cy.log('Cenário 4 - OK: Realizar autenticação com usuário e senha nulos')
  })

  it('Cenário 5: Realizar autenticação com usuário preenchido e senha nulo', () => {
    
    //Validações e inserção de informações no campo Email          
    cy.contains('E-mail')
      .should('be.visible')//Validação da exibição da Label E-mail        
    cy.get('[data-cy="login-email"]')
      .type('murillopmiranda@gmail.com', {force: true})
      .should('be.visible') //Validação do campo login-email

    //Validações e click no botão LOGIN  
    cy.get('[data-cy="button-login"]')
      .should('be.visible') //Validação da exibição do botão LOGIN
      .click()
   
    //Validações da exibição do border vermelho de obrigatoriedade no campo senha  
    cy.get('[data-cy="login-password"]')
      .should('have.css', 'border', '1px solid rgb(220, 53, 69)')  
    
    //LOG CENÁRIO 5  
    cy.log('Cenário 5 - OK: Realizar autenticação com usuário preenchido e senha nulo')    
  })

  it('Cenário 6: Realizar autenticação com usuário nulo e senha preenchido', () => {
    
   //Validações e inserção de informações no campo Senha            
   cy.contains('Senha')
     .should('be.visible')//Validação da exibição da Label Senha        
   cy.get('[data-cy="login-password"]')
     .type('Teste@123', {force: true})
     .should('be.visible') //Validação do campo login-password  
   
   //Validações e click no botão LOGIN  
   cy.get('[data-cy="button-login"]')
     .should('be.visible') //Validação da exibição do botão LOGIN
     .click()
    
    //Validações da exibição do border vermelho de obrigatoriedade no campo e-mail  
    cy.get('[data-cy="login-email"]')
      .should('have.css', 'border', '1px solid rgb(220, 53, 69)')  
    
    
    //LOG CENÁRIO 6  
    cy.log('Cenário 6 - OK: Realizar autenticação com usuário nulo e senha preenchido')    
  })

  it('Cenário 7: Validação opção Esqueci minha senha', () => {
    
    cy.contains(' Esqueci a minha senha ')
      .should('be.visible')//Validação da exibição da Label E-mail 
    
    //Validação do campo d-block que redireciona para a página de esqueci minha senha  
    cy.get('.d-block')
      .should('have.attr', 'href', '/conta/esqueci-minha-senha')
      .visit('https://ondemand.renault.com.br/conta/esqueci-minha-senha')
       
    //LOG CENÁRIO 7  
    cy.log('Cenário 7 - OK: Validação opção Esqueci minha senha')        
      
  })

  it('Cenário 8: Validar opção Criar conta Pessoa Física', () => {
  
  //Validação da label Pessoa Física  
  cy.contains('Pessoa Física')
    .should('be.visible')//Validação da exibição da Label E-mail 
  
  cy.get('[data-cy="login-physical-person"]')
    .should('have.attr', 'href', '/cadastro-de-carro-por-assinatura-mensal/rapido/dados-pessoais')
    .click()
     
  //LOG CENÁRIO 8  
  cy.log('Cenário 8 - OK: Validar opção Criar conta Pessoa Física')                
  
  })

  it('Cenário 9: Validar opção Criar conta Pessoa Jurídica', () => {
  
  //Validação da label Pessoa Jurídica
  cy.contains('Pessoa Jurídica')
    .should('be.visible')//Validação da exibição da Label E-mail 

  cy.get('[data-cy="login-legal-person"]')
    .should('have.attr', 'href', '/cadastro-de-carro-por-assinatura-mensal/rapido/dados-da-empresa')
    .click()
   
  //LOG CENÁRIO 9  
  cy.log('Cenário 9 - OK: Validar opção Criar conta Pessoa Jurídica')    
  
  })

})