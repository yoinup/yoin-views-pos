Yvi.UserShortBlockView = Em.View.extend(Yn.Btap, {

  classNames: ['user-short-block'],

  content: null,

	showCity: true,


	//FB Users
	isFBUser: false,
	fbName: null,
	fbId: null,

	
	// this can be done inside the view
  action: 'selectUser',
  actionContentBinding: Em.Binding.oneWay('content'),

  templateName: 'user_short_block'

});