module.exports.postCreate = function(req,res,next){
	var errors=[];
	if(!req.body.name){
		errors.push('Name is required');
	}
	if(errors.length){
		res.render('users/create',{
			errors:errors
		});
		return;
	}
	next();
};