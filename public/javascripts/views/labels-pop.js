var LabelsPopView = Backbone.View.extend({
  template: App.templates['labels-pop'],
  attributes: {
    class: 'labels-wrapper'
  },

  events: {
    'click .close-pop-window': 'closePopWindow',
    'click .toggle-card-label': 'toggleLabel',
    'click .edit-card-label, .create-new-label': 'editCardLabel',
  },

  editCardLabel: function(e) {
    var labelID = $(e.target).closest('li').attr('data-label-id');
    var labelModel = App.labels.get(labelID);

    if (labelModel) {
      this.editLabelView = new EditLabelView({ model: labelModel, cardID: this.model.get('id') });
    } else {
      this.editLabelView = new EditLabelView({ cardID: this.model.get('id') });
    }
    this.$el.hide();
    $('.pop-window').append(this.editLabelView.render().el);
    this.editLabelView.activeInitialPicker();
  },

  toggleLabel: function(e) {
    $(e.target).find('.label-check-icon').toggleClass('label-active');
    var labelID = Number($(e.target).parent('li').attr('data-label-id'));
    var labelsArray = this.model.get('labels') || [];

    labelsArray = this.sortLabelArray(labelsArray, labelID);
    this.model.save({ labels: labelsArray });
    // [] -> [1, 2, 3] or [1, 3] -> [1, 2, 3] will not fire change event in model, so manual render model.view here
    this.model.view.render();
    App.trigger('reloadModalLabelsSection');
  },

  sortLabelArray: function(labelsArray, labelID) {
    if (labelsArray.includes(labelID)) {
      var id = labelsArray.indexOf(labelID);
      labelsArray.splice(id, 1);
    } else {
      labelsArray.push(labelID);
    }

    return labelsArray.sort(function(a, b) {
      return a - b;
    });
  },

  closePopWindow: function() {
    this.remove();
    $('.pop-window').hide();
    $('.pop-window-overlay').hide();
  },

  activeCardLabels: function() {
    var labelsArray = this.model.get('labels');
    if (labelsArray) {
      labelsArray.forEach(function(labelID) {
        $('[data-label-id=' + String(labelID) + ']').find('.label-check-icon').addClass('label-active');
      });
    }
  },

  render: function() {
    this.labels = App.labels.toJSON();
    this.$el.html(this.template({ labels: this.labels }));
    return this
  },

  initialize: function() {
    
  }
});