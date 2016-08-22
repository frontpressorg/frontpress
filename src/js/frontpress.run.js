angular.module("frontpress").run(frontpressRun);

function frontpressRun(SlugsMapModel){

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

		if (!Array.prototype.removeDuplicatedObjectsByField) {
			Array.prototype.removeDuplicatedObjectsByField = function(field){			
			    this.sort(
			        function compare(a,b) {
			            if (a[field] < b[field])
			                return -1;
			            if (a[field] > b[field])
			                return 1;
			            return 0;
			        }
			    );

			    var u = [];
			    this.reduce(function (a, b) {
			        if (a[field] !== b[field]) u.push(b);
			        return b;
			    }, []);
			    return u;
			}
		}

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
						}
					}
					filteredArray.push(filteredItem);							
				}
				return filteredArray;				
			};
		}


		if (!Array.prototype.uniq) {
			Array.prototype.uniq = function() {
				var seen = {};
				var out = [];
				var len =this.length;
				var j = 0;
				for(var i = 0; i < len; i++) {
					var item = this[i];
					if(seen[item] !== 1) {
						seen[item] = 1;
						out[j++] = item;
					}
				}
				return out;
			}			
		}

	}	

	extendStringPrototype();
	extendArrayPrototype();

}
