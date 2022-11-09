// Strict mode is responsible for telling the browser to enforce stricter rules when evaluating JS
'use strict';

//LearnJS here is used as a namespace
var learnjs = {};
learnjs.showView = function(hash){
    var problemView = $('<div class="problem-view">').text('Coming Soon');
    $('.view-container').empty().append(problemView);
}