import Vue from 'vue'
export function setItems(state, items) {
    state.items = items
    state.allItems = items
    if (state.sortNum > 0) {
        sortItems(state, state.sortNum)
    }
}
//Just a max
export function sortItems(state, sortCost) {
    state.sortNum = sortCost;
    var sortedItems = []
    if (state.allItems != []) {
        for (const item in state.allItems) {
            if (state.allItems.hasOwnProperty(item)) {
                const cost = state.allItems[item].cost;
                var parsedCost = parseFloat(cost);
                if (parsedCost <= sortCost) {
                    sortedItems.push(state.allItems[item])
                }
            }
        }
        state.items = sortedItems;
    }
}
//Max and min
//Yes yes horribly inefficient blah blah blah
export function sortItemsRange(state, obj) {
    state.sortNum = obj.max;
    state.sortNumMin = obj.min;
    var sortedItems = []
    if (state.allItems != []) {
        for (const item in state.allItems) {
            if (state.allItems.hasOwnProperty(item)) {
                const cost = state.allItems[item].cost;
                var parsedCost = parseFloat(cost);
                if (parsedCost <= obj.max && parsedCost >= obj.min) {
                    sortedItems.push(state.allItems[item])
                }
            }
        }
        state.items = sortedItems;
        // Vue.set(state.items, sortedItems)
    }
}
