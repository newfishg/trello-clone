var DueDatePopView = Backbone.View.extend({
  template: App.templates['due-date-pop'],
  attributes: {
    class: 'due-date-wrapper'
  },

  events: {
    'click .close-pop-window': 'closePopWindow',
    'click .date-submit-btn': 'saveDueDate',
    'click .date-remove-btn': 'removeDueDate'
  },

  closePopWindow: function() {
    this.remove();
    $('.pop-window').hide();
    $('.pop-window-overlay').hide();
  },

  removeDueDate: function() {
    this.model.save({ dueDate: '' });
    App.trigger('reloadModalDueDateSection');
    this.closePopWindow();
  },

  saveDueDate: function(e) {
    e.preventDefault();

    var time = this.formatTime(this.$("input[name='time']").val());
    var newDueDate = moment(this.date + 'T' + time).toDate();

    if (this.model.isSubscribe()) {
      var activityLog = { cardID: this.model.get('id') };

      if (this.model.get('dueDate') === undefined || this.model.get('dueDate') === '') {
        activityLog.type = 'addDue';
      } else {
        activityLog.type = 'changeDue';
      }

      App.trigger('updateNotification', activityLog);
    }


    this.model.save({ dueDate: newDueDate });
    App.trigger('reloadModalDueDateSection');
    this.closePopWindow();

  },

  formatTime: function(time) {
    var timeArray = time.split(/[:| ]/);
    var hours = timeArray[0];
    var minutes = timeArray[1];
    var meridiem = timeArray[2];

    if (meridiem === 'PM' && hours !== '12') {
      hours = String(Number(hours) + 12);
    }

    if (hours.length === 1) {
      hours = '0' + hours;
    }

    return hours + ':' + minutes;
  },

  fillDateInput: function(e) {
    e.preventDefault();
    console.log($('#card-date-input').val());
  },


  updateDateInput: function(date) {
    this.date = date;
    this.$("input[name='date']").val(moment(date).format('M/D/YYYY'));
  },

  loadDatePicker: function() {
    var self = this;
    $('.date-picker-container').datepicker({
      changeMonth: true,
      changeYear: true,
      defaultDate: +1,
      dateFormat: 'yy-mm-dd',
      onSelect: function(date) {
        self.updateDateInput(date);
      },
    });
  },

  loadModelDateData: function() {
    var dueDate = this.model.get('dueDate');
    
    if (dueDate) {
      this.date = moment(dueDate).format('YYYY-MM-DD');

      this.$("input[name='date']").val(moment(dueDate).format('M/D/YYYY'));
      this.$("input[name='time']").val(moment(dueDate).format('h:mm a'));

      this.$('.date-picker-container').datepicker('setDate', this.date);

    } else {
      this.date = moment().format('YYYY-MM-DD');
      this.$("input[name='date']").val(moment().add(1, 'day').format('M/D/YYYY'));
      this.$("input[name='time']").val('12:00 PM');
    }

  },

  render: function() {
    this.$el.html(this.template());
    return this
  },

  initialize: function() {
  }

});