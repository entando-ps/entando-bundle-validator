const {validate$} = require('../lib/bundle-validator')

test('check bundle-1', () => {
    const whereIsMyBundle = 'test/bundles/bundle-1';
    validate$(whereIsMyBundle)
        .subscribe(x => {
                console.log(x)
            }, e => {
            fail(e)
            }
        )
})

test('check bundle-2', () => {
    const whereIsMyBundle = 'test/bundles/bundle-2';
    validate$(whereIsMyBundle)
        .subscribe(x => {
                console.log(x)
            }, e => {
                fail(e)

            }
        )
})
