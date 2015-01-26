var imageStore = new FS.Store.GridFS('images')

Images = new FS.Collection('images', {
  stores: [imageStore]
});

Images.allow({
  'insert' : function(){
    return true;
  },
  'update' : function(){
    return true;
  }
});