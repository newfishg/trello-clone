this["JST"] = this["JST"] || {};

this["JST"]["actions-lists-list"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<option value=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</option>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "<span class=\"label\">List</span><span class=\"value\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.current : depth0)) != null ? stack1.title : stack1), depth0))
    + "</span><select id=\"list-selector\"><option value=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.current : depth0)) != null ? stack1.id : stack1), depth0))
    + "\" selected=\"selected\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.current : depth0)) != null ? stack1.title : stack1), depth0))
    + " (current)</option>"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.otherLists : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</select>";
},"useData":true});

this["JST"]["actions-position-list"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "<option value=\""
    + alias3(((helper = (helper = helpers.position || (depth0 != null ? depth0.position : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"position","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3((helpers.isCurrentPosition || (depth0 && depth0.isCurrentPosition) || alias2).call(alias1,(depth0 != null ? depth0.position : depth0),(depth0 != null ? depth0.cardCurrentPosition : depth0),(depth0 != null ? depth0.listID : depth0),(depth0 != null ? depth0.cardCurrentListID : depth0),{"name":"isCurrentPosition","hash":{},"data":data}))
    + "</option>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {};

  return "<span class=\"label\">Position</span><span class=\"value\">"
    + container.escapeExpression(((helper = (helper = helpers.currentPosition || (depth0 != null ? depth0.currentPosition : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"currentPosition","hash":{},"data":data}) : helper)))
    + "</span><select id=\"position-selector\">"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.positions : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</select>";
},"useData":true});

this["JST"]["archive-pop"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"pop-window-header\"><span href=\"#\" class=\"close-pop-window\"></span><span class=\"pop-window-header-title\">Delete card</span></div><div class=\"pop-window-content\"><p>Click this button will remove this card. This action is no undo.</p><span class=\"submit-button delete-submit-btn\">Delete</span></div>";
},"useData":true});

this["JST"]["card-comment"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return " (edited) ";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "<div class=\"comment-container\"><p class=\"comment-content\">"
    + alias3(((helper = (helper = helpers.content || (depth0 != null ? depth0.content : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"content","hash":{},"data":data}) : helper)))
    + "</p><p class=\"smaller\">"
    + alias3((helpers.relativeTime || (depth0 && depth0.relativeTime) || alias2).call(alias1,(depth0 != null ? depth0.time : depth0),{"name":"relativeTime","hash":{},"data":data}))
    + " "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.edited : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "-<span class=\"comment-edit comment-control-btn\">Edit</span> - <span class=\"comment-delete comment-control-btn\">Delete</span></p></div><div class=\"comment-edit-controls\"><textarea></textarea><input type=\"submit\" class=\"comment-update-btn submit-button\" value=\"Save\"><span class=\"close-composer-btn\"></span></div>";
},"useData":true});

this["JST"]["card-comments"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "";
},"useData":true});

this["JST"]["card-description"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<h3 class=\"inline-block\">Description</h3><span class=\"edit-card-description\">Edit</span><p class=\"description-content\">"
    + container.escapeExpression(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"description","hash":{},"data":data}) : helper)))
    + "</p>";
},"3":function(container,depth0,helpers,partials,data) {
    return "<span class=\"open-description-composer\">Edit the description...</span>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.description : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "<div class=\"description-submit-controls\"><textarea></textarea><input type=\"submit\" class=\"description-submit-btn submit-button\" value=\"Save\"><span class=\"close-composer-btn\"></span></div>";
},"useData":true});

