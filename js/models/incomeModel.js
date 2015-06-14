var app =  app || {};

app.incomeValue = Backbone.Model.extend {
    getIncome: function () {
        var income = $('#incomeInput').val();
        console.log(income);
    }

}
