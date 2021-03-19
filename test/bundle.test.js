const {validate$} = require('../src/bundle-validator')
const whereIsMyBundle = 'test/bundles/bundle-1';

 test('check bundle1.yaml', ()  => {
    validate$(whereIsMyBundle)
        .subscribe(x => {
                console.log(x)
            }, e => {
                console.error(e)
            }
        )
})