this["JST"]["card-due-date"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "<h3>Due Date</h3>"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.completed : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(4, data, 0),"data":data})) != null ? stack1 : "")
    + "<span class=\"card-add-due\">"
    + alias3((helpers.formatDate || (depth0 && depth0.formatDate) || alias2).call(alias1,(depth0 != null ? depth0.dueDate : depth0),{"name":"formatDate","hash":{},"data":data}))
    + " at "
    + alias3((helpers.formatTime || (depth0 && depth0.formatTime) || alias2).call(alias1,(depth0 != null ? depth0.dueDate : depth0),{"name":"formatTime","hash":{},"data":data}))
    + "</span></span>";
},"2":function(container,depth0,helpers,partials,data) {
    return "<span class=\"edit-card-due is-completed\"><input type=\"checkbox\" class=\"toggle-duedate-completed\" name=\"toggle-due\" id=\"toggle-due\" checked><label for=\"toggle-due\" id=\"toggle-due-date\"></label>";
},"4":function(container,depth0,helpers,partials,data) {
    return "<span class=\"edit-card-due\"><input type=\"checkbox\" class=\"toggle-duedate-completed\" name=\"toggle-due\" id=\"toggle-due\"><label for=\"toggle-due\" id=\"toggle-due-date\"></label>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.dueDate : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});

this["JST"]["card-label-edit"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "<input type=\"submit\" value=\"Create\" class=\"submit-button label-create-btn\">";
},"3":function(container,depth0,helpers,partials,data) {
    return "<input type=\"submit\" value=\"Save\" class=\"submit-button label-submit-btn\"><input type=\"submit\" value=\"Remove\" class=\"submit-button label-remove-btn\">";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {};

  return "<div class=\"pop-window-header\"><span href=\"#\" class=\"close-pop-window\"></span><span href=\"#\" class=\"pre-pop-window\"></span><span class=\"pop-window-header-title\">Change label</span></div><div class=\"pop-window-content\"><h3>Name</h3><input type=\"text\" class=\"label-input\" value=\""
    + container.escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "\"><h3>Select a color</h3><span class=\"label-red label-color-picker\"><span class=\"label-check-icon\"></span></span><span class=\"label-green label-color-picker\"><span class=\"label-check-icon\"></span></span><span class=\"label-blue label-color-picker\"><span class=\"label-check-icon\"></span></span><span class=\"label-orange label-color-picker\"><span class=\"label-check-icon\"></span></span><span class=\"label-yellow label-color-picker\"><span class=\"label-check-icon\"></span></span><span class=\"label-purple label-color-picker\"><span class=\"label-check-icon\"></span></span><span class=\"label-aqua label-color-picker\"><span class=\"label-check-icon\"></span></span><span class=\"label-pink label-color-picker\"><span class=\"label-check-icon\"></span></span><span class=\"label-lime label-color-picker\"><span class=\"label-check-icon\"></span></span><span class=\"label-black label-color-picker\"><span class=\"label-check-icon\"></span></span><div class=\"edit-label-controls\">"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.create : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "</div></div>";
},"useData":true});

this["JST"]["card-labels"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<h3>Labels</h3><div class=\"card-labels-container\">"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.labels : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "<span class=\"card-label card-label-add\"></span>";
},"2":function(container,depth0,helpers,partials,data) {
    return "<span class=\"card-label label-"
    + container.escapeExpression((helpers.labelConverter || (depth0 && depth0.labelConverter) || helpers.helperMissing).call(depth0 != null ? depth0 : {},depth0,{"name":"labelConverter","hash":{},"data":data}))
    + "\"></span>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.labels : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});

this["JST"]["card"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"list-card-labels\">"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.labels : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>";
},"2":function(container,depth0,helpers,partials,data) {
    return "<span class=\"card-label label-"
    + container.escapeExpression((helpers.labelConverter || (depth0 && depth0.labelConverter) || helpers.helperMissing).call(depth0 != null ? depth0 : {},depth0,{"name":"labelConverter","hash":{},"data":data}))
    + "\"></span>";
},"4":function(container,depth0,helpers,partials,data) {
    return "<div class=\"card-badge badge-subscribe inline-block\"></div>";
},"6":function(container,depth0,helpers,partials,data) {
    return "<div class=\"card-badge badge-future-dueDate inline-block\"><span class=\"inline-block smaller\">"
    + container.escapeExpression((helpers.formatDate || (depth0 && depth0.formatDate) || helpers.helperMissing).call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.dueDate : depth0),{"name":"formatDate","hash":{},"data":data}))
    + "</span></div>";
},"8":function(container,depth0,helpers,partials,data) {
    return "<div class=\"card-badge badge-description inline-block\"></div>";
},"10":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<div class=\"card-badge badge-comments inline-block\"><span class=\"inline-block smaller\">"
    + container.escapeExpression(((helper = (helper = helpers.comments || (depth0 != null ? depth0.comments : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"comments","hash":{},"data":data}) : helper)))
    + "</span></div>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<a href=\"/cards/"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\"><span class=\"edit\"></span>"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.labels : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "<h3 class=\"list-card-title\">"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h3><div class=\"list-card-badges\">"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.subscribe : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.dueDate : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.description : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.comments : depth0),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div></a>";
},"useData":true});

