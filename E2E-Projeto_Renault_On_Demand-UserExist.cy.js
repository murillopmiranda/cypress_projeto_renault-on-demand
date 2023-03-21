// Bem vindo ao script de automação do cypress
// Este script contém um Test End-to-End do site Renault On demand (https://ondemand.renault.com.br/)
// Temos um único cenário de teste que simula a aquisição de assinatura de um veículo renault
// CRIADO POR: MURILLO MIRANDA

describe('Projeto Teste End to End - Renault On Demand', () => {
  
  it('Cenário: Acessar a página principal, adicionar um produto no carrinho e finalizar a compra', () => {
      
      //Definição de qual viewport será para o teste
      cy.viewport(1366, 768)
      
      ///PÁGINA INICIAL
          //Comando para visitar a página inicial
          cy.visit('https://ondemand.renault.com.br/') // Chamada para visitar a página     
      
          //Aceitar os cookies
          cy.get('#onetrust-accept-btn-handler')
            .click() // Click no botão Aceitar de Cookies

          //Clicar no botão Login/Novo Cadastro    
          cy.get(':nth-child(2) > .label > a')
            .click({force: true}) 
          
          //LOG CENÁRIO 1  
          cy.log('Cenário 1 - OK: Acessar a página inicial e clicar no botão Login/Novo Cadastro ')  

      ///PÁGINA DE /LOGIN
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
          //Validações no campo Esqueci minha senha            
          cy.contains('Esqueci a minha senha')
            .should('be.visible')//Validação da exibição do campo Esqueci a minha senha

          //LOG CENÁRIO 2  
          cy.log('Cenário 2 - OK: Na página /login, autenticar com um usuário válido/existente')  
  

          //Validações e click no botão LOGIN  
          cy.get('[data-cy="button-login"]')
            .should('be.visible') //Validação da exibição do botão LOGIN
            .click()
            .wait(3000)
          
      ///PÁGINA /area-logada/perfil     
          //Clicar na logo para retornar para página inicial
          cy.get('.navbar-brand > img')
            .click() //Click na logo para redirecionar para a página inicial

          //LOG CENÁRIO 3  
          cy.log('Cenário 3 - OK: Na página de área logada, clicar na logo do header')  


      ///PÁGINA INICIAL
          //Validação da navegação do carrossel da página inicial
          cy.get('.swiper-pagination > :nth-child(2)') //Navegando pela segunda opção do carrossel
            .click({force: true})
          cy.get('.swiper-pagination-bullet-active') //Validação de que o segundo carrossel está sendo exibido
            .should('be.visible') 
          
          cy.get('.swiper-pagination > :nth-child(3)') //Navegando pela terceira opção do carrossel
            .click({force: true})
          cy.get('.swiper-pagination-bullet-active') //Validação de que o terceiro carrossel está sendo exibido
            .should('be.visible') 
          
          cy.get('.swiper-pagination > :nth-child(1)') //Navegando pela primeira opção do carrossel
            .click({force: true})
          cy.get('.swiper-pagination-bullet-active') //Validação de que o primeiro carrossel está sendo exibido
            .should('be.visible') 

          //LOG CENÁRIO 4  
          cy.log('Cenário 1 - OK: Na página incial, validar o componente carrossel')  


          //Validação do componente de Encontre seu Renault, validar as opções e clicar em Veja todos os veículos
          cy.get(':nth-child(1) > .car-card > .content')
            .should('be.visible') //Validação de exibição da primeira opção

          cy.get(':nth-child(2) > .car-card > .content')
            .should('be.visible') //Validação de exibição da segunda opção

          cy.get(':nth-child(3) > .car-card > .content')
            .should('be.visible') //Validação de exibição da terceira opção  

          cy.get(':nth-child(4) > .car-card > .content')
            .should('be.visible') //Validação de exibição da quarta opção  

          cy.get('.cars > .container-fluid > :nth-child(3) > .col-12 > .btn')
            .should('be.visible') //Validação de exibição do botão VEJA TODOS OS MODELOS 
            .click({force: true})

          //LOG CENÁRIO 5  
          cy.log('Cenário 5 - OK: Na página inicial, validar o componente encontre seu renault e selecionar um veículo')  
  

      ///PÁGINA /escolher-alugar-carro-mensal
          //Validação do componente carrossel dos filtros
          cy.get('.swiper-button-next-offer > img') 
            .should('be.visible') //Validação do carrossel de click para a direita (next)
            .click({force: true})
            .wait(1000)
            .click({force: true})
            .wait(1000)
            .click({force: true})
            .wait(1000)

          cy.get('.swiper-button-prev-offer > img')
            .should('be.visible') //Validação do carrossel de click para a esquerda (prev)
            .click({force: true})
            .wait(1000)
            .click({force: true})
            .wait(1000)
            .click({force: true})
            .wait(1000)

          //Validações do checkbox Entrega Rápida
          cy.get('.delivery-filter > div[_ngcontent-serverapp-c84=""]')
            .should('be.visible') //Validação da exibição do campo delivery-filter
            .click({force: true})
            

          //Validação da seleção de um veículo do carrossel  
          cy.get('.swiper-slide-active > .car-filter')
            .should('be.visible') //Validação da exibição do campo car-filter
            .click({force: true})

          //Validação da existencia do card de veículo
          cy.get(':nth-child(1) > .car-card')
            .should('be.visible') //Validação da exibição do campo car-card

          cy.get(':nth-child(1) > .car-card > .cta > .btn')  
            .should('be.visible') //Validação da exibição do botão QUERO ESSE do card de veículos
            .click({force: true})
          
          //LOG CENÁRIO 6  
          cy.log('Cenário 6 - OK: Na página escolher alugar carro, selecionar as opções')  
  
            
      ///PÁGINA /configure-e-assine
            //Validações do campo months (Seleção de duração da assinatura)
            cy.get('[data-cy="months"]')
              .should('be.visible') //Validação da exibição do campo combobox months  
            
            //Selecionando a segunda opção do combobox (18meses)  
            cy.get(':nth-child(4) > :nth-child(1) > app-select > .custom-select-list > :nth-child(2)')
              .click({force: true})
              
            //Validação do campo kms  (Seleção de quilometragem mensal)
            cy.get('[data-cy="kms"]')  
              .should('be.visible') //Validação da exibição do campo combobox kms
            
            //Selecionando a terceira opção do combobox km (2000km)  
            cy.get('.kms-group > app-select > .custom-select-list > :nth-child(3)')
              .click({force: true})

            //Validações do campo ngx-slider-full-bar (seleção da Primeira mensalidade)
            cy.get('.ngx-slider-full-bar')
              .should('be.visible') //Validação da exibição do campo ngx-slider-full-bar

            cy.get('[style="transform: translateX(313px);"] > :nth-child(1) > .ngx-slider-inner-tooltip')
              .should('be.visible') //Validação da exibição do valor 6
              .click({force: true}) //seleção do valor 6
            
            cy.wait(4000)
            
            //Validação do campo vehicel-area (Voce gostaria de maior proteção e seleção de Sim)  
            cy.get('.vehicle-area > :nth-child(6)')
              .should('be.visible') //Validação da exibição do campo ngx-slider-full-bar

            cy.get(':nth-child(6) > .items > .add > .custom-radio > .configs-label')
              .click({force: true})

            cy.wait(2000)

            //Validação do campo vehicel-area (Voce gostaria de reduzir o valor da franquia e seleção de Sim)  
            cy.get('.vehicle-area > :nth-child(7)')
              .should('be.visible') //Validação da exibição do campo ngx-slider-full-bar

            cy.get(':nth-child(7) > .items > .add > .custom-radio > .configs-label > span')
                .click({force: true})  

            cy.wait(2000)

            //Validação do campo selecione a placa:
            cy.get('[data-cy="endOfLicensePlate"]')
              .should('be.visible') //Validação da exibição do campo selecione o final da placa

            cy.get(':nth-child(9) > .form-group > app-select > .custom-select-list > :nth-child(3)')
              .click({force: true})

            cy.wait(2000)  

            //Validação do botão ADICIONAR AO CARRINHO  
            cy.get('[data-cy="button-adicionar ao carrinho"]')
              .click({force: true})

            //LOG CENÁRIO 7  
            cy.log('Cenário 7  - OK: Na página configure e assine, selecionar as opções desejadas e adicionar no carrinho')  
  
            
})


})