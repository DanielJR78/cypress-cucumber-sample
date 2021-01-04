import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import HomePage from "./page-objects/HomePageObject";
import TrainPage from "./page-objects/TrainPageObject";

const homePage = new HomePage();
const trainPage = new TrainPage();


// GIVEN / WHEN CLAUSES
// Same clauses can be used with WHEN prefix

Given('I go to the Home page', () => {
  homePage.visit();
});

Given('I accept cookies policies', () => {
  homePage.actAcceptCookies();
});

Given('I select {string} as origin station', (station) => {
  homePage.setStationOrigin(station);
});

Given('I select {string} as destination station', (station) => {
  homePage.setStationDestination(station);
});

Given('I select from {string} to {string} stations', (origin, destination) => {
  homePage.setStations(origin, destination);
});

Given('I select random origin and destination stations', () => {
  homePage.setStationOrigin('MADRID-PUERTA DE ATOCHA');
  homePage.setStationDestination('VALENCIA JOAQUIN SOROLLA');
})

Given('I select {int}, {int} and {int} passengers', (adults, children, childrenNoSeat) => {
  homePage.setPassengers(adults, children, childrenNoSeat);
});

Given('I select {int} adults', (adults) => {
  homePage.setPassengersAdults(adults);
});

Given('I select {int} children with seat', (children) => {
  homePage.setPassengersChildren(children);
});

Given('I select {int} children with no seat', (childrenNoSeat) => {
  homePage.setPassengersChildrenNoSeat(childrenNoSeat);
});

Given('I move departure by {int} days and return by {int} days', (incrementDep, incrementRet) => {
  homePage.moveDates(incrementDep, incrementRet);
});

Given('I move departure date by {int} days', (incrementDep) => {
  homePage.moveDateDepart(incrementDep);
});

Given('I move return date by {int} days', (incrementRet) => {
  homePage.moveDateReturn(incrementRet);
});

Given('I reset selected dates', () => {
  homePage.resetDates();
});

Given('I set departure date to end of current month plus 2', () => {
  homePage.setDateDepartLastDayMonthPlus2();
});

Given('I select the return trip option', () => {
  homePage.setReturnTrip();
});

Given('I select the one-way trip option', () => {
  homePage.setOneWayTrip();
});

Given('I search for {string} origin station', (origin) => {
  homePage.searchStationOrigin(origin);
});

Given('I search for {string} destination station', (destination) => {
  homePage.searchStationDestination(destination);
});

Given('I search for trains', () => {
  homePage.goToTrainSearch();
});

Given('I select a random outward journey with rate {string}', (outwardRate) => {
  trainPage.selectRandomTrainForJourney(0, outwardRate);
});

Given('I select a random return journey with rate {string}', (returnRate) => {
  trainPage.selectRandomTrainForJourney(1, returnRate);
});


// THEN CLAUSES

Then('departure should be set to current date plus {int} days', (plusDays) => {
  homePage.assertDateDepartDaysFromNow(plusDays);
});

Then('return should be set to current date plus {int} days', (plusDays) => {
  homePage.assertDateReturnDaysFromNow(plusDays);
});

Then('the number of passengers displayed should be {int}', (count) => {
  homePage.assertPassengersTotalCount(count);
});

Then('the selected number of adults should be {int}', (count) => {
  homePage.assertPassengersAdultsCount (count);
});

Then('the selected number of children with seat should be {int}', (count) => {
  homePage.assertPassengersChildrenCount (count);
});

Then('the selected number of children with no seat should be {int}', (count) => {
  homePage.assertPassengersChildrenNoSeatCount (count);
});

Then('I should not be able to add any kind of passengers', () => {
  homePage.assertPassengersAddDisabled();
});

Then('I should not be able to remove any kind of passengers', () => {
  homePage.assertPassengersRemDisabled();
});

Then('I should not be able to add more children with no seat', () => {
  homePage.assertPassengersPerTypeAddDisabled(3);
});

Then('origin station is {string}', (station) => {
  homePage.assertStationOriginIs(station);
});

Then('destination station is {string}', (station) => {
  homePage.assertStationDestinationIs(station);
});

Then('origin station is empty', () => {
  homePage.assertStationOriginIs('');
});

Then('destination station is empty', () => {
  homePage.assertStationDestinationIs('');
});

Then('an error message should be displayed on origin station', () => {
  homePage.assertStationOriginError();
});

Then('an error message should be displayed on destination station', () => {
  homePage.assertStationDestinationError();
});

Then('I should be able to search for trains', () => {
  homePage.assertGoToTrainSearchEnabled();
});

Then('I should not be able to search for trains', () => {
  homePage.assertGoToTrainSearchDisabled();
});

Then('I should be redirected to train selection', () => {
  trainPage.isCurrentUrl();
});

Then('no error message should be displayed on train list', () => {
  trainPage.assertUnavailableTrainsErrorMessageNotDisplayed();
});

Then('an error message should be displayed on train list', () => {
  trainPage.assertUnavailableTrainsErrorMessageDisplayed();
});

Then('any Price from label should be coherent with available rates', () => {
  trainPage.assertPriceFromLabels();
});
