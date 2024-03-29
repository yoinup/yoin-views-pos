Yvi.MenuScreenView = Yvi.ScreenView.extend(Yn.Context, {
	elementId: 'menu-screen',
  classNames: ['is-menu-bg'],

  swipeOptions: {
    direction: Em.OneGestureDirection.Left,
    cancelPeriod: 100,
    swipeThreshold: 20
  },

  action: 'closeMenu',


  swipeEnd: function() {

    this.triggerEvent(this.get('action'));

  }

});
