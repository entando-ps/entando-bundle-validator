const {validate$} = require('../src/bundle-validator')
const whereIsMyBundle = 'test/bundles/bundle-1';

 test('check bundle1.yaml', (done)  => {
    validate$(whereIsMyBundle)
        .subscribe(x => {
                console.log(x)
                done()
            }, e => {
                done(e)
                console.error(e)
            }
        )
}, 10000)
