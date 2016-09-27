console.log("loaded");

$(function() {
  $("#includedBody").load("body.html");
  var source = $("#document-template").html();
  var template = Handlebars.compile(source);
  var html = template(data);
  $('#DocumentResults').html(html);
});


var data = {
          rows: [{
                recipes: [
                    {
                        classCol: "col-sm-8",
                        imageURLdesktop: "./images/recipe-1-desktop.jpg",
                        imageURLmobile: "./images/recipe-1-mobile.jpg",
                        imageTitle: "Simply Orange Smoothie Bowl",
                    },
                    {
                        classCol: "col-sm-4",
                        imageURLdesktop: "./images/recipe-2-desktop.jpg",
                        imageURLmobile: "./images/recipe-2-mobile.jpg",
                        imageTitle: "Simply Orange Pot De Creme",
                    }
                ]
            },
            {
                recipes: [
                    {
                        classCol: "col-sm-12",
                        imageURLdesktop: "./images/recipe-3-desktop.jpg",
                        imageURLmobile: "./images/recipe-2-mobile.jpg",
                        imageTitle: "Simply Orange Carrot Ginger Soup",
                    }

                ]
            },
            {
                recipes: [
                    {
                        classCol: "col-sm-4",
                        imageURLdesktop: "./images/recipe-4-desktop.jpg",
                        imageURLmobile: "./images/recipe-4-mobile.jpg",
                        imageTitle: "Simply Orange Crepe Sauce",
                    },
                    {
                        classCol: "col-sm-4",
                        imageURLdesktop: "./images/recipe-5-desktop.jpg",
                        imageURLmobile: "./images/recipe-5-mobile.jpg",
                        imageTitle: "Simply Orange Zesty Avocado Bagel",
                    },
                    {
                        classCol: "col-sm-4",
                        imageURLdesktop: "./images/recipe-6-desktop.jpg",
                        imageURLmobile: "./images/recipe-6-mobile.jpg",
                        imageTitle: "Simply Orange Cranberry Muffins",
                    }
                ]
            },
            {
                recipes: [
                    {
                        classCol: "col-sm-4",
                        imageURLdesktop: "./images/recipe-7-desktop.jpg",
                        imageURLmobile: "./images/recipe-7-mobile.jpg",
                        imageTitle: "Simply Orange Pretzel Dip",
                    },
                    {
                        classCol: "col-sm-8",
                        imageURLdesktop: "./images/recipe-8-desktop.jpg",
                        imageURLmobile: "./images/recipe-8-mobile.jpg",
                        imageTitle: "Simply Orange Glazed Bacon Garnish",
                    }
                ]
            },
            {
                recipes: [
                    {
                        classCol: "col-sm-8",
                        imageURLdesktop: "./images/recipe-9-desktop.jpg",
                        imageURLmobile: "./images/recipe-9-mobile.jpg",
                        imageTitle: "Simply Orange Dreamsicles",
                    },
                    {
                        classCol: "col-sm-4",
                        imageURLdesktop: "./images/recipe-10-desktop.jpg",
                        imageURLmobile: "./images/recipe-10-mobile.jpg",
                        imageTitle: "Simply Orange Spice Wings",
                    }
                ]
            },
            {
                recipes: [
                    {
                        classCol: "col-sm-12",
                        imageURLdesktop: "./images/recipe-11-desktop.jpg",
                        imageURLmobile: "./images/recipe-11-mobile.jpg",
                        imageTitle: "Simply Orange Whiskey BBQ Sauce",
                    }

                ]
            },
          ]
        };