this["JST"]["copy-pop"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "<h3>Keeps...</h3>";
},"3":function(container,depth0,helpers,partials,data) {
    return "<label class=\"copy-option-check\"><input type=\"checkbox\" name=\"labels\" id=\"copy-labels-check\" checked>Labels <span class=\"small\">("
    + container.escapeExpression((helpers.labelsArrayToCount || (depth0 && depth0.labelsArrayToCount) || helpers.helperMissing).call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.labels : depth0),{"name":"labelsArrayToCount","hash":{},"data":data}))
    + ")</small></label>";
},"5":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<label class=\"copy-option-check\"><input type=\"checkbox\" name=\"comments\" id=\"copy-comments-check\" checked>Comments <span class=\"small\">("
    + container.escapeExpression(((helper = (helper = helpers.comments || (depth0 != null ? depth0.comments : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"comments","hash":{},"data":data}) : helper)))
    + ")</span></label>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {};

  return "<div class=\"pop-window-header\"><span href=\"#\" class=\"close-pop-window\"></span><span class=\"pop-window-header-title\">Copy Card</span></div><div class=\"pop-window-content\"><h3>Title</h3><textarea class=\"copy-card-name-input\"></textarea>"
    + ((stack1 = (helpers.haveLabelsOrComments || (depth0 && depth0.haveLabelsOrComments) || helpers.helperMissing).call(alias1,(depth0 != null ? depth0.labels : depth0),(depth0 != null ? depth0.comments : depth0),{"name":"haveLabelsOrComments","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.labels : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.comments : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "<h3>Copy to...</h3><div class=\"flex-grid\"><div class=\"button-link list-selector-container threequarter\"></div><div class=\"button-link position-selector-container quarter\"></div></div><span class=\"submit-button create-submit-btn\">Create card</span></div>";
},"useData":true});

this["JST"]["due-date-pop"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"pop-window-header\"><span href=\"#\" class=\"close-pop-window\"></span><span class=\"pop-window-header-title\">Change Due Date</span></div><div class=\"pop-window-content\"><div class=\"datepicker-select-date\"><label for=\"card-date-input\" class=\"date-input-title\">Date</label><input type=\"text\" id=\"card-date-input\" class=\"due-date-input\" name=\"date\" placeholder=\"Enter Date\"></div><div class=\"datepicker-select-time\"><label for=\"card-time-input\" class=\"date-input-title\">Time</label><input type=\"text\" id=\"card-time-input\" class=\"due-date-input\" name=\"time\" placeholder=\"Enter Time\"></div><div class=\"date-picker-container\"></div><div class=\"date-picker-control\"><input type=\"submit\" value=\"Save\" class=\"submit-button date-submit-btn\"><input type=\"submit\" value=\"Remove\" class=\"submit-button date-remove-btn\"></div></div>";
},"useData":true});

