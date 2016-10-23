var module = angular.module("frontpress.apis.configs-to-params")

function ConfigsToParams(){
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

    var model = {
        parse: parse
    };

	return model;
}

module.factory("ConfigsToParams", ConfigsToParams);
