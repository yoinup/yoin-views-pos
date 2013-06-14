
Yvi.ScanInputView = Em.View.extend(Yn.Input, {
  type: 'search',

  search: function() {

    this.$().blur();
    var value = this._getCurrentInputValue();
    this.triggerEvent( 'search', value);

  }

});


Yvi.ScanScreenView = Yvi.ScreenView.extend({

	elementId: 'scan-screen',

	classNameBindings: ['hasError'],

	hasError: false

});
