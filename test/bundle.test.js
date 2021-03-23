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

test('check process-driven-plugin', () => {
    const whereIsMyBundle = 'test/bundles/process-driven-plugin';
    validate$(whereIsMyBundle)
        .subscribe(x => {
                console.log(x)
            }, e => {
                fail(e)

            }
        )
})

test('check standard-demo', () => {
    const whereIsMyBundle = 'test/bundles/standard-demo';
    validate$(whereIsMyBundle)
        .subscribe(x => {
                console.log(x)
            }, e => {
                fail(e)

            }
        )
})
