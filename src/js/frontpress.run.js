angular.module("frontpress").run(frontpressRun);

function frontpressRun(SlugToIdModel){

	function extendStringPrototype(){
		if (!String.prototype.format) {
			String.prototype.format = function() {
				var args = arguments;
				return this.replace(/{(\d+)}/g, function(match, number) {
					return typeof args[number] != 'undefined' ? args[number] : match;
				});
			};
		}
	}

	function extendArrayPrototype(){
		if (!Array.prototype.filterToProperties) {
			Array.prototype.filterToProperties = function() {

				var filteredArray = [];
				
				for(var i=0; i < this.length; i++){
					var filteredItem = {};
					var item = this[i];
					
					for(var j=0; j < arguments.length; j++){
						var argument = arguments[j];
						if(typeof item[argument] !== "undefined"){
							filteredItem[argument] = item[argument];
							filteredArray.push(filteredItem);							
						}
					}
				}
				return filteredArray;
				
			};
		}
	}	
	
	extendStringPrototype();
	extendArrayPrototype();

	SlugToIdModel.teste();

}
