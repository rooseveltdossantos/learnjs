describe('LearnJS', function(){
	it('consegue mostrar uma view de problema', function(){
		learnjs.showView("#problem-1");
		expect($('.view-container .problem-view').length).toEqual(1);
	});

	it('mostrar a visao de página de aterrisagem quando não houver hash', function(){
		learnjs.showView('');
		expect($('.view-container .landing-view').length).toEqual(1);
	});
	it('passes the hash view parameter to the view function', function(){
		spyOn(learnjs, 'problemView');
		learnjs.showView('#problem-42');
		expect(learnjs.problemView).toHaveBeenCalledWith('42');
	});
	describe('problem view', function() {
		it('has a title that includes the problem number', function() {
			var view = learnjs.problemView('1');
			expect(view.text()).toEqual('Problem #1 Coming soon!');
		})
	});
	it('invokes the router when loaded', function(){
		spyOn(learnjs, 'showView');
		learnjs.appOnReady();
		expect(learnjs.showView).toHaveBeenCalledWith(window.location.hash);
	});
	it('subscribes to the hash change event', function() {
		learnjs.appOnReady();
		spyOn(learnjs, 'showView');
		$(window).trigger('hashchange');
		expect(learnjs.showView).toHaveBeenCalledWith(window.location.hash);
	});
})