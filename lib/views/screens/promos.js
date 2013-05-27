
Yvi.PromosOption = {
	stopped: 'promos-option-stopped',
	running: 'promos-option-running'
};

var options = [{name: Yvi.PromosOption.running, action: Yvi.PromosOption.running},
               {name: Yvi.PromosOption.stopped, action: Yvi.PromosOption.stopped}];

Yvi.PromosScreenView = Yvi.ScreenView.extend({
	elementId: 'promos-screen',
  options: options,
  option: Yvi.PromosOption.running,
  runningProducts: null,
  stoppedProducts: null

});

//enableStock
//is_active
//is_free
//price priceCurrency
//name
//category

//priceCurrency (default)
