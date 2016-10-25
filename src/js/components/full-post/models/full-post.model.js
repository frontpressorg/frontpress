var module = angular.module("frontpress.components.full-post");

function FullPostModel(PostsApi, TagsApi, CategoriesApi, $q, $Frontpress){
	var model = {
		addTag: addTag,
        categories: [],
        content: null,
        date: null,
        featuredImage: null,
        id: null,
        isLoadingCategories: null,
        isLoadingFullPost: false,
        isLoadingTags: false,
        setContent: setContent,
        setFeaturedImage: setFeaturedImage,
        setId: setId,
		setTitle: setTitle,
		slug: null,
		tags: [],
		title: null,
	};

	function addCategory(category){
		model.categories.push(category);
	}

	function addTag(tag){
		model.tags.push(tag);
	}

	function setTitle(title){
		model.title = title;
	}

	function setContent(content){
		model.content = content;
	}

	function setDate(date){
		model.date = date;
	}

	function setFeaturedImage(featuredImage){
		model.featuredImage = featuredImage;
	}

	function setCategoryNames(categoryNames){
		model.categoryNames = categoryNames;
	}

	function setSlug(slug){
		model.slug = slug;
	}

	function setId(id){
		model.id = id;
	}

    model.addCategory = addCategory;
    model.setSlug = setSlug;
    model.setDate = setDate;

	function loadFullPostById(id){
		var defer = $q.defer();

		model.isLoadingFullPost = true;
		var configs = {
			fields: "ID,title,featured_image,date,categories,content,slug,tags"
		};

		var postPromise = PostsApi.getPostById(id, configs);
		postPromise.success(function(result){
			model.setTitle(result.title);
			model.setContent(result.content);
			model.setFeaturedImage(result.featured_image);
			model.setDate(result.date);
			model.setSlug(result.slug);

			switch($Frontpress.apiVersion){
				case "v2":

					var categoriesIds = result.categories;
					for(var i=0; i < categoriesIds.length; i++){
						model.isLoadingCategories = true;

						CategoriesApi.getCategoryById(categoriesIds[i]).success(function(categoryResult){
							var category = {};
							category.name = categoryResult.name;
							model.addCategory(category);
							model.isLoadingCategories = false;
						});
					}

					var tagsIds = result.tags;
					for(var j=0; j < tagsIds.length; j++){
						model.isLoadingTags = true;

						TagsApi.getTagById(tagsIds[j]).success(function(tagResult){
							var tag = {};
							tag.name = tagResult.name;
							model.addTag(tag);
							model.isLoadingTags = false;
						});
					}

					break;
				case "v1":
					for (var category in result.categories){
						model.addCategory(result.categories[category]);
					}
					model.isLoadingCategories = false;
					for (var tag in result.tags){
						model.addTag(result.tags[tag]);
					}
					model.isLoadingTags = false;
					break;
			}

			model.isLoadingFullPost = false;
			defer.resolve(model);
		});

		return defer.promise;
	}

    model.loadFullPostById = loadFullPostById;

	return model;
}

module.factory("FullPostModel", FullPostModel);
