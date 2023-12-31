// @ts-nocheck
import React from "react";
import App from "../../src/App";
import '../../src/index.css'

describe('test for coffee app', () => {
  it('coffee App', () => {
    cy.mount(<App />);
    cy.get('.menu').should('exist');
    cy.get('h1').should('have.text', 'MaxiCoffee');
    cy.get('h2').should('exist').and('have.attr', 'class', 'text-3xl font-impact text-center font-bold');
  })
})