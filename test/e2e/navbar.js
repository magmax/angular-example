describe('Navigation Bar', function() {
    it('selects "Home" if location is /', function() {
        browser().navigateTo('/');

        expect(browser().location().path()).toBe('/');
        expect(element('.nav li:nth-child(1)').attr('class')).toContain('active');
        expect(element('.nav li:nth-child(2)').attr('class')).not().toBeDefined();
        expect(element('.nav li:nth-child(3)').attr('class')).not().toBeDefined();
    });

    it('selects "About" if location is /#/about', function() {
        browser().navigateTo('/#/about');

        expect(browser().location().path()).toBe('/about');
        expect(element('.nav li:nth-child(1)').attr('class')).not().toBeDefined();;
        expect(element('.nav li:nth-child(2)').attr('class')).toContain('active');
        expect(element('.nav li:nth-child(3)').attr('class')).not().toBeDefined();;
    });

    it('selects "Contact" if location is /#/contact', function() {
        browser().navigateTo('/#/contact');

        expect(browser().location().path()).toBe('/contact');
        expect(element('.nav li:nth-child(1)').attr('class')).not().toBeDefined();
        expect(element('.nav li:nth-child(2)').attr('class')).not().toBeDefined();
        expect(element('.nav li:nth-child(3)').attr('class')).toContain('active');
    });

});
