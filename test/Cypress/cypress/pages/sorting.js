export class SortingPage
{
    clickSortDropdown()
    {
        cy.get('[data-test="active-option"]').click();
    }

    selectAtoZ()
    {
        cy.get('.product_sort_container option[value="az"]').scrollIntoView().should('be.visible');
        cy.get('.product_sort_container').select('az');
    }

    selectZtoA()
    {
        cy.get('.product_sort_container option[value="za"]').scrollIntoView().should('be.visible');
        cy.get('.product_sort_container').select('za');
    }
};

export class CheckSortingResult
{
    lastAtoZItem()
    {
        cy.get('.inventory_item_name').eq(5).should('have.text', 'Test.allTheThings() T-Shirt (Red)');
    }

    firstZtoAItem()
    {
        cy.get('.inventory_item_name').eq(5).should('have.text', 'Test.allTheThings() T-Shirt (Red)');
    }
}