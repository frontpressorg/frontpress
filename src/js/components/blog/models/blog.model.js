angular.module("frontpress.components.blog").factory("BlogModel", BlogModel);

function BlogModel(BlogApi, $q, ApiManager, $FrontPress){
	
	var model = {
		name: null,
		description: null,
		setName: setName,
		setDescription: setDescription,
		getInformationPromise: getInformationPromise
	};

	return model;

	function setName(name){
		model.name = name;
	}

	function setDescription(description){
		model.description = description;
	}

	function getInformationPromise(){
		var deferred = $q.defer();
		var informationPropertiesMap = [
			{ "name": "description",
			  "setFunction": model.setDescription,
			  "overrides": $FrontPress.overrides ? $FrontPress.overrides.siteDescription : null,
			  "getPath": "siteDescription"
			},
			{ "name": "name",
			  "overrides": $FrontPress.overrides ? $FrontPress.overrides.siteName : null,
			  "setFunction": model.setName,
			  "getPath": "siteName"
			},			 
		];

		function _setInformation(){
			var information = {
				description: model.description,
				name: model.name
			};			
			return deferred.resolve(information);			
		}

		var isAllInformationLoaded = model.name && model.description;

		if(isAllInformationLoaded){
			_setInformation();
		} else {
			var blogInformationPromise = BlogApi.getBlogInformation();
			blogInformationPromise.then(function(result){
				informationPropertiesMap.forEach(function(informationItem){
					if($FrontPress.overrides && informationItem.overrides){
						informationItem.setFunction(informationItem.overrides);
					} else {
						var informationValue = ApiManager.getPath(result, informationItem.getPath);
						informationItem.setFunction(informationValue);						
					}
				});				
				_setInformation();
			});					
			blogInformationPromise.catch(function(error){
				console.log(error);
			})
		}


		return deferred.promise;
	}


}
