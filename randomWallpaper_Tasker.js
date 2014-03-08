var result='none';
var host='http://dl.dropboxusercontent.com';
var path='/u/73985358/WallPaper/';
var fileList='fileList_sub.json';
tk.flash('js: starting fetch json for wallpaper...');
$.getJSON(host+path+fileList,function(list,status){
	var mime='*';
	while (mime.search('image')){
		obj=list[Math.floor(Math.random()*list.length)];
		mime=obj.mime;
	};
	result=encodeURI(path+obj.path);
	tk.setGlobal('WallpaperURLPath',result);
	tk.setGlobal('WallpaperRelPath',obj.path);
	tk.setGlobal('WallpaperSize',obj.st_size.toString());
	tk.flash('js: dice gives "'+obj.path+'"; size ='+obj.st_size);
	tk.exit();
})