this["JST"]["edit-card-modal"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "<a href=\"/\" class=\"close-edit-modal\"></a><div class=\"card-main inline-block\"><div class=\"card-header\"><h2 class=\"open-title-input\">"
    + alias3(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h2><textarea class=\"card-title-input\"></textarea><p>in list <span class=\"card-move\"> "
    + alias3((helpers.find_card_list_name || (depth0 && depth0.find_card_list_name) || alias2).call(alias1,(depth0 != null ? depth0.id : depth0),{"name":"find_card_list_name","hash":{},"data":data}))
    + "</span><span class=\"subscribe-icon-container "
    + alias3((helpers.subsribeStatusLoad || (depth0 && depth0.subsribeStatusLoad) || alias2).call(alias1,(depth0 != null ? depth0.subscribe : depth0),{"name":"subsribeStatusLoad","hash":{},"data":data}))
    + "\"></span></p></div><div class=\"card-main-content\"><div class=\"card-labels\"></div><div class=\"card-due-date\"></div><div class=\"card-description\"></div></div><div class=\"card-add-comment\"><h2>Add Comment</h2><form action=\"post\" url=\"newComment\" class=\"comment-composer\"><textarea class=\"comment-content\"></textarea><input type=\"submit\" value=\"Send\" class=\"submit-button\"><p></p></form></div><div class=\"card-activities\"><h2>Activities</h2><ul class=\"comments-container\"></ul></div></div><div class=\"card-aside inline-block\"><div class=\"card-aside-add\"><h2>Add</h2><span class=\"card-add-label card-aside-btn\">Labels</span><span class=\"card-add-due card-aside-btn\">Due Date</span></div><div class=\"card-aside-actions\"><h2>Actions</h2><span class=\"card-move card-aside-btn\">Move</span><span class=\"card-copy card-aside-btn\">Copy</span><span class=\"card-subscribe card-aside-btn\">Subscribe<span class=\"card-subscribe-check "
    + alias3((helpers.subsribeStatusLoad || (depth0 && depth0.subsribeStatusLoad) || alias2).call(alias1,(depth0 != null ? depth0.subscribe : depth0),{"name":"subsribeStatusLoad","hash":{},"data":data}))
    + "\"></span></span><span class=\"card-archive card-aside-btn\">Archive</span></div></div><div class=\"pop-window-overlay\"></div><div class=\"pop-window\"></div>";
},"useData":true});

this["JST"]["index"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<header><div class=\"header-search\"><input type=\"text\" name=\"search\" class=\"search-card-input\"><span class=\"close-modal close-search-modal\"></span></div><a class=\"header-logo\" href=\"/\"></a><div class=\"header-notification\"><span class=\"icon-bell open-notification-btn\"></span></div></header><main><div class=\"subscribe-activity\"></div><div class=\"board-header\"><a class=\"board-header-btn\"><span class=\"board-header-btn-text board-header-btn-name\">Ruby on rails</span></a><div class=\"board-header-btns\"><a class=\"board-header-btn board-header-star\" href=\"#\"><span class=\"board-header-btn icon-star\"></a><a class=\"board-header-btn\" href=\"#\"><span class=\"board-header-btn icon-lock\"></span><span class=\"board-header-btn-text\">Private</span></a></div></div><div class=\"lists-container\"></div></main><div id=\"modal-overlay\" class=\"modal\"><div class=\"modal edit-modal-container\"></div></div><div class=\"search-modal search-container\"></div>";
},"useData":true});

this["JST"]["labels-pop"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "<li class=\"label-row\" data-label-id=\""
    + alias3(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\"><span class=\"toggle-card-label label-"
    + alias3((helpers.labelConverter || (depth0 && depth0.labelConverter) || alias2).call(alias1,(depth0 != null ? depth0.id : depth0),{"name":"labelConverter","hash":{},"data":data}))
    + "\">"
    + alias3(container.lambda((depth0 != null ? depth0.name : depth0), depth0))
    + "<span class=\"label-check-icon\"></span></span><span class=\"edit-card-label\"></span></li>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"pop-window-header\"><span href=\"#\" class=\"close-pop-window\"></span><span class=\"pop-window-header-title\">Labels</span></div><div class=\"pop-window-content\"><ul class=\"edit-card-labels\">"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.labels : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</ul><span class=\"create-new-label\">Create a new label</span></div>";
},"useData":true});

