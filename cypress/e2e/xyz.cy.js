import { url, firstName, lastName, postCode } from "./param.cy";
//// <reference types="cypress" />
describe('customer Login', () => {
  beforeEach('visit site', () => {
    cy.visit(url)
    cy.get('.borderM > :nth-child(1) > .btn').click()
    cy.get('#userSelect').select('Hermoine Granger')
    cy.get('form.ng-valid > .btn').click()
    cy.get('.fontBig').should('have.text', 'Hermoine Granger')
  })
  it('make transaction', ()=>{
    cy.get('[ng-class="btnClass1"]').click()
    cy.get('[style="float:right"]').click()
  })
  it('deposit', ()=>{
    cy.get('[ng-class="btnClass2"]').click()
    cy.get('.form-control').click()
    cy.get('.form-control').type(555)
    cy.get('form.ng-dirty > .btn').click()
    cy.get('.error').should('have.text', 'Deposit Successful')
  })
  it('Withdrawal', ()=>{
    //
    cy.get('[ng-class="btnClass3"]').click()
    cy.get('.form-control').click()
    cy.get('.form-control').type(2000)
    cy.get('form.ng-dirty > .btn').click()
    cy.get('.error').should('have.text', 'Transaction successful')

  })
  afterEach('Logout', ()=>{
    cy.get('.logout').click()
    cy.get('.home').click({force: true})
  })
 
})
describe('bank Login', () => 
{
  beforeEach('visit site', ()=>{
    cy.visit(url)
    cy.get(':nth-child(3) > .btn').click()
  })
  it('confirm Header', ()=>{
    cy.get('.mainHeading').contains('XYZ Bank')
  })
  it('add a customer',()=>{
    cy.get('[ng-class="btnClass1"]').click()
    cy.get(':nth-child(1) > .form-control').type(firstName)
    cy.get(':nth-child(2) > .form-control').type(lastName)
    cy.get(':nth-child(3) > .form-control').type(postCode)
    cy.get("form[role='form'] > .btn.btn-default").click({force: true})

  })
  it('OPen Account', ()=>{
    cy.get('[ng-class="btnClass2"]').click()
    cy.get('#userSelect').select('Ron Weasly')
    cy.get('#currency').select('Pound')
    cy.get('form.ng-dirty > button').click()
  })
  it('Available customer', ()=>{
    cy.get('[ng-class="btnClass3"]').click()
    cy.get('.home').click({force: true })
  })
 })
