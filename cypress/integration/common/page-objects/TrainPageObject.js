class TrainPage {

//TO DO: Refactor selectors in getXXX methods to reuse them from page actions

    constructor() {}

    // URL functions

    visit() {cy.visit('https://venta.renfe.com/vol/search.do')}
    isCurrentUrl() {cy.url().should('contains', 'https://venta.renfe.com/vol/search.do')}


    // Page Actions

    selectRandomTrainForJourney(index, rate){
      cy.get('#lab-trayecto'+index). click()
      cy.get('[id^="trenButton"][id^="trenButton"]').not('[disabled="disabled"]')
        .then((list)=>{
          cy.wrap(list).as('wlist')
            .its('length')
            .then((listLength) => Math.floor(Math.random() * Math.floor(listLength)))
            .then((randomIndex)=> {
                cy.log('>>Random Index is ' + randomIndex)
                cy.get('@wlist').eq(randomIndex).click({force:true})
            })
        })
      cy.get('[id^="trayectoListaDetalle"][aria-expanded=true]')
        .find('button:contains(' + rate+ ')')
        .click({force:true})
      cy.get('#buttonBannerContinuar').click()
    }

    // Page Assertions

    assertUnavailableTrainsErrorMessageDisplayed(){
      cy.get('#tab-mensaje_contenido').should('be.visible');
    }

    assertUnavailableTrainsErrorMessageNotDisplayed(){
      cy.get('#tab-mensaje_contenido').should('not.be.visible');
    }

    assertPriceFromLabels(){
      cy.get('[id^="trenButton"][id^="trenButton"]').not('[disabled="disabled"]')
        .each((btn, index) => {
          var precioDesde = ''

          cy.wrap(btn).as('btnDesde')
            .invoke('text')
            .then( (btnText)=> {
              if(btnText.includes('desde')){
                precioDesde = parseInt(btnText.replace('desde', '').replace('€', '').replace(',', '.').trim())

                cy.get('@btnDesde')
                  .click({force:true})
                  .then( ()=> {
                    cy.get('[id^="trayectoListaDetalle"][aria-expanded=true]')
                      .find('button:contains("€")')
                      .each((btn2, index2) => {
                        var precioTarifa = ''
                        cy.wrap(btn2)
                          .invoke('text')
                          .then( (btnText2)=> {
                            precioTarifa = parseInt(btnText2.replace('Promo +', '').replace('Ida y Vuelta', '').replace('Flexible', '').replace('€', '').replace(',', '.').trim())

                            if(index2 ===0){
                              expect(precioTarifa).to.equal(precioDesde)
                            } else {
                              expect(precioTarifa).to.be.greaterThan(precioDesde)
                            }
                          })
                      })
                  })
              }
            })
        })
    }
}

export default TrainPage;
