var EditLabelView = Backbone.View.extend({
  template: App.templates['card-label-edit'],
  attributes: {
    class: 'label-edit-wrapper'
  },

  events: {
    'click .close-pop-window': 'closePopWindow',
    'click .pre-pop-window': 'closeLabelEditPage',
    'click .label-color-picker': 'changeColor',
    'click .label-submit-btn': 'updateLabel',
    'click .label-create-btn': 'createLabel',
  },

  createLabel: function(e) {
    e.preventDefault();
    var newClass = this.findLabelClass();
    var newName = this.$('.label-input').val();
    var data = {}
    data.name = newName;
    data.class = newClass;

    App.trigger('createLabelAndRefreshModalAndPop', data);
    App.trigger('addLabelToCard', this.cardID);
    this.closeLabelEditPage();
  },

  updateLabel: function(e) {
    e.preventDefault();
    var newClass = this.findLabelClass();
    var newName = this.$('.label-input').val();
    
    this.model.save({ class: newClass, name: newName });
    App.trigger('updateLabelPopWindow');
    App.trigger('reloadModalLabelsSection');
    this.closeLabelEditPage();
  },

  findLabelClass: function() {
    var allClass = this.$('.label-active').parent('span').attr('class');
    return allClass.split(' ')[0].split('-')[1]
  },

  changeColor: function(e) {
    this.$('.label-active').removeClass('label-active');
    $(e.target).find('span').addClass('label-active');
  },

  closeLabelEditPage: function() {
    this.remove();
    $('.labels-wrapper').show();
  },

  closePopWindow: function() {
    this.remove();
    $('.pop-window').hide();
    $('.pop-window-overlay').hide();
  },

  activeInitialPicker: function() {
    if (this.model) {
      this.$('.label-' + this.model.get('class')).find('span').addClass('label-active');
    } else {
      // Default picker
      this.$('.label-red').find('span').addClass('label-active');
    }
  },

  render: function() {
    if (this.model) {
      this.$el.html(this.template(this.model.toJSON()));
    } else {
      this.$el.html(this.template({ create: true }));
    }

    return this
  },
  

  initialize: function(options) {
    this.cardID = options.cardID;
  }

});