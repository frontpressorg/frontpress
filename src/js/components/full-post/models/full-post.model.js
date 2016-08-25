angular.module('frontpress.components.full-post').factory('FullPostModel', FullPostModel);

function FullPostModel(PostsApi, TagsApi, CategoriesApi, $q){
	var model = {
		categoryNames: null,
		content: null,
		date: null,
		featuredImage: null,
		isLoadingFullPost: false,
		isLoadingTags: false,
		isLoadingCategories: false,
		loadFullPostById: loadFullPostById,
		loadFullPostTagsById: loadFullPostTagsById,
		loadFullPostCategoriesById: loadFullPostCategoriesById,
		setCategoryNames: setCategoryNames,
		setContent: setContent,
		setDate: setDate,
		setFeaturedImage: setFeaturedImage,
		setTagNames: setTagNames,
		setTitle: setTitle,
		tagNames: null,
		title: null,
		slug: null,
		setSlug: setSlug,
		id: null,
		setId: setId
	};

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

	function setTagNames(tagNames){
		model.tagNames = tagNames;
	}

	function setSlug(slug){
		model.slug = slug;
	}

	function setId(id){
		model.id = id;
	}

	function loadFullPostById(id){
		var defer = $q.defer();

		model.isLoadingFullPost = true;
		var configs = {
			fields: 'ID,title,featured_image,data,categories,content,slug'
		};

		var postPromise = PostsApi.getPostById(id, configs);
		postPromise.success(function(result){			
			model.setTitle(result.title);
			model.setContent(result.content);
			model.setFeaturedImage(result.featured_image);
			model.setDate(result.date);		
			model.setSlug(result.slug);
			model.isLoadingFullPost = false;
			defer.resolve();
		});

		return defer.promise;
	}

	function loadFullPostTagsById(id){
		var defer = $q.defer();		

		var tagsPromise = TagsApi.getTagByPostId(id);

		tagsPromise.success(function(result){
			var tagNames = JSON.search(result.tags,'//name');
			model.setTagNames(tagNames);
			model.isLoadingTags = false;
			defer.resolve();
		});	

		return defer.promise;	
	}

	function loadFullPostCategoriesById(id){
		var defer = $q.defer();		

		var categoriesPromise = CategoriesApi.getCategoriesByPostId(id);

		categoriesPromise.success(function(result){
			var categoryNames = JSON.search(result.categories,'//name');
			model.setCategoryNames(categoryNames);
			model.isLoadingCategories = false;
			defer.resolve();
		});	

		return defer.promise;	
	}	

	return model;
}
