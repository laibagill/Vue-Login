import { createStore } from 'vuex'
const store = createStore({
    state: {
        employee: [
            { name: 'Laiba', password: 2020 },
            { name: 'Test', password: 3030 },
            { name: 'Test2', password: 4040 },
        ],
    },
    
});

export default store;