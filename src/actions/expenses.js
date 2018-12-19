import database from '../firebase/firebase'

// ADD_EXPENSE
export const addExpense = ( expense ) => ({
    type: 'ADD_EXPENSE',
    expense
})

export const startAddExpense = ( expenseData = {} ) => {
    return ( dispatch ) => {
        const {
            description = '', 
            note = '', 
            amount = 0, 
            createdAt = 0
        } = expenseData
        const expense = { description, note, amount, createdAt }

        return database.ref( 'expenses' ).push ( expense ).then ( ( ref ) => {
            dispatch ( addExpense ( {
                id: ref.key,
                ...expense
            }) )
        } )

    }
}

// EDIT_EXPENSE
export const editExpense = ( { description, note, amount, createdAt }, id ) => {
    return ( {
        type: 'EDIT_EXPENSE',
        expense: {
            id,
            description,
            note,
            amount,
            createdAt
        }
    
} ) 

}

// REMOVE_EXPENSE
export const removeExpense = ( id ) => ({
    type: 'REMOVE_EXPENSE',
    expense: {
        id
    }
})