this["JST"]["list"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<h2 class=\"list-drag-handle\">"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h2><ul class=\"card-container\"></ul><div class=\"card-composer\"><form action=\"newcard\" method=\"post\" class=\"new-card-form\"><textarea name=\"title\" class=\"card-name-input\"></textarea><input type=\"hidden\" class=\"list-id-identifier\" name=\"listId\" value=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" ><input type=\"submit\" value=\"Add\" class=\"submit-button\"><span class=\"close-composer-btn exit-card-composer\"></span></form></div><a href=\"#\" class=\"open-card-composer\">Add a card...</a>";
},"useData":true});

this["JST"]["move-pop"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"pop-window-header\"><span href=\"#\" class=\"close-pop-window\"></span><span class=\"pop-window-header-title\">Move Card</span></div><div class=\"pop-window-content\"><h3>Move to...</h3><div class=\"flex-grid\"><div class=\"button-link list-selector-container threequarter\"></div><div class=\"button-link position-selector-container quarter\"></div></div><span class=\"submit-button move-submit-btn\">Move</span></div>";
},"useData":true});

this["JST"]["newlist"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<form action=\"newlist\" method=\"post\" class=\"new-list-form\"><span class=\"open-list-composer\">Add a list...</span><input class=\"list-name-input list-composer\" name=\"title\" type=\"text\" placeholder=\"Add a list...\"><div class=\"list-composer\"><input id=\"newlist-create\" class=\"submit-button\" type=\"submit\" value=\"Add\"><span class=\"close-composer-btn exit-list-composer\"></span></div></form>";
},"useData":true});

this["JST"]["notification-add-comment"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "User added comment on <a href=\""
    + alias3((helpers.idToHref || (depth0 && depth0.idToHref) || alias2).call(alias1,(depth0 != null ? depth0.cardID : depth0),{"name":"idToHref","hash":{},"data":data}))
    + "\">"
    + alias3((helpers.cardIDtoName || (depth0 && depth0.cardIDtoName) || alias2).call(alias1,(depth0 != null ? depth0.cardID : depth0),{"name":"cardIDtoName","hash":{},"data":data}))
    + "</a><span class=\"smaller\">"
    + alias3((helpers.relativeTime || (depth0 && depth0.relativeTime) || alias2).call(alias1,(depth0 != null ? depth0.time : depth0),{"name":"relativeTime","hash":{},"data":data}))
    + "</span>";
},"useData":true});

this["JST"]["notification-add-due"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "User added the due date of <a href=\""
    + alias3((helpers.idToHref || (depth0 && depth0.idToHref) || alias2).call(alias1,(depth0 != null ? depth0.cardID : depth0),{"name":"idToHref","hash":{},"data":data}))
    + "\">"
    + alias3((helpers.cardIDtoName || (depth0 && depth0.cardIDtoName) || alias2).call(alias1,(depth0 != null ? depth0.cardID : depth0),{"name":"cardIDtoName","hash":{},"data":data}))
    + "</a>";
},"useData":true});

this["JST"]["notification-archive"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "User archived "
    + container.escapeExpression(((helper = (helper = helpers.cardName || (depth0 != null ? depth0.cardName : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"cardName","hash":{},"data":data}) : helper)));
},"useData":true});

this["JST"]["notification-change-due"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "User changed the due date of <a href=\""
    + alias3((helpers.idToHref || (depth0 && depth0.idToHref) || alias2).call(alias1,(depth0 != null ? depth0.cardID : depth0),{"name":"idToHref","hash":{},"data":data}))
    + "\">"
    + alias3((helpers.cardIDtoName || (depth0 && depth0.cardIDtoName) || alias2).call(alias1,(depth0 != null ? depth0.cardID : depth0),{"name":"cardIDtoName","hash":{},"data":data}))
    + "</a>";
},"useData":true});

