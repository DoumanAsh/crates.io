import Route from '@ember/routing/route';

export default Route.extend({
    headTags: [{
        type: 'meta',
        attrs: {
            name: 'description',
            content: 'cargo is the package manager and crate host for rust'
        }
    }],

    setupController(controller) {
        controller.get('dataTask').perform();
    },
});
