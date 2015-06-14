
$(document).ready(function(){
    $('#incomeModal').openModal();
})

// 

var rentCategory = new app.singleCategory({
    category: "Rent & Utilities",
    percentage: 33
});

var foodCategory = new app.singleCategory({
    category: "Food & Dining",
    percentage: 15
});

var transCategory = new app.singleCategory({
    category: "Transportation",
    percentage: 5
});

var entertainmentCategory = new app.singleCategory({
    category: "Entertainment",
    percentage: 16
});

var savingsCategory = new app.singleCategory({
    category: "Savings",
    percentage: 15
});

var personalCategory = new app.singleCategory({
    category: "Personal",
    percentage: 11
});

var healthCategory = new app.singleCategory({
    category: "Medical & Health",
    percentage: 5
});
