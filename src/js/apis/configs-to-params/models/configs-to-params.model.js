angular.module('frontpress.apis.configs-to-params').factory('ConfigsToParams', ConfigsToParams);

function ConfigsToParams(){
	var model = {
		parse: parse
	};

	function parse(configs){
        var params = {};

        if(configs){
            if(configs.pageSize) params.number = parseInt(configs.pageSize);
            if(configs.pageNumber) params.page = parseInt(configs.pageNumber);
            if(configs.context) params.context = configs.context;
            if(configs.fields) params.fields = configs.fields;
        }
        
        return params;
	}
	return model;
}