this["JST"]["notification-copy"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "User copyed <a href=\""
    + alias3((helpers.idToHref || (depth0 && depth0.idToHref) || alias2).call(alias1,(depth0 != null ? depth0.newCardID : depth0),{"name":"idToHref","hash":{},"data":data}))
    + "\">"
    + alias3((helpers.cardIDtoName || (depth0 && depth0.cardIDtoName) || alias2).call(alias1,(depth0 != null ? depth0.newCardID : depth0),{"name":"cardIDtoName","hash":{},"data":data}))
    + "</a>from <a href=\""
    + alias3((helpers.idToHref || (depth0 && depth0.idToHref) || alias2).call(alias1,(depth0 != null ? depth0.cardID : depth0),{"name":"idToHref","hash":{},"data":data}))
    + "\">"
    + alias3((helpers.cardIDtoName || (depth0 && depth0.cardIDtoName) || alias2).call(alias1,(depth0 != null ? depth0.cardID : depth0),{"name":"cardIDtoName","hash":{},"data":data}))
    + "</a>to "
    + alias3((helpers.listIDtoName || (depth0 && depth0.listIDtoName) || alias2).call(alias1,(depth0 != null ? depth0.newListID : depth0),{"name":"listIDtoName","hash":{},"data":data}))
    + "<span class=\"smaller\">"
    + alias3((helpers.relativeTime || (depth0 && depth0.relativeTime) || alias2).call(alias1,(depth0 != null ? depth0.time : depth0),{"name":"relativeTime","hash":{},"data":data}))
    + "</span>";
},"useData":true});

this["JST"]["notification-move"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "User moved <a href=\""
    + alias3((helpers.idToHref || (depth0 && depth0.idToHref) || alias2).call(alias1,(depth0 != null ? depth0.cardID : depth0),{"name":"idToHref","hash":{},"data":data}))
    + "\">"
    + alias3((helpers.cardIDtoName || (depth0 && depth0.cardIDtoName) || alias2).call(alias1,(depth0 != null ? depth0.cardID : depth0),{"name":"cardIDtoName","hash":{},"data":data}))
    + "</a>from "
    + alias3((helpers.listIDtoName || (depth0 && depth0.listIDtoName) || alias2).call(alias1,(depth0 != null ? depth0.oldListID : depth0),{"name":"listIDtoName","hash":{},"data":data}))
    + " to "
    + alias3((helpers.listIDtoName || (depth0 && depth0.listIDtoName) || alias2).call(alias1,(depth0 != null ? depth0.newListID : depth0),{"name":"listIDtoName","hash":{},"data":data}))
    + "<span class=\"smaller\">"
    + alias3((helpers.relativeTime || (depth0 && depth0.relativeTime) || alias2).call(alias1,(depth0 != null ? depth0.time : depth0),{"name":"relativeTime","hash":{},"data":data}))
    + "</span>";
},"useData":true});

this["JST"]["notification-unknown"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "Unknown activity";
},"useData":true});

this["JST"]["notifications"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"notification-header\"><h3>Notifications</h3><span class=\"close-modal\"></span></div><div class=\"notification-wrapper\"><ul class=\"notifications-container\"></ul></div>";
},"useData":true});

this["JST"]["search"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var alias1=container.escapeExpression, alias2=depth0 != null ? depth0 : {}, alias3=helpers.helperMissing;

  return "<li><a href=\"/cards/"
    + alias1(container.lambda(depth0, depth0))
    + "\">"
    + alias1((helpers.cardIDtoName || (depth0 && depth0.cardIDtoName) || alias3).call(alias2,depth0,{"name":"cardIDtoName","hash":{},"data":data}))
    + "</a><span> in "
    + alias1((helpers.cardIDtoListName || (depth0 && depth0.cardIDtoListName) || alias3).call(alias2,depth0,{"name":"cardIDtoListName","hash":{},"data":data}))
    + " on Ruby on rails</span></li>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<ul>"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.cards : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</ul>";
},"useData":true});