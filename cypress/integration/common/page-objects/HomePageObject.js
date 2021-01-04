class HomePage {

//TO DO: Refactor selectors in getXXX methods to reuse them from page actions

    constructor() {}

    // Url Functions

    visit() {cy.visit('https://www.renfe.com/es/es')}
    isCurrentUrl() {cy.url().should('contains', 'https://www.renfe.com/es/es')}


    // Page Actions

    actAcceptCookies(){
      cy.get('body')
        .find('#onetrust-accept-btn-handler')
        .then(($elts) => {
          const cnt = $elts.length
          if (cnt === 1)
            cy.get('#onetrust-accept-btn-handler').click({force: true});
        });
    }

    setStationOrigin(origin){
      cy.get('.awesomplete > #origin').clear().type(origin).type('{downarrow}').type('{enter}');
    }
    setStationDestination(destination){
      cy.get('.awesomplete > #destination').clear().type(destination).type('{downarrow}').type('{enter}');
      this.actAcceptCookies();
      cy.get('.awesomplete > #destination').click();
    }
    setStations(origin, destination){
        this.setStationOrigin(origin);
        this.setStationDestination(destination);
    }

    searchStationOrigin(origin){
      if(origin != '')
        cy.get('.awesomplete > #origin').clear().type(origin);
    }
    searchStationDestination(destination){
      if(destination != '')
        cy.get('.awesomplete > #destination').clear().type(destination);
    }

    setPassengersAdults(adults){
        this.updatePassengers(1, adults);
    }
    setPassengersChildren(children){
        this.updatePassengers(2, children);
    }
    setPassengersChildrenNoSeat(childrenNoSeat){
        this.updatePassengers(3, childrenNoSeat);
    }
    setPassengers(adults, children, childrenNoSeat){
        this.updatePassengers(1, adults);
        this.updatePassengers(2, children);
        this.updatePassengers(3, childrenNoSeat);
    }
    updatePassengers(index, value){
      cy.get('.rf-passengers__list-item:nth-child('+index+') > .rf-passengers__counter > .rf-passengers__counter-item')
        .then(($curCnt) => {
          var curNum = $curCnt.text()
          var difNum = value - curNum

          if (difNum > 0) {
            cy.get('#menu-surface-button').click();
            for(var i = 1; i <= difNum; i++)
              cy.get('.rf-passengers__list-item:nth-child('+index+') .icon-more').click();
            cy.get('.rf-passengers__button-list--primary').click();
          }
          if (difNum < 0) {
            cy.get('#menu-surface-button').click();
            for(var i = -1; i >= difNum; i--)
              cy.get('.rf-passengers__list-item:nth-child('+index+') .icon-minus').click();
            cy.get('.rf-passengers__button-list--primary').click();
          }
        })
    }

    moveDateDepart(increment){
      this.moveDate(2, increment);
    }
    moveDateReturn(increment){
      this.moveDate(3, increment);
    }
    moveDates(incrementDep, incrementRet){
      this.moveDate(2, incrementDep);
      this.moveDate(3, incrementRet);
    }
    moveDate(index, increment){
      if (increment > 0)
        for(var i = 1; i <= increment; i++)
          cy.get('.rf-daterange__container-ipt:nth-child('+index+') .icon-arrow_right').click();

      if (increment < 0)
        for(var i = -1; i >= increment; i--)
          cy.get('.rf-daterange__container-ipt:nth-child('+index+') .icon-arrow_left').click();
    }

    resetDates() {
      cy.findByRole('textbox', { name: /fecha ida/i })
        .click()
        .then(()=> {
            cy.findAllByRole('button', { name: /borrar fechas/i }).eq(0).click();
            cy.findByRole('button', { name: /aceptar/i }).click({force: true});
        });
    }

    setReturnTrip(){
      cy.findByRole('button', { name: /Sólo ida Menú desplegable tipo de viaje/i }).click({force: true});
      cy.findByRole('button', { name: /ida y vuelta/i }).click();
    }
    setOneWayTrip(){
      cy.findByRole('button', { name: /Ida y vuelta Menú desplegable tipo de viaje/i }).click({force: true});
      cy.findByRole('button', { name: /sólo ida/i }).click();
    }

    goToTrainSearch(){
      cy.get('form > .hydrated > .mdc-touch-target-wrapper').click();
    }


    //Page Assertions

    assertDateDepartDaysFromNow(incrementDep){
      this.assertDateDaysFromNow('', incrementDep);
    }
    assertDateReturnDaysFromNow(incrementRet){
      this.assertDateDaysFromNow('--last', incrementRet);
    }
    assertDateDaysFromNow(suffix, increment){
        var myDate = new Date();
        myDate.setDate(myDate.getDate() + increment);
        var options = { weekday: 'short', year: '2-digit', month: '2-digit', day: '2-digit' };
        var myDateString = myDate.toLocaleDateString('es-ES', options);
        cy.get('.rf-daterange__container-ipt'+suffix+' > .rf-daterange__ipt').should('have.value', myDateString)
    }

    assertPassengersTotalCount(count){
      cy.findByRole('button', { name: '' + count + ' pasajeros Menú desplegable pasajeros' })
    }
    assertPassengersAdultsCount (count){
      this.assertPassengersCountPerType (1, count);
    }
    assertPassengersChildrenCount (count){
      this.assertPassengersCountPerType (2, count);
    }
    assertPassengersChildrenNoSeatCount (count){
      this.assertPassengersCountPerType (3, count);
    }
    assertPassengersCountPerType (index, count){
      cy.get('#menu-surface-button').click()
      cy.get('.rf-passengers__list-item:nth-child('+index+') > .rf-passengers__counter > .rf-passengers__counter-item').then(($curCnt) => {
        expect($curCnt.text()).to.equal(''+ count);
      });
    }

    assertPassengersAddDisabled(){
      cy.get('.rf-passengers__list-item:nth-child(1) > .rf-passengers__counter > .rf-passengers__btn--disabled')
      cy.get('.rf-passengers__list-item:nth-child(2) > .rf-passengers__counter > .rf-passengers__btn--disabled')
      cy.get('.rf-passengers__list-item:nth-child(3) > .rf-passengers__counter > .rf-passengers__btn--disabled')
    }
    assertPassengersRemDisabled(){
      cy.get('.rf-passengers__list-item:nth-child(1) > .rf-passengers__counter > .rf-passengers__btn--disabled')
      cy.get('.rf-passengers__list-item:nth-child(2) > .rf-passengers__counter > .rf-passengers__btn--disabled')
      cy.get('.rf-passengers__list-item:nth-child(3) > .rf-passengers__counter > .rf-passengers__btn--disabled')
    }
    assertPassengersPerTypeAddDisabled(index){
      cy.get('.rf-passengers__list-item:nth-child('+index+') > .rf-passengers__counter > .rf-passengers__btn--disabled')
    }

    assertStationOriginIs(origin){
      cy.get('.awesomplete > #origin').should('have.value', origin)
    }
    assertStationDestinationIs(destination){
      cy.get('.awesomplete > #destination').should('have.value', destination)
    }

    assertStationOriginError(){
      cy.get('#origin').findByText(/seleccione una estación válida/i);
    }
    assertStationDestinationError(){
      cy.get('#destination').findByText(/seleccione una estación válida/i);
    }

    assertGoToTrainSearchEnabled() {
      cy.findByRole('button', { name: /buscar billete/i }).should('be.enabled');
    }

    assertGoToTrainSearchDisabled() {
      cy.findByRole('button', { name: /buscar billete/i }).should('be.disabled');
    }
}

export default HomePage;
